# `googleMonitoringSlo` Submodule <a name="`googleMonitoringSlo` Submodule" id="@cdktf/provider-google-beta.googleMonitoringSlo"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleMonitoringSlo <a name="GoogleMonitoringSlo" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo google_monitoring_slo}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_slo

googleMonitoringSlo.GoogleMonitoringSlo(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  goal: typing.Union[int, float],
  service: str,
  basic_sli: GoogleMonitoringSloBasicSli = None,
  calendar_period: str = None,
  display_name: str = None,
  id: str = None,
  project: str = None,
  request_based_sli: GoogleMonitoringSloRequestBasedSli = None,
  rolling_period_days: typing.Union[int, float] = None,
  slo_id: str = None,
  timeouts: GoogleMonitoringSloTimeouts = None,
  user_labels: typing.Mapping[str] = None,
  windows_based_sli: GoogleMonitoringSloWindowsBasedSli = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.goal">goal</a></code> | <code>typing.Union[int, float]</code> | The fraction of service that must be good in order for this objective to be met. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.service">service</a></code> | <code>str</code> | ID of the service to which this SLO belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.basicSli">basic_sli</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSli">GoogleMonitoringSloBasicSli</a></code> | basic_sli block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.calendarPeriod">calendar_period</a></code> | <code>str</code> | A calendar period, semantically "since the start of the current <calendarPeriod>". Possible values: ["DAY", "WEEK", "FORTNIGHT", "MONTH"]. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Name used for UI elements listing this SLO. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#id GoogleMonitoringSlo#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#project GoogleMonitoringSlo#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.requestBasedSli">request_based_sli</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSli">GoogleMonitoringSloRequestBasedSli</a></code> | request_based_sli block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.rollingPeriodDays">rolling_period_days</a></code> | <code>typing.Union[int, float]</code> | A rolling time period, semantically "in the past X days". Must be between 1 to 30 days, inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.sloId">slo_id</a></code> | <code>str</code> | The id to use for this ServiceLevelObjective. If omitted, an id will be generated instead. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeouts">GoogleMonitoringSloTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.userLabels">user_labels</a></code> | <code>typing.Mapping[str]</code> | This field is intended to be used for organizing and identifying the AlertPolicy objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.windowsBasedSli">windows_based_sli</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSli">GoogleMonitoringSloWindowsBasedSli</a></code> | windows_based_sli block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `goal`<sup>Required</sup> <a name="goal" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.goal"></a>

- *Type:* typing.Union[int, float]

The fraction of service that must be good in order for this objective to be met.

0 < goal <= 0.999

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#goal GoogleMonitoringSlo#goal}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.service"></a>

- *Type:* str

ID of the service to which this SLO belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#service GoogleMonitoringSlo#service}

---

##### `basic_sli`<sup>Optional</sup> <a name="basic_sli" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.basicSli"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSli">GoogleMonitoringSloBasicSli</a>

basic_sli block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#basic_sli GoogleMonitoringSlo#basic_sli}

---

##### `calendar_period`<sup>Optional</sup> <a name="calendar_period" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.calendarPeriod"></a>

- *Type:* str

A calendar period, semantically "since the start of the current <calendarPeriod>". Possible values: ["DAY", "WEEK", "FORTNIGHT", "MONTH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#calendar_period GoogleMonitoringSlo#calendar_period}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.displayName"></a>

- *Type:* str

Name used for UI elements listing this SLO.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#display_name GoogleMonitoringSlo#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#id GoogleMonitoringSlo#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#project GoogleMonitoringSlo#project}.

---

##### `request_based_sli`<sup>Optional</sup> <a name="request_based_sli" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.requestBasedSli"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSli">GoogleMonitoringSloRequestBasedSli</a>

request_based_sli block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#request_based_sli GoogleMonitoringSlo#request_based_sli}

---

##### `rolling_period_days`<sup>Optional</sup> <a name="rolling_period_days" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.rollingPeriodDays"></a>

- *Type:* typing.Union[int, float]

A rolling time period, semantically "in the past X days". Must be between 1 to 30 days, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#rolling_period_days GoogleMonitoringSlo#rolling_period_days}

---

##### `slo_id`<sup>Optional</sup> <a name="slo_id" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.sloId"></a>

- *Type:* str

The id to use for this ServiceLevelObjective. If omitted, an id will be generated instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#slo_id GoogleMonitoringSlo#slo_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeouts">GoogleMonitoringSloTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#timeouts GoogleMonitoringSlo#timeouts}

---

##### `user_labels`<sup>Optional</sup> <a name="user_labels" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.userLabels"></a>

- *Type:* typing.Mapping[str]

This field is intended to be used for organizing and identifying the AlertPolicy objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#user_labels GoogleMonitoringSlo#user_labels}

---

##### `windows_based_sli`<sup>Optional</sup> <a name="windows_based_sli" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.windowsBasedSli"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSli">GoogleMonitoringSloWindowsBasedSli</a>

windows_based_sli block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#windows_based_sli GoogleMonitoringSlo#windows_based_sli}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.putBasicSli">put_basic_sli</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.putRequestBasedSli">put_request_based_sli</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.putWindowsBasedSli">put_windows_based_sli</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.resetBasicSli">reset_basic_sli</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.resetCalendarPeriod">reset_calendar_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.resetRequestBasedSli">reset_request_based_sli</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.resetRollingPeriodDays">reset_rolling_period_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.resetSloId">reset_slo_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.resetUserLabels">reset_user_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.resetWindowsBasedSli">reset_windows_based_sli</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_basic_sli` <a name="put_basic_sli" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.putBasicSli"></a>

```python
def put_basic_sli(
  availability: GoogleMonitoringSloBasicSliAvailability = None,
  latency: GoogleMonitoringSloBasicSliLatency = None,
  location: typing.List[str] = None,
  method: typing.List[str] = None,
  version: typing.List[str] = None
) -> None
```

###### `availability`<sup>Optional</sup> <a name="availability" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.putBasicSli.parameter.availability"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailability">GoogleMonitoringSloBasicSliAvailability</a>

availability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#availability GoogleMonitoringSlo#availability}

---

###### `latency`<sup>Optional</sup> <a name="latency" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.putBasicSli.parameter.latency"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatency">GoogleMonitoringSloBasicSliLatency</a>

latency block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#latency GoogleMonitoringSlo#latency}

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.putBasicSli.parameter.location"></a>

- *Type:* typing.List[str]

An optional set of locations to which this SLI is relevant.

Telemetry from other locations will not be used to calculate
performance for this SLI. If omitted, this SLI applies to all
locations in which the Service has activity. For service types
that don't support breaking down by location, setting this
field will result in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#location GoogleMonitoringSlo#location}

---

###### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.putBasicSli.parameter.method"></a>

- *Type:* typing.List[str]

An optional set of RPCs to which this SLI is relevant.

Telemetry from other methods will not be used to calculate
performance for this SLI. If omitted, this SLI applies to all
the Service's methods. For service types that don't support
breaking down by method, setting this field will result in an
error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#method GoogleMonitoringSlo#method}

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.putBasicSli.parameter.version"></a>

- *Type:* typing.List[str]

The set of API versions to which this SLI is relevant.

Telemetry from other API versions will not be used to
calculate performance for this SLI. If omitted,
this SLI applies to all API versions. For service types
that don't support breaking down by version, setting this
field will result in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#version GoogleMonitoringSlo#version}

---

##### `put_request_based_sli` <a name="put_request_based_sli" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.putRequestBasedSli"></a>

```python
def put_request_based_sli(
  distribution_cut: GoogleMonitoringSloRequestBasedSliDistributionCut = None,
  good_total_ratio: GoogleMonitoringSloRequestBasedSliGoodTotalRatio = None
) -> None
```

###### `distribution_cut`<sup>Optional</sup> <a name="distribution_cut" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.putRequestBasedSli.parameter.distributionCut"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCut">GoogleMonitoringSloRequestBasedSliDistributionCut</a>

distribution_cut block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#distribution_cut GoogleMonitoringSlo#distribution_cut}

---

###### `good_total_ratio`<sup>Optional</sup> <a name="good_total_ratio" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.putRequestBasedSli.parameter.goodTotalRatio"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatio">GoogleMonitoringSloRequestBasedSliGoodTotalRatio</a>

good_total_ratio block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#good_total_ratio GoogleMonitoringSlo#good_total_ratio}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#create GoogleMonitoringSlo#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#delete GoogleMonitoringSlo#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#update GoogleMonitoringSlo#update}.

---

##### `put_windows_based_sli` <a name="put_windows_based_sli" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.putWindowsBasedSli"></a>

```python
def put_windows_based_sli(
  good_bad_metric_filter: str = None,
  good_total_ratio_threshold: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold = None,
  metric_mean_in_range: GoogleMonitoringSloWindowsBasedSliMetricMeanInRange = None,
  metric_sum_in_range: GoogleMonitoringSloWindowsBasedSliMetricSumInRange = None,
  window_period: str = None
) -> None
```

###### `good_bad_metric_filter`<sup>Optional</sup> <a name="good_bad_metric_filter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.putWindowsBasedSli.parameter.goodBadMetricFilter"></a>

- *Type:* str

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) with ValueType = BOOL. The window is good if any true values appear in the window. One of 'good_bad_metric_filter', 'good_total_ratio_threshold', 'metric_mean_in_range', 'metric_sum_in_range' must be set for 'windows_based_sli'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#good_bad_metric_filter GoogleMonitoringSlo#good_bad_metric_filter}

---

###### `good_total_ratio_threshold`<sup>Optional</sup> <a name="good_total_ratio_threshold" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.putWindowsBasedSli.parameter.goodTotalRatioThreshold"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold</a>

good_total_ratio_threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#good_total_ratio_threshold GoogleMonitoringSlo#good_total_ratio_threshold}

---

###### `metric_mean_in_range`<sup>Optional</sup> <a name="metric_mean_in_range" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.putWindowsBasedSli.parameter.metricMeanInRange"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRange">GoogleMonitoringSloWindowsBasedSliMetricMeanInRange</a>

metric_mean_in_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#metric_mean_in_range GoogleMonitoringSlo#metric_mean_in_range}

---

###### `metric_sum_in_range`<sup>Optional</sup> <a name="metric_sum_in_range" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.putWindowsBasedSli.parameter.metricSumInRange"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRange">GoogleMonitoringSloWindowsBasedSliMetricSumInRange</a>

metric_sum_in_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#metric_sum_in_range GoogleMonitoringSlo#metric_sum_in_range}

---

###### `window_period`<sup>Optional</sup> <a name="window_period" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.putWindowsBasedSli.parameter.windowPeriod"></a>

- *Type:* str

Duration over which window quality is evaluated, given as a duration string "{X}s" representing X seconds.

Must be an
integer fraction of a day and at least 60s.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#window_period GoogleMonitoringSlo#window_period}

---

##### `reset_basic_sli` <a name="reset_basic_sli" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.resetBasicSli"></a>

```python
def reset_basic_sli() -> None
```

##### `reset_calendar_period` <a name="reset_calendar_period" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.resetCalendarPeriod"></a>

```python
def reset_calendar_period() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_request_based_sli` <a name="reset_request_based_sli" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.resetRequestBasedSli"></a>

```python
def reset_request_based_sli() -> None
```

##### `reset_rolling_period_days` <a name="reset_rolling_period_days" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.resetRollingPeriodDays"></a>

```python
def reset_rolling_period_days() -> None
```

##### `reset_slo_id` <a name="reset_slo_id" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.resetSloId"></a>

```python
def reset_slo_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_user_labels` <a name="reset_user_labels" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.resetUserLabels"></a>

```python
def reset_user_labels() -> None
```

##### `reset_windows_based_sli` <a name="reset_windows_based_sli" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.resetWindowsBasedSli"></a>

```python
def reset_windows_based_sli() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleMonitoringSlo resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_slo

googleMonitoringSlo.GoogleMonitoringSlo.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_slo

googleMonitoringSlo.GoogleMonitoringSlo.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_slo

googleMonitoringSlo.GoogleMonitoringSlo.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_slo

googleMonitoringSlo.GoogleMonitoringSlo.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleMonitoringSlo resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleMonitoringSlo to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleMonitoringSlo that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleMonitoringSlo to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.basicSli">basic_sli</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference">GoogleMonitoringSloBasicSliOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.requestBasedSli">request_based_sli</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference">GoogleMonitoringSloRequestBasedSliOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference">GoogleMonitoringSloTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.windowsBasedSli">windows_based_sli</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference">GoogleMonitoringSloWindowsBasedSliOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.basicSliInput">basic_sli_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSli">GoogleMonitoringSloBasicSli</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.calendarPeriodInput">calendar_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.goalInput">goal_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.requestBasedSliInput">request_based_sli_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSli">GoogleMonitoringSloRequestBasedSli</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.rollingPeriodDaysInput">rolling_period_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.sloIdInput">slo_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeouts">GoogleMonitoringSloTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.userLabelsInput">user_labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.windowsBasedSliInput">windows_based_sli_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSli">GoogleMonitoringSloWindowsBasedSli</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.calendarPeriod">calendar_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.goal">goal</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.rollingPeriodDays">rolling_period_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.sloId">slo_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.userLabels">user_labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `basic_sli`<sup>Required</sup> <a name="basic_sli" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.basicSli"></a>

```python
basic_sli: GoogleMonitoringSloBasicSliOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference">GoogleMonitoringSloBasicSliOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `request_based_sli`<sup>Required</sup> <a name="request_based_sli" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.requestBasedSli"></a>

```python
request_based_sli: GoogleMonitoringSloRequestBasedSliOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference">GoogleMonitoringSloRequestBasedSliOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.timeouts"></a>

```python
timeouts: GoogleMonitoringSloTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference">GoogleMonitoringSloTimeoutsOutputReference</a>

---

##### `windows_based_sli`<sup>Required</sup> <a name="windows_based_sli" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.windowsBasedSli"></a>

```python
windows_based_sli: GoogleMonitoringSloWindowsBasedSliOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference">GoogleMonitoringSloWindowsBasedSliOutputReference</a>

---

##### `basic_sli_input`<sup>Optional</sup> <a name="basic_sli_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.basicSliInput"></a>

```python
basic_sli_input: GoogleMonitoringSloBasicSli
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSli">GoogleMonitoringSloBasicSli</a>

---

##### `calendar_period_input`<sup>Optional</sup> <a name="calendar_period_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.calendarPeriodInput"></a>

```python
calendar_period_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `goal_input`<sup>Optional</sup> <a name="goal_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.goalInput"></a>

```python
goal_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `request_based_sli_input`<sup>Optional</sup> <a name="request_based_sli_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.requestBasedSliInput"></a>

```python
request_based_sli_input: GoogleMonitoringSloRequestBasedSli
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSli">GoogleMonitoringSloRequestBasedSli</a>

---

##### `rolling_period_days_input`<sup>Optional</sup> <a name="rolling_period_days_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.rollingPeriodDaysInput"></a>

```python
rolling_period_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `slo_id_input`<sup>Optional</sup> <a name="slo_id_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.sloIdInput"></a>

```python
slo_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleMonitoringSloTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeouts">GoogleMonitoringSloTimeouts</a>]

---

##### `user_labels_input`<sup>Optional</sup> <a name="user_labels_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.userLabelsInput"></a>

```python
user_labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `windows_based_sli_input`<sup>Optional</sup> <a name="windows_based_sli_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.windowsBasedSliInput"></a>

```python
windows_based_sli_input: GoogleMonitoringSloWindowsBasedSli
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSli">GoogleMonitoringSloWindowsBasedSli</a>

---

##### `calendar_period`<sup>Required</sup> <a name="calendar_period" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.calendarPeriod"></a>

```python
calendar_period: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `goal`<sup>Required</sup> <a name="goal" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.goal"></a>

```python
goal: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `rolling_period_days`<sup>Required</sup> <a name="rolling_period_days" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.rollingPeriodDays"></a>

```python
rolling_period_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `slo_id`<sup>Required</sup> <a name="slo_id" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.sloId"></a>

```python
slo_id: str
```

- *Type:* str

---

##### `user_labels`<sup>Required</sup> <a name="user_labels" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.userLabels"></a>

```python
user_labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleMonitoringSloBasicSli <a name="GoogleMonitoringSloBasicSli" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSli"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSli.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_slo

googleMonitoringSlo.GoogleMonitoringSloBasicSli(
  availability: GoogleMonitoringSloBasicSliAvailability = None,
  latency: GoogleMonitoringSloBasicSliLatency = None,
  location: typing.List[str] = None,
  method: typing.List[str] = None,
  version: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSli.property.availability">availability</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailability">GoogleMonitoringSloBasicSliAvailability</a></code> | availability block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSli.property.latency">latency</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatency">GoogleMonitoringSloBasicSliLatency</a></code> | latency block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSli.property.location">location</a></code> | <code>typing.List[str]</code> | An optional set of locations to which this SLI is relevant. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSli.property.method">method</a></code> | <code>typing.List[str]</code> | An optional set of RPCs to which this SLI is relevant. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSli.property.version">version</a></code> | <code>typing.List[str]</code> | The set of API versions to which this SLI is relevant. |

---

##### `availability`<sup>Optional</sup> <a name="availability" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSli.property.availability"></a>

```python
availability: GoogleMonitoringSloBasicSliAvailability
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailability">GoogleMonitoringSloBasicSliAvailability</a>

availability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#availability GoogleMonitoringSlo#availability}

---

##### `latency`<sup>Optional</sup> <a name="latency" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSli.property.latency"></a>

```python
latency: GoogleMonitoringSloBasicSliLatency
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatency">GoogleMonitoringSloBasicSliLatency</a>

latency block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#latency GoogleMonitoringSlo#latency}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSli.property.location"></a>

```python
location: typing.List[str]
```

- *Type:* typing.List[str]

An optional set of locations to which this SLI is relevant.

Telemetry from other locations will not be used to calculate
performance for this SLI. If omitted, this SLI applies to all
locations in which the Service has activity. For service types
that don't support breaking down by location, setting this
field will result in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#location GoogleMonitoringSlo#location}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSli.property.method"></a>

```python
method: typing.List[str]
```

- *Type:* typing.List[str]

An optional set of RPCs to which this SLI is relevant.

Telemetry from other methods will not be used to calculate
performance for this SLI. If omitted, this SLI applies to all
the Service's methods. For service types that don't support
breaking down by method, setting this field will result in an
error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#method GoogleMonitoringSlo#method}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSli.property.version"></a>

```python
version: typing.List[str]
```

- *Type:* typing.List[str]

The set of API versions to which this SLI is relevant.

Telemetry from other API versions will not be used to
calculate performance for this SLI. If omitted,
this SLI applies to all API versions. For service types
that don't support breaking down by version, setting this
field will result in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#version GoogleMonitoringSlo#version}

---

### GoogleMonitoringSloBasicSliAvailability <a name="GoogleMonitoringSloBasicSliAvailability" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailability.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_slo

googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailability(
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailability.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether an availability SLI is enabled or not. Must be set to true. Defaults to 'true'. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailability.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether an availability SLI is enabled or not. Must be set to true. Defaults to 'true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#enabled GoogleMonitoringSlo#enabled}

---

### GoogleMonitoringSloBasicSliLatency <a name="GoogleMonitoringSloBasicSliLatency" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatency"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatency.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_slo

googleMonitoringSlo.GoogleMonitoringSloBasicSliLatency(
  threshold: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatency.property.threshold">threshold</a></code> | <code>str</code> | A duration string, e.g. 10s. Good service is defined to be the count of requests made to this service that return in no more than threshold. |

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatency.property.threshold"></a>

```python
threshold: str
```

- *Type:* str

A duration string, e.g. 10s. Good service is defined to be the count of requests made to this service that return in no more than threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#threshold GoogleMonitoringSlo#threshold}

---

### GoogleMonitoringSloConfig <a name="GoogleMonitoringSloConfig" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_slo

googleMonitoringSlo.GoogleMonitoringSloConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  goal: typing.Union[int, float],
  service: str,
  basic_sli: GoogleMonitoringSloBasicSli = None,
  calendar_period: str = None,
  display_name: str = None,
  id: str = None,
  project: str = None,
  request_based_sli: GoogleMonitoringSloRequestBasedSli = None,
  rolling_period_days: typing.Union[int, float] = None,
  slo_id: str = None,
  timeouts: GoogleMonitoringSloTimeouts = None,
  user_labels: typing.Mapping[str] = None,
  windows_based_sli: GoogleMonitoringSloWindowsBasedSli = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.goal">goal</a></code> | <code>typing.Union[int, float]</code> | The fraction of service that must be good in order for this objective to be met. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.service">service</a></code> | <code>str</code> | ID of the service to which this SLO belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.basicSli">basic_sli</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSli">GoogleMonitoringSloBasicSli</a></code> | basic_sli block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.calendarPeriod">calendar_period</a></code> | <code>str</code> | A calendar period, semantically "since the start of the current <calendarPeriod>". Possible values: ["DAY", "WEEK", "FORTNIGHT", "MONTH"]. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.displayName">display_name</a></code> | <code>str</code> | Name used for UI elements listing this SLO. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#id GoogleMonitoringSlo#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#project GoogleMonitoringSlo#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.requestBasedSli">request_based_sli</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSli">GoogleMonitoringSloRequestBasedSli</a></code> | request_based_sli block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.rollingPeriodDays">rolling_period_days</a></code> | <code>typing.Union[int, float]</code> | A rolling time period, semantically "in the past X days". Must be between 1 to 30 days, inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.sloId">slo_id</a></code> | <code>str</code> | The id to use for this ServiceLevelObjective. If omitted, an id will be generated instead. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeouts">GoogleMonitoringSloTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.userLabels">user_labels</a></code> | <code>typing.Mapping[str]</code> | This field is intended to be used for organizing and identifying the AlertPolicy objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.windowsBasedSli">windows_based_sli</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSli">GoogleMonitoringSloWindowsBasedSli</a></code> | windows_based_sli block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `goal`<sup>Required</sup> <a name="goal" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.goal"></a>

```python
goal: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The fraction of service that must be good in order for this objective to be met.

0 < goal <= 0.999

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#goal GoogleMonitoringSlo#goal}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.service"></a>

```python
service: str
```

- *Type:* str

ID of the service to which this SLO belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#service GoogleMonitoringSlo#service}

---

##### `basic_sli`<sup>Optional</sup> <a name="basic_sli" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.basicSli"></a>

```python
basic_sli: GoogleMonitoringSloBasicSli
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSli">GoogleMonitoringSloBasicSli</a>

basic_sli block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#basic_sli GoogleMonitoringSlo#basic_sli}

---

##### `calendar_period`<sup>Optional</sup> <a name="calendar_period" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.calendarPeriod"></a>

```python
calendar_period: str
```

- *Type:* str

A calendar period, semantically "since the start of the current <calendarPeriod>". Possible values: ["DAY", "WEEK", "FORTNIGHT", "MONTH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#calendar_period GoogleMonitoringSlo#calendar_period}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Name used for UI elements listing this SLO.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#display_name GoogleMonitoringSlo#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#id GoogleMonitoringSlo#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#project GoogleMonitoringSlo#project}.

---

##### `request_based_sli`<sup>Optional</sup> <a name="request_based_sli" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.requestBasedSli"></a>

```python
request_based_sli: GoogleMonitoringSloRequestBasedSli
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSli">GoogleMonitoringSloRequestBasedSli</a>

request_based_sli block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#request_based_sli GoogleMonitoringSlo#request_based_sli}

---

##### `rolling_period_days`<sup>Optional</sup> <a name="rolling_period_days" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.rollingPeriodDays"></a>

```python
rolling_period_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A rolling time period, semantically "in the past X days". Must be between 1 to 30 days, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#rolling_period_days GoogleMonitoringSlo#rolling_period_days}

---

##### `slo_id`<sup>Optional</sup> <a name="slo_id" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.sloId"></a>

```python
slo_id: str
```

- *Type:* str

The id to use for this ServiceLevelObjective. If omitted, an id will be generated instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#slo_id GoogleMonitoringSlo#slo_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.timeouts"></a>

```python
timeouts: GoogleMonitoringSloTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeouts">GoogleMonitoringSloTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#timeouts GoogleMonitoringSlo#timeouts}

---

##### `user_labels`<sup>Optional</sup> <a name="user_labels" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.userLabels"></a>

```python
user_labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

This field is intended to be used for organizing and identifying the AlertPolicy objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#user_labels GoogleMonitoringSlo#user_labels}

---

##### `windows_based_sli`<sup>Optional</sup> <a name="windows_based_sli" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.windowsBasedSli"></a>

```python
windows_based_sli: GoogleMonitoringSloWindowsBasedSli
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSli">GoogleMonitoringSloWindowsBasedSli</a>

windows_based_sli block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#windows_based_sli GoogleMonitoringSlo#windows_based_sli}

---

### GoogleMonitoringSloRequestBasedSli <a name="GoogleMonitoringSloRequestBasedSli" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSli"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSli.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_slo

googleMonitoringSlo.GoogleMonitoringSloRequestBasedSli(
  distribution_cut: GoogleMonitoringSloRequestBasedSliDistributionCut = None,
  good_total_ratio: GoogleMonitoringSloRequestBasedSliGoodTotalRatio = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSli.property.distributionCut">distribution_cut</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCut">GoogleMonitoringSloRequestBasedSliDistributionCut</a></code> | distribution_cut block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSli.property.goodTotalRatio">good_total_ratio</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatio">GoogleMonitoringSloRequestBasedSliGoodTotalRatio</a></code> | good_total_ratio block. |

---

##### `distribution_cut`<sup>Optional</sup> <a name="distribution_cut" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSli.property.distributionCut"></a>

```python
distribution_cut: GoogleMonitoringSloRequestBasedSliDistributionCut
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCut">GoogleMonitoringSloRequestBasedSliDistributionCut</a>

distribution_cut block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#distribution_cut GoogleMonitoringSlo#distribution_cut}

---

##### `good_total_ratio`<sup>Optional</sup> <a name="good_total_ratio" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSli.property.goodTotalRatio"></a>

```python
good_total_ratio: GoogleMonitoringSloRequestBasedSliGoodTotalRatio
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatio">GoogleMonitoringSloRequestBasedSliGoodTotalRatio</a>

good_total_ratio block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#good_total_ratio GoogleMonitoringSlo#good_total_ratio}

---

### GoogleMonitoringSloRequestBasedSliDistributionCut <a name="GoogleMonitoringSloRequestBasedSliDistributionCut" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCut"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCut.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_slo

googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCut(
  distribution_filter: str,
  range: GoogleMonitoringSloRequestBasedSliDistributionCutRange
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCut.property.distributionFilter">distribution_filter</a></code> | <code>str</code> | A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) aggregating values to quantify the good service provided. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCut.property.range">range</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRange">GoogleMonitoringSloRequestBasedSliDistributionCutRange</a></code> | range block. |

---

##### `distribution_filter`<sup>Required</sup> <a name="distribution_filter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCut.property.distributionFilter"></a>

```python
distribution_filter: str
```

- *Type:* str

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) aggregating values to quantify the good service provided.

Must have ValueType = DISTRIBUTION and
MetricKind = DELTA or MetricKind = CUMULATIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#distribution_filter GoogleMonitoringSlo#distribution_filter}

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCut.property.range"></a>

```python
range: GoogleMonitoringSloRequestBasedSliDistributionCutRange
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRange">GoogleMonitoringSloRequestBasedSliDistributionCutRange</a>

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#range GoogleMonitoringSlo#range}

---

### GoogleMonitoringSloRequestBasedSliDistributionCutRange <a name="GoogleMonitoringSloRequestBasedSliDistributionCutRange" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRange.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_slo

googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRange(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRange.property.max">max</a></code> | <code>typing.Union[int, float]</code> | max value for the range (inclusive). If not given, will be set to 0. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRange.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Min value for the range (inclusive). If not given, will be set to 0. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRange.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

max value for the range (inclusive). If not given, will be set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#max GoogleMonitoringSlo#max}

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRange.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Min value for the range (inclusive). If not given, will be set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#min GoogleMonitoringSlo#min}

---

### GoogleMonitoringSloRequestBasedSliGoodTotalRatio <a name="GoogleMonitoringSloRequestBasedSliGoodTotalRatio" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatio"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatio.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_slo

googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatio(
  bad_service_filter: str = None,
  good_service_filter: str = None,
  total_service_filter: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatio.property.badServiceFilter">bad_service_filter</a></code> | <code>str</code> | A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying bad service provided, either demanded service that was not provided or demanded service that was of inadequate quality. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatio.property.goodServiceFilter">good_service_filter</a></code> | <code>str</code> | A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying good service provided. Must have ValueType = DOUBLE or ValueType = INT64 and must have MetricKind = DELTA or MetricKind = CUMULATIVE. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatio.property.totalServiceFilter">total_service_filter</a></code> | <code>str</code> | A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying total demanded service. |

---

##### `bad_service_filter`<sup>Optional</sup> <a name="bad_service_filter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatio.property.badServiceFilter"></a>

```python
bad_service_filter: str
```

- *Type:* str

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying bad service provided, either demanded service that was not provided or demanded service that was of inadequate quality.

Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE.

Exactly two of 'good_service_filter','bad_service_filter','total_service_filter'
must be set (good + bad = total is assumed).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#bad_service_filter GoogleMonitoringSlo#bad_service_filter}

---

##### `good_service_filter`<sup>Optional</sup> <a name="good_service_filter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatio.property.goodServiceFilter"></a>

```python
good_service_filter: str
```

- *Type:* str

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying good service provided. Must have ValueType = DOUBLE or ValueType = INT64 and must have MetricKind = DELTA or MetricKind = CUMULATIVE.

Exactly two of 'good_service_filter','bad_service_filter','total_service_filter'
must be set (good + bad = total is assumed).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#good_service_filter GoogleMonitoringSlo#good_service_filter}

---

##### `total_service_filter`<sup>Optional</sup> <a name="total_service_filter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatio.property.totalServiceFilter"></a>

```python
total_service_filter: str
```

- *Type:* str

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying total demanded service.

Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE.

Exactly two of 'good_service_filter','bad_service_filter','total_service_filter'
must be set (good + bad = total is assumed).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#total_service_filter GoogleMonitoringSlo#total_service_filter}

---

### GoogleMonitoringSloTimeouts <a name="GoogleMonitoringSloTimeouts" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_slo

googleMonitoringSlo.GoogleMonitoringSloTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#create GoogleMonitoringSlo#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#delete GoogleMonitoringSlo#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#update GoogleMonitoringSlo#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#create GoogleMonitoringSlo#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#delete GoogleMonitoringSlo#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#update GoogleMonitoringSlo#update}.

---

### GoogleMonitoringSloWindowsBasedSli <a name="GoogleMonitoringSloWindowsBasedSli" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSli"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSli.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_slo

googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSli(
  good_bad_metric_filter: str = None,
  good_total_ratio_threshold: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold = None,
  metric_mean_in_range: GoogleMonitoringSloWindowsBasedSliMetricMeanInRange = None,
  metric_sum_in_range: GoogleMonitoringSloWindowsBasedSliMetricSumInRange = None,
  window_period: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSli.property.goodBadMetricFilter">good_bad_metric_filter</a></code> | <code>str</code> | A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) with ValueType = BOOL. The window is good if any true values appear in the window. One of 'good_bad_metric_filter', 'good_total_ratio_threshold', 'metric_mean_in_range', 'metric_sum_in_range' must be set for 'windows_based_sli'. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSli.property.goodTotalRatioThreshold">good_total_ratio_threshold</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold</a></code> | good_total_ratio_threshold block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSli.property.metricMeanInRange">metric_mean_in_range</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRange">GoogleMonitoringSloWindowsBasedSliMetricMeanInRange</a></code> | metric_mean_in_range block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSli.property.metricSumInRange">metric_sum_in_range</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRange">GoogleMonitoringSloWindowsBasedSliMetricSumInRange</a></code> | metric_sum_in_range block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSli.property.windowPeriod">window_period</a></code> | <code>str</code> | Duration over which window quality is evaluated, given as a duration string "{X}s" representing X seconds. |

---

##### `good_bad_metric_filter`<sup>Optional</sup> <a name="good_bad_metric_filter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSli.property.goodBadMetricFilter"></a>

```python
good_bad_metric_filter: str
```

- *Type:* str

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) with ValueType = BOOL. The window is good if any true values appear in the window. One of 'good_bad_metric_filter', 'good_total_ratio_threshold', 'metric_mean_in_range', 'metric_sum_in_range' must be set for 'windows_based_sli'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#good_bad_metric_filter GoogleMonitoringSlo#good_bad_metric_filter}

---

##### `good_total_ratio_threshold`<sup>Optional</sup> <a name="good_total_ratio_threshold" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSli.property.goodTotalRatioThreshold"></a>

```python
good_total_ratio_threshold: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold</a>

good_total_ratio_threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#good_total_ratio_threshold GoogleMonitoringSlo#good_total_ratio_threshold}

---

##### `metric_mean_in_range`<sup>Optional</sup> <a name="metric_mean_in_range" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSli.property.metricMeanInRange"></a>

```python
metric_mean_in_range: GoogleMonitoringSloWindowsBasedSliMetricMeanInRange
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRange">GoogleMonitoringSloWindowsBasedSliMetricMeanInRange</a>

metric_mean_in_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#metric_mean_in_range GoogleMonitoringSlo#metric_mean_in_range}

---

##### `metric_sum_in_range`<sup>Optional</sup> <a name="metric_sum_in_range" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSli.property.metricSumInRange"></a>

```python
metric_sum_in_range: GoogleMonitoringSloWindowsBasedSliMetricSumInRange
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRange">GoogleMonitoringSloWindowsBasedSliMetricSumInRange</a>

metric_sum_in_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#metric_sum_in_range GoogleMonitoringSlo#metric_sum_in_range}

---

##### `window_period`<sup>Optional</sup> <a name="window_period" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSli.property.windowPeriod"></a>

```python
window_period: str
```

- *Type:* str

Duration over which window quality is evaluated, given as a duration string "{X}s" representing X seconds.

Must be an
integer fraction of a day and at least 60s.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#window_period GoogleMonitoringSlo#window_period}

---

### GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold <a name="GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_slo

googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold(
  basic_sli_performance: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance = None,
  performance: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance = None,
  threshold: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold.property.basicSliPerformance">basic_sli_performance</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance</a></code> | basic_sli_performance block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold.property.performance">performance</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance</a></code> | performance block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | If window performance >= threshold, the window is counted as good. |

---

##### `basic_sli_performance`<sup>Optional</sup> <a name="basic_sli_performance" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold.property.basicSliPerformance"></a>

```python
basic_sli_performance: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance</a>

basic_sli_performance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#basic_sli_performance GoogleMonitoringSlo#basic_sli_performance}

---

##### `performance`<sup>Optional</sup> <a name="performance" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold.property.performance"></a>

```python
performance: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance</a>

performance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#performance GoogleMonitoringSlo#performance}

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

If window performance >= threshold, the window is counted as good.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#threshold GoogleMonitoringSlo#threshold}

---

### GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance <a name="GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_slo

googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance(
  availability: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability = None,
  latency: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency = None,
  location: typing.List[str] = None,
  method: typing.List[str] = None,
  version: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.property.availability">availability</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability</a></code> | availability block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.property.latency">latency</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency</a></code> | latency block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.property.location">location</a></code> | <code>typing.List[str]</code> | An optional set of locations to which this SLI is relevant. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.property.method">method</a></code> | <code>typing.List[str]</code> | An optional set of RPCs to which this SLI is relevant. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.property.version">version</a></code> | <code>typing.List[str]</code> | The set of API versions to which this SLI is relevant. |

---

##### `availability`<sup>Optional</sup> <a name="availability" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.property.availability"></a>

```python
availability: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability</a>

availability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#availability GoogleMonitoringSlo#availability}

---

##### `latency`<sup>Optional</sup> <a name="latency" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.property.latency"></a>

```python
latency: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency</a>

latency block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#latency GoogleMonitoringSlo#latency}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.property.location"></a>

```python
location: typing.List[str]
```

- *Type:* typing.List[str]

An optional set of locations to which this SLI is relevant.

Telemetry from other locations will not be used to calculate
performance for this SLI. If omitted, this SLI applies to all
locations in which the Service has activity. For service types
that don't support breaking down by location, setting this
field will result in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#location GoogleMonitoringSlo#location}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.property.method"></a>

```python
method: typing.List[str]
```

- *Type:* typing.List[str]

An optional set of RPCs to which this SLI is relevant.

Telemetry from other methods will not be used to calculate
performance for this SLI. If omitted, this SLI applies to all
the Service's methods. For service types that don't support
breaking down by method, setting this field will result in an
error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#method GoogleMonitoringSlo#method}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.property.version"></a>

```python
version: typing.List[str]
```

- *Type:* typing.List[str]

The set of API versions to which this SLI is relevant.

Telemetry from other API versions will not be used to
calculate performance for this SLI. If omitted,
this SLI applies to all API versions. For service types
that don't support breaking down by version, setting this
field will result in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#version GoogleMonitoringSlo#version}

---

### GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability <a name="GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_slo

googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability(
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether an availability SLI is enabled or not. Must be set to 'true. Defaults to 'true'. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether an availability SLI is enabled or not. Must be set to 'true. Defaults to 'true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#enabled GoogleMonitoringSlo#enabled}

---

### GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency <a name="GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_slo

googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency(
  threshold: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency.property.threshold">threshold</a></code> | <code>str</code> | A duration string, e.g. 10s. Good service is defined to be the count of requests made to this service that return in no more than threshold. |

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency.property.threshold"></a>

```python
threshold: str
```

- *Type:* str

A duration string, e.g. 10s. Good service is defined to be the count of requests made to this service that return in no more than threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#threshold GoogleMonitoringSlo#threshold}

---

### GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance <a name="GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_slo

googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance(
  distribution_cut: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut = None,
  good_total_ratio: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance.property.distributionCut">distribution_cut</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut</a></code> | distribution_cut block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance.property.goodTotalRatio">good_total_ratio</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio</a></code> | good_total_ratio block. |

---

##### `distribution_cut`<sup>Optional</sup> <a name="distribution_cut" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance.property.distributionCut"></a>

```python
distribution_cut: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut</a>

distribution_cut block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#distribution_cut GoogleMonitoringSlo#distribution_cut}

---

##### `good_total_ratio`<sup>Optional</sup> <a name="good_total_ratio" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance.property.goodTotalRatio"></a>

```python
good_total_ratio: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio</a>

good_total_ratio block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#good_total_ratio GoogleMonitoringSlo#good_total_ratio}

---

### GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut <a name="GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_slo

googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut(
  distribution_filter: str,
  range: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut.property.distributionFilter">distribution_filter</a></code> | <code>str</code> | A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) aggregating values to quantify the good service provided. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut.property.range">range</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange</a></code> | range block. |

---

##### `distribution_filter`<sup>Required</sup> <a name="distribution_filter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut.property.distributionFilter"></a>

```python
distribution_filter: str
```

- *Type:* str

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) aggregating values to quantify the good service provided.

Must have ValueType = DISTRIBUTION and
MetricKind = DELTA or MetricKind = CUMULATIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#distribution_filter GoogleMonitoringSlo#distribution_filter}

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut.property.range"></a>

```python
range: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange</a>

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#range GoogleMonitoringSlo#range}

---

### GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange <a name="GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_slo

googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange.property.max">max</a></code> | <code>typing.Union[int, float]</code> | max value for the range (inclusive). If not given, will be set to 0. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Min value for the range (inclusive). If not given, will be set to 0. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

max value for the range (inclusive). If not given, will be set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#max GoogleMonitoringSlo#max}

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Min value for the range (inclusive). If not given, will be set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#min GoogleMonitoringSlo#min}

---

### GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio <a name="GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_slo

googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio(
  bad_service_filter: str = None,
  good_service_filter: str = None,
  total_service_filter: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio.property.badServiceFilter">bad_service_filter</a></code> | <code>str</code> | A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying bad service provided, either demanded service that was not provided or demanded service that was of inadequate quality. Exactly two of good, bad, or total service filter must be defined (where good + bad = total is assumed). |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio.property.goodServiceFilter">good_service_filter</a></code> | <code>str</code> | A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying good service provided. Exactly two of good, bad, or total service filter must be defined (where good + bad = total is assumed). |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio.property.totalServiceFilter">total_service_filter</a></code> | <code>str</code> | A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying total demanded service. Exactly two of good, bad, or total service filter must be defined (where good + bad = total is assumed). |

---

##### `bad_service_filter`<sup>Optional</sup> <a name="bad_service_filter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio.property.badServiceFilter"></a>

```python
bad_service_filter: str
```

- *Type:* str

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying bad service provided, either demanded service that was not provided or demanded service that was of inadequate quality. Exactly two of good, bad, or total service filter must be defined (where good + bad = total is assumed).

Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#bad_service_filter GoogleMonitoringSlo#bad_service_filter}

---

##### `good_service_filter`<sup>Optional</sup> <a name="good_service_filter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio.property.goodServiceFilter"></a>

```python
good_service_filter: str
```

- *Type:* str

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying good service provided. Exactly two of good, bad, or total service filter must be defined (where good + bad = total is assumed).

Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#good_service_filter GoogleMonitoringSlo#good_service_filter}

---

##### `total_service_filter`<sup>Optional</sup> <a name="total_service_filter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio.property.totalServiceFilter"></a>

```python
total_service_filter: str
```

- *Type:* str

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying total demanded service. Exactly two of good, bad, or total service filter must be defined (where good + bad = total is assumed).

Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#total_service_filter GoogleMonitoringSlo#total_service_filter}

---

### GoogleMonitoringSloWindowsBasedSliMetricMeanInRange <a name="GoogleMonitoringSloWindowsBasedSliMetricMeanInRange" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRange.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_slo

googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRange(
  range: GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange,
  time_series: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRange.property.range">range</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange">GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange</a></code> | range block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRange.property.timeSeries">time_series</a></code> | <code>str</code> | A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) specifying the TimeSeries to use for evaluating window The provided TimeSeries must have ValueType = INT64 or ValueType = DOUBLE and MetricKind = GAUGE. Mean value 'X' should satisfy 'range.min <= X <= range.max' under good service. |

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRange.property.range"></a>

```python
range: GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange">GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange</a>

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#range GoogleMonitoringSlo#range}

---

##### `time_series`<sup>Required</sup> <a name="time_series" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRange.property.timeSeries"></a>

```python
time_series: str
```

- *Type:* str

A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) specifying the TimeSeries to use for evaluating window The provided TimeSeries must have ValueType = INT64 or ValueType = DOUBLE and MetricKind = GAUGE. Mean value 'X' should satisfy 'range.min <= X <= range.max' under good service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#time_series GoogleMonitoringSlo#time_series}

---

### GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange <a name="GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_slo

googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange.property.max">max</a></code> | <code>typing.Union[int, float]</code> | max value for the range (inclusive). If not given, will be set to "infinity", defining an open range ">= range.min". |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Min value for the range (inclusive). If not given, will be set to "-infinity", defining an open range "< range.max". |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

max value for the range (inclusive). If not given, will be set to "infinity", defining an open range ">= range.min".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#max GoogleMonitoringSlo#max}

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Min value for the range (inclusive). If not given, will be set to "-infinity", defining an open range "< range.max".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#min GoogleMonitoringSlo#min}

---

### GoogleMonitoringSloWindowsBasedSliMetricSumInRange <a name="GoogleMonitoringSloWindowsBasedSliMetricSumInRange" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRange.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_slo

googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRange(
  range: GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange,
  time_series: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRange.property.range">range</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange">GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange</a></code> | range block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRange.property.timeSeries">time_series</a></code> | <code>str</code> | A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) specifying the TimeSeries to use for evaluating window quality. The provided TimeSeries must have ValueType = INT64 or ValueType = DOUBLE and MetricKind = GAUGE. |

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRange.property.range"></a>

```python
range: GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange">GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange</a>

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#range GoogleMonitoringSlo#range}

---

##### `time_series`<sup>Required</sup> <a name="time_series" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRange.property.timeSeries"></a>

```python
time_series: str
```

- *Type:* str

A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) specifying the TimeSeries to use for evaluating window quality. The provided TimeSeries must have ValueType = INT64 or ValueType = DOUBLE and MetricKind = GAUGE.

Summed value 'X' should satisfy
'range.min <= X <= range.max' for a good window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#time_series GoogleMonitoringSlo#time_series}

---

### GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange <a name="GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_slo

googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange.property.max">max</a></code> | <code>typing.Union[int, float]</code> | max value for the range (inclusive). If not given, will be set to "infinity", defining an open range ">= range.min". |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Min value for the range (inclusive). If not given, will be set to "-infinity", defining an open range "< range.max". |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

max value for the range (inclusive). If not given, will be set to "infinity", defining an open range ">= range.min".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#max GoogleMonitoringSlo#max}

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Min value for the range (inclusive). If not given, will be set to "-infinity", defining an open range "< range.max".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#min GoogleMonitoringSlo#min}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleMonitoringSloBasicSliAvailabilityOutputReference <a name="GoogleMonitoringSloBasicSliAvailabilityOutputReference" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_slo

googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailability">GoogleMonitoringSloBasicSliAvailability</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMonitoringSloBasicSliAvailability
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailability">GoogleMonitoringSloBasicSliAvailability</a>

---


### GoogleMonitoringSloBasicSliLatencyOutputReference <a name="GoogleMonitoringSloBasicSliLatencyOutputReference" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_slo

googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.property.thresholdInput">threshold_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.property.threshold">threshold</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatency">GoogleMonitoringSloBasicSliLatency</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.property.thresholdInput"></a>

```python
threshold_input: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.property.threshold"></a>

```python
threshold: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMonitoringSloBasicSliLatency
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatency">GoogleMonitoringSloBasicSliLatency</a>

---


### GoogleMonitoringSloBasicSliOutputReference <a name="GoogleMonitoringSloBasicSliOutputReference" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_slo

googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.putAvailability">put_availability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.putLatency">put_latency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.resetAvailability">reset_availability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.resetLatency">reset_latency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.resetMethod">reset_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_availability` <a name="put_availability" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.putAvailability"></a>

```python
def put_availability(
  enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.putAvailability.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether an availability SLI is enabled or not. Must be set to true. Defaults to 'true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#enabled GoogleMonitoringSlo#enabled}

---

##### `put_latency` <a name="put_latency" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.putLatency"></a>

```python
def put_latency(
  threshold: str
) -> None
```

###### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.putLatency.parameter.threshold"></a>

- *Type:* str

A duration string, e.g. 10s. Good service is defined to be the count of requests made to this service that return in no more than threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#threshold GoogleMonitoringSlo#threshold}

---

##### `reset_availability` <a name="reset_availability" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.resetAvailability"></a>

```python
def reset_availability() -> None
```

##### `reset_latency` <a name="reset_latency" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.resetLatency"></a>

```python
def reset_latency() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_method` <a name="reset_method" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.resetMethod"></a>

```python
def reset_method() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.property.availability">availability</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference">GoogleMonitoringSloBasicSliAvailabilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.property.latency">latency</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference">GoogleMonitoringSloBasicSliLatencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.property.availabilityInput">availability_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailability">GoogleMonitoringSloBasicSliAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.property.latencyInput">latency_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatency">GoogleMonitoringSloBasicSliLatency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.property.locationInput">location_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.property.methodInput">method_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.property.versionInput">version_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.property.location">location</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.property.method">method</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.property.version">version</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSli">GoogleMonitoringSloBasicSli</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability`<sup>Required</sup> <a name="availability" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.property.availability"></a>

```python
availability: GoogleMonitoringSloBasicSliAvailabilityOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference">GoogleMonitoringSloBasicSliAvailabilityOutputReference</a>

---

##### `latency`<sup>Required</sup> <a name="latency" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.property.latency"></a>

```python
latency: GoogleMonitoringSloBasicSliLatencyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference">GoogleMonitoringSloBasicSliLatencyOutputReference</a>

---

##### `availability_input`<sup>Optional</sup> <a name="availability_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.property.availabilityInput"></a>

```python
availability_input: GoogleMonitoringSloBasicSliAvailability
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailability">GoogleMonitoringSloBasicSliAvailability</a>

---

##### `latency_input`<sup>Optional</sup> <a name="latency_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.property.latencyInput"></a>

```python
latency_input: GoogleMonitoringSloBasicSliLatency
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatency">GoogleMonitoringSloBasicSliLatency</a>

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.property.locationInput"></a>

```python
location_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `method_input`<sup>Optional</sup> <a name="method_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.property.methodInput"></a>

```python
method_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.property.versionInput"></a>

```python
version_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.property.location"></a>

```python
location: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.property.method"></a>

```python
method: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.property.version"></a>

```python
version: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMonitoringSloBasicSli
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSli">GoogleMonitoringSloBasicSli</a>

---


### GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference <a name="GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_slo

googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.putRange">put_range</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_range` <a name="put_range" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.putRange"></a>

```python
def put_range(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
) -> None
```

###### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.putRange.parameter.max"></a>

- *Type:* typing.Union[int, float]

max value for the range (inclusive). If not given, will be set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#max GoogleMonitoringSlo#max}

---

###### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.putRange.parameter.min"></a>

- *Type:* typing.Union[int, float]

Min value for the range (inclusive). If not given, will be set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#min GoogleMonitoringSlo#min}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.property.range">range</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference">GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.property.distributionFilterInput">distribution_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.property.rangeInput">range_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRange">GoogleMonitoringSloRequestBasedSliDistributionCutRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.property.distributionFilter">distribution_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCut">GoogleMonitoringSloRequestBasedSliDistributionCut</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.property.range"></a>

```python
range: GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference">GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference</a>

---

##### `distribution_filter_input`<sup>Optional</sup> <a name="distribution_filter_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.property.distributionFilterInput"></a>

```python
distribution_filter_input: str
```

- *Type:* str

---

##### `range_input`<sup>Optional</sup> <a name="range_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.property.rangeInput"></a>

```python
range_input: GoogleMonitoringSloRequestBasedSliDistributionCutRange
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRange">GoogleMonitoringSloRequestBasedSliDistributionCutRange</a>

---

##### `distribution_filter`<sup>Required</sup> <a name="distribution_filter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.property.distributionFilter"></a>

```python
distribution_filter: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMonitoringSloRequestBasedSliDistributionCut
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCut">GoogleMonitoringSloRequestBasedSliDistributionCut</a>

---


### GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference <a name="GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_slo

googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.resetMax">reset_max</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.resetMin">reset_min</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max` <a name="reset_max" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.resetMax"></a>

```python
def reset_max() -> None
```

##### `reset_min` <a name="reset_min" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.resetMin"></a>

```python
def reset_min() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRange">GoogleMonitoringSloRequestBasedSliDistributionCutRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMonitoringSloRequestBasedSliDistributionCutRange
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRange">GoogleMonitoringSloRequestBasedSliDistributionCutRange</a>

---


### GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference <a name="GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_slo

googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.resetBadServiceFilter">reset_bad_service_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.resetGoodServiceFilter">reset_good_service_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.resetTotalServiceFilter">reset_total_service_filter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bad_service_filter` <a name="reset_bad_service_filter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.resetBadServiceFilter"></a>

```python
def reset_bad_service_filter() -> None
```

##### `reset_good_service_filter` <a name="reset_good_service_filter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.resetGoodServiceFilter"></a>

```python
def reset_good_service_filter() -> None
```

##### `reset_total_service_filter` <a name="reset_total_service_filter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.resetTotalServiceFilter"></a>

```python
def reset_total_service_filter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.badServiceFilterInput">bad_service_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.goodServiceFilterInput">good_service_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.totalServiceFilterInput">total_service_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.badServiceFilter">bad_service_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.goodServiceFilter">good_service_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.totalServiceFilter">total_service_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatio">GoogleMonitoringSloRequestBasedSliGoodTotalRatio</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bad_service_filter_input`<sup>Optional</sup> <a name="bad_service_filter_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.badServiceFilterInput"></a>

```python
bad_service_filter_input: str
```

- *Type:* str

---

##### `good_service_filter_input`<sup>Optional</sup> <a name="good_service_filter_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.goodServiceFilterInput"></a>

```python
good_service_filter_input: str
```

- *Type:* str

---

##### `total_service_filter_input`<sup>Optional</sup> <a name="total_service_filter_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.totalServiceFilterInput"></a>

```python
total_service_filter_input: str
```

- *Type:* str

---

##### `bad_service_filter`<sup>Required</sup> <a name="bad_service_filter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.badServiceFilter"></a>

```python
bad_service_filter: str
```

- *Type:* str

---

##### `good_service_filter`<sup>Required</sup> <a name="good_service_filter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.goodServiceFilter"></a>

```python
good_service_filter: str
```

- *Type:* str

---

##### `total_service_filter`<sup>Required</sup> <a name="total_service_filter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.totalServiceFilter"></a>

```python
total_service_filter: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMonitoringSloRequestBasedSliGoodTotalRatio
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatio">GoogleMonitoringSloRequestBasedSliGoodTotalRatio</a>

---


### GoogleMonitoringSloRequestBasedSliOutputReference <a name="GoogleMonitoringSloRequestBasedSliOutputReference" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_slo

googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.putDistributionCut">put_distribution_cut</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.putGoodTotalRatio">put_good_total_ratio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.resetDistributionCut">reset_distribution_cut</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.resetGoodTotalRatio">reset_good_total_ratio</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_distribution_cut` <a name="put_distribution_cut" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.putDistributionCut"></a>

```python
def put_distribution_cut(
  distribution_filter: str,
  range: GoogleMonitoringSloRequestBasedSliDistributionCutRange
) -> None
```

###### `distribution_filter`<sup>Required</sup> <a name="distribution_filter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.putDistributionCut.parameter.distributionFilter"></a>

- *Type:* str

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) aggregating values to quantify the good service provided.

Must have ValueType = DISTRIBUTION and
MetricKind = DELTA or MetricKind = CUMULATIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#distribution_filter GoogleMonitoringSlo#distribution_filter}

---

###### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.putDistributionCut.parameter.range"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRange">GoogleMonitoringSloRequestBasedSliDistributionCutRange</a>

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#range GoogleMonitoringSlo#range}

---

##### `put_good_total_ratio` <a name="put_good_total_ratio" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.putGoodTotalRatio"></a>

```python
def put_good_total_ratio(
  bad_service_filter: str = None,
  good_service_filter: str = None,
  total_service_filter: str = None
) -> None
```

###### `bad_service_filter`<sup>Optional</sup> <a name="bad_service_filter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.putGoodTotalRatio.parameter.badServiceFilter"></a>

- *Type:* str

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying bad service provided, either demanded service that was not provided or demanded service that was of inadequate quality.

Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE.

Exactly two of 'good_service_filter','bad_service_filter','total_service_filter'
must be set (good + bad = total is assumed).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#bad_service_filter GoogleMonitoringSlo#bad_service_filter}

---

###### `good_service_filter`<sup>Optional</sup> <a name="good_service_filter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.putGoodTotalRatio.parameter.goodServiceFilter"></a>

- *Type:* str

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying good service provided. Must have ValueType = DOUBLE or ValueType = INT64 and must have MetricKind = DELTA or MetricKind = CUMULATIVE.

Exactly two of 'good_service_filter','bad_service_filter','total_service_filter'
must be set (good + bad = total is assumed).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#good_service_filter GoogleMonitoringSlo#good_service_filter}

---

###### `total_service_filter`<sup>Optional</sup> <a name="total_service_filter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.putGoodTotalRatio.parameter.totalServiceFilter"></a>

- *Type:* str

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying total demanded service.

Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE.

Exactly two of 'good_service_filter','bad_service_filter','total_service_filter'
must be set (good + bad = total is assumed).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#total_service_filter GoogleMonitoringSlo#total_service_filter}

---

##### `reset_distribution_cut` <a name="reset_distribution_cut" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.resetDistributionCut"></a>

```python
def reset_distribution_cut() -> None
```

##### `reset_good_total_ratio` <a name="reset_good_total_ratio" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.resetGoodTotalRatio"></a>

```python
def reset_good_total_ratio() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.property.distributionCut">distribution_cut</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference">GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.property.goodTotalRatio">good_total_ratio</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference">GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.property.distributionCutInput">distribution_cut_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCut">GoogleMonitoringSloRequestBasedSliDistributionCut</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.property.goodTotalRatioInput">good_total_ratio_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatio">GoogleMonitoringSloRequestBasedSliGoodTotalRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSli">GoogleMonitoringSloRequestBasedSli</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `distribution_cut`<sup>Required</sup> <a name="distribution_cut" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.property.distributionCut"></a>

```python
distribution_cut: GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference">GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference</a>

---

##### `good_total_ratio`<sup>Required</sup> <a name="good_total_ratio" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.property.goodTotalRatio"></a>

```python
good_total_ratio: GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference">GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference</a>

---

##### `distribution_cut_input`<sup>Optional</sup> <a name="distribution_cut_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.property.distributionCutInput"></a>

```python
distribution_cut_input: GoogleMonitoringSloRequestBasedSliDistributionCut
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCut">GoogleMonitoringSloRequestBasedSliDistributionCut</a>

---

##### `good_total_ratio_input`<sup>Optional</sup> <a name="good_total_ratio_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.property.goodTotalRatioInput"></a>

```python
good_total_ratio_input: GoogleMonitoringSloRequestBasedSliGoodTotalRatio
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatio">GoogleMonitoringSloRequestBasedSliGoodTotalRatio</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMonitoringSloRequestBasedSli
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSli">GoogleMonitoringSloRequestBasedSli</a>

---


### GoogleMonitoringSloTimeoutsOutputReference <a name="GoogleMonitoringSloTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_slo

googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeouts">GoogleMonitoringSloTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleMonitoringSloTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeouts">GoogleMonitoringSloTimeouts</a>]

---


### GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference <a name="GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_slo

googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability</a>

---


### GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference <a name="GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_slo

googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.property.thresholdInput">threshold_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.property.threshold">threshold</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.property.thresholdInput"></a>

```python
threshold_input: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.property.threshold"></a>

```python
threshold: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency</a>

---


### GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference <a name="GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_slo

googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.putAvailability">put_availability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.putLatency">put_latency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resetAvailability">reset_availability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resetLatency">reset_latency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resetMethod">reset_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_availability` <a name="put_availability" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.putAvailability"></a>

```python
def put_availability(
  enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.putAvailability.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether an availability SLI is enabled or not. Must be set to 'true. Defaults to 'true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#enabled GoogleMonitoringSlo#enabled}

---

##### `put_latency` <a name="put_latency" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.putLatency"></a>

```python
def put_latency(
  threshold: str
) -> None
```

###### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.putLatency.parameter.threshold"></a>

- *Type:* str

A duration string, e.g. 10s. Good service is defined to be the count of requests made to this service that return in no more than threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#threshold GoogleMonitoringSlo#threshold}

---

##### `reset_availability` <a name="reset_availability" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resetAvailability"></a>

```python
def reset_availability() -> None
```

##### `reset_latency` <a name="reset_latency" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resetLatency"></a>

```python
def reset_latency() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_method` <a name="reset_method" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resetMethod"></a>

```python
def reset_method() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.availability">availability</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.latency">latency</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.availabilityInput">availability_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.latencyInput">latency_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.locationInput">location_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.methodInput">method_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.versionInput">version_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.location">location</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.method">method</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.version">version</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability`<sup>Required</sup> <a name="availability" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.availability"></a>

```python
availability: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference</a>

---

##### `latency`<sup>Required</sup> <a name="latency" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.latency"></a>

```python
latency: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference</a>

---

##### `availability_input`<sup>Optional</sup> <a name="availability_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.availabilityInput"></a>

```python
availability_input: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability</a>

---

##### `latency_input`<sup>Optional</sup> <a name="latency_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.latencyInput"></a>

```python
latency_input: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency</a>

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.locationInput"></a>

```python
location_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `method_input`<sup>Optional</sup> <a name="method_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.methodInput"></a>

```python
method_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.versionInput"></a>

```python
version_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.location"></a>

```python
location: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.method"></a>

```python
method: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.version"></a>

```python
version: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance</a>

---


### GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference <a name="GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_slo

googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.putBasicSliPerformance">put_basic_sli_performance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.putPerformance">put_performance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.resetBasicSliPerformance">reset_basic_sli_performance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.resetPerformance">reset_performance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.resetThreshold">reset_threshold</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_basic_sli_performance` <a name="put_basic_sli_performance" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.putBasicSliPerformance"></a>

```python
def put_basic_sli_performance(
  availability: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability = None,
  latency: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency = None,
  location: typing.List[str] = None,
  method: typing.List[str] = None,
  version: typing.List[str] = None
) -> None
```

###### `availability`<sup>Optional</sup> <a name="availability" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.putBasicSliPerformance.parameter.availability"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability</a>

availability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#availability GoogleMonitoringSlo#availability}

---

###### `latency`<sup>Optional</sup> <a name="latency" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.putBasicSliPerformance.parameter.latency"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency</a>

latency block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#latency GoogleMonitoringSlo#latency}

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.putBasicSliPerformance.parameter.location"></a>

- *Type:* typing.List[str]

An optional set of locations to which this SLI is relevant.

Telemetry from other locations will not be used to calculate
performance for this SLI. If omitted, this SLI applies to all
locations in which the Service has activity. For service types
that don't support breaking down by location, setting this
field will result in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#location GoogleMonitoringSlo#location}

---

###### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.putBasicSliPerformance.parameter.method"></a>

- *Type:* typing.List[str]

An optional set of RPCs to which this SLI is relevant.

Telemetry from other methods will not be used to calculate
performance for this SLI. If omitted, this SLI applies to all
the Service's methods. For service types that don't support
breaking down by method, setting this field will result in an
error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#method GoogleMonitoringSlo#method}

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.putBasicSliPerformance.parameter.version"></a>

- *Type:* typing.List[str]

The set of API versions to which this SLI is relevant.

Telemetry from other API versions will not be used to
calculate performance for this SLI. If omitted,
this SLI applies to all API versions. For service types
that don't support breaking down by version, setting this
field will result in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#version GoogleMonitoringSlo#version}

---

##### `put_performance` <a name="put_performance" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.putPerformance"></a>

```python
def put_performance(
  distribution_cut: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut = None,
  good_total_ratio: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio = None
) -> None
```

###### `distribution_cut`<sup>Optional</sup> <a name="distribution_cut" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.putPerformance.parameter.distributionCut"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut</a>

distribution_cut block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#distribution_cut GoogleMonitoringSlo#distribution_cut}

---

###### `good_total_ratio`<sup>Optional</sup> <a name="good_total_ratio" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.putPerformance.parameter.goodTotalRatio"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio</a>

good_total_ratio block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#good_total_ratio GoogleMonitoringSlo#good_total_ratio}

---

##### `reset_basic_sli_performance` <a name="reset_basic_sli_performance" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.resetBasicSliPerformance"></a>

```python
def reset_basic_sli_performance() -> None
```

##### `reset_performance` <a name="reset_performance" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.resetPerformance"></a>

```python
def reset_performance() -> None
```

##### `reset_threshold` <a name="reset_threshold" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.resetThreshold"></a>

```python
def reset_threshold() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.basicSliPerformance">basic_sli_performance</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.performance">performance</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.basicSliPerformanceInput">basic_sli_performance_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.performanceInput">performance_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `basic_sli_performance`<sup>Required</sup> <a name="basic_sli_performance" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.basicSliPerformance"></a>

```python
basic_sli_performance: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference</a>

---

##### `performance`<sup>Required</sup> <a name="performance" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.performance"></a>

```python
performance: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference</a>

---

##### `basic_sli_performance_input`<sup>Optional</sup> <a name="basic_sli_performance_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.basicSliPerformanceInput"></a>

```python
basic_sli_performance_input: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance</a>

---

##### `performance_input`<sup>Optional</sup> <a name="performance_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.performanceInput"></a>

```python
performance_input: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance</a>

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.thresholdInput"></a>

```python
threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold</a>

---


### GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference <a name="GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_slo

googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.putRange">put_range</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_range` <a name="put_range" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.putRange"></a>

```python
def put_range(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
) -> None
```

###### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.putRange.parameter.max"></a>

- *Type:* typing.Union[int, float]

max value for the range (inclusive). If not given, will be set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#max GoogleMonitoringSlo#max}

---

###### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.putRange.parameter.min"></a>

- *Type:* typing.Union[int, float]

Min value for the range (inclusive). If not given, will be set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#min GoogleMonitoringSlo#min}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.range">range</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.distributionFilterInput">distribution_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.rangeInput">range_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.distributionFilter">distribution_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.range"></a>

```python
range: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference</a>

---

##### `distribution_filter_input`<sup>Optional</sup> <a name="distribution_filter_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.distributionFilterInput"></a>

```python
distribution_filter_input: str
```

- *Type:* str

---

##### `range_input`<sup>Optional</sup> <a name="range_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.rangeInput"></a>

```python
range_input: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange</a>

---

##### `distribution_filter`<sup>Required</sup> <a name="distribution_filter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.distributionFilter"></a>

```python
distribution_filter: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut</a>

---


### GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference <a name="GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_slo

googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.resetMax">reset_max</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.resetMin">reset_min</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max` <a name="reset_max" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.resetMax"></a>

```python
def reset_max() -> None
```

##### `reset_min` <a name="reset_min" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.resetMin"></a>

```python
def reset_min() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange</a>

---


### GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference <a name="GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_slo

googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.resetBadServiceFilter">reset_bad_service_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.resetGoodServiceFilter">reset_good_service_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.resetTotalServiceFilter">reset_total_service_filter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bad_service_filter` <a name="reset_bad_service_filter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.resetBadServiceFilter"></a>

```python
def reset_bad_service_filter() -> None
```

##### `reset_good_service_filter` <a name="reset_good_service_filter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.resetGoodServiceFilter"></a>

```python
def reset_good_service_filter() -> None
```

##### `reset_total_service_filter` <a name="reset_total_service_filter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.resetTotalServiceFilter"></a>

```python
def reset_total_service_filter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.badServiceFilterInput">bad_service_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.goodServiceFilterInput">good_service_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.totalServiceFilterInput">total_service_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.badServiceFilter">bad_service_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.goodServiceFilter">good_service_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.totalServiceFilter">total_service_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bad_service_filter_input`<sup>Optional</sup> <a name="bad_service_filter_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.badServiceFilterInput"></a>

```python
bad_service_filter_input: str
```

- *Type:* str

---

##### `good_service_filter_input`<sup>Optional</sup> <a name="good_service_filter_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.goodServiceFilterInput"></a>

```python
good_service_filter_input: str
```

- *Type:* str

---

##### `total_service_filter_input`<sup>Optional</sup> <a name="total_service_filter_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.totalServiceFilterInput"></a>

```python
total_service_filter_input: str
```

- *Type:* str

---

##### `bad_service_filter`<sup>Required</sup> <a name="bad_service_filter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.badServiceFilter"></a>

```python
bad_service_filter: str
```

- *Type:* str

---

##### `good_service_filter`<sup>Required</sup> <a name="good_service_filter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.goodServiceFilter"></a>

```python
good_service_filter: str
```

- *Type:* str

---

##### `total_service_filter`<sup>Required</sup> <a name="total_service_filter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.totalServiceFilter"></a>

```python
total_service_filter: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio</a>

---


### GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference <a name="GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_slo

googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.putDistributionCut">put_distribution_cut</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.putGoodTotalRatio">put_good_total_ratio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.resetDistributionCut">reset_distribution_cut</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.resetGoodTotalRatio">reset_good_total_ratio</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_distribution_cut` <a name="put_distribution_cut" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.putDistributionCut"></a>

```python
def put_distribution_cut(
  distribution_filter: str,
  range: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange
) -> None
```

###### `distribution_filter`<sup>Required</sup> <a name="distribution_filter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.putDistributionCut.parameter.distributionFilter"></a>

- *Type:* str

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) aggregating values to quantify the good service provided.

Must have ValueType = DISTRIBUTION and
MetricKind = DELTA or MetricKind = CUMULATIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#distribution_filter GoogleMonitoringSlo#distribution_filter}

---

###### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.putDistributionCut.parameter.range"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange</a>

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#range GoogleMonitoringSlo#range}

---

##### `put_good_total_ratio` <a name="put_good_total_ratio" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.putGoodTotalRatio"></a>

```python
def put_good_total_ratio(
  bad_service_filter: str = None,
  good_service_filter: str = None,
  total_service_filter: str = None
) -> None
```

###### `bad_service_filter`<sup>Optional</sup> <a name="bad_service_filter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.putGoodTotalRatio.parameter.badServiceFilter"></a>

- *Type:* str

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying bad service provided, either demanded service that was not provided or demanded service that was of inadequate quality. Exactly two of good, bad, or total service filter must be defined (where good + bad = total is assumed).

Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#bad_service_filter GoogleMonitoringSlo#bad_service_filter}

---

###### `good_service_filter`<sup>Optional</sup> <a name="good_service_filter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.putGoodTotalRatio.parameter.goodServiceFilter"></a>

- *Type:* str

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying good service provided. Exactly two of good, bad, or total service filter must be defined (where good + bad = total is assumed).

Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#good_service_filter GoogleMonitoringSlo#good_service_filter}

---

###### `total_service_filter`<sup>Optional</sup> <a name="total_service_filter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.putGoodTotalRatio.parameter.totalServiceFilter"></a>

- *Type:* str

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying total demanded service. Exactly two of good, bad, or total service filter must be defined (where good + bad = total is assumed).

Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#total_service_filter GoogleMonitoringSlo#total_service_filter}

---

##### `reset_distribution_cut` <a name="reset_distribution_cut" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.resetDistributionCut"></a>

```python
def reset_distribution_cut() -> None
```

##### `reset_good_total_ratio` <a name="reset_good_total_ratio" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.resetGoodTotalRatio"></a>

```python
def reset_good_total_ratio() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.distributionCut">distribution_cut</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.goodTotalRatio">good_total_ratio</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.distributionCutInput">distribution_cut_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.goodTotalRatioInput">good_total_ratio_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `distribution_cut`<sup>Required</sup> <a name="distribution_cut" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.distributionCut"></a>

```python
distribution_cut: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference</a>

---

##### `good_total_ratio`<sup>Required</sup> <a name="good_total_ratio" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.goodTotalRatio"></a>

```python
good_total_ratio: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference</a>

---

##### `distribution_cut_input`<sup>Optional</sup> <a name="distribution_cut_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.distributionCutInput"></a>

```python
distribution_cut_input: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut</a>

---

##### `good_total_ratio_input`<sup>Optional</sup> <a name="good_total_ratio_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.goodTotalRatioInput"></a>

```python
good_total_ratio_input: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance</a>

---


### GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference <a name="GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_slo

googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.putRange">put_range</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_range` <a name="put_range" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.putRange"></a>

```python
def put_range(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
) -> None
```

###### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.putRange.parameter.max"></a>

- *Type:* typing.Union[int, float]

max value for the range (inclusive). If not given, will be set to "infinity", defining an open range ">= range.min".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#max GoogleMonitoringSlo#max}

---

###### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.putRange.parameter.min"></a>

- *Type:* typing.Union[int, float]

Min value for the range (inclusive). If not given, will be set to "-infinity", defining an open range "< range.max".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#min GoogleMonitoringSlo#min}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.range">range</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference">GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.rangeInput">range_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange">GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.timeSeriesInput">time_series_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.timeSeries">time_series</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRange">GoogleMonitoringSloWindowsBasedSliMetricMeanInRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.range"></a>

```python
range: GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference">GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference</a>

---

##### `range_input`<sup>Optional</sup> <a name="range_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.rangeInput"></a>

```python
range_input: GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange">GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange</a>

---

##### `time_series_input`<sup>Optional</sup> <a name="time_series_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.timeSeriesInput"></a>

```python
time_series_input: str
```

- *Type:* str

---

##### `time_series`<sup>Required</sup> <a name="time_series" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.timeSeries"></a>

```python
time_series: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMonitoringSloWindowsBasedSliMetricMeanInRange
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRange">GoogleMonitoringSloWindowsBasedSliMetricMeanInRange</a>

---


### GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference <a name="GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_slo

googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.resetMax">reset_max</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.resetMin">reset_min</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max` <a name="reset_max" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.resetMax"></a>

```python
def reset_max() -> None
```

##### `reset_min` <a name="reset_min" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.resetMin"></a>

```python
def reset_min() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange">GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange">GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange</a>

---


### GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference <a name="GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_slo

googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.putRange">put_range</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_range` <a name="put_range" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.putRange"></a>

```python
def put_range(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
) -> None
```

###### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.putRange.parameter.max"></a>

- *Type:* typing.Union[int, float]

max value for the range (inclusive). If not given, will be set to "infinity", defining an open range ">= range.min".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#max GoogleMonitoringSlo#max}

---

###### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.putRange.parameter.min"></a>

- *Type:* typing.Union[int, float]

Min value for the range (inclusive). If not given, will be set to "-infinity", defining an open range "< range.max".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#min GoogleMonitoringSlo#min}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.range">range</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference">GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.rangeInput">range_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange">GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.timeSeriesInput">time_series_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.timeSeries">time_series</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRange">GoogleMonitoringSloWindowsBasedSliMetricSumInRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.range"></a>

```python
range: GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference">GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference</a>

---

##### `range_input`<sup>Optional</sup> <a name="range_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.rangeInput"></a>

```python
range_input: GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange">GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange</a>

---

##### `time_series_input`<sup>Optional</sup> <a name="time_series_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.timeSeriesInput"></a>

```python
time_series_input: str
```

- *Type:* str

---

##### `time_series`<sup>Required</sup> <a name="time_series" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.timeSeries"></a>

```python
time_series: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMonitoringSloWindowsBasedSliMetricSumInRange
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRange">GoogleMonitoringSloWindowsBasedSliMetricSumInRange</a>

---


### GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference <a name="GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_slo

googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.resetMax">reset_max</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.resetMin">reset_min</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max` <a name="reset_max" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.resetMax"></a>

```python
def reset_max() -> None
```

##### `reset_min` <a name="reset_min" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.resetMin"></a>

```python
def reset_min() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange">GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange">GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange</a>

---


### GoogleMonitoringSloWindowsBasedSliOutputReference <a name="GoogleMonitoringSloWindowsBasedSliOutputReference" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_slo

googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.putGoodTotalRatioThreshold">put_good_total_ratio_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.putMetricMeanInRange">put_metric_mean_in_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.putMetricSumInRange">put_metric_sum_in_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.resetGoodBadMetricFilter">reset_good_bad_metric_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.resetGoodTotalRatioThreshold">reset_good_total_ratio_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.resetMetricMeanInRange">reset_metric_mean_in_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.resetMetricSumInRange">reset_metric_sum_in_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.resetWindowPeriod">reset_window_period</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_good_total_ratio_threshold` <a name="put_good_total_ratio_threshold" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.putGoodTotalRatioThreshold"></a>

```python
def put_good_total_ratio_threshold(
  basic_sli_performance: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance = None,
  performance: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance = None,
  threshold: typing.Union[int, float] = None
) -> None
```

###### `basic_sli_performance`<sup>Optional</sup> <a name="basic_sli_performance" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.putGoodTotalRatioThreshold.parameter.basicSliPerformance"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance</a>

basic_sli_performance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#basic_sli_performance GoogleMonitoringSlo#basic_sli_performance}

---

###### `performance`<sup>Optional</sup> <a name="performance" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.putGoodTotalRatioThreshold.parameter.performance"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance</a>

performance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#performance GoogleMonitoringSlo#performance}

---

###### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.putGoodTotalRatioThreshold.parameter.threshold"></a>

- *Type:* typing.Union[int, float]

If window performance >= threshold, the window is counted as good.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#threshold GoogleMonitoringSlo#threshold}

---

##### `put_metric_mean_in_range` <a name="put_metric_mean_in_range" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.putMetricMeanInRange"></a>

```python
def put_metric_mean_in_range(
  range: GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange,
  time_series: str
) -> None
```

###### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.putMetricMeanInRange.parameter.range"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange">GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange</a>

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#range GoogleMonitoringSlo#range}

---

###### `time_series`<sup>Required</sup> <a name="time_series" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.putMetricMeanInRange.parameter.timeSeries"></a>

- *Type:* str

A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) specifying the TimeSeries to use for evaluating window The provided TimeSeries must have ValueType = INT64 or ValueType = DOUBLE and MetricKind = GAUGE. Mean value 'X' should satisfy 'range.min <= X <= range.max' under good service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#time_series GoogleMonitoringSlo#time_series}

---

##### `put_metric_sum_in_range` <a name="put_metric_sum_in_range" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.putMetricSumInRange"></a>

```python
def put_metric_sum_in_range(
  range: GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange,
  time_series: str
) -> None
```

###### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.putMetricSumInRange.parameter.range"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange">GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange</a>

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#range GoogleMonitoringSlo#range}

---

###### `time_series`<sup>Required</sup> <a name="time_series" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.putMetricSumInRange.parameter.timeSeries"></a>

- *Type:* str

A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) specifying the TimeSeries to use for evaluating window quality. The provided TimeSeries must have ValueType = INT64 or ValueType = DOUBLE and MetricKind = GAUGE.

Summed value 'X' should satisfy
'range.min <= X <= range.max' for a good window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_slo#time_series GoogleMonitoringSlo#time_series}

---

##### `reset_good_bad_metric_filter` <a name="reset_good_bad_metric_filter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.resetGoodBadMetricFilter"></a>

```python
def reset_good_bad_metric_filter() -> None
```

##### `reset_good_total_ratio_threshold` <a name="reset_good_total_ratio_threshold" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.resetGoodTotalRatioThreshold"></a>

```python
def reset_good_total_ratio_threshold() -> None
```

##### `reset_metric_mean_in_range` <a name="reset_metric_mean_in_range" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.resetMetricMeanInRange"></a>

```python
def reset_metric_mean_in_range() -> None
```

##### `reset_metric_sum_in_range` <a name="reset_metric_sum_in_range" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.resetMetricSumInRange"></a>

```python
def reset_metric_sum_in_range() -> None
```

##### `reset_window_period` <a name="reset_window_period" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.resetWindowPeriod"></a>

```python
def reset_window_period() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.property.goodTotalRatioThreshold">good_total_ratio_threshold</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.property.metricMeanInRange">metric_mean_in_range</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference">GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.property.metricSumInRange">metric_sum_in_range</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference">GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.property.goodBadMetricFilterInput">good_bad_metric_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.property.goodTotalRatioThresholdInput">good_total_ratio_threshold_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.property.metricMeanInRangeInput">metric_mean_in_range_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRange">GoogleMonitoringSloWindowsBasedSliMetricMeanInRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.property.metricSumInRangeInput">metric_sum_in_range_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRange">GoogleMonitoringSloWindowsBasedSliMetricSumInRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.property.windowPeriodInput">window_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.property.goodBadMetricFilter">good_bad_metric_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.property.windowPeriod">window_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSli">GoogleMonitoringSloWindowsBasedSli</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `good_total_ratio_threshold`<sup>Required</sup> <a name="good_total_ratio_threshold" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.property.goodTotalRatioThreshold"></a>

```python
good_total_ratio_threshold: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference</a>

---

##### `metric_mean_in_range`<sup>Required</sup> <a name="metric_mean_in_range" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.property.metricMeanInRange"></a>

```python
metric_mean_in_range: GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference">GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference</a>

---

##### `metric_sum_in_range`<sup>Required</sup> <a name="metric_sum_in_range" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.property.metricSumInRange"></a>

```python
metric_sum_in_range: GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference">GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference</a>

---

##### `good_bad_metric_filter_input`<sup>Optional</sup> <a name="good_bad_metric_filter_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.property.goodBadMetricFilterInput"></a>

```python
good_bad_metric_filter_input: str
```

- *Type:* str

---

##### `good_total_ratio_threshold_input`<sup>Optional</sup> <a name="good_total_ratio_threshold_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.property.goodTotalRatioThresholdInput"></a>

```python
good_total_ratio_threshold_input: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold</a>

---

##### `metric_mean_in_range_input`<sup>Optional</sup> <a name="metric_mean_in_range_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.property.metricMeanInRangeInput"></a>

```python
metric_mean_in_range_input: GoogleMonitoringSloWindowsBasedSliMetricMeanInRange
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRange">GoogleMonitoringSloWindowsBasedSliMetricMeanInRange</a>

---

##### `metric_sum_in_range_input`<sup>Optional</sup> <a name="metric_sum_in_range_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.property.metricSumInRangeInput"></a>

```python
metric_sum_in_range_input: GoogleMonitoringSloWindowsBasedSliMetricSumInRange
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRange">GoogleMonitoringSloWindowsBasedSliMetricSumInRange</a>

---

##### `window_period_input`<sup>Optional</sup> <a name="window_period_input" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.property.windowPeriodInput"></a>

```python
window_period_input: str
```

- *Type:* str

---

##### `good_bad_metric_filter`<sup>Required</sup> <a name="good_bad_metric_filter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.property.goodBadMetricFilter"></a>

```python
good_bad_metric_filter: str
```

- *Type:* str

---

##### `window_period`<sup>Required</sup> <a name="window_period" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.property.windowPeriod"></a>

```python
window_period: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMonitoringSloWindowsBasedSli
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSli">GoogleMonitoringSloWindowsBasedSli</a>

---



