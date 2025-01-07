# `googleLoggingFolderSink` Submodule <a name="`googleLoggingFolderSink` Submodule" id="@cdktf/provider-google-beta.googleLoggingFolderSink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleLoggingFolderSink <a name="GoogleLoggingFolderSink" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_folder_sink google_logging_folder_sink}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_logging_folder_sink

googleLoggingFolderSink.GoogleLoggingFolderSink(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination: str,
  folder: str,
  name: str,
  bigquery_options: GoogleLoggingFolderSinkBigqueryOptions = None,
  description: str = None,
  disabled: typing.Union[bool, IResolvable] = None,
  exclusions: typing.Union[IResolvable, typing.List[GoogleLoggingFolderSinkExclusions]] = None,
  filter: str = None,
  id: str = None,
  include_children: typing.Union[bool, IResolvable] = None,
  intercept_children: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.Initializer.parameter.destination">destination</a></code> | <code>str</code> | The destination of the sink (or, in other words, where logs are written to). |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.Initializer.parameter.folder">folder</a></code> | <code>str</code> | The folder to be exported to the sink. Note that either [FOLDER_ID] or "folders/[FOLDER_ID]" is accepted. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the logging sink. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.Initializer.parameter.bigqueryOptions">bigquery_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptions">GoogleLoggingFolderSinkBigqueryOptions</a></code> | bigquery_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of this sink. The maximum length of the description is 8000 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.Initializer.parameter.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to True, then this sink is disabled and it does not export any log entries. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.Initializer.parameter.exclusions">exclusions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusions">GoogleLoggingFolderSinkExclusions</a>]]</code> | exclusions block. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.Initializer.parameter.filter">filter</a></code> | <code>str</code> | The filter to apply when exporting logs. Only log entries that match the filter are exported. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_folder_sink#id GoogleLoggingFolderSink#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.Initializer.parameter.includeChildren">include_children</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not to include children folders in the sink export. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.Initializer.parameter.interceptChildren">intercept_children</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not to intercept logs from child projects. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.Initializer.parameter.destination"></a>

- *Type:* str

The destination of the sink (or, in other words, where logs are written to).

Can be a Cloud Storage bucket, a PubSub topic, or a BigQuery dataset. Examples: "storage.googleapis.com/[GCS_BUCKET]" "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]" "pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]" The writer associated with the sink must have access to write to the above resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_folder_sink#destination GoogleLoggingFolderSink#destination}

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.Initializer.parameter.folder"></a>

- *Type:* str

The folder to be exported to the sink. Note that either [FOLDER_ID] or "folders/[FOLDER_ID]" is accepted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_folder_sink#folder GoogleLoggingFolderSink#folder}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.Initializer.parameter.name"></a>

- *Type:* str

The name of the logging sink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_folder_sink#name GoogleLoggingFolderSink#name}

---

##### `bigquery_options`<sup>Optional</sup> <a name="bigquery_options" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.Initializer.parameter.bigqueryOptions"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptions">GoogleLoggingFolderSinkBigqueryOptions</a>

bigquery_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_folder_sink#bigquery_options GoogleLoggingFolderSink#bigquery_options}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.Initializer.parameter.description"></a>

- *Type:* str

A description of this sink. The maximum length of the description is 8000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_folder_sink#description GoogleLoggingFolderSink#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.Initializer.parameter.disabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to True, then this sink is disabled and it does not export any log entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_folder_sink#disabled GoogleLoggingFolderSink#disabled}

---

##### `exclusions`<sup>Optional</sup> <a name="exclusions" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.Initializer.parameter.exclusions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusions">GoogleLoggingFolderSinkExclusions</a>]]

exclusions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_folder_sink#exclusions GoogleLoggingFolderSink#exclusions}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.Initializer.parameter.filter"></a>

- *Type:* str

The filter to apply when exporting logs. Only log entries that match the filter are exported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_folder_sink#filter GoogleLoggingFolderSink#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_folder_sink#id GoogleLoggingFolderSink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_children`<sup>Optional</sup> <a name="include_children" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.Initializer.parameter.includeChildren"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not to include children folders in the sink export.

If true, logs associated with child projects are also exported; otherwise only logs relating to the provided folder are included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_folder_sink#include_children GoogleLoggingFolderSink#include_children}

---

##### `intercept_children`<sup>Optional</sup> <a name="intercept_children" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.Initializer.parameter.interceptChildren"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not to intercept logs from child projects.

