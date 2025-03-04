# `googleSpannerInstance` Submodule <a name="`googleSpannerInstance` Submodule" id="@cdktf/provider-google-beta.googleSpannerInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSpannerInstance <a name="GoogleSpannerInstance" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance google_spanner_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_spanner_instance

googleSpannerInstance.GoogleSpannerInstance(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  config: str,
  display_name: str,
  autoscaling_config: GoogleSpannerInstanceAutoscalingConfig = None,
  default_backup_schedule_type: str = None,
  edition: str = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  name: str = None,
  num_nodes: typing.Union[int, float] = None,
  processing_units: typing.Union[int, float] = None,
  project: str = None,
  timeouts: GoogleSpannerInstanceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.config">config</a></code> | <code>str</code> | The name of the instance's configuration (similar but not quite the same as a region) which defines the geographic placement and replication of your databases in this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The descriptive name for this instance as it appears in UIs. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.autoscalingConfig">autoscaling_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfig">GoogleSpannerInstanceAutoscalingConfig</a></code> | autoscaling_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.defaultBackupScheduleType">default_backup_schedule_type</a></code> | <code>str</code> | Controls the default backup behavior for new databases within the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.edition">edition</a></code> | <code>str</code> | The edition selected for this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When deleting a spanner instance, this boolean option will delete all backups of this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#id GoogleSpannerInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.name">name</a></code> | <code>str</code> | A unique identifier for the instance, which cannot be changed after the instance is created. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.numNodes">num_nodes</a></code> | <code>typing.Union[int, float]</code> | The number of nodes allocated to this instance. Exactly one of either node_count or processing_units must be present in terraform. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.processingUnits">processing_units</a></code> | <code>typing.Union[int, float]</code> | The number of processing units allocated to this instance. Exactly one of processing_units or node_count must be present in terraform. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#project GoogleSpannerInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeouts">GoogleSpannerInstanceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.config"></a>

- *Type:* str

The name of the instance's configuration (similar but not quite the same as a region) which defines the geographic placement and replication of your databases in this instance.

It determines where your data
is stored. Values are typically of the form 'regional-europe-west1' , 'us-central' etc.
In order to obtain a valid list please consult the
[Configuration section of the docs](https://cloud.google.com/spanner/docs/instances).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#config GoogleSpannerInstance#config}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.displayName"></a>

- *Type:* str

The descriptive name for this instance as it appears in UIs.

Must be
unique per project and between 4 and 30 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#display_name GoogleSpannerInstance#display_name}

---

##### `autoscaling_config`<sup>Optional</sup> <a name="autoscaling_config" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.autoscalingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfig">GoogleSpannerInstanceAutoscalingConfig</a>

autoscaling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#autoscaling_config GoogleSpannerInstance#autoscaling_config}

---

##### `default_backup_schedule_type`<sup>Optional</sup> <a name="default_backup_schedule_type" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.defaultBackupScheduleType"></a>

- *Type:* str

Controls the default backup behavior for new databases within the instance.

Note that 'AUTOMATIC' is not permitted for free instances, as backups and backup schedules are not allowed for free instances.
if unset or NONE, no default backup schedule will be created for new databases within the instance. Possible values: ["NONE", "AUTOMATIC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#default_backup_schedule_type GoogleSpannerInstance#default_backup_schedule_type}

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.edition"></a>

- *Type:* str

The edition selected for this instance.

Different editions provide different capabilities at different price points. Possible values: ["EDITION_UNSPECIFIED", "STANDARD", "ENTERPRISE", "ENTERPRISE_PLUS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#edition GoogleSpannerInstance#edition}

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.forceDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When deleting a spanner instance, this boolean option will delete all backups of this instance.

This must be set to true if you created a backup manually in the console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#force_destroy GoogleSpannerInstance#force_destroy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#id GoogleSpannerInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#labels GoogleSpannerInstance#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.name"></a>

- *Type:* str

A unique identifier for the instance, which cannot be changed after the instance is created.

The name must be between 6 and 30 characters
in length.
If not provided, a random string starting with 'tf-' will be selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#name GoogleSpannerInstance#name}

---

##### `num_nodes`<sup>Optional</sup> <a name="num_nodes" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.numNodes"></a>

- *Type:* typing.Union[int, float]

The number of nodes allocated to this instance. Exactly one of either node_count or processing_units must be present in terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#num_nodes GoogleSpannerInstance#num_nodes}

---

##### `processing_units`<sup>Optional</sup> <a name="processing_units" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.processingUnits"></a>

- *Type:* typing.Union[int, float]

The number of processing units allocated to this instance. Exactly one of processing_units or node_count must be present in terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#processing_units GoogleSpannerInstance#processing_units}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#project GoogleSpannerInstance#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeouts">GoogleSpannerInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#timeouts GoogleSpannerInstance#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.putAutoscalingConfig">put_autoscaling_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetAutoscalingConfig">reset_autoscaling_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetDefaultBackupScheduleType">reset_default_backup_schedule_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetEdition">reset_edition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetForceDestroy">reset_force_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetNumNodes">reset_num_nodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetProcessingUnits">reset_processing_units</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_autoscaling_config` <a name="put_autoscaling_config" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.putAutoscalingConfig"></a>

```python
def put_autoscaling_config(
  asymmetric_autoscaling_options: typing.Union[IResolvable, typing.List[GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions]] = None,
  autoscaling_limits: GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits = None,
  autoscaling_targets: GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets = None
) -> None
```

###### `asymmetric_autoscaling_options`<sup>Optional</sup> <a name="asymmetric_autoscaling_options" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.putAutoscalingConfig.parameter.asymmetricAutoscalingOptions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions</a>]]

asymmetric_autoscaling_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#asymmetric_autoscaling_options GoogleSpannerInstance#asymmetric_autoscaling_options}

---

###### `autoscaling_limits`<sup>Optional</sup> <a name="autoscaling_limits" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.putAutoscalingConfig.parameter.autoscalingLimits"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits">GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits</a>

autoscaling_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#autoscaling_limits GoogleSpannerInstance#autoscaling_limits}

---

###### `autoscaling_targets`<sup>Optional</sup> <a name="autoscaling_targets" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.putAutoscalingConfig.parameter.autoscalingTargets"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets">GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets</a>

autoscaling_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#autoscaling_targets GoogleSpannerInstance#autoscaling_targets}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#create GoogleSpannerInstance#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#delete GoogleSpannerInstance#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#update GoogleSpannerInstance#update}.

---

##### `reset_autoscaling_config` <a name="reset_autoscaling_config" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetAutoscalingConfig"></a>

```python
def reset_autoscaling_config() -> None
```

##### `reset_default_backup_schedule_type` <a name="reset_default_backup_schedule_type" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetDefaultBackupScheduleType"></a>

```python
def reset_default_backup_schedule_type() -> None
```

##### `reset_edition` <a name="reset_edition" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetEdition"></a>

```python
def reset_edition() -> None
```

##### `reset_force_destroy` <a name="reset_force_destroy" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetForceDestroy"></a>

```python
def reset_force_destroy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_num_nodes` <a name="reset_num_nodes" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetNumNodes"></a>

```python
def reset_num_nodes() -> None
```

##### `reset_processing_units` <a name="reset_processing_units" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetProcessingUnits"></a>

```python
def reset_processing_units() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleSpannerInstance resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_spanner_instance

googleSpannerInstance.GoogleSpannerInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_spanner_instance

googleSpannerInstance.GoogleSpannerInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_spanner_instance

googleSpannerInstance.GoogleSpannerInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_spanner_instance

googleSpannerInstance.GoogleSpannerInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleSpannerInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleSpannerInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleSpannerInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSpannerInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.autoscalingConfig">autoscaling_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference">GoogleSpannerInstanceAutoscalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference">GoogleSpannerInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.autoscalingConfigInput">autoscaling_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfig">GoogleSpannerInstanceAutoscalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.configInput">config_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.defaultBackupScheduleTypeInput">default_backup_schedule_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.editionInput">edition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.forceDestroyInput">force_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.numNodesInput">num_nodes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.processingUnitsInput">processing_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeouts">GoogleSpannerInstanceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.config">config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.defaultBackupScheduleType">default_backup_schedule_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.edition">edition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.numNodes">num_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.processingUnits">processing_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autoscaling_config`<sup>Required</sup> <a name="autoscaling_config" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.autoscalingConfig"></a>

```python
autoscaling_config: GoogleSpannerInstanceAutoscalingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference">GoogleSpannerInstanceAutoscalingConfigOutputReference</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.timeouts"></a>

```python
timeouts: GoogleSpannerInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference">GoogleSpannerInstanceTimeoutsOutputReference</a>

---

##### `autoscaling_config_input`<sup>Optional</sup> <a name="autoscaling_config_input" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.autoscalingConfigInput"></a>

```python
autoscaling_config_input: GoogleSpannerInstanceAutoscalingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfig">GoogleSpannerInstanceAutoscalingConfig</a>

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.configInput"></a>

```python
config_input: str
```

- *Type:* str

---

##### `default_backup_schedule_type_input`<sup>Optional</sup> <a name="default_backup_schedule_type_input" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.defaultBackupScheduleTypeInput"></a>

```python
default_backup_schedule_type_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `edition_input`<sup>Optional</sup> <a name="edition_input" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.editionInput"></a>

```python
edition_input: str
```

- *Type:* str

---

##### `force_destroy_input`<sup>Optional</sup> <a name="force_destroy_input" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.forceDestroyInput"></a>

```python
force_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `num_nodes_input`<sup>Optional</sup> <a name="num_nodes_input" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.numNodesInput"></a>

```python
num_nodes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `processing_units_input`<sup>Optional</sup> <a name="processing_units_input" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.processingUnitsInput"></a>

```python
processing_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleSpannerInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeouts">GoogleSpannerInstanceTimeouts</a>]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.config"></a>

```python
config: str
```

- *Type:* str

---

##### `default_backup_schedule_type`<sup>Required</sup> <a name="default_backup_schedule_type" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.defaultBackupScheduleType"></a>

```python
default_backup_schedule_type: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.edition"></a>

```python
edition: str
```

- *Type:* str

---

##### `force_destroy`<sup>Required</sup> <a name="force_destroy" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `num_nodes`<sup>Required</sup> <a name="num_nodes" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.numNodes"></a>

```python
num_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `processing_units`<sup>Required</sup> <a name="processing_units" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.processingUnits"></a>

```python
processing_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSpannerInstanceAutoscalingConfig <a name="GoogleSpannerInstanceAutoscalingConfig" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_spanner_instance

googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfig(
  asymmetric_autoscaling_options: typing.Union[IResolvable, typing.List[GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions]] = None,
  autoscaling_limits: GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits = None,
  autoscaling_targets: GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfig.property.asymmetricAutoscalingOptions">asymmetric_autoscaling_options</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions</a>]]</code> | asymmetric_autoscaling_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfig.property.autoscalingLimits">autoscaling_limits</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits">GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits</a></code> | autoscaling_limits block. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfig.property.autoscalingTargets">autoscaling_targets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets">GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets</a></code> | autoscaling_targets block. |

---

##### `asymmetric_autoscaling_options`<sup>Optional</sup> <a name="asymmetric_autoscaling_options" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfig.property.asymmetricAutoscalingOptions"></a>

```python
asymmetric_autoscaling_options: typing.Union[IResolvable, typing.List[GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions</a>]]

asymmetric_autoscaling_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#asymmetric_autoscaling_options GoogleSpannerInstance#asymmetric_autoscaling_options}

---

##### `autoscaling_limits`<sup>Optional</sup> <a name="autoscaling_limits" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfig.property.autoscalingLimits"></a>

```python
autoscaling_limits: GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits">GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits</a>

autoscaling_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#autoscaling_limits GoogleSpannerInstance#autoscaling_limits}

---

##### `autoscaling_targets`<sup>Optional</sup> <a name="autoscaling_targets" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfig.property.autoscalingTargets"></a>

```python
autoscaling_targets: GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets">GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets</a>

autoscaling_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#autoscaling_targets GoogleSpannerInstance#autoscaling_targets}

---

### GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions <a name="GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_spanner_instance

googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions(
  overrides: GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides,
  replica_selection: GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions.property.overrides">overrides</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides</a></code> | overrides block. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions.property.replicaSelection">replica_selection</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection</a></code> | replica_selection block. |

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions.property.overrides"></a>

```python
overrides: GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides</a>

overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#overrides GoogleSpannerInstance#overrides}

---

##### `replica_selection`<sup>Required</sup> <a name="replica_selection" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions.property.replicaSelection"></a>

```python
replica_selection: GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection</a>

replica_selection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#replica_selection GoogleSpannerInstance#replica_selection}

---

### GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides <a name="GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_spanner_instance

googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides(
  autoscaling_limits: GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides.property.autoscalingLimits">autoscaling_limits</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits</a></code> | autoscaling_limits block. |

---

##### `autoscaling_limits`<sup>Required</sup> <a name="autoscaling_limits" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides.property.autoscalingLimits"></a>

```python
autoscaling_limits: GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits</a>

autoscaling_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#autoscaling_limits GoogleSpannerInstance#autoscaling_limits}

---

### GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits <a name="GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_spanner_instance

googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits(
  max_nodes: typing.Union[int, float],
  min_nodes: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits.property.maxNodes">max_nodes</a></code> | <code>typing.Union[int, float]</code> | The maximum number of nodes for this specific replica. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits.property.minNodes">min_nodes</a></code> | <code>typing.Union[int, float]</code> | The minimum number of nodes for this specific replica. |

---

##### `max_nodes`<sup>Required</sup> <a name="max_nodes" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits.property.maxNodes"></a>

```python
max_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of nodes for this specific replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#max_nodes GoogleSpannerInstance#max_nodes}

---

##### `min_nodes`<sup>Required</sup> <a name="min_nodes" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits.property.minNodes"></a>

```python
min_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum number of nodes for this specific replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#min_nodes GoogleSpannerInstance#min_nodes}

---

### GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection <a name="GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_spanner_instance

googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection(
  location: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection.property.location">location</a></code> | <code>str</code> | The location of the replica to apply asymmetric autoscaling options. |

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the replica to apply asymmetric autoscaling options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#location GoogleSpannerInstance#location}

---

### GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits <a name="GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_spanner_instance

googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits(
  max_nodes: typing.Union[int, float] = None,
  max_processing_units: typing.Union[int, float] = None,
  min_nodes: typing.Union[int, float] = None,
  min_processing_units: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits.property.maxNodes">max_nodes</a></code> | <code>typing.Union[int, float]</code> | Specifies maximum number of nodes allocated to the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits.property.maxProcessingUnits">max_processing_units</a></code> | <code>typing.Union[int, float]</code> | Specifies maximum number of processing units allocated to the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits.property.minNodes">min_nodes</a></code> | <code>typing.Union[int, float]</code> | Specifies number of nodes allocated to the instance. If set, this number should be greater than or equal to 1. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits.property.minProcessingUnits">min_processing_units</a></code> | <code>typing.Union[int, float]</code> | Specifies minimum number of processing units allocated to the instance. If set, this number should be multiples of 1000. |

---

##### `max_nodes`<sup>Optional</sup> <a name="max_nodes" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits.property.maxNodes"></a>

```python
max_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies maximum number of nodes allocated to the instance.

If set, this number
should be greater than or equal to min_nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#max_nodes GoogleSpannerInstance#max_nodes}

---

##### `max_processing_units`<sup>Optional</sup> <a name="max_processing_units" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits.property.maxProcessingUnits"></a>

```python
max_processing_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies maximum number of processing units allocated to the instance.

If set, this number should be multiples of 1000 and be greater than or equal to
min_processing_units.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#max_processing_units GoogleSpannerInstance#max_processing_units}

---

##### `min_nodes`<sup>Optional</sup> <a name="min_nodes" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits.property.minNodes"></a>

```python
min_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies number of nodes allocated to the instance. If set, this number should be greater than or equal to 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#min_nodes GoogleSpannerInstance#min_nodes}

---

##### `min_processing_units`<sup>Optional</sup> <a name="min_processing_units" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits.property.minProcessingUnits"></a>

```python
min_processing_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies minimum number of processing units allocated to the instance. If set, this number should be multiples of 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#min_processing_units GoogleSpannerInstance#min_processing_units}

---

### GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets <a name="GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_spanner_instance

googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets(
  high_priority_cpu_utilization_percent: typing.Union[int, float] = None,
  storage_utilization_percent: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets.property.highPriorityCpuUtilizationPercent">high_priority_cpu_utilization_percent</a></code> | <code>typing.Union[int, float]</code> | Specifies the target high priority cpu utilization percentage that the autoscaler should be trying to achieve for the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets.property.storageUtilizationPercent">storage_utilization_percent</a></code> | <code>typing.Union[int, float]</code> | Specifies the target storage utilization percentage that the autoscaler should be trying to achieve for the instance. |

---

##### `high_priority_cpu_utilization_percent`<sup>Optional</sup> <a name="high_priority_cpu_utilization_percent" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets.property.highPriorityCpuUtilizationPercent"></a>

```python
high_priority_cpu_utilization_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the target high priority cpu utilization percentage that the autoscaler should be trying to achieve for the instance.

This number is on a scale from 0 (no utilization) to 100 (full utilization)..

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#high_priority_cpu_utilization_percent GoogleSpannerInstance#high_priority_cpu_utilization_percent}

---

##### `storage_utilization_percent`<sup>Optional</sup> <a name="storage_utilization_percent" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets.property.storageUtilizationPercent"></a>

```python
storage_utilization_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the target storage utilization percentage that the autoscaler should be trying to achieve for the instance.

This number is on a scale from 0 (no utilization) to 100 (full utilization).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#storage_utilization_percent GoogleSpannerInstance#storage_utilization_percent}

---

### GoogleSpannerInstanceConfig <a name="GoogleSpannerInstanceConfig" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_spanner_instance

googleSpannerInstance.GoogleSpannerInstanceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  config: str,
  display_name: str,
  autoscaling_config: GoogleSpannerInstanceAutoscalingConfig = None,
  default_backup_schedule_type: str = None,
  edition: str = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  name: str = None,
  num_nodes: typing.Union[int, float] = None,
  processing_units: typing.Union[int, float] = None,
  project: str = None,
  timeouts: GoogleSpannerInstanceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.config">config</a></code> | <code>str</code> | The name of the instance's configuration (similar but not quite the same as a region) which defines the geographic placement and replication of your databases in this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.displayName">display_name</a></code> | <code>str</code> | The descriptive name for this instance as it appears in UIs. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.autoscalingConfig">autoscaling_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfig">GoogleSpannerInstanceAutoscalingConfig</a></code> | autoscaling_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.defaultBackupScheduleType">default_backup_schedule_type</a></code> | <code>str</code> | Controls the default backup behavior for new databases within the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.edition">edition</a></code> | <code>str</code> | The edition selected for this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When deleting a spanner instance, this boolean option will delete all backups of this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#id GoogleSpannerInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.name">name</a></code> | <code>str</code> | A unique identifier for the instance, which cannot be changed after the instance is created. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.numNodes">num_nodes</a></code> | <code>typing.Union[int, float]</code> | The number of nodes allocated to this instance. Exactly one of either node_count or processing_units must be present in terraform. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.processingUnits">processing_units</a></code> | <code>typing.Union[int, float]</code> | The number of processing units allocated to this instance. Exactly one of processing_units or node_count must be present in terraform. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#project GoogleSpannerInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeouts">GoogleSpannerInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.config"></a>

```python
config: str
```

- *Type:* str

The name of the instance's configuration (similar but not quite the same as a region) which defines the geographic placement and replication of your databases in this instance.

It determines where your data
is stored. Values are typically of the form 'regional-europe-west1' , 'us-central' etc.
In order to obtain a valid list please consult the
[Configuration section of the docs](https://cloud.google.com/spanner/docs/instances).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#config GoogleSpannerInstance#config}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The descriptive name for this instance as it appears in UIs.

Must be
unique per project and between 4 and 30 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#display_name GoogleSpannerInstance#display_name}

---

##### `autoscaling_config`<sup>Optional</sup> <a name="autoscaling_config" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.autoscalingConfig"></a>

```python
autoscaling_config: GoogleSpannerInstanceAutoscalingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfig">GoogleSpannerInstanceAutoscalingConfig</a>

autoscaling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#autoscaling_config GoogleSpannerInstance#autoscaling_config}

---

##### `default_backup_schedule_type`<sup>Optional</sup> <a name="default_backup_schedule_type" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.defaultBackupScheduleType"></a>

```python
default_backup_schedule_type: str
```

- *Type:* str

Controls the default backup behavior for new databases within the instance.

Note that 'AUTOMATIC' is not permitted for free instances, as backups and backup schedules are not allowed for free instances.
if unset or NONE, no default backup schedule will be created for new databases within the instance. Possible values: ["NONE", "AUTOMATIC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#default_backup_schedule_type GoogleSpannerInstance#default_backup_schedule_type}

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.edition"></a>

```python
edition: str
```

- *Type:* str

The edition selected for this instance.

Different editions provide different capabilities at different price points. Possible values: ["EDITION_UNSPECIFIED", "STANDARD", "ENTERPRISE", "ENTERPRISE_PLUS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#edition GoogleSpannerInstance#edition}

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When deleting a spanner instance, this boolean option will delete all backups of this instance.

This must be set to true if you created a backup manually in the console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#force_destroy GoogleSpannerInstance#force_destroy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#id GoogleSpannerInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#labels GoogleSpannerInstance#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A unique identifier for the instance, which cannot be changed after the instance is created.

The name must be between 6 and 30 characters
in length.
If not provided, a random string starting with 'tf-' will be selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#name GoogleSpannerInstance#name}

---

##### `num_nodes`<sup>Optional</sup> <a name="num_nodes" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.numNodes"></a>

```python
num_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of nodes allocated to this instance. Exactly one of either node_count or processing_units must be present in terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#num_nodes GoogleSpannerInstance#num_nodes}

---

##### `processing_units`<sup>Optional</sup> <a name="processing_units" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.processingUnits"></a>

```python
processing_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of processing units allocated to this instance. Exactly one of processing_units or node_count must be present in terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#processing_units GoogleSpannerInstance#processing_units}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#project GoogleSpannerInstance#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.timeouts"></a>

```python
timeouts: GoogleSpannerInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeouts">GoogleSpannerInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#timeouts GoogleSpannerInstance#timeouts}

---

### GoogleSpannerInstanceTimeouts <a name="GoogleSpannerInstanceTimeouts" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_spanner_instance

googleSpannerInstance.GoogleSpannerInstanceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#create GoogleSpannerInstance#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#delete GoogleSpannerInstance#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#update GoogleSpannerInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#create GoogleSpannerInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#delete GoogleSpannerInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#update GoogleSpannerInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList <a name="GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_spanner_instance

googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions</a>]]

---


### GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference <a name="GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_spanner_instance

googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.putOverrides">put_overrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.putReplicaSelection">put_replica_selection</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_overrides` <a name="put_overrides" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.putOverrides"></a>

```python
def put_overrides(
  autoscaling_limits: GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits
) -> None
```

###### `autoscaling_limits`<sup>Required</sup> <a name="autoscaling_limits" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.putOverrides.parameter.autoscalingLimits"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits</a>

autoscaling_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#autoscaling_limits GoogleSpannerInstance#autoscaling_limits}

---

##### `put_replica_selection` <a name="put_replica_selection" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.putReplicaSelection"></a>

```python
def put_replica_selection(
  location: str
) -> None
```

###### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.putReplicaSelection.parameter.location"></a>

- *Type:* str

The location of the replica to apply asymmetric autoscaling options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#location GoogleSpannerInstance#location}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.overrides">overrides</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.replicaSelection">replica_selection</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.overridesInput">overrides_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.replicaSelectionInput">replica_selection_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.overrides"></a>

```python
overrides: GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference</a>

---

##### `replica_selection`<sup>Required</sup> <a name="replica_selection" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.replicaSelection"></a>

```python
replica_selection: GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference</a>

---

##### `overrides_input`<sup>Optional</sup> <a name="overrides_input" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.overridesInput"></a>

```python
overrides_input: GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides</a>

---

##### `replica_selection_input`<sup>Optional</sup> <a name="replica_selection_input" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.replicaSelectionInput"></a>

```python
replica_selection_input: GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions</a>]

---


### GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference <a name="GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_spanner_instance

googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.maxNodesInput">max_nodes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.minNodesInput">min_nodes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.maxNodes">max_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.minNodes">min_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_nodes_input`<sup>Optional</sup> <a name="max_nodes_input" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.maxNodesInput"></a>

```python
max_nodes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_nodes_input`<sup>Optional</sup> <a name="min_nodes_input" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.minNodesInput"></a>

```python
min_nodes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_nodes`<sup>Required</sup> <a name="max_nodes" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.maxNodes"></a>

```python
max_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_nodes`<sup>Required</sup> <a name="min_nodes" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.minNodes"></a>

```python
min_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits</a>

---


### GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference <a name="GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_spanner_instance

googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.putAutoscalingLimits">put_autoscaling_limits</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_autoscaling_limits` <a name="put_autoscaling_limits" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.putAutoscalingLimits"></a>

```python
def put_autoscaling_limits(
  max_nodes: typing.Union[int, float],
  min_nodes: typing.Union[int, float]
) -> None
```

###### `max_nodes`<sup>Required</sup> <a name="max_nodes" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.putAutoscalingLimits.parameter.maxNodes"></a>

- *Type:* typing.Union[int, float]

The maximum number of nodes for this specific replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#max_nodes GoogleSpannerInstance#max_nodes}

---

###### `min_nodes`<sup>Required</sup> <a name="min_nodes" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.putAutoscalingLimits.parameter.minNodes"></a>

- *Type:* typing.Union[int, float]

The minimum number of nodes for this specific replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#min_nodes GoogleSpannerInstance#min_nodes}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.autoscalingLimits">autoscaling_limits</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.autoscalingLimitsInput">autoscaling_limits_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autoscaling_limits`<sup>Required</sup> <a name="autoscaling_limits" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.autoscalingLimits"></a>

```python
autoscaling_limits: GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference</a>

---

##### `autoscaling_limits_input`<sup>Optional</sup> <a name="autoscaling_limits_input" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.autoscalingLimitsInput"></a>

```python
autoscaling_limits_input: GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides</a>

---


### GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference <a name="GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_spanner_instance

googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection</a>

---


### GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference <a name="GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_spanner_instance

googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resetMaxNodes">reset_max_nodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resetMaxProcessingUnits">reset_max_processing_units</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resetMinNodes">reset_min_nodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resetMinProcessingUnits">reset_min_processing_units</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_nodes` <a name="reset_max_nodes" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resetMaxNodes"></a>

```python
def reset_max_nodes() -> None
```

##### `reset_max_processing_units` <a name="reset_max_processing_units" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resetMaxProcessingUnits"></a>

```python
def reset_max_processing_units() -> None
```

##### `reset_min_nodes` <a name="reset_min_nodes" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resetMinNodes"></a>

```python
def reset_min_nodes() -> None
```

##### `reset_min_processing_units` <a name="reset_min_processing_units" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resetMinProcessingUnits"></a>

```python
def reset_min_processing_units() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.maxNodesInput">max_nodes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.maxProcessingUnitsInput">max_processing_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.minNodesInput">min_nodes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.minProcessingUnitsInput">min_processing_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.maxNodes">max_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.maxProcessingUnits">max_processing_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.minNodes">min_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.minProcessingUnits">min_processing_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits">GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_nodes_input`<sup>Optional</sup> <a name="max_nodes_input" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.maxNodesInput"></a>

```python
max_nodes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_processing_units_input`<sup>Optional</sup> <a name="max_processing_units_input" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.maxProcessingUnitsInput"></a>

```python
max_processing_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_nodes_input`<sup>Optional</sup> <a name="min_nodes_input" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.minNodesInput"></a>

```python
min_nodes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_processing_units_input`<sup>Optional</sup> <a name="min_processing_units_input" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.minProcessingUnitsInput"></a>

```python
min_processing_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_nodes`<sup>Required</sup> <a name="max_nodes" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.maxNodes"></a>

```python
max_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_processing_units`<sup>Required</sup> <a name="max_processing_units" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.maxProcessingUnits"></a>

```python
max_processing_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_nodes`<sup>Required</sup> <a name="min_nodes" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.minNodes"></a>

```python
min_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_processing_units`<sup>Required</sup> <a name="min_processing_units" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.minProcessingUnits"></a>

```python
min_processing_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits">GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits</a>

---


### GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference <a name="GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_spanner_instance

googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.resetHighPriorityCpuUtilizationPercent">reset_high_priority_cpu_utilization_percent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.resetStorageUtilizationPercent">reset_storage_utilization_percent</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_high_priority_cpu_utilization_percent` <a name="reset_high_priority_cpu_utilization_percent" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.resetHighPriorityCpuUtilizationPercent"></a>

```python
def reset_high_priority_cpu_utilization_percent() -> None
```

##### `reset_storage_utilization_percent` <a name="reset_storage_utilization_percent" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.resetStorageUtilizationPercent"></a>

```python
def reset_storage_utilization_percent() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.highPriorityCpuUtilizationPercentInput">high_priority_cpu_utilization_percent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.storageUtilizationPercentInput">storage_utilization_percent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.highPriorityCpuUtilizationPercent">high_priority_cpu_utilization_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.storageUtilizationPercent">storage_utilization_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets">GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `high_priority_cpu_utilization_percent_input`<sup>Optional</sup> <a name="high_priority_cpu_utilization_percent_input" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.highPriorityCpuUtilizationPercentInput"></a>

```python
high_priority_cpu_utilization_percent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_utilization_percent_input`<sup>Optional</sup> <a name="storage_utilization_percent_input" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.storageUtilizationPercentInput"></a>

```python
storage_utilization_percent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `high_priority_cpu_utilization_percent`<sup>Required</sup> <a name="high_priority_cpu_utilization_percent" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.highPriorityCpuUtilizationPercent"></a>

```python
high_priority_cpu_utilization_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_utilization_percent`<sup>Required</sup> <a name="storage_utilization_percent" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.storageUtilizationPercent"></a>

```python
storage_utilization_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets">GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets</a>

---


### GoogleSpannerInstanceAutoscalingConfigOutputReference <a name="GoogleSpannerInstanceAutoscalingConfigOutputReference" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_spanner_instance

googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.putAsymmetricAutoscalingOptions">put_asymmetric_autoscaling_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.putAutoscalingLimits">put_autoscaling_limits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.putAutoscalingTargets">put_autoscaling_targets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.resetAsymmetricAutoscalingOptions">reset_asymmetric_autoscaling_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.resetAutoscalingLimits">reset_autoscaling_limits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.resetAutoscalingTargets">reset_autoscaling_targets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_asymmetric_autoscaling_options` <a name="put_asymmetric_autoscaling_options" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.putAsymmetricAutoscalingOptions"></a>

```python
def put_asymmetric_autoscaling_options(
  value: typing.Union[IResolvable, typing.List[GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.putAsymmetricAutoscalingOptions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions</a>]]

---

##### `put_autoscaling_limits` <a name="put_autoscaling_limits" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.putAutoscalingLimits"></a>

```python
def put_autoscaling_limits(
  max_nodes: typing.Union[int, float] = None,
  max_processing_units: typing.Union[int, float] = None,
  min_nodes: typing.Union[int, float] = None,
  min_processing_units: typing.Union[int, float] = None
) -> None
```

###### `max_nodes`<sup>Optional</sup> <a name="max_nodes" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.putAutoscalingLimits.parameter.maxNodes"></a>

- *Type:* typing.Union[int, float]

Specifies maximum number of nodes allocated to the instance.

If set, this number
should be greater than or equal to min_nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#max_nodes GoogleSpannerInstance#max_nodes}

---

###### `max_processing_units`<sup>Optional</sup> <a name="max_processing_units" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.putAutoscalingLimits.parameter.maxProcessingUnits"></a>

- *Type:* typing.Union[int, float]

Specifies maximum number of processing units allocated to the instance.

If set, this number should be multiples of 1000 and be greater than or equal to
min_processing_units.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#max_processing_units GoogleSpannerInstance#max_processing_units}

---

###### `min_nodes`<sup>Optional</sup> <a name="min_nodes" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.putAutoscalingLimits.parameter.minNodes"></a>

- *Type:* typing.Union[int, float]

Specifies number of nodes allocated to the instance. If set, this number should be greater than or equal to 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#min_nodes GoogleSpannerInstance#min_nodes}

---

###### `min_processing_units`<sup>Optional</sup> <a name="min_processing_units" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.putAutoscalingLimits.parameter.minProcessingUnits"></a>

- *Type:* typing.Union[int, float]

Specifies minimum number of processing units allocated to the instance. If set, this number should be multiples of 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#min_processing_units GoogleSpannerInstance#min_processing_units}

---

##### `put_autoscaling_targets` <a name="put_autoscaling_targets" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.putAutoscalingTargets"></a>

```python
def put_autoscaling_targets(
  high_priority_cpu_utilization_percent: typing.Union[int, float] = None,
  storage_utilization_percent: typing.Union[int, float] = None
) -> None
```

###### `high_priority_cpu_utilization_percent`<sup>Optional</sup> <a name="high_priority_cpu_utilization_percent" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.putAutoscalingTargets.parameter.highPriorityCpuUtilizationPercent"></a>

- *Type:* typing.Union[int, float]

Specifies the target high priority cpu utilization percentage that the autoscaler should be trying to achieve for the instance.

This number is on a scale from 0 (no utilization) to 100 (full utilization)..

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#high_priority_cpu_utilization_percent GoogleSpannerInstance#high_priority_cpu_utilization_percent}

---

###### `storage_utilization_percent`<sup>Optional</sup> <a name="storage_utilization_percent" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.putAutoscalingTargets.parameter.storageUtilizationPercent"></a>

- *Type:* typing.Union[int, float]

Specifies the target storage utilization percentage that the autoscaler should be trying to achieve for the instance.

This number is on a scale from 0 (no utilization) to 100 (full utilization).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance#storage_utilization_percent GoogleSpannerInstance#storage_utilization_percent}

---

##### `reset_asymmetric_autoscaling_options` <a name="reset_asymmetric_autoscaling_options" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.resetAsymmetricAutoscalingOptions"></a>

```python
def reset_asymmetric_autoscaling_options() -> None
```

##### `reset_autoscaling_limits` <a name="reset_autoscaling_limits" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.resetAutoscalingLimits"></a>

```python
def reset_autoscaling_limits() -> None
```

##### `reset_autoscaling_targets` <a name="reset_autoscaling_targets" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.resetAutoscalingTargets"></a>

```python
def reset_autoscaling_targets() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.asymmetricAutoscalingOptions">asymmetric_autoscaling_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.autoscalingLimits">autoscaling_limits</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference">GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.autoscalingTargets">autoscaling_targets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference">GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.asymmetricAutoscalingOptionsInput">asymmetric_autoscaling_options_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.autoscalingLimitsInput">autoscaling_limits_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits">GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.autoscalingTargetsInput">autoscaling_targets_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets">GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfig">GoogleSpannerInstanceAutoscalingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `asymmetric_autoscaling_options`<sup>Required</sup> <a name="asymmetric_autoscaling_options" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.asymmetricAutoscalingOptions"></a>

```python
asymmetric_autoscaling_options: GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList</a>

---

##### `autoscaling_limits`<sup>Required</sup> <a name="autoscaling_limits" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.autoscalingLimits"></a>

```python
autoscaling_limits: GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference">GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference</a>

---

##### `autoscaling_targets`<sup>Required</sup> <a name="autoscaling_targets" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.autoscalingTargets"></a>

```python
autoscaling_targets: GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference">GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference</a>

---

##### `asymmetric_autoscaling_options_input`<sup>Optional</sup> <a name="asymmetric_autoscaling_options_input" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.asymmetricAutoscalingOptionsInput"></a>

```python
asymmetric_autoscaling_options_input: typing.Union[IResolvable, typing.List[GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions</a>]]

---

##### `autoscaling_limits_input`<sup>Optional</sup> <a name="autoscaling_limits_input" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.autoscalingLimitsInput"></a>

```python
autoscaling_limits_input: GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits">GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits</a>

---

##### `autoscaling_targets_input`<sup>Optional</sup> <a name="autoscaling_targets_input" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.autoscalingTargetsInput"></a>

```python
autoscaling_targets_input: GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets">GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSpannerInstanceAutoscalingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfig">GoogleSpannerInstanceAutoscalingConfig</a>

---


### GoogleSpannerInstanceTimeoutsOutputReference <a name="GoogleSpannerInstanceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_spanner_instance

googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeouts">GoogleSpannerInstanceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleSpannerInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeouts">GoogleSpannerInstanceTimeouts</a>]

---



