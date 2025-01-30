# `googleMonitoringMetricDescriptor` Submodule <a name="`googleMonitoringMetricDescriptor` Submodule" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleMonitoringMetricDescriptor <a name="GoogleMonitoringMetricDescriptor" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_metric_descriptor google_monitoring_metric_descriptor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_metric_descriptor

googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor(
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
  display_name: str,
  metric_kind: str,
  type: str,
  value_type: str,
  id: str = None,
  labels: typing.Union[IResolvable, typing.List[GoogleMonitoringMetricDescriptorLabels]] = None,
  launch_stage: str = None,
  metadata: GoogleMonitoringMetricDescriptorMetadata = None,
  project: str = None,
  timeouts: GoogleMonitoringMetricDescriptorTimeouts = None,
  unit: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.description">description</a></code> | <code>str</code> | A detailed description of the metric, which can be used in documentation. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | A concise name for the metric, which can be displayed in user interfaces. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.metricKind">metric_kind</a></code> | <code>str</code> | Whether the metric records instantaneous values, changes to a value, etc. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.type">type</a></code> | <code>str</code> | The metric type, including its DNS name prefix. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.valueType">value_type</a></code> | <code>str</code> | Whether the measurement is an integer, a floating-point number, etc. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_metric_descriptor#id GoogleMonitoringMetricDescriptor#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.labels">labels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels">GoogleMonitoringMetricDescriptorLabels</a>]]</code> | labels block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.launchStage">launch_stage</a></code> | <code>str</code> | The launch stage of the metric definition. Possible values: ["LAUNCH_STAGE_UNSPECIFIED", "UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadata">GoogleMonitoringMetricDescriptorMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_metric_descriptor#project GoogleMonitoringMetricDescriptor#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeouts">GoogleMonitoringMetricDescriptorTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.unit">unit</a></code> | <code>str</code> | The units in which the metric value is reported. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.description"></a>

- *Type:* str

A detailed description of the metric, which can be used in documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_metric_descriptor#description GoogleMonitoringMetricDescriptor#description}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.displayName"></a>

- *Type:* str

A concise name for the metric, which can be displayed in user interfaces.

Use sentence case without an ending period, for example "Request count".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_metric_descriptor#display_name GoogleMonitoringMetricDescriptor#display_name}

---

##### `metric_kind`<sup>Required</sup> <a name="metric_kind" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.metricKind"></a>

- *Type:* str

Whether the metric records instantaneous values, changes to a value, etc.

Some combinations of metricKind and valueType might not be supported. Possible values: ["METRIC_KIND_UNSPECIFIED", "GAUGE", "DELTA", "CUMULATIVE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_metric_descriptor#metric_kind GoogleMonitoringMetricDescriptor#metric_kind}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.type"></a>

- *Type:* str

The metric type, including its DNS name prefix.

The type is not URL-encoded. All service defined metrics must be prefixed with the service name, in the format of {service name}/{relative metric name}, such as cloudsql.googleapis.com/database/cpu/utilization. The relative metric name must have only upper and lower-case letters, digits, '/' and underscores '_' are allowed. Additionally, the maximum number of characters allowed for the relative_metric_name is 100. All user-defined metric types have the DNS name custom.googleapis.com, external.googleapis.com, or logging.googleapis.com/user/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_metric_descriptor#type GoogleMonitoringMetricDescriptor#type}

---

##### `value_type`<sup>Required</sup> <a name="value_type" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.valueType"></a>

- *Type:* str

Whether the measurement is an integer, a floating-point number, etc.

Some combinations of metricKind and valueType might not be supported. Possible values: ["BOOL", "INT64", "DOUBLE", "STRING", "DISTRIBUTION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_metric_descriptor#value_type GoogleMonitoringMetricDescriptor#value_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_metric_descriptor#id GoogleMonitoringMetricDescriptor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.labels"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels">GoogleMonitoringMetricDescriptorLabels</a>]]

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_metric_descriptor#labels GoogleMonitoringMetricDescriptor#labels}

---

##### `launch_stage`<sup>Optional</sup> <a name="launch_stage" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.launchStage"></a>

- *Type:* str

The launch stage of the metric definition. Possible values: ["LAUNCH_STAGE_UNSPECIFIED", "UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_metric_descriptor#launch_stage GoogleMonitoringMetricDescriptor#launch_stage}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadata">GoogleMonitoringMetricDescriptorMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_metric_descriptor#metadata GoogleMonitoringMetricDescriptor#metadata}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_metric_descriptor#project GoogleMonitoringMetricDescriptor#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeouts">GoogleMonitoringMetricDescriptorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_metric_descriptor#timeouts GoogleMonitoringMetricDescriptor#timeouts}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.unit"></a>

- *Type:* str

The units in which the metric value is reported.

It is only applicable if the
valueType is INT64, DOUBLE, or DISTRIBUTION. The unit defines the representation of
the stored metric values.

Different systems may scale the values to be more easily displayed (so a value of
0.02KBy might be displayed as 20By, and a value of 3523KBy might be displayed as
3.5MBy). However, if the unit is KBy, then the value of the metric is always in
thousands of bytes, no matter how it may be displayed.

If you want a custom metric to record the exact number of CPU-seconds used by a job,
you can create an INT64 CUMULATIVE metric whose unit is s{CPU} (or equivalently
1s{CPU} or just s). If the job uses 12,005 CPU-seconds, then the value is written as
12005.

Alternatively, if you want a custom metric to record data in a more granular way, you
can create a DOUBLE CUMULATIVE metric whose unit is ks{CPU}, and then write the value
12.005 (which is 12005/1000), or use Kis{CPU} and write 11.723 (which is 12005/1024).
The supported units are a subset of The Unified Code for Units of Measure standard.
More info can be found in the API documentation
(https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_metric_descriptor#unit GoogleMonitoringMetricDescriptor#unit}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.putLabels">put_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.putMetadata">put_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.resetLaunchStage">reset_launch_stage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.resetUnit">reset_unit</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_labels` <a name="put_labels" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.putLabels"></a>

```python
def put_labels(
  value: typing.Union[IResolvable, typing.List[GoogleMonitoringMetricDescriptorLabels]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.putLabels.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels">GoogleMonitoringMetricDescriptorLabels</a>]]

---

##### `put_metadata` <a name="put_metadata" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.putMetadata"></a>

```python
def put_metadata(
  ingest_delay: str = None,
  sample_period: str = None
) -> None
```

###### `ingest_delay`<sup>Optional</sup> <a name="ingest_delay" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.putMetadata.parameter.ingestDelay"></a>

- *Type:* str

The delay of data points caused by ingestion.

Data points older than this age are guaranteed to be ingested and available to be read, excluding data loss due to errors. In '[duration format](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf?&_ga=2.264881487.1507873253.1593446723-935052455.1591817775#google.protobuf.Duration)'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_metric_descriptor#ingest_delay GoogleMonitoringMetricDescriptor#ingest_delay}

---

###### `sample_period`<sup>Optional</sup> <a name="sample_period" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.putMetadata.parameter.samplePeriod"></a>

- *Type:* str

The sampling period of metric data points.

For metrics which are written periodically, consecutive data points are stored at this time interval, excluding data loss due to errors. Metrics with a higher granularity have a smaller sampling period. In '[duration format](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf?&_ga=2.264881487.1507873253.1593446723-935052455.1591817775#google.protobuf.Duration)'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_metric_descriptor#sample_period GoogleMonitoringMetricDescriptor#sample_period}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_metric_descriptor#create GoogleMonitoringMetricDescriptor#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_metric_descriptor#delete GoogleMonitoringMetricDescriptor#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_metric_descriptor#update GoogleMonitoringMetricDescriptor#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_launch_stage` <a name="reset_launch_stage" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.resetLaunchStage"></a>

```python
def reset_launch_stage() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_unit` <a name="reset_unit" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.resetUnit"></a>

```python
def reset_unit() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleMonitoringMetricDescriptor resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_metric_descriptor

googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_metric_descriptor

googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_metric_descriptor

googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_metric_descriptor

googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleMonitoringMetricDescriptor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleMonitoringMetricDescriptor to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleMonitoringMetricDescriptor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_metric_descriptor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleMonitoringMetricDescriptor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.labels">labels</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList">GoogleMonitoringMetricDescriptorLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference">GoogleMonitoringMetricDescriptorMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.monitoredResourceTypes">monitored_resource_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference">GoogleMonitoringMetricDescriptorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.labelsInput">labels_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels">GoogleMonitoringMetricDescriptorLabels</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.launchStageInput">launch_stage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.metadataInput">metadata_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadata">GoogleMonitoringMetricDescriptorMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.metricKindInput">metric_kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeouts">GoogleMonitoringMetricDescriptorTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.valueTypeInput">value_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.launchStage">launch_stage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.metricKind">metric_kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.valueType">value_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.labels"></a>

```python
labels: GoogleMonitoringMetricDescriptorLabelsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList">GoogleMonitoringMetricDescriptorLabelsList</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.metadata"></a>

```python
metadata: GoogleMonitoringMetricDescriptorMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference">GoogleMonitoringMetricDescriptorMetadataOutputReference</a>

---

##### `monitored_resource_types`<sup>Required</sup> <a name="monitored_resource_types" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.monitoredResourceTypes"></a>

```python
monitored_resource_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.timeouts"></a>

```python
timeouts: GoogleMonitoringMetricDescriptorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference">GoogleMonitoringMetricDescriptorTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.labelsInput"></a>

```python
labels_input: typing.Union[IResolvable, typing.List[GoogleMonitoringMetricDescriptorLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels">GoogleMonitoringMetricDescriptorLabels</a>]]

---

##### `launch_stage_input`<sup>Optional</sup> <a name="launch_stage_input" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.launchStageInput"></a>

```python
launch_stage_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.metadataInput"></a>

```python
metadata_input: GoogleMonitoringMetricDescriptorMetadata
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadata">GoogleMonitoringMetricDescriptorMetadata</a>

---

##### `metric_kind_input`<sup>Optional</sup> <a name="metric_kind_input" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.metricKindInput"></a>

```python
metric_kind_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleMonitoringMetricDescriptorTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeouts">GoogleMonitoringMetricDescriptorTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `value_type_input`<sup>Optional</sup> <a name="value_type_input" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.valueTypeInput"></a>

```python
value_type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `launch_stage`<sup>Required</sup> <a name="launch_stage" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.launchStage"></a>

```python
launch_stage: str
```

- *Type:* str

---

##### `metric_kind`<sup>Required</sup> <a name="metric_kind" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.metricKind"></a>

```python
metric_kind: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `value_type`<sup>Required</sup> <a name="value_type" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleMonitoringMetricDescriptorConfig <a name="GoogleMonitoringMetricDescriptorConfig" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_metric_descriptor

googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str,
  display_name: str,
  metric_kind: str,
  type: str,
  value_type: str,
  id: str = None,
  labels: typing.Union[IResolvable, typing.List[GoogleMonitoringMetricDescriptorLabels]] = None,
  launch_stage: str = None,
  metadata: GoogleMonitoringMetricDescriptorMetadata = None,
  project: str = None,
  timeouts: GoogleMonitoringMetricDescriptorTimeouts = None,
  unit: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.description">description</a></code> | <code>str</code> | A detailed description of the metric, which can be used in documentation. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.displayName">display_name</a></code> | <code>str</code> | A concise name for the metric, which can be displayed in user interfaces. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.metricKind">metric_kind</a></code> | <code>str</code> | Whether the metric records instantaneous values, changes to a value, etc. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.type">type</a></code> | <code>str</code> | The metric type, including its DNS name prefix. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.valueType">value_type</a></code> | <code>str</code> | Whether the measurement is an integer, a floating-point number, etc. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_metric_descriptor#id GoogleMonitoringMetricDescriptor#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.labels">labels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels">GoogleMonitoringMetricDescriptorLabels</a>]]</code> | labels block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.launchStage">launch_stage</a></code> | <code>str</code> | The launch stage of the metric definition. Possible values: ["LAUNCH_STAGE_UNSPECIFIED", "UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadata">GoogleMonitoringMetricDescriptorMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_metric_descriptor#project GoogleMonitoringMetricDescriptor#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeouts">GoogleMonitoringMetricDescriptorTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.unit">unit</a></code> | <code>str</code> | The units in which the metric value is reported. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A detailed description of the metric, which can be used in documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_metric_descriptor#description GoogleMonitoringMetricDescriptor#description}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

A concise name for the metric, which can be displayed in user interfaces.

Use sentence case without an ending period, for example "Request count".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_metric_descriptor#display_name GoogleMonitoringMetricDescriptor#display_name}

---

##### `metric_kind`<sup>Required</sup> <a name="metric_kind" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.metricKind"></a>

```python
metric_kind: str
```

- *Type:* str

Whether the metric records instantaneous values, changes to a value, etc.

Some combinations of metricKind and valueType might not be supported. Possible values: ["METRIC_KIND_UNSPECIFIED", "GAUGE", "DELTA", "CUMULATIVE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_metric_descriptor#metric_kind GoogleMonitoringMetricDescriptor#metric_kind}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The metric type, including its DNS name prefix.

The type is not URL-encoded. All service defined metrics must be prefixed with the service name, in the format of {service name}/{relative metric name}, such as cloudsql.googleapis.com/database/cpu/utilization. The relative metric name must have only upper and lower-case letters, digits, '/' and underscores '_' are allowed. Additionally, the maximum number of characters allowed for the relative_metric_name is 100. All user-defined metric types have the DNS name custom.googleapis.com, external.googleapis.com, or logging.googleapis.com/user/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_metric_descriptor#type GoogleMonitoringMetricDescriptor#type}

---

##### `value_type`<sup>Required</sup> <a name="value_type" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

Whether the measurement is an integer, a floating-point number, etc.

Some combinations of metricKind and valueType might not be supported. Possible values: ["BOOL", "INT64", "DOUBLE", "STRING", "DISTRIBUTION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_metric_descriptor#value_type GoogleMonitoringMetricDescriptor#value_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_metric_descriptor#id GoogleMonitoringMetricDescriptor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.labels"></a>

```python
labels: typing.Union[IResolvable, typing.List[GoogleMonitoringMetricDescriptorLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels">GoogleMonitoringMetricDescriptorLabels</a>]]

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_metric_descriptor#labels GoogleMonitoringMetricDescriptor#labels}

---

##### `launch_stage`<sup>Optional</sup> <a name="launch_stage" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.launchStage"></a>

```python
launch_stage: str
```

- *Type:* str

The launch stage of the metric definition. Possible values: ["LAUNCH_STAGE_UNSPECIFIED", "UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_metric_descriptor#launch_stage GoogleMonitoringMetricDescriptor#launch_stage}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.metadata"></a>

```python
metadata: GoogleMonitoringMetricDescriptorMetadata
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadata">GoogleMonitoringMetricDescriptorMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_metric_descriptor#metadata GoogleMonitoringMetricDescriptor#metadata}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_metric_descriptor#project GoogleMonitoringMetricDescriptor#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.timeouts"></a>

```python
timeouts: GoogleMonitoringMetricDescriptorTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeouts">GoogleMonitoringMetricDescriptorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_metric_descriptor#timeouts GoogleMonitoringMetricDescriptor#timeouts}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.unit"></a>

```python
unit: str
```

- *Type:* str

The units in which the metric value is reported.

It is only applicable if the
valueType is INT64, DOUBLE, or DISTRIBUTION. The unit defines the representation of
the stored metric values.

Different systems may scale the values to be more easily displayed (so a value of
0.02KBy might be displayed as 20By, and a value of 3523KBy might be displayed as
3.5MBy). However, if the unit is KBy, then the value of the metric is always in
thousands of bytes, no matter how it may be displayed.

If you want a custom metric to record the exact number of CPU-seconds used by a job,
you can create an INT64 CUMULATIVE metric whose unit is s{CPU} (or equivalently
1s{CPU} or just s). If the job uses 12,005 CPU-seconds, then the value is written as
12005.

Alternatively, if you want a custom metric to record data in a more granular way, you
can create a DOUBLE CUMULATIVE metric whose unit is ks{CPU}, and then write the value
12.005 (which is 12005/1000), or use Kis{CPU} and write 11.723 (which is 12005/1024).
The supported units are a subset of The Unified Code for Units of Measure standard.
More info can be found in the API documentation
(https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_metric_descriptor#unit GoogleMonitoringMetricDescriptor#unit}

---

### GoogleMonitoringMetricDescriptorLabels <a name="GoogleMonitoringMetricDescriptorLabels" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_metric_descriptor

googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels(
  key: str,
  description: str = None,
  value_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels.property.key">key</a></code> | <code>str</code> | The key for this label. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels.property.description">description</a></code> | <code>str</code> | A human-readable description for the label. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels.property.valueType">value_type</a></code> | <code>str</code> | The type of data that can be assigned to the label. Default value: "STRING" Possible values: ["STRING", "BOOL", "INT64"]. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels.property.key"></a>

```python
key: str
```

- *Type:* str

The key for this label.

The key must not exceed 100 characters. The first character of the key must be an upper- or lower-case letter, the remaining characters must be letters, digits or underscores, and the key must match the regular expression [a-zA-Z][a-zA-Z0-9_]*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_metric_descriptor#key GoogleMonitoringMetricDescriptor#key}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels.property.description"></a>

```python
description: str
```

- *Type:* str

A human-readable description for the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_metric_descriptor#description GoogleMonitoringMetricDescriptor#description}

---

##### `value_type`<sup>Optional</sup> <a name="value_type" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

The type of data that can be assigned to the label. Default value: "STRING" Possible values: ["STRING", "BOOL", "INT64"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_metric_descriptor#value_type GoogleMonitoringMetricDescriptor#value_type}

---

### GoogleMonitoringMetricDescriptorMetadata <a name="GoogleMonitoringMetricDescriptorMetadata" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_metric_descriptor

googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadata(
  ingest_delay: str = None,
  sample_period: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadata.property.ingestDelay">ingest_delay</a></code> | <code>str</code> | The delay of data points caused by ingestion. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadata.property.samplePeriod">sample_period</a></code> | <code>str</code> | The sampling period of metric data points. |

---

##### `ingest_delay`<sup>Optional</sup> <a name="ingest_delay" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadata.property.ingestDelay"></a>

```python
ingest_delay: str
```

- *Type:* str

The delay of data points caused by ingestion.

Data points older than this age are guaranteed to be ingested and available to be read, excluding data loss due to errors. In '[duration format](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf?&_ga=2.264881487.1507873253.1593446723-935052455.1591817775#google.protobuf.Duration)'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_metric_descriptor#ingest_delay GoogleMonitoringMetricDescriptor#ingest_delay}

---

##### `sample_period`<sup>Optional</sup> <a name="sample_period" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadata.property.samplePeriod"></a>

```python
sample_period: str
```

- *Type:* str

The sampling period of metric data points.

For metrics which are written periodically, consecutive data points are stored at this time interval, excluding data loss due to errors. Metrics with a higher granularity have a smaller sampling period. In '[duration format](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf?&_ga=2.264881487.1507873253.1593446723-935052455.1591817775#google.protobuf.Duration)'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_metric_descriptor#sample_period GoogleMonitoringMetricDescriptor#sample_period}

---

### GoogleMonitoringMetricDescriptorTimeouts <a name="GoogleMonitoringMetricDescriptorTimeouts" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_metric_descriptor

googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_metric_descriptor#create GoogleMonitoringMetricDescriptor#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_metric_descriptor#delete GoogleMonitoringMetricDescriptor#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_metric_descriptor#update GoogleMonitoringMetricDescriptor#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_metric_descriptor#create GoogleMonitoringMetricDescriptor#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_metric_descriptor#delete GoogleMonitoringMetricDescriptor#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_metric_descriptor#update GoogleMonitoringMetricDescriptor#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleMonitoringMetricDescriptorLabelsList <a name="GoogleMonitoringMetricDescriptorLabelsList" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_metric_descriptor

googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMonitoringMetricDescriptorLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels">GoogleMonitoringMetricDescriptorLabels</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleMonitoringMetricDescriptorLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels">GoogleMonitoringMetricDescriptorLabels</a>]]

---


### GoogleMonitoringMetricDescriptorLabelsOutputReference <a name="GoogleMonitoringMetricDescriptorLabelsOutputReference" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_metric_descriptor

googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.resetValueType">reset_value_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_value_type` <a name="reset_value_type" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.resetValueType"></a>

```python
def reset_value_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.valueTypeInput">value_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.valueType">value_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels">GoogleMonitoringMetricDescriptorLabels</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_type_input`<sup>Optional</sup> <a name="value_type_input" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.valueTypeInput"></a>

```python
value_type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value_type`<sup>Required</sup> <a name="value_type" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleMonitoringMetricDescriptorLabels]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels">GoogleMonitoringMetricDescriptorLabels</a>]

---


### GoogleMonitoringMetricDescriptorMetadataOutputReference <a name="GoogleMonitoringMetricDescriptorMetadataOutputReference" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_metric_descriptor

googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.resetIngestDelay">reset_ingest_delay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.resetSamplePeriod">reset_sample_period</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ingest_delay` <a name="reset_ingest_delay" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.resetIngestDelay"></a>

```python
def reset_ingest_delay() -> None
```

##### `reset_sample_period` <a name="reset_sample_period" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.resetSamplePeriod"></a>

```python
def reset_sample_period() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.property.ingestDelayInput">ingest_delay_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.property.samplePeriodInput">sample_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.property.ingestDelay">ingest_delay</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.property.samplePeriod">sample_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadata">GoogleMonitoringMetricDescriptorMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ingest_delay_input`<sup>Optional</sup> <a name="ingest_delay_input" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.property.ingestDelayInput"></a>

```python
ingest_delay_input: str
```

- *Type:* str

---

##### `sample_period_input`<sup>Optional</sup> <a name="sample_period_input" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.property.samplePeriodInput"></a>

```python
sample_period_input: str
```

- *Type:* str

---

##### `ingest_delay`<sup>Required</sup> <a name="ingest_delay" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.property.ingestDelay"></a>

```python
ingest_delay: str
```

- *Type:* str

---

##### `sample_period`<sup>Required</sup> <a name="sample_period" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.property.samplePeriod"></a>

```python
sample_period: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMonitoringMetricDescriptorMetadata
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadata">GoogleMonitoringMetricDescriptorMetadata</a>

---


### GoogleMonitoringMetricDescriptorTimeoutsOutputReference <a name="GoogleMonitoringMetricDescriptorTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_metric_descriptor

googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeouts">GoogleMonitoringMetricDescriptorTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleMonitoringMetricDescriptorTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeouts">GoogleMonitoringMetricDescriptorTimeouts</a>]

---