If true, matching logs will not match with sinks in child resources, except _Required sinks. This sink will be visible to child resources when listing sinks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_folder_sink#intercept_children GoogleLoggingFolderSink#intercept_children}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.putBigqueryOptions">put_bigquery_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.putExclusions">put_exclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.resetBigqueryOptions">reset_bigquery_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.resetExclusions">reset_exclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.resetIncludeChildren">reset_include_children</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.resetInterceptChildren">reset_intercept_children</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_bigquery_options` <a name="put_bigquery_options" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.putBigqueryOptions"></a>

```python
def put_bigquery_options(
  use_partitioned_tables: typing.Union[bool, IResolvable]
) -> None
```

###### `use_partitioned_tables`<sup>Required</sup> <a name="use_partitioned_tables" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.putBigqueryOptions.parameter.usePartitionedTables"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to use BigQuery's partition tables.

By default, Logging creates dated tables based on the log entries' timestamps, e.g. syslog_20170523. With partitioned tables the date suffix is no longer present and special query syntax has to be used instead. In both cases, tables are sharded based on UTC timezone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_folder_sink#use_partitioned_tables GoogleLoggingFolderSink#use_partitioned_tables}

---

##### `put_exclusions` <a name="put_exclusions" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.putExclusions"></a>

```python
def put_exclusions(
  value: typing.Union[IResolvable, typing.List[GoogleLoggingFolderSinkExclusions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.putExclusions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusions">GoogleLoggingFolderSinkExclusions</a>]]

---

##### `reset_bigquery_options` <a name="reset_bigquery_options" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.resetBigqueryOptions"></a>

```python
def reset_bigquery_options() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_exclusions` <a name="reset_exclusions" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.resetExclusions"></a>

```python
def reset_exclusions() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_include_children` <a name="reset_include_children" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.resetIncludeChildren"></a>

```python
def reset_include_children() -> None
```

##### `reset_intercept_children` <a name="reset_intercept_children" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.resetInterceptChildren"></a>

```python
def reset_intercept_children() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleLoggingFolderSink resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_logging_folder_sink

googleLoggingFolderSink.GoogleLoggingFolderSink.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_logging_folder_sink

googleLoggingFolderSink.GoogleLoggingFolderSink.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_logging_folder_sink

googleLoggingFolderSink.GoogleLoggingFolderSink.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_logging_folder_sink

googleLoggingFolderSink.GoogleLoggingFolderSink.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleLoggingFolderSink resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleLoggingFolderSink to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleLoggingFolderSink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_folder_sink#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleLoggingFolderSink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.bigqueryOptions">bigquery_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference">GoogleLoggingFolderSinkBigqueryOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.exclusions">exclusions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsList">GoogleLoggingFolderSinkExclusionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.writerIdentity">writer_identity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.bigqueryOptionsInput">bigquery_options_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptions">GoogleLoggingFolderSinkBigqueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.disabledInput">disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.exclusionsInput">exclusions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusions">GoogleLoggingFolderSinkExclusions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.folderInput">folder_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.includeChildrenInput">include_children_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.interceptChildrenInput">intercept_children_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.folder">folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.includeChildren">include_children</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.interceptChildren">intercept_children</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bigquery_options`<sup>Required</sup> <a name="bigquery_options" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.bigqueryOptions"></a>

```python
bigquery_options: GoogleLoggingFolderSinkBigqueryOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference">GoogleLoggingFolderSinkBigqueryOptionsOutputReference</a>

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.exclusions"></a>

```python
exclusions: GoogleLoggingFolderSinkExclusionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsList">GoogleLoggingFolderSinkExclusionsList</a>

---

##### `writer_identity`<sup>Required</sup> <a name="writer_identity" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.writerIdentity"></a>

```python
writer_identity: str
```

- *Type:* str

---

##### `bigquery_options_input`<sup>Optional</sup> <a name="bigquery_options_input" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.bigqueryOptionsInput"></a>

```python
bigquery_options_input: GoogleLoggingFolderSinkBigqueryOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptions">GoogleLoggingFolderSinkBigqueryOptions</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.disabledInput"></a>

```python
disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `exclusions_input`<sup>Optional</sup> <a name="exclusions_input" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.exclusionsInput"></a>

```python
exclusions_input: typing.Union[IResolvable, typing.List[GoogleLoggingFolderSinkExclusions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusions">GoogleLoggingFolderSinkExclusions</a>]]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `folder_input`<sup>Optional</sup> <a name="folder_input" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.folderInput"></a>

```python
folder_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `include_children_input`<sup>Optional</sup> <a name="include_children_input" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.includeChildrenInput"></a>

```python
include_children_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `intercept_children_input`<sup>Optional</sup> <a name="intercept_children_input" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.interceptChildrenInput"></a>

```python
intercept_children_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.folder"></a>

```python
folder: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `include_children`<sup>Required</sup> <a name="include_children" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.includeChildren"></a>

```python
include_children: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `intercept_children`<sup>Required</sup> <a name="intercept_children" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.interceptChildren"></a>

```python
intercept_children: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSink.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleLoggingFolderSinkBigqueryOptions <a name="GoogleLoggingFolderSinkBigqueryOptions" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_logging_folder_sink

googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptions(
  use_partitioned_tables: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptions.property.usePartitionedTables">use_partitioned_tables</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to use BigQuery's partition tables. |

---

##### `use_partitioned_tables`<sup>Required</sup> <a name="use_partitioned_tables" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptions.property.usePartitionedTables"></a>

```python
use_partitioned_tables: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to use BigQuery's partition tables.

By default, Logging creates dated tables based on the log entries' timestamps, e.g. syslog_20170523. With partitioned tables the date suffix is no longer present and special query syntax has to be used instead. In both cases, tables are sharded based on UTC timezone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_folder_sink#use_partitioned_tables GoogleLoggingFolderSink#use_partitioned_tables}

---

### GoogleLoggingFolderSinkConfig <a name="GoogleLoggingFolderSinkConfig" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_logging_folder_sink

googleLoggingFolderSink.GoogleLoggingFolderSinkConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination: str,
  folder: str,
  name: str,
  bigquery_options: GoogleLoggingFolderSinkBigqueryOptions = None,
  description: str = None,
  disabled: typing.Union[bool, IResolvable] = None,
  exclusions: typing.Union[IResolvable, typing.List[GoogleLoggingFolderSinkExclusions]] = None,
  filter: str = None,
  id: str = None,
  include_children: typing.Union[bool, IResolvable] = None,
  intercept_children: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkConfig.property.destination">destination</a></code> | <code>str</code> | The destination of the sink (or, in other words, where logs are written to). |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkConfig.property.folder">folder</a></code> | <code>str</code> | The folder to be exported to the sink. Note that either [FOLDER_ID] or "folders/[FOLDER_ID]" is accepted. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkConfig.property.name">name</a></code> | <code>str</code> | The name of the logging sink. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkConfig.property.bigqueryOptions">bigquery_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptions">GoogleLoggingFolderSinkBigqueryOptions</a></code> | bigquery_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkConfig.property.description">description</a></code> | <code>str</code> | A description of this sink. The maximum length of the description is 8000 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkConfig.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to True, then this sink is disabled and it does not export any log entries. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkConfig.property.exclusions">exclusions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusions">GoogleLoggingFolderSinkExclusions</a>]]</code> | exclusions block. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkConfig.property.filter">filter</a></code> | <code>str</code> | The filter to apply when exporting logs. Only log entries that match the filter are exported. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_folder_sink#id GoogleLoggingFolderSink#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkConfig.property.includeChildren">include_children</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not to include children folders in the sink export. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkConfig.property.interceptChildren">intercept_children</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not to intercept logs from child projects. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkConfig.property.destination"></a>

```python
destination: str
```

- *Type:* str

The destination of the sink (or, in other words, where logs are written to).

Can be a Cloud Storage bucket, a PubSub topic, or a BigQuery dataset. Examples: "storage.googleapis.com/[GCS_BUCKET]" "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]" "pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]" The writer associated with the sink must have access to write to the above resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_folder_sink#destination GoogleLoggingFolderSink#destination}

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkConfig.property.folder"></a>

```python
folder: str
```

- *Type:* str

The folder to be exported to the sink. Note that either [FOLDER_ID] or "folders/[FOLDER_ID]" is accepted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_folder_sink#folder GoogleLoggingFolderSink#folder}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the logging sink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_folder_sink#name GoogleLoggingFolderSink#name}

---

##### `bigquery_options`<sup>Optional</sup> <a name="bigquery_options" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkConfig.property.bigqueryOptions"></a>

```python
bigquery_options: GoogleLoggingFolderSinkBigqueryOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptions">GoogleLoggingFolderSinkBigqueryOptions</a>

bigquery_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_folder_sink#bigquery_options GoogleLoggingFolderSink#bigquery_options}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of this sink. The maximum length of the description is 8000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_folder_sink#description GoogleLoggingFolderSink#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkConfig.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to True, then this sink is disabled and it does not export any log entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_folder_sink#disabled GoogleLoggingFolderSink#disabled}

---

##### `exclusions`<sup>Optional</sup> <a name="exclusions" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkConfig.property.exclusions"></a>

```python
exclusions: typing.Union[IResolvable, typing.List[GoogleLoggingFolderSinkExclusions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusions">GoogleLoggingFolderSinkExclusions</a>]]

exclusions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_folder_sink#exclusions GoogleLoggingFolderSink#exclusions}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkConfig.property.filter"></a>

```python
filter: str
```

- *Type:* str

The filter to apply when exporting logs. Only log entries that match the filter are exported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_folder_sink#filter GoogleLoggingFolderSink#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_folder_sink#id GoogleLoggingFolderSink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_children`<sup>Optional</sup> <a name="include_children" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkConfig.property.includeChildren"></a>

```python
include_children: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not to include children folders in the sink export.

If true, logs associated with child projects are also exported; otherwise only logs relating to the provided folder are included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_folder_sink#include_children GoogleLoggingFolderSink#include_children}

---

##### `intercept_children`<sup>Optional</sup> <a name="intercept_children" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkConfig.property.interceptChildren"></a>

```python
intercept_children: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not to intercept logs from child projects.

If true, matching logs will not match with sinks in child resources, except _Required sinks. This sink will be visible to child resources when listing sinks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_folder_sink#intercept_children GoogleLoggingFolderSink#intercept_children}

---

### GoogleLoggingFolderSinkExclusions <a name="GoogleLoggingFolderSinkExclusions" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_logging_folder_sink

googleLoggingFolderSink.GoogleLoggingFolderSinkExclusions(
  filter: str,
  name: str,
  description: str = None,
  disabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusions.property.filter">filter</a></code> | <code>str</code> | An advanced logs filter that matches the log entries to be excluded. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusions.property.name">name</a></code> | <code>str</code> | A client-assigned identifier, such as "load-balancer-exclusion". |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusions.property.description">description</a></code> | <code>str</code> | A description of this exclusion. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusions.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to True, then this exclusion is disabled and it does not exclude any log entries. |

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusions.property.filter"></a>

```python
filter: str
```

- *Type:* str

An advanced logs filter that matches the log entries to be excluded.

By using the sample function, you can exclude less than 100% of the matching log entries

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_folder_sink#filter GoogleLoggingFolderSink#filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusions.property.name"></a>

```python
name: str
```

- *Type:* str

A client-assigned identifier, such as "load-balancer-exclusion".

Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods. First character has to be alphanumeric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_folder_sink#name GoogleLoggingFolderSink#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusions.property.description"></a>

```python
description: str
```

- *Type:* str

A description of this exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_folder_sink#description GoogleLoggingFolderSink#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusions.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to True, then this exclusion is disabled and it does not exclude any log entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_folder_sink#disabled GoogleLoggingFolderSink#disabled}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleLoggingFolderSinkBigqueryOptionsOutputReference <a name="GoogleLoggingFolderSinkBigqueryOptionsOutputReference" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_logging_folder_sink

googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference.property.usePartitionedTablesInput">use_partitioned_tables_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference.property.usePartitionedTables">use_partitioned_tables</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptions">GoogleLoggingFolderSinkBigqueryOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `use_partitioned_tables_input`<sup>Optional</sup> <a name="use_partitioned_tables_input" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference.property.usePartitionedTablesInput"></a>

```python
use_partitioned_tables_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_partitioned_tables`<sup>Required</sup> <a name="use_partitioned_tables" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference.property.usePartitionedTables"></a>

```python
use_partitioned_tables: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptionsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleLoggingFolderSinkBigqueryOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkBigqueryOptions">GoogleLoggingFolderSinkBigqueryOptions</a>

---


### GoogleLoggingFolderSinkExclusionsList <a name="GoogleLoggingFolderSinkExclusionsList" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_logging_folder_sink

googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleLoggingFolderSinkExclusionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusions">GoogleLoggingFolderSinkExclusions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleLoggingFolderSinkExclusions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusions">GoogleLoggingFolderSinkExclusions</a>]]

---


### GoogleLoggingFolderSinkExclusionsOutputReference <a name="GoogleLoggingFolderSinkExclusionsOutputReference" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_logging_folder_sink

googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.property.disabledInput">disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusions">GoogleLoggingFolderSinkExclusions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.property.disabledInput"></a>

```python
disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleLoggingFolderSinkExclusions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleLoggingFolderSink.GoogleLoggingFolderSinkExclusions">GoogleLoggingFolderSinkExclusions</a>]

---



