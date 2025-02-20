# `googleBigqueryJob` Submodule <a name="`googleBigqueryJob` Submodule" id="@cdktf/provider-google-beta.googleBigqueryJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigqueryJob <a name="GoogleBigqueryJob" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job google_bigquery_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJob(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  job_id: str,
  copy: GoogleBigqueryJobCopy = None,
  extract: GoogleBigqueryJobExtract = None,
  id: str = None,
  job_timeout_ms: str = None,
  labels: typing.Mapping[str] = None,
  load: GoogleBigqueryJobLoad = None,
  location: str = None,
  project: str = None,
  query: GoogleBigqueryJobQuery = None,
  timeouts: GoogleBigqueryJobTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.jobId">job_id</a></code> | <code>str</code> | The ID of the job. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.copy">copy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy">GoogleBigqueryJobCopy</a></code> | copy block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.extract">extract</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract">GoogleBigqueryJobExtract</a></code> | extract block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#id GoogleBigqueryJob#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.jobTimeoutMs">job_timeout_ms</a></code> | <code>str</code> | Job timeout in milliseconds. If this time limit is exceeded, BigQuery may attempt to terminate the job. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels associated with this job. You can use these to organize and group your jobs. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.load">load</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad">GoogleBigqueryJobLoad</a></code> | load block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.location">location</a></code> | <code>str</code> | The geographic location of the job. The default value is US. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#project GoogleBigqueryJob#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.query">query</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery">GoogleBigqueryJobQuery</a></code> | query block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeouts">GoogleBigqueryJobTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `job_id`<sup>Required</sup> <a name="job_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.jobId"></a>

- *Type:* str

The ID of the job.

The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-). The maximum length is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#job_id GoogleBigqueryJob#job_id}

---

##### `copy`<sup>Optional</sup> <a name="copy" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.copy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy">GoogleBigqueryJobCopy</a>

copy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#copy GoogleBigqueryJob#copy}

---

##### `extract`<sup>Optional</sup> <a name="extract" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.extract"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract">GoogleBigqueryJobExtract</a>

extract block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#extract GoogleBigqueryJob#extract}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#id GoogleBigqueryJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `job_timeout_ms`<sup>Optional</sup> <a name="job_timeout_ms" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.jobTimeoutMs"></a>

- *Type:* str

Job timeout in milliseconds. If this time limit is exceeded, BigQuery may attempt to terminate the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#job_timeout_ms GoogleBigqueryJob#job_timeout_ms}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The labels associated with this job. You can use these to organize and group your jobs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#labels GoogleBigqueryJob#labels}

---

##### `load`<sup>Optional</sup> <a name="load" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.load"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad">GoogleBigqueryJobLoad</a>

load block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#load GoogleBigqueryJob#load}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.location"></a>

- *Type:* str

The geographic location of the job. The default value is US.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#location GoogleBigqueryJob#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#project GoogleBigqueryJob#project}.

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.query"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery">GoogleBigqueryJobQuery</a>

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#query GoogleBigqueryJob#query}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeouts">GoogleBigqueryJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#timeouts GoogleBigqueryJob#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putCopy">put_copy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putExtract">put_extract</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putLoad">put_load</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putQuery">put_query</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetCopy">reset_copy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetExtract">reset_extract</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetJobTimeoutMs">reset_job_timeout_ms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetLoad">reset_load</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetQuery">reset_query</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_copy` <a name="put_copy" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putCopy"></a>

```python
def put_copy(
  source_tables: typing.Union[IResolvable, typing.List[GoogleBigqueryJobCopySourceTables]],
  create_disposition: str = None,
  destination_encryption_configuration: GoogleBigqueryJobCopyDestinationEncryptionConfiguration = None,
  destination_table: GoogleBigqueryJobCopyDestinationTable = None,
  write_disposition: str = None
) -> None
```

###### `source_tables`<sup>Required</sup> <a name="source_tables" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putCopy.parameter.sourceTables"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTables">GoogleBigqueryJobCopySourceTables</a>]]

source_tables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#source_tables GoogleBigqueryJob#source_tables}

---

###### `create_disposition`<sup>Optional</sup> <a name="create_disposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putCopy.parameter.createDisposition"></a>

- *Type:* str

Specifies whether the job is allowed to create new tables.

The following values are supported:
CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table.
CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result.
Creation, truncation and append actions occur as one atomic update upon job completion Default value: "CREATE_IF_NEEDED" Possible values: ["CREATE_IF_NEEDED", "CREATE_NEVER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#create_disposition GoogleBigqueryJob#create_disposition}

---

###### `destination_encryption_configuration`<sup>Optional</sup> <a name="destination_encryption_configuration" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putCopy.parameter.destinationEncryptionConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfiguration">GoogleBigqueryJobCopyDestinationEncryptionConfiguration</a>

destination_encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#destination_encryption_configuration GoogleBigqueryJob#destination_encryption_configuration}

---

###### `destination_table`<sup>Optional</sup> <a name="destination_table" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putCopy.parameter.destinationTable"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTable">GoogleBigqueryJobCopyDestinationTable</a>

destination_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#destination_table GoogleBigqueryJob#destination_table}

---

###### `write_disposition`<sup>Optional</sup> <a name="write_disposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putCopy.parameter.writeDisposition"></a>

- *Type:* str

Specifies the action that occurs if the destination table already exists.

The following values are supported:
WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result.
WRITE_APPEND: If the table already exists, BigQuery appends the data to the table.
WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result.
Each action is atomic and only occurs if BigQuery is able to complete the job successfully.
Creation, truncation and append actions occur as one atomic update upon job completion. Default value: "WRITE_EMPTY" Possible values: ["WRITE_TRUNCATE", "WRITE_APPEND", "WRITE_EMPTY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#write_disposition GoogleBigqueryJob#write_disposition}

---

##### `put_extract` <a name="put_extract" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putExtract"></a>

```python
def put_extract(
  destination_uris: typing.List[str],
  compression: str = None,
  destination_format: str = None,
  field_delimiter: str = None,
  print_header: typing.Union[bool, IResolvable] = None,
  source_model: GoogleBigqueryJobExtractSourceModel = None,
  source_table: GoogleBigqueryJobExtractSourceTable = None,
  use_avro_logical_types: typing.Union[bool, IResolvable] = None
) -> None
```

###### `destination_uris`<sup>Required</sup> <a name="destination_uris" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putExtract.parameter.destinationUris"></a>

- *Type:* typing.List[str]

A list of fully-qualified Google Cloud Storage URIs where the extracted table should be written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#destination_uris GoogleBigqueryJob#destination_uris}

---

###### `compression`<sup>Optional</sup> <a name="compression" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putExtract.parameter.compression"></a>

- *Type:* str

The compression type to use for exported files.

Possible values include GZIP, DEFLATE, SNAPPY, and NONE.
The default value is NONE. DEFLATE and SNAPPY are only supported for Avro.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#compression GoogleBigqueryJob#compression}

---

###### `destination_format`<sup>Optional</sup> <a name="destination_format" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putExtract.parameter.destinationFormat"></a>

- *Type:* str

The exported file format.

Possible values include CSV, NEWLINE_DELIMITED_JSON and AVRO for tables and SAVED_MODEL for models.
The default value for tables is CSV. Tables with nested or repeated fields cannot be exported as CSV.
The default value for models is SAVED_MODEL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#destination_format GoogleBigqueryJob#destination_format}

---

###### `field_delimiter`<sup>Optional</sup> <a name="field_delimiter" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putExtract.parameter.fieldDelimiter"></a>

- *Type:* str

When extracting data in CSV format, this defines the delimiter to use between fields in the exported data.

Default is ','

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#field_delimiter GoogleBigqueryJob#field_delimiter}

---

###### `print_header`<sup>Optional</sup> <a name="print_header" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putExtract.parameter.printHeader"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to print out a header row in the results. Default is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#print_header GoogleBigqueryJob#print_header}

---

###### `source_model`<sup>Optional</sup> <a name="source_model" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putExtract.parameter.sourceModel"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModel">GoogleBigqueryJobExtractSourceModel</a>

source_model block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#source_model GoogleBigqueryJob#source_model}

---

###### `source_table`<sup>Optional</sup> <a name="source_table" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putExtract.parameter.sourceTable"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTable">GoogleBigqueryJobExtractSourceTable</a>

source_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#source_table GoogleBigqueryJob#source_table}

---

###### `use_avro_logical_types`<sup>Optional</sup> <a name="use_avro_logical_types" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putExtract.parameter.useAvroLogicalTypes"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to use logical types when extracting to AVRO format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#use_avro_logical_types GoogleBigqueryJob#use_avro_logical_types}

---

##### `put_load` <a name="put_load" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putLoad"></a>

```python
def put_load(
  destination_table: GoogleBigqueryJobLoadDestinationTable,
  source_uris: typing.List[str],
  allow_jagged_rows: typing.Union[bool, IResolvable] = None,
  allow_quoted_newlines: typing.Union[bool, IResolvable] = None,
  autodetect: typing.Union[bool, IResolvable] = None,
  create_disposition: str = None,
  destination_encryption_configuration: GoogleBigqueryJobLoadDestinationEncryptionConfiguration = None,
  encoding: str = None,
  field_delimiter: str = None,
  ignore_unknown_values: typing.Union[bool, IResolvable] = None,
  json_extension: str = None,
  max_bad_records: typing.Union[int, float] = None,
  null_marker: str = None,
  parquet_options: GoogleBigqueryJobLoadParquetOptions = None,
  projection_fields: typing.List[str] = None,
  quote: str = None,
  schema_update_options: typing.List[str] = None,
  skip_leading_rows: typing.Union[int, float] = None,
  source_format: str = None,
  time_partitioning: GoogleBigqueryJobLoadTimePartitioning = None,
  write_disposition: str = None
) -> None
```

###### `destination_table`<sup>Required</sup> <a name="destination_table" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putLoad.parameter.destinationTable"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTable">GoogleBigqueryJobLoadDestinationTable</a>

destination_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#destination_table GoogleBigqueryJob#destination_table}

---

###### `source_uris`<sup>Required</sup> <a name="source_uris" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putLoad.parameter.sourceUris"></a>

- *Type:* typing.List[str]

The fully-qualified URIs that point to your data in Google Cloud.

For Google Cloud Storage URIs: Each URI can contain one '*' wildcard character
and it must come after the 'bucket' name. Size limits related to load jobs apply
to external data sources. For Google Cloud Bigtable URIs: Exactly one URI can be
specified and it has be a fully specified and valid HTTPS URL for a Google Cloud Bigtable table.
For Google Cloud Datastore backups: Exactly one URI can be specified. Also, the '*' wildcard character is not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#source_uris GoogleBigqueryJob#source_uris}

---

###### `allow_jagged_rows`<sup>Optional</sup> <a name="allow_jagged_rows" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putLoad.parameter.allowJaggedRows"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Accept rows that are missing trailing optional columns.

The missing values are treated as nulls.
If false, records with missing trailing columns are treated as bad records, and if there are too many bad records,
an invalid error is returned in the job result. The default value is false. Only applicable to CSV, ignored for other formats.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#allow_jagged_rows GoogleBigqueryJob#allow_jagged_rows}

---

###### `allow_quoted_newlines`<sup>Optional</sup> <a name="allow_quoted_newlines" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putLoad.parameter.allowQuotedNewlines"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file.

The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#allow_quoted_newlines GoogleBigqueryJob#allow_quoted_newlines}

---

###### `autodetect`<sup>Optional</sup> <a name="autodetect" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putLoad.parameter.autodetect"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if we should automatically infer the options and schema for CSV and JSON sources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#autodetect GoogleBigqueryJob#autodetect}

---

###### `create_disposition`<sup>Optional</sup> <a name="create_disposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putLoad.parameter.createDisposition"></a>

- *Type:* str

Specifies whether the job is allowed to create new tables.

The following values are supported:
CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table.
CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result.
Creation, truncation and append actions occur as one atomic update upon job completion Default value: "CREATE_IF_NEEDED" Possible values: ["CREATE_IF_NEEDED", "CREATE_NEVER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#create_disposition GoogleBigqueryJob#create_disposition}

---

###### `destination_encryption_configuration`<sup>Optional</sup> <a name="destination_encryption_configuration" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putLoad.parameter.destinationEncryptionConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfiguration">GoogleBigqueryJobLoadDestinationEncryptionConfiguration</a>

destination_encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#destination_encryption_configuration GoogleBigqueryJob#destination_encryption_configuration}

---

###### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putLoad.parameter.encoding"></a>

- *Type:* str

The character encoding of the data.

The supported values are UTF-8 or ISO-8859-1.
The default value is UTF-8. BigQuery decodes the data after the raw, binary data
has been split using the values of the quote and fieldDelimiter properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#encoding GoogleBigqueryJob#encoding}

---

###### `field_delimiter`<sup>Optional</sup> <a name="field_delimiter" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putLoad.parameter.fieldDelimiter"></a>

- *Type:* str

The separator for fields in a CSV file.

The separator can be any ISO-8859-1 single-byte character.
To use a character in the range 128-255, you must encode the character as UTF8. BigQuery converts
the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the
data in its raw, binary state. BigQuery also supports the escape sequence "\t" to specify a tab separator.
The default value is a comma (',').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#field_delimiter GoogleBigqueryJob#field_delimiter}

---

###### `ignore_unknown_values`<sup>Optional</sup> <a name="ignore_unknown_values" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putLoad.parameter.ignoreUnknownValues"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if BigQuery should allow extra values that are not represented in the table schema.

If true, the extra values are ignored. If false, records with extra columns are treated as bad records,
and if there are too many bad records, an invalid error is returned in the job result.
The default value is false. The sourceFormat property determines what BigQuery treats as an extra value:
CSV: Trailing columns
JSON: Named values that don't match any column names

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#ignore_unknown_values GoogleBigqueryJob#ignore_unknown_values}

---

###### `json_extension`<sup>Optional</sup> <a name="json_extension" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putLoad.parameter.jsonExtension"></a>

- *Type:* str

If sourceFormat is set to newline-delimited JSON, indicates whether it should be processed as a JSON variant such as GeoJSON.

For a sourceFormat other than JSON, omit this field. If the sourceFormat is newline-delimited JSON: - for newline-delimited
GeoJSON: set to GEOJSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#json_extension GoogleBigqueryJob#json_extension}

---

###### `max_bad_records`<sup>Optional</sup> <a name="max_bad_records" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putLoad.parameter.maxBadRecords"></a>

- *Type:* typing.Union[int, float]

The maximum number of bad records that BigQuery can ignore when running the job.

If the number of bad records exceeds this value,
an invalid error is returned in the job result. The default value is 0, which requires that all records are valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#max_bad_records GoogleBigqueryJob#max_bad_records}

---

###### `null_marker`<sup>Optional</sup> <a name="null_marker" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putLoad.parameter.nullMarker"></a>

- *Type:* str

Specifies a string that represents a null value in a CSV file.

For example, if you specify "\N", BigQuery interprets "\N" as a null value
when loading a CSV file. The default value is the empty string. If you set this property to a custom value, BigQuery throws an error if an
empty string is present for all data types except for STRING and BYTE. For STRING and BYTE columns, BigQuery interprets the empty string as
an empty value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#null_marker GoogleBigqueryJob#null_marker}

---

###### `parquet_options`<sup>Optional</sup> <a name="parquet_options" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putLoad.parameter.parquetOptions"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptions">GoogleBigqueryJobLoadParquetOptions</a>

parquet_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#parquet_options GoogleBigqueryJob#parquet_options}

---

###### `projection_fields`<sup>Optional</sup> <a name="projection_fields" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putLoad.parameter.projectionFields"></a>

- *Type:* typing.List[str]

If sourceFormat is set to "DATASTORE_BACKUP", indicates which entity properties to load into BigQuery from a Cloud Datastore backup.

Property names are case sensitive and must be top-level properties. If no properties are specified, BigQuery loads all properties.
If any named property isn't found in the Cloud Datastore backup, an invalid error is returned in the job result.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#projection_fields GoogleBigqueryJob#projection_fields}

---

###### `quote`<sup>Optional</sup> <a name="quote" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putLoad.parameter.quote"></a>

- *Type:* str

The value that is used to quote data sections in a CSV file.

BigQuery converts the string to ISO-8859-1 encoding,
and then uses the first byte of the encoded string to split the data in its raw, binary state.
The default value is a double-quote ('"'). If your data does not contain quoted sections, set the property value to an empty string.
If your data contains quoted newline characters, you must also set the allowQuotedNewlines property to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#quote GoogleBigqueryJob#quote}

---

###### `schema_update_options`<sup>Optional</sup> <a name="schema_update_options" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putLoad.parameter.schemaUpdateOptions"></a>

- *Type:* typing.List[str]

Allows the schema of the destination table to be updated as a side effect of the load job if a schema is autodetected or supplied in the job configuration.

Schema update options are supported in two cases: when writeDisposition is WRITE_APPEND;
when writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table, specified by partition decorators.
For normal tables, WRITE_TRUNCATE will always overwrite the schema. One or more of the following values are specified:
ALLOW_FIELD_ADDITION: allow adding a nullable field to the schema.
ALLOW_FIELD_RELAXATION: allow relaxing a required field in the original schema to nullable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#schema_update_options GoogleBigqueryJob#schema_update_options}

---

###### `skip_leading_rows`<sup>Optional</sup> <a name="skip_leading_rows" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putLoad.parameter.skipLeadingRows"></a>

- *Type:* typing.Union[int, float]

The number of rows at the top of a CSV file that BigQuery will skip when loading the data.

The default value is 0. This property is useful if you have header rows in the file that should be skipped.
When autodetect is on, the behavior is the following:
skipLeadingRows unspecified - Autodetect tries to detect headers in the first row. If they are not detected,
the row is read as data. Otherwise data is read starting from the second row.
skipLeadingRows is 0 - Instructs autodetect that there are no headers and data should be read starting from the first row.
skipLeadingRows = N > 0 - Autodetect skips N-1 rows and tries to detect headers in row N. If headers are not detected,
row N is just skipped. Otherwise row N is used to extract column names for the detected schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#skip_leading_rows GoogleBigqueryJob#skip_leading_rows}

---

###### `source_format`<sup>Optional</sup> <a name="source_format" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putLoad.parameter.sourceFormat"></a>

- *Type:* str

The format of the data files.

For CSV files, specify "CSV". For datastore backups, specify "DATASTORE_BACKUP".
For newline-delimited JSON, specify "NEWLINE_DELIMITED_JSON". For Avro, specify "AVRO". For parquet, specify "PARQUET".
For orc, specify "ORC". [Beta] For Bigtable, specify "BIGTABLE".
The default value is CSV.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#source_format GoogleBigqueryJob#source_format}

---

###### `time_partitioning`<sup>Optional</sup> <a name="time_partitioning" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putLoad.parameter.timePartitioning"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioning">GoogleBigqueryJobLoadTimePartitioning</a>

time_partitioning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#time_partitioning GoogleBigqueryJob#time_partitioning}

---

###### `write_disposition`<sup>Optional</sup> <a name="write_disposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putLoad.parameter.writeDisposition"></a>

- *Type:* str

Specifies the action that occurs if the destination table already exists.

The following values are supported:
WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result.
WRITE_APPEND: If the table already exists, BigQuery appends the data to the table.
WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result.
Each action is atomic and only occurs if BigQuery is able to complete the job successfully.
Creation, truncation and append actions occur as one atomic update upon job completion. Default value: "WRITE_EMPTY" Possible values: ["WRITE_TRUNCATE", "WRITE_APPEND", "WRITE_EMPTY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#write_disposition GoogleBigqueryJob#write_disposition}

---

##### `put_query` <a name="put_query" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putQuery"></a>

```python
def put_query(
  query: str,
  allow_large_results: typing.Union[bool, IResolvable] = None,
  create_disposition: str = None,
  default_dataset: GoogleBigqueryJobQueryDefaultDataset = None,
  destination_encryption_configuration: GoogleBigqueryJobQueryDestinationEncryptionConfiguration = None,
  destination_table: GoogleBigqueryJobQueryDestinationTable = None,
  flatten_results: typing.Union[bool, IResolvable] = None,
  maximum_billing_tier: typing.Union[int, float] = None,
  maximum_bytes_billed: str = None,
  parameter_mode: str = None,
  priority: str = None,
  schema_update_options: typing.List[str] = None,
  script_options: GoogleBigqueryJobQueryScriptOptions = None,
  use_legacy_sql: typing.Union[bool, IResolvable] = None,
  use_query_cache: typing.Union[bool, IResolvable] = None,
  user_defined_function_resources: typing.Union[IResolvable, typing.List[GoogleBigqueryJobQueryUserDefinedFunctionResources]] = None,
  write_disposition: str = None
) -> None
```

###### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putQuery.parameter.query"></a>

- *Type:* str

SQL query text to execute.

The useLegacySql field can be used to indicate whether the query uses legacy SQL or standard SQL.
*NOTE*: queries containing [DML language](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language)
('DELETE', 'UPDATE', 'MERGE', 'INSERT') must specify 'create_disposition = ""' and 'write_disposition = ""'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#query GoogleBigqueryJob#query}

---

###### `allow_large_results`<sup>Optional</sup> <a name="allow_large_results" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putQuery.parameter.allowLargeResults"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true and query uses legacy SQL dialect, allows the query to produce arbitrarily large result tables at a slight cost in performance.

Requires destinationTable to be set. For standard SQL queries, this flag is ignored and large results are always allowed.
However, you must still set destinationTable when result size exceeds the allowed maximum response size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#allow_large_results GoogleBigqueryJob#allow_large_results}

---

###### `create_disposition`<sup>Optional</sup> <a name="create_disposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putQuery.parameter.createDisposition"></a>

- *Type:* str

Specifies whether the job is allowed to create new tables.

The following values are supported:
CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table.
CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result.
Creation, truncation and append actions occur as one atomic update upon job completion Default value: "CREATE_IF_NEEDED" Possible values: ["CREATE_IF_NEEDED", "CREATE_NEVER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#create_disposition GoogleBigqueryJob#create_disposition}

---

###### `default_dataset`<sup>Optional</sup> <a name="default_dataset" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putQuery.parameter.defaultDataset"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDataset">GoogleBigqueryJobQueryDefaultDataset</a>

default_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#default_dataset GoogleBigqueryJob#default_dataset}

---

###### `destination_encryption_configuration`<sup>Optional</sup> <a name="destination_encryption_configuration" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putQuery.parameter.destinationEncryptionConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfiguration">GoogleBigqueryJobQueryDestinationEncryptionConfiguration</a>

destination_encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#destination_encryption_configuration GoogleBigqueryJob#destination_encryption_configuration}

---

###### `destination_table`<sup>Optional</sup> <a name="destination_table" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putQuery.parameter.destinationTable"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTable">GoogleBigqueryJobQueryDestinationTable</a>

destination_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#destination_table GoogleBigqueryJob#destination_table}

---

###### `flatten_results`<sup>Optional</sup> <a name="flatten_results" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putQuery.parameter.flattenResults"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true and query uses legacy SQL dialect, flattens all nested and repeated fields in the query results.

allowLargeResults must be true if this is set to false. For standard SQL queries, this flag is ignored and results are never flattened.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#flatten_results GoogleBigqueryJob#flatten_results}

---

###### `maximum_billing_tier`<sup>Optional</sup> <a name="maximum_billing_tier" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putQuery.parameter.maximumBillingTier"></a>

- *Type:* typing.Union[int, float]

Limits the billing tier for this job.

Queries that have resource usage beyond this tier will fail (without incurring a charge).
If unspecified, this will be set to your project default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#maximum_billing_tier GoogleBigqueryJob#maximum_billing_tier}

---

###### `maximum_bytes_billed`<sup>Optional</sup> <a name="maximum_bytes_billed" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putQuery.parameter.maximumBytesBilled"></a>

- *Type:* str

Limits the bytes billed for this job.

Queries that will have bytes billed beyond this limit will fail (without incurring a charge).
If unspecified, this will be set to your project default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#maximum_bytes_billed GoogleBigqueryJob#maximum_bytes_billed}

---

###### `parameter_mode`<sup>Optional</sup> <a name="parameter_mode" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putQuery.parameter.parameterMode"></a>

- *Type:* str

Standard SQL only.

Set to POSITIONAL to use positional (?) query parameters or to NAMED to use named (@myparam) query parameters in this query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#parameter_mode GoogleBigqueryJob#parameter_mode}

---

###### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putQuery.parameter.priority"></a>

- *Type:* str

Specifies a priority for the query. Default value: "INTERACTIVE" Possible values: ["INTERACTIVE", "BATCH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#priority GoogleBigqueryJob#priority}

---

###### `schema_update_options`<sup>Optional</sup> <a name="schema_update_options" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putQuery.parameter.schemaUpdateOptions"></a>

- *Type:* typing.List[str]

Allows the schema of the destination table to be updated as a side effect of the query job.

Schema update options are supported in two cases: when writeDisposition is WRITE_APPEND;
when writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table,
specified by partition decorators. For normal tables, WRITE_TRUNCATE will always overwrite the schema.
One or more of the following values are specified:
ALLOW_FIELD_ADDITION: allow adding a nullable field to the schema.
ALLOW_FIELD_RELAXATION: allow relaxing a required field in the original schema to nullable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#schema_update_options GoogleBigqueryJob#schema_update_options}

---

###### `script_options`<sup>Optional</sup> <a name="script_options" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putQuery.parameter.scriptOptions"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptions">GoogleBigqueryJobQueryScriptOptions</a>

script_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#script_options GoogleBigqueryJob#script_options}

---

###### `use_legacy_sql`<sup>Optional</sup> <a name="use_legacy_sql" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putQuery.parameter.useLegacySql"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to use BigQuery's legacy SQL dialect for this query.

The default value is true.
If set to false, the query will use BigQuery's standard SQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#use_legacy_sql GoogleBigqueryJob#use_legacy_sql}

---

###### `use_query_cache`<sup>Optional</sup> <a name="use_query_cache" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putQuery.parameter.useQueryCache"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to look for the result in the query cache.

The query cache is a best-effort cache that will be flushed whenever
tables in the query are modified. Moreover, the query cache is only available when a query does not have a destination table specified.
The default value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#use_query_cache GoogleBigqueryJob#use_query_cache}

---

###### `user_defined_function_resources`<sup>Optional</sup> <a name="user_defined_function_resources" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putQuery.parameter.userDefinedFunctionResources"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResources">GoogleBigqueryJobQueryUserDefinedFunctionResources</a>]]

user_defined_function_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#user_defined_function_resources GoogleBigqueryJob#user_defined_function_resources}

---

###### `write_disposition`<sup>Optional</sup> <a name="write_disposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putQuery.parameter.writeDisposition"></a>

- *Type:* str

Specifies the action that occurs if the destination table already exists.

The following values are supported:
WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result.
WRITE_APPEND: If the table already exists, BigQuery appends the data to the table.
WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result.
Each action is atomic and only occurs if BigQuery is able to complete the job successfully.
Creation, truncation and append actions occur as one atomic update upon job completion. Default value: "WRITE_EMPTY" Possible values: ["WRITE_TRUNCATE", "WRITE_APPEND", "WRITE_EMPTY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#write_disposition GoogleBigqueryJob#write_disposition}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#create GoogleBigqueryJob#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#delete GoogleBigqueryJob#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#update GoogleBigqueryJob#update}.

---

##### `reset_copy` <a name="reset_copy" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetCopy"></a>

```python
def reset_copy() -> None
```

##### `reset_extract` <a name="reset_extract" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetExtract"></a>

```python
def reset_extract() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_job_timeout_ms` <a name="reset_job_timeout_ms" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetJobTimeoutMs"></a>

```python
def reset_job_timeout_ms() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_load` <a name="reset_load" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetLoad"></a>

```python
def reset_load() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_query` <a name="reset_query" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetQuery"></a>

```python
def reset_query() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleBigqueryJob resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJob.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJob.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJob.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJob.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleBigqueryJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleBigqueryJob to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleBigqueryJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBigqueryJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.copy">copy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference">GoogleBigqueryJobCopyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.extract">extract</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference">GoogleBigqueryJobExtractOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.jobType">job_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.load">load</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference">GoogleBigqueryJobLoadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.query">query</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference">GoogleBigqueryJobQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.status">status</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList">GoogleBigqueryJobStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference">GoogleBigqueryJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.userEmail">user_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.copyInput">copy_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy">GoogleBigqueryJobCopy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.extractInput">extract_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract">GoogleBigqueryJobExtract</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.jobIdInput">job_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.jobTimeoutMsInput">job_timeout_ms_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.loadInput">load_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad">GoogleBigqueryJobLoad</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.queryInput">query_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery">GoogleBigqueryJobQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeouts">GoogleBigqueryJobTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.jobId">job_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.jobTimeoutMs">job_timeout_ms</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `copy`<sup>Required</sup> <a name="copy" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.copy"></a>

```python
copy: GoogleBigqueryJobCopyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference">GoogleBigqueryJobCopyOutputReference</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `extract`<sup>Required</sup> <a name="extract" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.extract"></a>

```python
extract: GoogleBigqueryJobExtractOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference">GoogleBigqueryJobExtractOutputReference</a>

---

##### `job_type`<sup>Required</sup> <a name="job_type" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.jobType"></a>

```python
job_type: str
```

- *Type:* str

---

##### `load`<sup>Required</sup> <a name="load" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.load"></a>

```python
load: GoogleBigqueryJobLoadOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference">GoogleBigqueryJobLoadOutputReference</a>

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.query"></a>

```python
query: GoogleBigqueryJobQueryOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference">GoogleBigqueryJobQueryOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.status"></a>

```python
status: GoogleBigqueryJobStatusList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList">GoogleBigqueryJobStatusList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.timeouts"></a>

```python
timeouts: GoogleBigqueryJobTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference">GoogleBigqueryJobTimeoutsOutputReference</a>

---

##### `user_email`<sup>Required</sup> <a name="user_email" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.userEmail"></a>

```python
user_email: str
```

- *Type:* str

---

##### `copy_input`<sup>Optional</sup> <a name="copy_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.copyInput"></a>

```python
copy_input: GoogleBigqueryJobCopy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy">GoogleBigqueryJobCopy</a>

---

##### `extract_input`<sup>Optional</sup> <a name="extract_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.extractInput"></a>

```python
extract_input: GoogleBigqueryJobExtract
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract">GoogleBigqueryJobExtract</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `job_id_input`<sup>Optional</sup> <a name="job_id_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.jobIdInput"></a>

```python
job_id_input: str
```

- *Type:* str

---

##### `job_timeout_ms_input`<sup>Optional</sup> <a name="job_timeout_ms_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.jobTimeoutMsInput"></a>

```python
job_timeout_ms_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `load_input`<sup>Optional</sup> <a name="load_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.loadInput"></a>

```python
load_input: GoogleBigqueryJobLoad
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad">GoogleBigqueryJobLoad</a>

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.queryInput"></a>

```python
query_input: GoogleBigqueryJobQuery
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery">GoogleBigqueryJobQuery</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleBigqueryJobTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeouts">GoogleBigqueryJobTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `job_id`<sup>Required</sup> <a name="job_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.jobId"></a>

```python
job_id: str
```

- *Type:* str

---

##### `job_timeout_ms`<sup>Required</sup> <a name="job_timeout_ms" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.jobTimeoutMs"></a>

```python
job_timeout_ms: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigqueryJobConfig <a name="GoogleBigqueryJobConfig" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJobConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  job_id: str,
  copy: GoogleBigqueryJobCopy = None,
  extract: GoogleBigqueryJobExtract = None,
  id: str = None,
  job_timeout_ms: str = None,
  labels: typing.Mapping[str] = None,
  load: GoogleBigqueryJobLoad = None,
  location: str = None,
  project: str = None,
  query: GoogleBigqueryJobQuery = None,
  timeouts: GoogleBigqueryJobTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.jobId">job_id</a></code> | <code>str</code> | The ID of the job. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.copy">copy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy">GoogleBigqueryJobCopy</a></code> | copy block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.extract">extract</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract">GoogleBigqueryJobExtract</a></code> | extract block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#id GoogleBigqueryJob#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.jobTimeoutMs">job_timeout_ms</a></code> | <code>str</code> | Job timeout in milliseconds. If this time limit is exceeded, BigQuery may attempt to terminate the job. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels associated with this job. You can use these to organize and group your jobs. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.load">load</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad">GoogleBigqueryJobLoad</a></code> | load block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.location">location</a></code> | <code>str</code> | The geographic location of the job. The default value is US. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#project GoogleBigqueryJob#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.query">query</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery">GoogleBigqueryJobQuery</a></code> | query block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeouts">GoogleBigqueryJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `job_id`<sup>Required</sup> <a name="job_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.jobId"></a>

```python
job_id: str
```

- *Type:* str

The ID of the job.

The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-). The maximum length is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#job_id GoogleBigqueryJob#job_id}

---

##### `copy`<sup>Optional</sup> <a name="copy" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.copy"></a>

```python
copy: GoogleBigqueryJobCopy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy">GoogleBigqueryJobCopy</a>

copy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#copy GoogleBigqueryJob#copy}

---

##### `extract`<sup>Optional</sup> <a name="extract" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.extract"></a>

```python
extract: GoogleBigqueryJobExtract
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract">GoogleBigqueryJobExtract</a>

extract block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#extract GoogleBigqueryJob#extract}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#id GoogleBigqueryJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `job_timeout_ms`<sup>Optional</sup> <a name="job_timeout_ms" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.jobTimeoutMs"></a>

```python
job_timeout_ms: str
```

- *Type:* str

Job timeout in milliseconds. If this time limit is exceeded, BigQuery may attempt to terminate the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#job_timeout_ms GoogleBigqueryJob#job_timeout_ms}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The labels associated with this job. You can use these to organize and group your jobs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#labels GoogleBigqueryJob#labels}

---

##### `load`<sup>Optional</sup> <a name="load" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.load"></a>

```python
load: GoogleBigqueryJobLoad
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad">GoogleBigqueryJobLoad</a>

load block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#load GoogleBigqueryJob#load}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The geographic location of the job. The default value is US.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#location GoogleBigqueryJob#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#project GoogleBigqueryJob#project}.

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.query"></a>

```python
query: GoogleBigqueryJobQuery
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery">GoogleBigqueryJobQuery</a>

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#query GoogleBigqueryJob#query}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.timeouts"></a>

```python
timeouts: GoogleBigqueryJobTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeouts">GoogleBigqueryJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#timeouts GoogleBigqueryJob#timeouts}

---

### GoogleBigqueryJobCopy <a name="GoogleBigqueryJobCopy" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJobCopy(
  source_tables: typing.Union[IResolvable, typing.List[GoogleBigqueryJobCopySourceTables]],
  create_disposition: str = None,
  destination_encryption_configuration: GoogleBigqueryJobCopyDestinationEncryptionConfiguration = None,
  destination_table: GoogleBigqueryJobCopyDestinationTable = None,
  write_disposition: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy.property.sourceTables">source_tables</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTables">GoogleBigqueryJobCopySourceTables</a>]]</code> | source_tables block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy.property.createDisposition">create_disposition</a></code> | <code>str</code> | Specifies whether the job is allowed to create new tables. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy.property.destinationEncryptionConfiguration">destination_encryption_configuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfiguration">GoogleBigqueryJobCopyDestinationEncryptionConfiguration</a></code> | destination_encryption_configuration block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy.property.destinationTable">destination_table</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTable">GoogleBigqueryJobCopyDestinationTable</a></code> | destination_table block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy.property.writeDisposition">write_disposition</a></code> | <code>str</code> | Specifies the action that occurs if the destination table already exists. |

---

##### `source_tables`<sup>Required</sup> <a name="source_tables" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy.property.sourceTables"></a>

```python
source_tables: typing.Union[IResolvable, typing.List[GoogleBigqueryJobCopySourceTables]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTables">GoogleBigqueryJobCopySourceTables</a>]]

source_tables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#source_tables GoogleBigqueryJob#source_tables}

---

##### `create_disposition`<sup>Optional</sup> <a name="create_disposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy.property.createDisposition"></a>

```python
create_disposition: str
```

- *Type:* str

Specifies whether the job is allowed to create new tables.

The following values are supported:
CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table.
CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result.
Creation, truncation and append actions occur as one atomic update upon job completion Default value: "CREATE_IF_NEEDED" Possible values: ["CREATE_IF_NEEDED", "CREATE_NEVER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#create_disposition GoogleBigqueryJob#create_disposition}

---

##### `destination_encryption_configuration`<sup>Optional</sup> <a name="destination_encryption_configuration" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy.property.destinationEncryptionConfiguration"></a>

```python
destination_encryption_configuration: GoogleBigqueryJobCopyDestinationEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfiguration">GoogleBigqueryJobCopyDestinationEncryptionConfiguration</a>

destination_encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#destination_encryption_configuration GoogleBigqueryJob#destination_encryption_configuration}

---

##### `destination_table`<sup>Optional</sup> <a name="destination_table" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy.property.destinationTable"></a>

```python
destination_table: GoogleBigqueryJobCopyDestinationTable
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTable">GoogleBigqueryJobCopyDestinationTable</a>

destination_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#destination_table GoogleBigqueryJob#destination_table}

---

##### `write_disposition`<sup>Optional</sup> <a name="write_disposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy.property.writeDisposition"></a>

```python
write_disposition: str
```

- *Type:* str

Specifies the action that occurs if the destination table already exists.

The following values are supported:
WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result.
WRITE_APPEND: If the table already exists, BigQuery appends the data to the table.
WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result.
Each action is atomic and only occurs if BigQuery is able to complete the job successfully.
Creation, truncation and append actions occur as one atomic update upon job completion. Default value: "WRITE_EMPTY" Possible values: ["WRITE_TRUNCATE", "WRITE_APPEND", "WRITE_EMPTY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#write_disposition GoogleBigqueryJob#write_disposition}

---

### GoogleBigqueryJobCopyDestinationEncryptionConfiguration <a name="GoogleBigqueryJobCopyDestinationEncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfiguration(
  kms_key_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfiguration.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table. |

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfiguration.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table.

The BigQuery Service Account associated with your project requires access to this encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#kms_key_name GoogleBigqueryJob#kms_key_name}

---

### GoogleBigqueryJobCopyDestinationTable <a name="GoogleBigqueryJobCopyDestinationTable" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTable.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJobCopyDestinationTable(
  table_id: str,
  dataset_id: str = None,
  project_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTable.property.tableId">table_id</a></code> | <code>str</code> | The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTable.property.datasetId">dataset_id</a></code> | <code>str</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTable.property.projectId">project_id</a></code> | <code>str</code> | The ID of the project containing this table. |

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTable.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#table_id GoogleBigqueryJob#table_id}

---

##### `dataset_id`<sup>Optional</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTable.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#dataset_id GoogleBigqueryJob#dataset_id}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTable.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#project_id GoogleBigqueryJob#project_id}

---

### GoogleBigqueryJobCopySourceTables <a name="GoogleBigqueryJobCopySourceTables" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTables.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJobCopySourceTables(
  table_id: str,
  dataset_id: str = None,
  project_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTables.property.tableId">table_id</a></code> | <code>str</code> | The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTables.property.datasetId">dataset_id</a></code> | <code>str</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTables.property.projectId">project_id</a></code> | <code>str</code> | The ID of the project containing this table. |

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTables.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#table_id GoogleBigqueryJob#table_id}

---

##### `dataset_id`<sup>Optional</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTables.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#dataset_id GoogleBigqueryJob#dataset_id}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTables.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#project_id GoogleBigqueryJob#project_id}

---

### GoogleBigqueryJobExtract <a name="GoogleBigqueryJobExtract" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJobExtract(
  destination_uris: typing.List[str],
  compression: str = None,
  destination_format: str = None,
  field_delimiter: str = None,
  print_header: typing.Union[bool, IResolvable] = None,
  source_model: GoogleBigqueryJobExtractSourceModel = None,
  source_table: GoogleBigqueryJobExtractSourceTable = None,
  use_avro_logical_types: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract.property.destinationUris">destination_uris</a></code> | <code>typing.List[str]</code> | A list of fully-qualified Google Cloud Storage URIs where the extracted table should be written. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract.property.compression">compression</a></code> | <code>str</code> | The compression type to use for exported files. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract.property.destinationFormat">destination_format</a></code> | <code>str</code> | The exported file format. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract.property.fieldDelimiter">field_delimiter</a></code> | <code>str</code> | When extracting data in CSV format, this defines the delimiter to use between fields in the exported data. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract.property.printHeader">print_header</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to print out a header row in the results. Default is true. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract.property.sourceModel">source_model</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModel">GoogleBigqueryJobExtractSourceModel</a></code> | source_model block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract.property.sourceTable">source_table</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTable">GoogleBigqueryJobExtractSourceTable</a></code> | source_table block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract.property.useAvroLogicalTypes">use_avro_logical_types</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to use logical types when extracting to AVRO format. |

---

##### `destination_uris`<sup>Required</sup> <a name="destination_uris" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract.property.destinationUris"></a>

```python
destination_uris: typing.List[str]
```

- *Type:* typing.List[str]

A list of fully-qualified Google Cloud Storage URIs where the extracted table should be written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#destination_uris GoogleBigqueryJob#destination_uris}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract.property.compression"></a>

```python
compression: str
```

- *Type:* str

The compression type to use for exported files.

Possible values include GZIP, DEFLATE, SNAPPY, and NONE.
The default value is NONE. DEFLATE and SNAPPY are only supported for Avro.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#compression GoogleBigqueryJob#compression}

---

##### `destination_format`<sup>Optional</sup> <a name="destination_format" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract.property.destinationFormat"></a>

```python
destination_format: str
```

- *Type:* str

The exported file format.

Possible values include CSV, NEWLINE_DELIMITED_JSON and AVRO for tables and SAVED_MODEL for models.
The default value for tables is CSV. Tables with nested or repeated fields cannot be exported as CSV.
The default value for models is SAVED_MODEL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#destination_format GoogleBigqueryJob#destination_format}

---

##### `field_delimiter`<sup>Optional</sup> <a name="field_delimiter" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract.property.fieldDelimiter"></a>

```python
field_delimiter: str
```

- *Type:* str

When extracting data in CSV format, this defines the delimiter to use between fields in the exported data.

Default is ','

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#field_delimiter GoogleBigqueryJob#field_delimiter}

---

##### `print_header`<sup>Optional</sup> <a name="print_header" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract.property.printHeader"></a>

```python
print_header: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to print out a header row in the results. Default is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#print_header GoogleBigqueryJob#print_header}

---

##### `source_model`<sup>Optional</sup> <a name="source_model" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract.property.sourceModel"></a>

```python
source_model: GoogleBigqueryJobExtractSourceModel
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModel">GoogleBigqueryJobExtractSourceModel</a>

source_model block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#source_model GoogleBigqueryJob#source_model}

---

##### `source_table`<sup>Optional</sup> <a name="source_table" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract.property.sourceTable"></a>

```python
source_table: GoogleBigqueryJobExtractSourceTable
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTable">GoogleBigqueryJobExtractSourceTable</a>

source_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#source_table GoogleBigqueryJob#source_table}

---

##### `use_avro_logical_types`<sup>Optional</sup> <a name="use_avro_logical_types" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract.property.useAvroLogicalTypes"></a>

```python
use_avro_logical_types: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to use logical types when extracting to AVRO format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#use_avro_logical_types GoogleBigqueryJob#use_avro_logical_types}

---

### GoogleBigqueryJobExtractSourceModel <a name="GoogleBigqueryJobExtractSourceModel" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModel.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJobExtractSourceModel(
  dataset_id: str,
  model_id: str,
  project_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModel.property.datasetId">dataset_id</a></code> | <code>str</code> | The ID of the dataset containing this model. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModel.property.modelId">model_id</a></code> | <code>str</code> | The ID of the model. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModel.property.projectId">project_id</a></code> | <code>str</code> | The ID of the project containing this model. |

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModel.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

The ID of the dataset containing this model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#dataset_id GoogleBigqueryJob#dataset_id}

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModel.property.modelId"></a>

```python
model_id: str
```

- *Type:* str

The ID of the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#model_id GoogleBigqueryJob#model_id}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModel.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID of the project containing this model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#project_id GoogleBigqueryJob#project_id}

---

### GoogleBigqueryJobExtractSourceTable <a name="GoogleBigqueryJobExtractSourceTable" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTable.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJobExtractSourceTable(
  table_id: str,
  dataset_id: str = None,
  project_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTable.property.tableId">table_id</a></code> | <code>str</code> | The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTable.property.datasetId">dataset_id</a></code> | <code>str</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTable.property.projectId">project_id</a></code> | <code>str</code> | The ID of the project containing this table. |

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTable.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#table_id GoogleBigqueryJob#table_id}

---

##### `dataset_id`<sup>Optional</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTable.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#dataset_id GoogleBigqueryJob#dataset_id}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTable.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#project_id GoogleBigqueryJob#project_id}

---

### GoogleBigqueryJobLoad <a name="GoogleBigqueryJobLoad" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJobLoad(
  destination_table: GoogleBigqueryJobLoadDestinationTable,
  source_uris: typing.List[str],
  allow_jagged_rows: typing.Union[bool, IResolvable] = None,
  allow_quoted_newlines: typing.Union[bool, IResolvable] = None,
  autodetect: typing.Union[bool, IResolvable] = None,
  create_disposition: str = None,
  destination_encryption_configuration: GoogleBigqueryJobLoadDestinationEncryptionConfiguration = None,
  encoding: str = None,
  field_delimiter: str = None,
  ignore_unknown_values: typing.Union[bool, IResolvable] = None,
  json_extension: str = None,
  max_bad_records: typing.Union[int, float] = None,
  null_marker: str = None,
  parquet_options: GoogleBigqueryJobLoadParquetOptions = None,
  projection_fields: typing.List[str] = None,
  quote: str = None,
  schema_update_options: typing.List[str] = None,
  skip_leading_rows: typing.Union[int, float] = None,
  source_format: str = None,
  time_partitioning: GoogleBigqueryJobLoadTimePartitioning = None,
  write_disposition: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.destinationTable">destination_table</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTable">GoogleBigqueryJobLoadDestinationTable</a></code> | destination_table block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.sourceUris">source_uris</a></code> | <code>typing.List[str]</code> | The fully-qualified URIs that point to your data in Google Cloud. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.allowJaggedRows">allow_jagged_rows</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Accept rows that are missing trailing optional columns. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.allowQuotedNewlines">allow_quoted_newlines</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.autodetect">autodetect</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if we should automatically infer the options and schema for CSV and JSON sources. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.createDisposition">create_disposition</a></code> | <code>str</code> | Specifies whether the job is allowed to create new tables. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.destinationEncryptionConfiguration">destination_encryption_configuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfiguration">GoogleBigqueryJobLoadDestinationEncryptionConfiguration</a></code> | destination_encryption_configuration block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.encoding">encoding</a></code> | <code>str</code> | The character encoding of the data. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.fieldDelimiter">field_delimiter</a></code> | <code>str</code> | The separator for fields in a CSV file. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.ignoreUnknownValues">ignore_unknown_values</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if BigQuery should allow extra values that are not represented in the table schema. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.jsonExtension">json_extension</a></code> | <code>str</code> | If sourceFormat is set to newline-delimited JSON, indicates whether it should be processed as a JSON variant such as GeoJSON. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.maxBadRecords">max_bad_records</a></code> | <code>typing.Union[int, float]</code> | The maximum number of bad records that BigQuery can ignore when running the job. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.nullMarker">null_marker</a></code> | <code>str</code> | Specifies a string that represents a null value in a CSV file. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.parquetOptions">parquet_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptions">GoogleBigqueryJobLoadParquetOptions</a></code> | parquet_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.projectionFields">projection_fields</a></code> | <code>typing.List[str]</code> | If sourceFormat is set to "DATASTORE_BACKUP", indicates which entity properties to load into BigQuery from a Cloud Datastore backup. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.quote">quote</a></code> | <code>str</code> | The value that is used to quote data sections in a CSV file. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.schemaUpdateOptions">schema_update_options</a></code> | <code>typing.List[str]</code> | Allows the schema of the destination table to be updated as a side effect of the load job if a schema is autodetected or supplied in the job configuration. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.skipLeadingRows">skip_leading_rows</a></code> | <code>typing.Union[int, float]</code> | The number of rows at the top of a CSV file that BigQuery will skip when loading the data. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.sourceFormat">source_format</a></code> | <code>str</code> | The format of the data files. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.timePartitioning">time_partitioning</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioning">GoogleBigqueryJobLoadTimePartitioning</a></code> | time_partitioning block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.writeDisposition">write_disposition</a></code> | <code>str</code> | Specifies the action that occurs if the destination table already exists. |

---

##### `destination_table`<sup>Required</sup> <a name="destination_table" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.destinationTable"></a>

```python
destination_table: GoogleBigqueryJobLoadDestinationTable
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTable">GoogleBigqueryJobLoadDestinationTable</a>

destination_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#destination_table GoogleBigqueryJob#destination_table}

---

##### `source_uris`<sup>Required</sup> <a name="source_uris" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.sourceUris"></a>

```python
source_uris: typing.List[str]
```

- *Type:* typing.List[str]

The fully-qualified URIs that point to your data in Google Cloud.

For Google Cloud Storage URIs: Each URI can contain one '*' wildcard character
and it must come after the 'bucket' name. Size limits related to load jobs apply
to external data sources. For Google Cloud Bigtable URIs: Exactly one URI can be
specified and it has be a fully specified and valid HTTPS URL for a Google Cloud Bigtable table.
For Google Cloud Datastore backups: Exactly one URI can be specified. Also, the '*' wildcard character is not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#source_uris GoogleBigqueryJob#source_uris}

---

##### `allow_jagged_rows`<sup>Optional</sup> <a name="allow_jagged_rows" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.allowJaggedRows"></a>

```python
allow_jagged_rows: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Accept rows that are missing trailing optional columns.

The missing values are treated as nulls.
If false, records with missing trailing columns are treated as bad records, and if there are too many bad records,
an invalid error is returned in the job result. The default value is false. Only applicable to CSV, ignored for other formats.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#allow_jagged_rows GoogleBigqueryJob#allow_jagged_rows}

---

##### `allow_quoted_newlines`<sup>Optional</sup> <a name="allow_quoted_newlines" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.allowQuotedNewlines"></a>

```python
allow_quoted_newlines: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file.

The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#allow_quoted_newlines GoogleBigqueryJob#allow_quoted_newlines}

---

##### `autodetect`<sup>Optional</sup> <a name="autodetect" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.autodetect"></a>

```python
autodetect: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if we should automatically infer the options and schema for CSV and JSON sources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#autodetect GoogleBigqueryJob#autodetect}

---

##### `create_disposition`<sup>Optional</sup> <a name="create_disposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.createDisposition"></a>

```python
create_disposition: str
```

- *Type:* str

Specifies whether the job is allowed to create new tables.

The following values are supported:
CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table.
CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result.
Creation, truncation and append actions occur as one atomic update upon job completion Default value: "CREATE_IF_NEEDED" Possible values: ["CREATE_IF_NEEDED", "CREATE_NEVER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#create_disposition GoogleBigqueryJob#create_disposition}

---

##### `destination_encryption_configuration`<sup>Optional</sup> <a name="destination_encryption_configuration" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.destinationEncryptionConfiguration"></a>

```python
destination_encryption_configuration: GoogleBigqueryJobLoadDestinationEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfiguration">GoogleBigqueryJobLoadDestinationEncryptionConfiguration</a>

destination_encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#destination_encryption_configuration GoogleBigqueryJob#destination_encryption_configuration}

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

The character encoding of the data.

The supported values are UTF-8 or ISO-8859-1.
The default value is UTF-8. BigQuery decodes the data after the raw, binary data
has been split using the values of the quote and fieldDelimiter properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#encoding GoogleBigqueryJob#encoding}

---

##### `field_delimiter`<sup>Optional</sup> <a name="field_delimiter" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.fieldDelimiter"></a>

```python
field_delimiter: str
```

- *Type:* str

The separator for fields in a CSV file.

The separator can be any ISO-8859-1 single-byte character.
To use a character in the range 128-255, you must encode the character as UTF8. BigQuery converts
the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the
data in its raw, binary state. BigQuery also supports the escape sequence "\t" to specify a tab separator.
The default value is a comma (',').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#field_delimiter GoogleBigqueryJob#field_delimiter}

---

##### `ignore_unknown_values`<sup>Optional</sup> <a name="ignore_unknown_values" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.ignoreUnknownValues"></a>

```python
ignore_unknown_values: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if BigQuery should allow extra values that are not represented in the table schema.

If true, the extra values are ignored. If false, records with extra columns are treated as bad records,
and if there are too many bad records, an invalid error is returned in the job result.
The default value is false. The sourceFormat property determines what BigQuery treats as an extra value:
CSV: Trailing columns
JSON: Named values that don't match any column names

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#ignore_unknown_values GoogleBigqueryJob#ignore_unknown_values}

---

##### `json_extension`<sup>Optional</sup> <a name="json_extension" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.jsonExtension"></a>

```python
json_extension: str
```

- *Type:* str

If sourceFormat is set to newline-delimited JSON, indicates whether it should be processed as a JSON variant such as GeoJSON.

For a sourceFormat other than JSON, omit this field. If the sourceFormat is newline-delimited JSON: - for newline-delimited
GeoJSON: set to GEOJSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#json_extension GoogleBigqueryJob#json_extension}

---

##### `max_bad_records`<sup>Optional</sup> <a name="max_bad_records" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.maxBadRecords"></a>

```python
max_bad_records: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of bad records that BigQuery can ignore when running the job.

If the number of bad records exceeds this value,
an invalid error is returned in the job result. The default value is 0, which requires that all records are valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#max_bad_records GoogleBigqueryJob#max_bad_records}

---

##### `null_marker`<sup>Optional</sup> <a name="null_marker" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.nullMarker"></a>

```python
null_marker: str
```

- *Type:* str

Specifies a string that represents a null value in a CSV file.

For example, if you specify "\N", BigQuery interprets "\N" as a null value
when loading a CSV file. The default value is the empty string. If you set this property to a custom value, BigQuery throws an error if an
empty string is present for all data types except for STRING and BYTE. For STRING and BYTE columns, BigQuery interprets the empty string as
an empty value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#null_marker GoogleBigqueryJob#null_marker}

---

##### `parquet_options`<sup>Optional</sup> <a name="parquet_options" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.parquetOptions"></a>

```python
parquet_options: GoogleBigqueryJobLoadParquetOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptions">GoogleBigqueryJobLoadParquetOptions</a>

parquet_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#parquet_options GoogleBigqueryJob#parquet_options}

---

##### `projection_fields`<sup>Optional</sup> <a name="projection_fields" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.projectionFields"></a>

```python
projection_fields: typing.List[str]
```

- *Type:* typing.List[str]

If sourceFormat is set to "DATASTORE_BACKUP", indicates which entity properties to load into BigQuery from a Cloud Datastore backup.

Property names are case sensitive and must be top-level properties. If no properties are specified, BigQuery loads all properties.
If any named property isn't found in the Cloud Datastore backup, an invalid error is returned in the job result.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#projection_fields GoogleBigqueryJob#projection_fields}

---

##### `quote`<sup>Optional</sup> <a name="quote" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.quote"></a>

```python
quote: str
```

- *Type:* str

The value that is used to quote data sections in a CSV file.

BigQuery converts the string to ISO-8859-1 encoding,
and then uses the first byte of the encoded string to split the data in its raw, binary state.
The default value is a double-quote ('"'). If your data does not contain quoted sections, set the property value to an empty string.
If your data contains quoted newline characters, you must also set the allowQuotedNewlines property to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#quote GoogleBigqueryJob#quote}

---

##### `schema_update_options`<sup>Optional</sup> <a name="schema_update_options" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.schemaUpdateOptions"></a>

```python
schema_update_options: typing.List[str]
```

- *Type:* typing.List[str]

Allows the schema of the destination table to be updated as a side effect of the load job if a schema is autodetected or supplied in the job configuration.

Schema update options are supported in two cases: when writeDisposition is WRITE_APPEND;
when writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table, specified by partition decorators.
For normal tables, WRITE_TRUNCATE will always overwrite the schema. One or more of the following values are specified:
ALLOW_FIELD_ADDITION: allow adding a nullable field to the schema.
ALLOW_FIELD_RELAXATION: allow relaxing a required field in the original schema to nullable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#schema_update_options GoogleBigqueryJob#schema_update_options}

---

##### `skip_leading_rows`<sup>Optional</sup> <a name="skip_leading_rows" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.skipLeadingRows"></a>

```python
skip_leading_rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of rows at the top of a CSV file that BigQuery will skip when loading the data.

The default value is 0. This property is useful if you have header rows in the file that should be skipped.
When autodetect is on, the behavior is the following:
skipLeadingRows unspecified - Autodetect tries to detect headers in the first row. If they are not detected,
the row is read as data. Otherwise data is read starting from the second row.
skipLeadingRows is 0 - Instructs autodetect that there are no headers and data should be read starting from the first row.
skipLeadingRows = N > 0 - Autodetect skips N-1 rows and tries to detect headers in row N. If headers are not detected,
row N is just skipped. Otherwise row N is used to extract column names for the detected schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#skip_leading_rows GoogleBigqueryJob#skip_leading_rows}

---

##### `source_format`<sup>Optional</sup> <a name="source_format" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.sourceFormat"></a>

```python
source_format: str
```

- *Type:* str

The format of the data files.

For CSV files, specify "CSV". For datastore backups, specify "DATASTORE_BACKUP".
For newline-delimited JSON, specify "NEWLINE_DELIMITED_JSON". For Avro, specify "AVRO". For parquet, specify "PARQUET".
For orc, specify "ORC". [Beta] For Bigtable, specify "BIGTABLE".
The default value is CSV.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#source_format GoogleBigqueryJob#source_format}

---

##### `time_partitioning`<sup>Optional</sup> <a name="time_partitioning" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.timePartitioning"></a>

```python
time_partitioning: GoogleBigqueryJobLoadTimePartitioning
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioning">GoogleBigqueryJobLoadTimePartitioning</a>

time_partitioning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#time_partitioning GoogleBigqueryJob#time_partitioning}

---

##### `write_disposition`<sup>Optional</sup> <a name="write_disposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.writeDisposition"></a>

```python
write_disposition: str
```

- *Type:* str

Specifies the action that occurs if the destination table already exists.

The following values are supported:
WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result.
WRITE_APPEND: If the table already exists, BigQuery appends the data to the table.
WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result.
Each action is atomic and only occurs if BigQuery is able to complete the job successfully.
Creation, truncation and append actions occur as one atomic update upon job completion. Default value: "WRITE_EMPTY" Possible values: ["WRITE_TRUNCATE", "WRITE_APPEND", "WRITE_EMPTY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#write_disposition GoogleBigqueryJob#write_disposition}

---

### GoogleBigqueryJobLoadDestinationEncryptionConfiguration <a name="GoogleBigqueryJobLoadDestinationEncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfiguration(
  kms_key_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfiguration.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table. |

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfiguration.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table.

The BigQuery Service Account associated with your project requires access to this encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#kms_key_name GoogleBigqueryJob#kms_key_name}

---

### GoogleBigqueryJobLoadDestinationTable <a name="GoogleBigqueryJobLoadDestinationTable" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTable.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJobLoadDestinationTable(
  table_id: str,
  dataset_id: str = None,
  project_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTable.property.tableId">table_id</a></code> | <code>str</code> | The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTable.property.datasetId">dataset_id</a></code> | <code>str</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTable.property.projectId">project_id</a></code> | <code>str</code> | The ID of the project containing this table. |

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTable.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#table_id GoogleBigqueryJob#table_id}

---

##### `dataset_id`<sup>Optional</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTable.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#dataset_id GoogleBigqueryJob#dataset_id}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTable.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#project_id GoogleBigqueryJob#project_id}

---

### GoogleBigqueryJobLoadParquetOptions <a name="GoogleBigqueryJobLoadParquetOptions" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJobLoadParquetOptions(
  enable_list_inference: typing.Union[bool, IResolvable] = None,
  enum_as_string: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptions.property.enableListInference">enable_list_inference</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If sourceFormat is set to PARQUET, indicates whether to use schema inference specifically for Parquet LIST logical type. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptions.property.enumAsString">enum_as_string</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If sourceFormat is set to PARQUET, indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default. |

---

##### `enable_list_inference`<sup>Optional</sup> <a name="enable_list_inference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptions.property.enableListInference"></a>

```python
enable_list_inference: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If sourceFormat is set to PARQUET, indicates whether to use schema inference specifically for Parquet LIST logical type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#enable_list_inference GoogleBigqueryJob#enable_list_inference}

---

##### `enum_as_string`<sup>Optional</sup> <a name="enum_as_string" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptions.property.enumAsString"></a>

```python
enum_as_string: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If sourceFormat is set to PARQUET, indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#enum_as_string GoogleBigqueryJob#enum_as_string}

---

### GoogleBigqueryJobLoadTimePartitioning <a name="GoogleBigqueryJobLoadTimePartitioning" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioning.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioning(
  type: str,
  expiration_ms: str = None,
  field: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioning.property.type">type</a></code> | <code>str</code> | The only type supported is DAY, which will generate one partition per day. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioning.property.expirationMs">expiration_ms</a></code> | <code>str</code> | Number of milliseconds for which to keep the storage for a partition. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioning.property.field">field</a></code> | <code>str</code> | If not set, the table is partitioned by pseudo column '_PARTITIONTIME'; |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioning.property.type"></a>

```python
type: str
```

- *Type:* str

The only type supported is DAY, which will generate one partition per day.

Providing an empty string used to cause an error,
but in OnePlatform the field will be treated as unset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#type GoogleBigqueryJob#type}

---

##### `expiration_ms`<sup>Optional</sup> <a name="expiration_ms" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioning.property.expirationMs"></a>

```python
expiration_ms: str
```

- *Type:* str

Number of milliseconds for which to keep the storage for a partition.

A wrapper is used here because 0 is an invalid value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#expiration_ms GoogleBigqueryJob#expiration_ms}

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioning.property.field"></a>

```python
field: str
```

- *Type:* str

If not set, the table is partitioned by pseudo column '_PARTITIONTIME';

if set, the table is partitioned by this field.
The field must be a top-level TIMESTAMP or DATE field. Its mode must be NULLABLE or REQUIRED.
A wrapper is used here because an empty string is an invalid value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#field GoogleBigqueryJob#field}

---

### GoogleBigqueryJobQuery <a name="GoogleBigqueryJobQuery" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJobQuery(
  query: str,
  allow_large_results: typing.Union[bool, IResolvable] = None,
  create_disposition: str = None,
  default_dataset: GoogleBigqueryJobQueryDefaultDataset = None,
  destination_encryption_configuration: GoogleBigqueryJobQueryDestinationEncryptionConfiguration = None,
  destination_table: GoogleBigqueryJobQueryDestinationTable = None,
  flatten_results: typing.Union[bool, IResolvable] = None,
  maximum_billing_tier: typing.Union[int, float] = None,
  maximum_bytes_billed: str = None,
  parameter_mode: str = None,
  priority: str = None,
  schema_update_options: typing.List[str] = None,
  script_options: GoogleBigqueryJobQueryScriptOptions = None,
  use_legacy_sql: typing.Union[bool, IResolvable] = None,
  use_query_cache: typing.Union[bool, IResolvable] = None,
  user_defined_function_resources: typing.Union[IResolvable, typing.List[GoogleBigqueryJobQueryUserDefinedFunctionResources]] = None,
  write_disposition: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.query">query</a></code> | <code>str</code> | SQL query text to execute. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.allowLargeResults">allow_large_results</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true and query uses legacy SQL dialect, allows the query to produce arbitrarily large result tables at a slight cost in performance. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.createDisposition">create_disposition</a></code> | <code>str</code> | Specifies whether the job is allowed to create new tables. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.defaultDataset">default_dataset</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDataset">GoogleBigqueryJobQueryDefaultDataset</a></code> | default_dataset block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.destinationEncryptionConfiguration">destination_encryption_configuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfiguration">GoogleBigqueryJobQueryDestinationEncryptionConfiguration</a></code> | destination_encryption_configuration block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.destinationTable">destination_table</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTable">GoogleBigqueryJobQueryDestinationTable</a></code> | destination_table block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.flattenResults">flatten_results</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true and query uses legacy SQL dialect, flattens all nested and repeated fields in the query results. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.maximumBillingTier">maximum_billing_tier</a></code> | <code>typing.Union[int, float]</code> | Limits the billing tier for this job. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.maximumBytesBilled">maximum_bytes_billed</a></code> | <code>str</code> | Limits the bytes billed for this job. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.parameterMode">parameter_mode</a></code> | <code>str</code> | Standard SQL only. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.priority">priority</a></code> | <code>str</code> | Specifies a priority for the query. Default value: "INTERACTIVE" Possible values: ["INTERACTIVE", "BATCH"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.schemaUpdateOptions">schema_update_options</a></code> | <code>typing.List[str]</code> | Allows the schema of the destination table to be updated as a side effect of the query job. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.scriptOptions">script_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptions">GoogleBigqueryJobQueryScriptOptions</a></code> | script_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.useLegacySql">use_legacy_sql</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to use BigQuery's legacy SQL dialect for this query. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.useQueryCache">use_query_cache</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to look for the result in the query cache. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.userDefinedFunctionResources">user_defined_function_resources</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResources">GoogleBigqueryJobQueryUserDefinedFunctionResources</a>]]</code> | user_defined_function_resources block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.writeDisposition">write_disposition</a></code> | <code>str</code> | Specifies the action that occurs if the destination table already exists. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.query"></a>

```python
query: str
```

- *Type:* str

SQL query text to execute.

The useLegacySql field can be used to indicate whether the query uses legacy SQL or standard SQL.
*NOTE*: queries containing [DML language](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language)
('DELETE', 'UPDATE', 'MERGE', 'INSERT') must specify 'create_disposition = ""' and 'write_disposition = ""'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#query GoogleBigqueryJob#query}

---

##### `allow_large_results`<sup>Optional</sup> <a name="allow_large_results" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.allowLargeResults"></a>

```python
allow_large_results: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true and query uses legacy SQL dialect, allows the query to produce arbitrarily large result tables at a slight cost in performance.

Requires destinationTable to be set. For standard SQL queries, this flag is ignored and large results are always allowed.
However, you must still set destinationTable when result size exceeds the allowed maximum response size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#allow_large_results GoogleBigqueryJob#allow_large_results}

---

##### `create_disposition`<sup>Optional</sup> <a name="create_disposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.createDisposition"></a>

```python
create_disposition: str
```

- *Type:* str

Specifies whether the job is allowed to create new tables.

The following values are supported:
CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table.
CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result.
Creation, truncation and append actions occur as one atomic update upon job completion Default value: "CREATE_IF_NEEDED" Possible values: ["CREATE_IF_NEEDED", "CREATE_NEVER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#create_disposition GoogleBigqueryJob#create_disposition}

---

##### `default_dataset`<sup>Optional</sup> <a name="default_dataset" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.defaultDataset"></a>

```python
default_dataset: GoogleBigqueryJobQueryDefaultDataset
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDataset">GoogleBigqueryJobQueryDefaultDataset</a>

default_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#default_dataset GoogleBigqueryJob#default_dataset}

---

##### `destination_encryption_configuration`<sup>Optional</sup> <a name="destination_encryption_configuration" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.destinationEncryptionConfiguration"></a>

```python
destination_encryption_configuration: GoogleBigqueryJobQueryDestinationEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfiguration">GoogleBigqueryJobQueryDestinationEncryptionConfiguration</a>

destination_encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#destination_encryption_configuration GoogleBigqueryJob#destination_encryption_configuration}

---

##### `destination_table`<sup>Optional</sup> <a name="destination_table" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.destinationTable"></a>

```python
destination_table: GoogleBigqueryJobQueryDestinationTable
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTable">GoogleBigqueryJobQueryDestinationTable</a>

destination_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#destination_table GoogleBigqueryJob#destination_table}

---

##### `flatten_results`<sup>Optional</sup> <a name="flatten_results" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.flattenResults"></a>

```python
flatten_results: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true and query uses legacy SQL dialect, flattens all nested and repeated fields in the query results.

allowLargeResults must be true if this is set to false. For standard SQL queries, this flag is ignored and results are never flattened.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#flatten_results GoogleBigqueryJob#flatten_results}

---

##### `maximum_billing_tier`<sup>Optional</sup> <a name="maximum_billing_tier" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.maximumBillingTier"></a>

```python
maximum_billing_tier: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Limits the billing tier for this job.

Queries that have resource usage beyond this tier will fail (without incurring a charge).
If unspecified, this will be set to your project default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#maximum_billing_tier GoogleBigqueryJob#maximum_billing_tier}

---

##### `maximum_bytes_billed`<sup>Optional</sup> <a name="maximum_bytes_billed" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.maximumBytesBilled"></a>

```python
maximum_bytes_billed: str
```

- *Type:* str

Limits the bytes billed for this job.

Queries that will have bytes billed beyond this limit will fail (without incurring a charge).
If unspecified, this will be set to your project default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#maximum_bytes_billed GoogleBigqueryJob#maximum_bytes_billed}

---

##### `parameter_mode`<sup>Optional</sup> <a name="parameter_mode" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.parameterMode"></a>

```python
parameter_mode: str
```

- *Type:* str

Standard SQL only.

Set to POSITIONAL to use positional (?) query parameters or to NAMED to use named (@myparam) query parameters in this query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#parameter_mode GoogleBigqueryJob#parameter_mode}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.priority"></a>

```python
priority: str
```

- *Type:* str

Specifies a priority for the query. Default value: "INTERACTIVE" Possible values: ["INTERACTIVE", "BATCH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#priority GoogleBigqueryJob#priority}

---

##### `schema_update_options`<sup>Optional</sup> <a name="schema_update_options" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.schemaUpdateOptions"></a>

```python
schema_update_options: typing.List[str]
```

- *Type:* typing.List[str]

Allows the schema of the destination table to be updated as a side effect of the query job.

Schema update options are supported in two cases: when writeDisposition is WRITE_APPEND;
when writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table,
specified by partition decorators. For normal tables, WRITE_TRUNCATE will always overwrite the schema.
One or more of the following values are specified:
ALLOW_FIELD_ADDITION: allow adding a nullable field to the schema.
ALLOW_FIELD_RELAXATION: allow relaxing a required field in the original schema to nullable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#schema_update_options GoogleBigqueryJob#schema_update_options}

---

##### `script_options`<sup>Optional</sup> <a name="script_options" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.scriptOptions"></a>

```python
script_options: GoogleBigqueryJobQueryScriptOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptions">GoogleBigqueryJobQueryScriptOptions</a>

script_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#script_options GoogleBigqueryJob#script_options}

---

##### `use_legacy_sql`<sup>Optional</sup> <a name="use_legacy_sql" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.useLegacySql"></a>

```python
use_legacy_sql: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to use BigQuery's legacy SQL dialect for this query.

The default value is true.
If set to false, the query will use BigQuery's standard SQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#use_legacy_sql GoogleBigqueryJob#use_legacy_sql}

---

##### `use_query_cache`<sup>Optional</sup> <a name="use_query_cache" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.useQueryCache"></a>

```python
use_query_cache: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to look for the result in the query cache.

The query cache is a best-effort cache that will be flushed whenever
tables in the query are modified. Moreover, the query cache is only available when a query does not have a destination table specified.
The default value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#use_query_cache GoogleBigqueryJob#use_query_cache}

---

##### `user_defined_function_resources`<sup>Optional</sup> <a name="user_defined_function_resources" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.userDefinedFunctionResources"></a>

```python
user_defined_function_resources: typing.Union[IResolvable, typing.List[GoogleBigqueryJobQueryUserDefinedFunctionResources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResources">GoogleBigqueryJobQueryUserDefinedFunctionResources</a>]]

user_defined_function_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#user_defined_function_resources GoogleBigqueryJob#user_defined_function_resources}

---

##### `write_disposition`<sup>Optional</sup> <a name="write_disposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.writeDisposition"></a>

```python
write_disposition: str
```

- *Type:* str

Specifies the action that occurs if the destination table already exists.

The following values are supported:
WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result.
WRITE_APPEND: If the table already exists, BigQuery appends the data to the table.
WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result.
Each action is atomic and only occurs if BigQuery is able to complete the job successfully.
Creation, truncation and append actions occur as one atomic update upon job completion. Default value: "WRITE_EMPTY" Possible values: ["WRITE_TRUNCATE", "WRITE_APPEND", "WRITE_EMPTY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#write_disposition GoogleBigqueryJob#write_disposition}

---

### GoogleBigqueryJobQueryDefaultDataset <a name="GoogleBigqueryJobQueryDefaultDataset" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDataset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDataset.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJobQueryDefaultDataset(
  dataset_id: str,
  project_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDataset.property.datasetId">dataset_id</a></code> | <code>str</code> | The dataset. Can be specified '{{dataset_id}}' if 'project_id' is also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}' if not. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDataset.property.projectId">project_id</a></code> | <code>str</code> | The ID of the project containing this table. |

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDataset.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

The dataset. Can be specified '{{dataset_id}}' if 'project_id' is also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}' if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#dataset_id GoogleBigqueryJob#dataset_id}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDataset.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#project_id GoogleBigqueryJob#project_id}

---

### GoogleBigqueryJobQueryDestinationEncryptionConfiguration <a name="GoogleBigqueryJobQueryDestinationEncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfiguration(
  kms_key_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfiguration.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table. |

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfiguration.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table.

The BigQuery Service Account associated with your project requires access to this encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#kms_key_name GoogleBigqueryJob#kms_key_name}

---

### GoogleBigqueryJobQueryDestinationTable <a name="GoogleBigqueryJobQueryDestinationTable" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTable.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJobQueryDestinationTable(
  table_id: str,
  dataset_id: str = None,
  project_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTable.property.tableId">table_id</a></code> | <code>str</code> | The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTable.property.datasetId">dataset_id</a></code> | <code>str</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTable.property.projectId">project_id</a></code> | <code>str</code> | The ID of the project containing this table. |

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTable.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#table_id GoogleBigqueryJob#table_id}

---

##### `dataset_id`<sup>Optional</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTable.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#dataset_id GoogleBigqueryJob#dataset_id}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTable.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#project_id GoogleBigqueryJob#project_id}

---

### GoogleBigqueryJobQueryScriptOptions <a name="GoogleBigqueryJobQueryScriptOptions" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJobQueryScriptOptions(
  key_result_statement: str = None,
  statement_byte_budget: str = None,
  statement_timeout_ms: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptions.property.keyResultStatement">key_result_statement</a></code> | <code>str</code> | Determines which statement in the script represents the "key result", used to populate the schema and query results of the script job. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptions.property.statementByteBudget">statement_byte_budget</a></code> | <code>str</code> | Limit on the number of bytes billed per statement. Exceeding this budget results in an error. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptions.property.statementTimeoutMs">statement_timeout_ms</a></code> | <code>str</code> | Timeout period for each statement in a script. |

---

##### `key_result_statement`<sup>Optional</sup> <a name="key_result_statement" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptions.property.keyResultStatement"></a>

```python
key_result_statement: str
```

- *Type:* str

Determines which statement in the script represents the "key result", used to populate the schema and query results of the script job.

Possible values: ["LAST", "FIRST_SELECT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#key_result_statement GoogleBigqueryJob#key_result_statement}

---

##### `statement_byte_budget`<sup>Optional</sup> <a name="statement_byte_budget" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptions.property.statementByteBudget"></a>

```python
statement_byte_budget: str
```

- *Type:* str

Limit on the number of bytes billed per statement. Exceeding this budget results in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#statement_byte_budget GoogleBigqueryJob#statement_byte_budget}

---

##### `statement_timeout_ms`<sup>Optional</sup> <a name="statement_timeout_ms" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptions.property.statementTimeoutMs"></a>

```python
statement_timeout_ms: str
```

- *Type:* str

Timeout period for each statement in a script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#statement_timeout_ms GoogleBigqueryJob#statement_timeout_ms}

---

### GoogleBigqueryJobQueryUserDefinedFunctionResources <a name="GoogleBigqueryJobQueryUserDefinedFunctionResources" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResources.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResources(
  inline_code: str = None,
  resource_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResources.property.inlineCode">inline_code</a></code> | <code>str</code> | An inline resource that contains code for a user-defined function (UDF). |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResources.property.resourceUri">resource_uri</a></code> | <code>str</code> | A code resource to load from a Google Cloud Storage URI (gs://bucket/path). |

---

##### `inline_code`<sup>Optional</sup> <a name="inline_code" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResources.property.inlineCode"></a>

```python
inline_code: str
```

- *Type:* str

An inline resource that contains code for a user-defined function (UDF).

Providing a inline code resource is equivalent to providing a URI for a file containing the same code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#inline_code GoogleBigqueryJob#inline_code}

---

##### `resource_uri`<sup>Optional</sup> <a name="resource_uri" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResources.property.resourceUri"></a>

```python
resource_uri: str
```

- *Type:* str

A code resource to load from a Google Cloud Storage URI (gs://bucket/path).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#resource_uri GoogleBigqueryJob#resource_uri}

---

### GoogleBigqueryJobStatus <a name="GoogleBigqueryJobStatus" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJobStatus()
```


### GoogleBigqueryJobStatusErrorResult <a name="GoogleBigqueryJobStatusErrorResult" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResult.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJobStatusErrorResult()
```


### GoogleBigqueryJobStatusErrors <a name="GoogleBigqueryJobStatusErrors" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrors.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJobStatusErrors()
```


### GoogleBigqueryJobTimeouts <a name="GoogleBigqueryJobTimeouts" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJobTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#create GoogleBigqueryJob#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#delete GoogleBigqueryJob#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#update GoogleBigqueryJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#create GoogleBigqueryJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#delete GoogleBigqueryJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#update GoogleBigqueryJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference <a name="GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.kmsKeyVersion">kms_key_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfiguration">GoogleBigqueryJobCopyDestinationEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_version`<sup>Required</sup> <a name="kms_key_version" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.kmsKeyVersion"></a>

```python
kms_key_version: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryJobCopyDestinationEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfiguration">GoogleBigqueryJobCopyDestinationEncryptionConfiguration</a>

---


### GoogleBigqueryJobCopyDestinationTableOutputReference <a name="GoogleBigqueryJobCopyDestinationTableOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.resetDatasetId">reset_dataset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.resetProjectId">reset_project_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dataset_id` <a name="reset_dataset_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.resetDatasetId"></a>

```python
def reset_dataset_id() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.resetProjectId"></a>

```python
def reset_project_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.datasetIdInput">dataset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.tableIdInput">table_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.tableId">table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTable">GoogleBigqueryJobCopyDestinationTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_id_input`<sup>Optional</sup> <a name="dataset_id_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.datasetIdInput"></a>

```python
dataset_id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `table_id_input`<sup>Optional</sup> <a name="table_id_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.tableIdInput"></a>

```python
table_id_input: str
```

- *Type:* str

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryJobCopyDestinationTable
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTable">GoogleBigqueryJobCopyDestinationTable</a>

---


### GoogleBigqueryJobCopyOutputReference <a name="GoogleBigqueryJobCopyOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJobCopyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.putDestinationEncryptionConfiguration">put_destination_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.putDestinationTable">put_destination_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.putSourceTables">put_source_tables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.resetCreateDisposition">reset_create_disposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.resetDestinationEncryptionConfiguration">reset_destination_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.resetDestinationTable">reset_destination_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.resetWriteDisposition">reset_write_disposition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_destination_encryption_configuration` <a name="put_destination_encryption_configuration" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.putDestinationEncryptionConfiguration"></a>

```python
def put_destination_encryption_configuration(
  kms_key_name: str
) -> None
```

###### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.putDestinationEncryptionConfiguration.parameter.kmsKeyName"></a>

- *Type:* str

Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table.

The BigQuery Service Account associated with your project requires access to this encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#kms_key_name GoogleBigqueryJob#kms_key_name}

---

##### `put_destination_table` <a name="put_destination_table" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.putDestinationTable"></a>

```python
def put_destination_table(
  table_id: str,
  dataset_id: str = None,
  project_id: str = None
) -> None
```

###### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.putDestinationTable.parameter.tableId"></a>

- *Type:* str

The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#table_id GoogleBigqueryJob#table_id}

---

###### `dataset_id`<sup>Optional</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.putDestinationTable.parameter.datasetId"></a>

- *Type:* str

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#dataset_id GoogleBigqueryJob#dataset_id}

---

###### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.putDestinationTable.parameter.projectId"></a>

- *Type:* str

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#project_id GoogleBigqueryJob#project_id}

---

##### `put_source_tables` <a name="put_source_tables" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.putSourceTables"></a>

```python
def put_source_tables(
  value: typing.Union[IResolvable, typing.List[GoogleBigqueryJobCopySourceTables]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.putSourceTables.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTables">GoogleBigqueryJobCopySourceTables</a>]]

---

##### `reset_create_disposition` <a name="reset_create_disposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.resetCreateDisposition"></a>

```python
def reset_create_disposition() -> None
```

##### `reset_destination_encryption_configuration` <a name="reset_destination_encryption_configuration" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.resetDestinationEncryptionConfiguration"></a>

```python
def reset_destination_encryption_configuration() -> None
```

##### `reset_destination_table` <a name="reset_destination_table" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.resetDestinationTable"></a>

```python
def reset_destination_table() -> None
```

##### `reset_write_disposition` <a name="reset_write_disposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.resetWriteDisposition"></a>

```python
def reset_write_disposition() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.destinationEncryptionConfiguration">destination_encryption_configuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference">GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.destinationTable">destination_table</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference">GoogleBigqueryJobCopyDestinationTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.sourceTables">source_tables</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList">GoogleBigqueryJobCopySourceTablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.createDispositionInput">create_disposition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.destinationEncryptionConfigurationInput">destination_encryption_configuration_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfiguration">GoogleBigqueryJobCopyDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.destinationTableInput">destination_table_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTable">GoogleBigqueryJobCopyDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.sourceTablesInput">source_tables_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTables">GoogleBigqueryJobCopySourceTables</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.writeDispositionInput">write_disposition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.createDisposition">create_disposition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.writeDisposition">write_disposition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy">GoogleBigqueryJobCopy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_encryption_configuration`<sup>Required</sup> <a name="destination_encryption_configuration" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.destinationEncryptionConfiguration"></a>

```python
destination_encryption_configuration: GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference">GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference</a>

---

##### `destination_table`<sup>Required</sup> <a name="destination_table" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.destinationTable"></a>

```python
destination_table: GoogleBigqueryJobCopyDestinationTableOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference">GoogleBigqueryJobCopyDestinationTableOutputReference</a>

---

##### `source_tables`<sup>Required</sup> <a name="source_tables" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.sourceTables"></a>

```python
source_tables: GoogleBigqueryJobCopySourceTablesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList">GoogleBigqueryJobCopySourceTablesList</a>

---

##### `create_disposition_input`<sup>Optional</sup> <a name="create_disposition_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.createDispositionInput"></a>

```python
create_disposition_input: str
```

- *Type:* str

---

##### `destination_encryption_configuration_input`<sup>Optional</sup> <a name="destination_encryption_configuration_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.destinationEncryptionConfigurationInput"></a>

```python
destination_encryption_configuration_input: GoogleBigqueryJobCopyDestinationEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfiguration">GoogleBigqueryJobCopyDestinationEncryptionConfiguration</a>

---

##### `destination_table_input`<sup>Optional</sup> <a name="destination_table_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.destinationTableInput"></a>

```python
destination_table_input: GoogleBigqueryJobCopyDestinationTable
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTable">GoogleBigqueryJobCopyDestinationTable</a>

---

##### `source_tables_input`<sup>Optional</sup> <a name="source_tables_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.sourceTablesInput"></a>

```python
source_tables_input: typing.Union[IResolvable, typing.List[GoogleBigqueryJobCopySourceTables]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTables">GoogleBigqueryJobCopySourceTables</a>]]

---

##### `write_disposition_input`<sup>Optional</sup> <a name="write_disposition_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.writeDispositionInput"></a>

```python
write_disposition_input: str
```

- *Type:* str

---

##### `create_disposition`<sup>Required</sup> <a name="create_disposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.createDisposition"></a>

```python
create_disposition: str
```

- *Type:* str

---

##### `write_disposition`<sup>Required</sup> <a name="write_disposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.writeDisposition"></a>

```python
write_disposition: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryJobCopy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy">GoogleBigqueryJobCopy</a>

---


### GoogleBigqueryJobCopySourceTablesList <a name="GoogleBigqueryJobCopySourceTablesList" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleBigqueryJobCopySourceTablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTables">GoogleBigqueryJobCopySourceTables</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleBigqueryJobCopySourceTables]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTables">GoogleBigqueryJobCopySourceTables</a>]]

---


### GoogleBigqueryJobCopySourceTablesOutputReference <a name="GoogleBigqueryJobCopySourceTablesOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.resetDatasetId">reset_dataset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.resetProjectId">reset_project_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dataset_id` <a name="reset_dataset_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.resetDatasetId"></a>

```python
def reset_dataset_id() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.resetProjectId"></a>

```python
def reset_project_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.datasetIdInput">dataset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.tableIdInput">table_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.tableId">table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTables">GoogleBigqueryJobCopySourceTables</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_id_input`<sup>Optional</sup> <a name="dataset_id_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.datasetIdInput"></a>

```python
dataset_id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `table_id_input`<sup>Optional</sup> <a name="table_id_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.tableIdInput"></a>

```python
table_id_input: str
```

- *Type:* str

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleBigqueryJobCopySourceTables]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTables">GoogleBigqueryJobCopySourceTables</a>]

---


### GoogleBigqueryJobExtractOutputReference <a name="GoogleBigqueryJobExtractOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJobExtractOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.putSourceModel">put_source_model</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.putSourceTable">put_source_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.resetCompression">reset_compression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.resetDestinationFormat">reset_destination_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.resetFieldDelimiter">reset_field_delimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.resetPrintHeader">reset_print_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.resetSourceModel">reset_source_model</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.resetSourceTable">reset_source_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.resetUseAvroLogicalTypes">reset_use_avro_logical_types</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_source_model` <a name="put_source_model" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.putSourceModel"></a>

```python
def put_source_model(
  dataset_id: str,
  model_id: str,
  project_id: str
) -> None
```

###### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.putSourceModel.parameter.datasetId"></a>

- *Type:* str

The ID of the dataset containing this model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#dataset_id GoogleBigqueryJob#dataset_id}

---

###### `model_id`<sup>Required</sup> <a name="model_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.putSourceModel.parameter.modelId"></a>

- *Type:* str

The ID of the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#model_id GoogleBigqueryJob#model_id}

---

###### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.putSourceModel.parameter.projectId"></a>

- *Type:* str

The ID of the project containing this model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#project_id GoogleBigqueryJob#project_id}

---

##### `put_source_table` <a name="put_source_table" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.putSourceTable"></a>

```python
def put_source_table(
  table_id: str,
  dataset_id: str = None,
  project_id: str = None
) -> None
```

###### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.putSourceTable.parameter.tableId"></a>

- *Type:* str

The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#table_id GoogleBigqueryJob#table_id}

---

###### `dataset_id`<sup>Optional</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.putSourceTable.parameter.datasetId"></a>

- *Type:* str

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#dataset_id GoogleBigqueryJob#dataset_id}

---

###### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.putSourceTable.parameter.projectId"></a>

- *Type:* str

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#project_id GoogleBigqueryJob#project_id}

---

##### `reset_compression` <a name="reset_compression" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.resetCompression"></a>

```python
def reset_compression() -> None
```

##### `reset_destination_format` <a name="reset_destination_format" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.resetDestinationFormat"></a>

```python
def reset_destination_format() -> None
```

##### `reset_field_delimiter` <a name="reset_field_delimiter" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.resetFieldDelimiter"></a>

```python
def reset_field_delimiter() -> None
```

##### `reset_print_header` <a name="reset_print_header" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.resetPrintHeader"></a>

```python
def reset_print_header() -> None
```

##### `reset_source_model` <a name="reset_source_model" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.resetSourceModel"></a>

```python
def reset_source_model() -> None
```

##### `reset_source_table` <a name="reset_source_table" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.resetSourceTable"></a>

```python
def reset_source_table() -> None
```

##### `reset_use_avro_logical_types` <a name="reset_use_avro_logical_types" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.resetUseAvroLogicalTypes"></a>

```python
def reset_use_avro_logical_types() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.sourceModel">source_model</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference">GoogleBigqueryJobExtractSourceModelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.sourceTable">source_table</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference">GoogleBigqueryJobExtractSourceTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.compressionInput">compression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.destinationFormatInput">destination_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.destinationUrisInput">destination_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.fieldDelimiterInput">field_delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.printHeaderInput">print_header_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.sourceModelInput">source_model_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModel">GoogleBigqueryJobExtractSourceModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.sourceTableInput">source_table_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTable">GoogleBigqueryJobExtractSourceTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.useAvroLogicalTypesInput">use_avro_logical_types_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.destinationFormat">destination_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.destinationUris">destination_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.fieldDelimiter">field_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.printHeader">print_header</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.useAvroLogicalTypes">use_avro_logical_types</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract">GoogleBigqueryJobExtract</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_model`<sup>Required</sup> <a name="source_model" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.sourceModel"></a>

```python
source_model: GoogleBigqueryJobExtractSourceModelOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference">GoogleBigqueryJobExtractSourceModelOutputReference</a>

---

##### `source_table`<sup>Required</sup> <a name="source_table" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.sourceTable"></a>

```python
source_table: GoogleBigqueryJobExtractSourceTableOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference">GoogleBigqueryJobExtractSourceTableOutputReference</a>

---

##### `compression_input`<sup>Optional</sup> <a name="compression_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.compressionInput"></a>

```python
compression_input: str
```

- *Type:* str

---

##### `destination_format_input`<sup>Optional</sup> <a name="destination_format_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.destinationFormatInput"></a>

```python
destination_format_input: str
```

- *Type:* str

---

##### `destination_uris_input`<sup>Optional</sup> <a name="destination_uris_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.destinationUrisInput"></a>

```python
destination_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `field_delimiter_input`<sup>Optional</sup> <a name="field_delimiter_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.fieldDelimiterInput"></a>

```python
field_delimiter_input: str
```

- *Type:* str

---

##### `print_header_input`<sup>Optional</sup> <a name="print_header_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.printHeaderInput"></a>

```python
print_header_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `source_model_input`<sup>Optional</sup> <a name="source_model_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.sourceModelInput"></a>

```python
source_model_input: GoogleBigqueryJobExtractSourceModel
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModel">GoogleBigqueryJobExtractSourceModel</a>

---

##### `source_table_input`<sup>Optional</sup> <a name="source_table_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.sourceTableInput"></a>

```python
source_table_input: GoogleBigqueryJobExtractSourceTable
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTable">GoogleBigqueryJobExtractSourceTable</a>

---

##### `use_avro_logical_types_input`<sup>Optional</sup> <a name="use_avro_logical_types_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.useAvroLogicalTypesInput"></a>

```python
use_avro_logical_types_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `destination_format`<sup>Required</sup> <a name="destination_format" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.destinationFormat"></a>

```python
destination_format: str
```

- *Type:* str

---

##### `destination_uris`<sup>Required</sup> <a name="destination_uris" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.destinationUris"></a>

```python
destination_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `field_delimiter`<sup>Required</sup> <a name="field_delimiter" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.fieldDelimiter"></a>

```python
field_delimiter: str
```

- *Type:* str

---

##### `print_header`<sup>Required</sup> <a name="print_header" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.printHeader"></a>

```python
print_header: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_avro_logical_types`<sup>Required</sup> <a name="use_avro_logical_types" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.useAvroLogicalTypes"></a>

```python
use_avro_logical_types: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryJobExtract
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract">GoogleBigqueryJobExtract</a>

---


### GoogleBigqueryJobExtractSourceModelOutputReference <a name="GoogleBigqueryJobExtractSourceModelOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.datasetIdInput">dataset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.modelIdInput">model_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.modelId">model_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModel">GoogleBigqueryJobExtractSourceModel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_id_input`<sup>Optional</sup> <a name="dataset_id_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.datasetIdInput"></a>

```python
dataset_id_input: str
```

- *Type:* str

---

##### `model_id_input`<sup>Optional</sup> <a name="model_id_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.modelIdInput"></a>

```python
model_id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.modelId"></a>

```python
model_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryJobExtractSourceModel
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModel">GoogleBigqueryJobExtractSourceModel</a>

---


### GoogleBigqueryJobExtractSourceTableOutputReference <a name="GoogleBigqueryJobExtractSourceTableOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.resetDatasetId">reset_dataset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.resetProjectId">reset_project_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dataset_id` <a name="reset_dataset_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.resetDatasetId"></a>

```python
def reset_dataset_id() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.resetProjectId"></a>

```python
def reset_project_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.datasetIdInput">dataset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.tableIdInput">table_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.tableId">table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTable">GoogleBigqueryJobExtractSourceTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_id_input`<sup>Optional</sup> <a name="dataset_id_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.datasetIdInput"></a>

```python
dataset_id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `table_id_input`<sup>Optional</sup> <a name="table_id_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.tableIdInput"></a>

```python
table_id_input: str
```

- *Type:* str

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryJobExtractSourceTable
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTable">GoogleBigqueryJobExtractSourceTable</a>

---


### GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference <a name="GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.kmsKeyVersion">kms_key_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfiguration">GoogleBigqueryJobLoadDestinationEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_version`<sup>Required</sup> <a name="kms_key_version" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.kmsKeyVersion"></a>

```python
kms_key_version: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryJobLoadDestinationEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfiguration">GoogleBigqueryJobLoadDestinationEncryptionConfiguration</a>

---


### GoogleBigqueryJobLoadDestinationTableOutputReference <a name="GoogleBigqueryJobLoadDestinationTableOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.resetDatasetId">reset_dataset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.resetProjectId">reset_project_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dataset_id` <a name="reset_dataset_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.resetDatasetId"></a>

```python
def reset_dataset_id() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.resetProjectId"></a>

```python
def reset_project_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.datasetIdInput">dataset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.tableIdInput">table_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.tableId">table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTable">GoogleBigqueryJobLoadDestinationTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_id_input`<sup>Optional</sup> <a name="dataset_id_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.datasetIdInput"></a>

```python
dataset_id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `table_id_input`<sup>Optional</sup> <a name="table_id_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.tableIdInput"></a>

```python
table_id_input: str
```

- *Type:* str

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryJobLoadDestinationTable
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTable">GoogleBigqueryJobLoadDestinationTable</a>

---


### GoogleBigqueryJobLoadOutputReference <a name="GoogleBigqueryJobLoadOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJobLoadOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.putDestinationEncryptionConfiguration">put_destination_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.putDestinationTable">put_destination_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.putParquetOptions">put_parquet_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.putTimePartitioning">put_time_partitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetAllowJaggedRows">reset_allow_jagged_rows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetAllowQuotedNewlines">reset_allow_quoted_newlines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetAutodetect">reset_autodetect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetCreateDisposition">reset_create_disposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetDestinationEncryptionConfiguration">reset_destination_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetEncoding">reset_encoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetFieldDelimiter">reset_field_delimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetIgnoreUnknownValues">reset_ignore_unknown_values</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetJsonExtension">reset_json_extension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetMaxBadRecords">reset_max_bad_records</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetNullMarker">reset_null_marker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetParquetOptions">reset_parquet_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetProjectionFields">reset_projection_fields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetQuote">reset_quote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetSchemaUpdateOptions">reset_schema_update_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetSkipLeadingRows">reset_skip_leading_rows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetSourceFormat">reset_source_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetTimePartitioning">reset_time_partitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetWriteDisposition">reset_write_disposition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_destination_encryption_configuration` <a name="put_destination_encryption_configuration" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.putDestinationEncryptionConfiguration"></a>

```python
def put_destination_encryption_configuration(
  kms_key_name: str
) -> None
```

###### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.putDestinationEncryptionConfiguration.parameter.kmsKeyName"></a>

- *Type:* str

Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table.

The BigQuery Service Account associated with your project requires access to this encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#kms_key_name GoogleBigqueryJob#kms_key_name}

---

##### `put_destination_table` <a name="put_destination_table" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.putDestinationTable"></a>

```python
def put_destination_table(
  table_id: str,
  dataset_id: str = None,
  project_id: str = None
) -> None
```

###### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.putDestinationTable.parameter.tableId"></a>

- *Type:* str

The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#table_id GoogleBigqueryJob#table_id}

---

###### `dataset_id`<sup>Optional</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.putDestinationTable.parameter.datasetId"></a>

- *Type:* str

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#dataset_id GoogleBigqueryJob#dataset_id}

---

###### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.putDestinationTable.parameter.projectId"></a>

- *Type:* str

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#project_id GoogleBigqueryJob#project_id}

---

##### `put_parquet_options` <a name="put_parquet_options" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.putParquetOptions"></a>

```python
def put_parquet_options(
  enable_list_inference: typing.Union[bool, IResolvable] = None,
  enum_as_string: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enable_list_inference`<sup>Optional</sup> <a name="enable_list_inference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.putParquetOptions.parameter.enableListInference"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If sourceFormat is set to PARQUET, indicates whether to use schema inference specifically for Parquet LIST logical type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#enable_list_inference GoogleBigqueryJob#enable_list_inference}

---

###### `enum_as_string`<sup>Optional</sup> <a name="enum_as_string" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.putParquetOptions.parameter.enumAsString"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If sourceFormat is set to PARQUET, indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#enum_as_string GoogleBigqueryJob#enum_as_string}

---

##### `put_time_partitioning` <a name="put_time_partitioning" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.putTimePartitioning"></a>

```python
def put_time_partitioning(
  type: str,
  expiration_ms: str = None,
  field: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.putTimePartitioning.parameter.type"></a>

- *Type:* str

The only type supported is DAY, which will generate one partition per day.

Providing an empty string used to cause an error,
but in OnePlatform the field will be treated as unset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#type GoogleBigqueryJob#type}

---

###### `expiration_ms`<sup>Optional</sup> <a name="expiration_ms" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.putTimePartitioning.parameter.expirationMs"></a>

- *Type:* str

Number of milliseconds for which to keep the storage for a partition.

A wrapper is used here because 0 is an invalid value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#expiration_ms GoogleBigqueryJob#expiration_ms}

---

###### `field`<sup>Optional</sup> <a name="field" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.putTimePartitioning.parameter.field"></a>

- *Type:* str

If not set, the table is partitioned by pseudo column '_PARTITIONTIME';

if set, the table is partitioned by this field.
The field must be a top-level TIMESTAMP or DATE field. Its mode must be NULLABLE or REQUIRED.
A wrapper is used here because an empty string is an invalid value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#field GoogleBigqueryJob#field}

---

##### `reset_allow_jagged_rows` <a name="reset_allow_jagged_rows" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetAllowJaggedRows"></a>

```python
def reset_allow_jagged_rows() -> None
```

##### `reset_allow_quoted_newlines` <a name="reset_allow_quoted_newlines" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetAllowQuotedNewlines"></a>

```python
def reset_allow_quoted_newlines() -> None
```

##### `reset_autodetect` <a name="reset_autodetect" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetAutodetect"></a>

```python
def reset_autodetect() -> None
```

##### `reset_create_disposition` <a name="reset_create_disposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetCreateDisposition"></a>

```python
def reset_create_disposition() -> None
```

##### `reset_destination_encryption_configuration` <a name="reset_destination_encryption_configuration" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetDestinationEncryptionConfiguration"></a>

```python
def reset_destination_encryption_configuration() -> None
```

##### `reset_encoding` <a name="reset_encoding" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetEncoding"></a>

```python
def reset_encoding() -> None
```

##### `reset_field_delimiter` <a name="reset_field_delimiter" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetFieldDelimiter"></a>

```python
def reset_field_delimiter() -> None
```

##### `reset_ignore_unknown_values` <a name="reset_ignore_unknown_values" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetIgnoreUnknownValues"></a>

```python
def reset_ignore_unknown_values() -> None
```

##### `reset_json_extension` <a name="reset_json_extension" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetJsonExtension"></a>

```python
def reset_json_extension() -> None
```

##### `reset_max_bad_records` <a name="reset_max_bad_records" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetMaxBadRecords"></a>

```python
def reset_max_bad_records() -> None
```

##### `reset_null_marker` <a name="reset_null_marker" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetNullMarker"></a>

```python
def reset_null_marker() -> None
```

##### `reset_parquet_options` <a name="reset_parquet_options" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetParquetOptions"></a>

```python
def reset_parquet_options() -> None
```

##### `reset_projection_fields` <a name="reset_projection_fields" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetProjectionFields"></a>

```python
def reset_projection_fields() -> None
```

##### `reset_quote` <a name="reset_quote" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetQuote"></a>

```python
def reset_quote() -> None
```

##### `reset_schema_update_options` <a name="reset_schema_update_options" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetSchemaUpdateOptions"></a>

```python
def reset_schema_update_options() -> None
```

##### `reset_skip_leading_rows` <a name="reset_skip_leading_rows" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetSkipLeadingRows"></a>

```python
def reset_skip_leading_rows() -> None
```

##### `reset_source_format` <a name="reset_source_format" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetSourceFormat"></a>

```python
def reset_source_format() -> None
```

##### `reset_time_partitioning` <a name="reset_time_partitioning" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetTimePartitioning"></a>

```python
def reset_time_partitioning() -> None
```

##### `reset_write_disposition` <a name="reset_write_disposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetWriteDisposition"></a>

```python
def reset_write_disposition() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.destinationEncryptionConfiguration">destination_encryption_configuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference">GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.destinationTable">destination_table</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference">GoogleBigqueryJobLoadDestinationTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.parquetOptions">parquet_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference">GoogleBigqueryJobLoadParquetOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.timePartitioning">time_partitioning</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference">GoogleBigqueryJobLoadTimePartitioningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.allowJaggedRowsInput">allow_jagged_rows_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.allowQuotedNewlinesInput">allow_quoted_newlines_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.autodetectInput">autodetect_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.createDispositionInput">create_disposition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.destinationEncryptionConfigurationInput">destination_encryption_configuration_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfiguration">GoogleBigqueryJobLoadDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.destinationTableInput">destination_table_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTable">GoogleBigqueryJobLoadDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.encodingInput">encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.fieldDelimiterInput">field_delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.ignoreUnknownValuesInput">ignore_unknown_values_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.jsonExtensionInput">json_extension_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.maxBadRecordsInput">max_bad_records_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.nullMarkerInput">null_marker_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.parquetOptionsInput">parquet_options_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptions">GoogleBigqueryJobLoadParquetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.projectionFieldsInput">projection_fields_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.quoteInput">quote_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.schemaUpdateOptionsInput">schema_update_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.skipLeadingRowsInput">skip_leading_rows_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.sourceFormatInput">source_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.sourceUrisInput">source_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.timePartitioningInput">time_partitioning_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioning">GoogleBigqueryJobLoadTimePartitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.writeDispositionInput">write_disposition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.allowJaggedRows">allow_jagged_rows</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.allowQuotedNewlines">allow_quoted_newlines</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.autodetect">autodetect</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.createDisposition">create_disposition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.encoding">encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.fieldDelimiter">field_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.ignoreUnknownValues">ignore_unknown_values</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.jsonExtension">json_extension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.maxBadRecords">max_bad_records</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.nullMarker">null_marker</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.projectionFields">projection_fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.quote">quote</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.schemaUpdateOptions">schema_update_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.skipLeadingRows">skip_leading_rows</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.sourceFormat">source_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.sourceUris">source_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.writeDisposition">write_disposition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad">GoogleBigqueryJobLoad</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_encryption_configuration`<sup>Required</sup> <a name="destination_encryption_configuration" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.destinationEncryptionConfiguration"></a>

```python
destination_encryption_configuration: GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference">GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference</a>

---

##### `destination_table`<sup>Required</sup> <a name="destination_table" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.destinationTable"></a>

```python
destination_table: GoogleBigqueryJobLoadDestinationTableOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference">GoogleBigqueryJobLoadDestinationTableOutputReference</a>

---

##### `parquet_options`<sup>Required</sup> <a name="parquet_options" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.parquetOptions"></a>

```python
parquet_options: GoogleBigqueryJobLoadParquetOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference">GoogleBigqueryJobLoadParquetOptionsOutputReference</a>

---

##### `time_partitioning`<sup>Required</sup> <a name="time_partitioning" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.timePartitioning"></a>

```python
time_partitioning: GoogleBigqueryJobLoadTimePartitioningOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference">GoogleBigqueryJobLoadTimePartitioningOutputReference</a>

---

##### `allow_jagged_rows_input`<sup>Optional</sup> <a name="allow_jagged_rows_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.allowJaggedRowsInput"></a>

```python
allow_jagged_rows_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_quoted_newlines_input`<sup>Optional</sup> <a name="allow_quoted_newlines_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.allowQuotedNewlinesInput"></a>

```python
allow_quoted_newlines_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `autodetect_input`<sup>Optional</sup> <a name="autodetect_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.autodetectInput"></a>

```python
autodetect_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `create_disposition_input`<sup>Optional</sup> <a name="create_disposition_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.createDispositionInput"></a>

```python
create_disposition_input: str
```

- *Type:* str

---

##### `destination_encryption_configuration_input`<sup>Optional</sup> <a name="destination_encryption_configuration_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.destinationEncryptionConfigurationInput"></a>

```python
destination_encryption_configuration_input: GoogleBigqueryJobLoadDestinationEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfiguration">GoogleBigqueryJobLoadDestinationEncryptionConfiguration</a>

---

##### `destination_table_input`<sup>Optional</sup> <a name="destination_table_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.destinationTableInput"></a>

```python
destination_table_input: GoogleBigqueryJobLoadDestinationTable
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTable">GoogleBigqueryJobLoadDestinationTable</a>

---

##### `encoding_input`<sup>Optional</sup> <a name="encoding_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.encodingInput"></a>

```python
encoding_input: str
```

- *Type:* str

---

##### `field_delimiter_input`<sup>Optional</sup> <a name="field_delimiter_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.fieldDelimiterInput"></a>

```python
field_delimiter_input: str
```

- *Type:* str

---

##### `ignore_unknown_values_input`<sup>Optional</sup> <a name="ignore_unknown_values_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.ignoreUnknownValuesInput"></a>

```python
ignore_unknown_values_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `json_extension_input`<sup>Optional</sup> <a name="json_extension_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.jsonExtensionInput"></a>

```python
json_extension_input: str
```

- *Type:* str

---

##### `max_bad_records_input`<sup>Optional</sup> <a name="max_bad_records_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.maxBadRecordsInput"></a>

```python
max_bad_records_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `null_marker_input`<sup>Optional</sup> <a name="null_marker_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.nullMarkerInput"></a>

```python
null_marker_input: str
```

- *Type:* str

---

##### `parquet_options_input`<sup>Optional</sup> <a name="parquet_options_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.parquetOptionsInput"></a>

```python
parquet_options_input: GoogleBigqueryJobLoadParquetOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptions">GoogleBigqueryJobLoadParquetOptions</a>

---

##### `projection_fields_input`<sup>Optional</sup> <a name="projection_fields_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.projectionFieldsInput"></a>

```python
projection_fields_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `quote_input`<sup>Optional</sup> <a name="quote_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.quoteInput"></a>

```python
quote_input: str
```

- *Type:* str

---

##### `schema_update_options_input`<sup>Optional</sup> <a name="schema_update_options_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.schemaUpdateOptionsInput"></a>

```python
schema_update_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `skip_leading_rows_input`<sup>Optional</sup> <a name="skip_leading_rows_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.skipLeadingRowsInput"></a>

```python
skip_leading_rows_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_format_input`<sup>Optional</sup> <a name="source_format_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.sourceFormatInput"></a>

```python
source_format_input: str
```

- *Type:* str

---

##### `source_uris_input`<sup>Optional</sup> <a name="source_uris_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.sourceUrisInput"></a>

```python
source_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time_partitioning_input`<sup>Optional</sup> <a name="time_partitioning_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.timePartitioningInput"></a>

```python
time_partitioning_input: GoogleBigqueryJobLoadTimePartitioning
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioning">GoogleBigqueryJobLoadTimePartitioning</a>

---

##### `write_disposition_input`<sup>Optional</sup> <a name="write_disposition_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.writeDispositionInput"></a>

```python
write_disposition_input: str
```

- *Type:* str

---

##### `allow_jagged_rows`<sup>Required</sup> <a name="allow_jagged_rows" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.allowJaggedRows"></a>

```python
allow_jagged_rows: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_quoted_newlines`<sup>Required</sup> <a name="allow_quoted_newlines" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.allowQuotedNewlines"></a>

```python
allow_quoted_newlines: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `autodetect`<sup>Required</sup> <a name="autodetect" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.autodetect"></a>

```python
autodetect: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `create_disposition`<sup>Required</sup> <a name="create_disposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.createDisposition"></a>

```python
create_disposition: str
```

- *Type:* str

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

---

##### `field_delimiter`<sup>Required</sup> <a name="field_delimiter" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.fieldDelimiter"></a>

```python
field_delimiter: str
```

- *Type:* str

---

##### `ignore_unknown_values`<sup>Required</sup> <a name="ignore_unknown_values" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.ignoreUnknownValues"></a>

```python
ignore_unknown_values: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `json_extension`<sup>Required</sup> <a name="json_extension" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.jsonExtension"></a>

```python
json_extension: str
```

- *Type:* str

---

##### `max_bad_records`<sup>Required</sup> <a name="max_bad_records" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.maxBadRecords"></a>

```python
max_bad_records: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `null_marker`<sup>Required</sup> <a name="null_marker" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.nullMarker"></a>

```python
null_marker: str
```

- *Type:* str

---

##### `projection_fields`<sup>Required</sup> <a name="projection_fields" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.projectionFields"></a>

```python
projection_fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `quote`<sup>Required</sup> <a name="quote" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.quote"></a>

```python
quote: str
```

- *Type:* str

---

##### `schema_update_options`<sup>Required</sup> <a name="schema_update_options" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.schemaUpdateOptions"></a>

```python
schema_update_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `skip_leading_rows`<sup>Required</sup> <a name="skip_leading_rows" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.skipLeadingRows"></a>

```python
skip_leading_rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_format`<sup>Required</sup> <a name="source_format" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.sourceFormat"></a>

```python
source_format: str
```

- *Type:* str

---

##### `source_uris`<sup>Required</sup> <a name="source_uris" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.sourceUris"></a>

```python
source_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `write_disposition`<sup>Required</sup> <a name="write_disposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.writeDisposition"></a>

```python
write_disposition: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryJobLoad
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad">GoogleBigqueryJobLoad</a>

---


### GoogleBigqueryJobLoadParquetOptionsOutputReference <a name="GoogleBigqueryJobLoadParquetOptionsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.resetEnableListInference">reset_enable_list_inference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.resetEnumAsString">reset_enum_as_string</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_list_inference` <a name="reset_enable_list_inference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.resetEnableListInference"></a>

```python
def reset_enable_list_inference() -> None
```

##### `reset_enum_as_string` <a name="reset_enum_as_string" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.resetEnumAsString"></a>

```python
def reset_enum_as_string() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.property.enableListInferenceInput">enable_list_inference_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.property.enumAsStringInput">enum_as_string_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.property.enableListInference">enable_list_inference</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.property.enumAsString">enum_as_string</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptions">GoogleBigqueryJobLoadParquetOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_list_inference_input`<sup>Optional</sup> <a name="enable_list_inference_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.property.enableListInferenceInput"></a>

```python
enable_list_inference_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enum_as_string_input`<sup>Optional</sup> <a name="enum_as_string_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.property.enumAsStringInput"></a>

```python
enum_as_string_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_list_inference`<sup>Required</sup> <a name="enable_list_inference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.property.enableListInference"></a>

```python
enable_list_inference: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enum_as_string`<sup>Required</sup> <a name="enum_as_string" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.property.enumAsString"></a>

```python
enum_as_string: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryJobLoadParquetOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptions">GoogleBigqueryJobLoadParquetOptions</a>

---


### GoogleBigqueryJobLoadTimePartitioningOutputReference <a name="GoogleBigqueryJobLoadTimePartitioningOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.resetExpirationMs">reset_expiration_ms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.resetField">reset_field</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_expiration_ms` <a name="reset_expiration_ms" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.resetExpirationMs"></a>

```python
def reset_expiration_ms() -> None
```

##### `reset_field` <a name="reset_field" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.resetField"></a>

```python
def reset_field() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.expirationMsInput">expiration_ms_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.fieldInput">field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.expirationMs">expiration_ms</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.field">field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioning">GoogleBigqueryJobLoadTimePartitioning</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expiration_ms_input`<sup>Optional</sup> <a name="expiration_ms_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.expirationMsInput"></a>

```python
expiration_ms_input: str
```

- *Type:* str

---

##### `field_input`<sup>Optional</sup> <a name="field_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.fieldInput"></a>

```python
field_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `expiration_ms`<sup>Required</sup> <a name="expiration_ms" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.expirationMs"></a>

```python
expiration_ms: str
```

- *Type:* str

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.field"></a>

```python
field: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryJobLoadTimePartitioning
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioning">GoogleBigqueryJobLoadTimePartitioning</a>

---


### GoogleBigqueryJobQueryDefaultDatasetOutputReference <a name="GoogleBigqueryJobQueryDefaultDatasetOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.resetProjectId">reset_project_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.resetProjectId"></a>

```python
def reset_project_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.property.datasetIdInput">dataset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDataset">GoogleBigqueryJobQueryDefaultDataset</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_id_input`<sup>Optional</sup> <a name="dataset_id_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.property.datasetIdInput"></a>

```python
dataset_id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryJobQueryDefaultDataset
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDataset">GoogleBigqueryJobQueryDefaultDataset</a>

---


### GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference <a name="GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.kmsKeyVersion">kms_key_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfiguration">GoogleBigqueryJobQueryDestinationEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_version`<sup>Required</sup> <a name="kms_key_version" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.kmsKeyVersion"></a>

```python
kms_key_version: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryJobQueryDestinationEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfiguration">GoogleBigqueryJobQueryDestinationEncryptionConfiguration</a>

---


### GoogleBigqueryJobQueryDestinationTableOutputReference <a name="GoogleBigqueryJobQueryDestinationTableOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.resetDatasetId">reset_dataset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.resetProjectId">reset_project_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dataset_id` <a name="reset_dataset_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.resetDatasetId"></a>

```python
def reset_dataset_id() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.resetProjectId"></a>

```python
def reset_project_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.datasetIdInput">dataset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.tableIdInput">table_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.tableId">table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTable">GoogleBigqueryJobQueryDestinationTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_id_input`<sup>Optional</sup> <a name="dataset_id_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.datasetIdInput"></a>

```python
dataset_id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `table_id_input`<sup>Optional</sup> <a name="table_id_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.tableIdInput"></a>

```python
table_id_input: str
```

- *Type:* str

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryJobQueryDestinationTable
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTable">GoogleBigqueryJobQueryDestinationTable</a>

---


### GoogleBigqueryJobQueryOutputReference <a name="GoogleBigqueryJobQueryOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJobQueryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.putDefaultDataset">put_default_dataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.putDestinationEncryptionConfiguration">put_destination_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.putDestinationTable">put_destination_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.putScriptOptions">put_script_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.putUserDefinedFunctionResources">put_user_defined_function_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetAllowLargeResults">reset_allow_large_results</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetCreateDisposition">reset_create_disposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetDefaultDataset">reset_default_dataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetDestinationEncryptionConfiguration">reset_destination_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetDestinationTable">reset_destination_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetFlattenResults">reset_flatten_results</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetMaximumBillingTier">reset_maximum_billing_tier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetMaximumBytesBilled">reset_maximum_bytes_billed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetParameterMode">reset_parameter_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetSchemaUpdateOptions">reset_schema_update_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetScriptOptions">reset_script_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetUseLegacySql">reset_use_legacy_sql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetUseQueryCache">reset_use_query_cache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetUserDefinedFunctionResources">reset_user_defined_function_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetWriteDisposition">reset_write_disposition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_default_dataset` <a name="put_default_dataset" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.putDefaultDataset"></a>

```python
def put_default_dataset(
  dataset_id: str,
  project_id: str = None
) -> None
```

###### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.putDefaultDataset.parameter.datasetId"></a>

- *Type:* str

The dataset. Can be specified '{{dataset_id}}' if 'project_id' is also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}' if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#dataset_id GoogleBigqueryJob#dataset_id}

---

###### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.putDefaultDataset.parameter.projectId"></a>

- *Type:* str

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#project_id GoogleBigqueryJob#project_id}

---

##### `put_destination_encryption_configuration` <a name="put_destination_encryption_configuration" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.putDestinationEncryptionConfiguration"></a>

```python
def put_destination_encryption_configuration(
  kms_key_name: str
) -> None
```

###### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.putDestinationEncryptionConfiguration.parameter.kmsKeyName"></a>

- *Type:* str

Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table.

The BigQuery Service Account associated with your project requires access to this encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#kms_key_name GoogleBigqueryJob#kms_key_name}

---

##### `put_destination_table` <a name="put_destination_table" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.putDestinationTable"></a>

```python
def put_destination_table(
  table_id: str,
  dataset_id: str = None,
  project_id: str = None
) -> None
```

###### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.putDestinationTable.parameter.tableId"></a>

- *Type:* str

The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#table_id GoogleBigqueryJob#table_id}

---

###### `dataset_id`<sup>Optional</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.putDestinationTable.parameter.datasetId"></a>

- *Type:* str

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#dataset_id GoogleBigqueryJob#dataset_id}

---

###### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.putDestinationTable.parameter.projectId"></a>

- *Type:* str

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#project_id GoogleBigqueryJob#project_id}

---

##### `put_script_options` <a name="put_script_options" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.putScriptOptions"></a>

```python
def put_script_options(
  key_result_statement: str = None,
  statement_byte_budget: str = None,
  statement_timeout_ms: str = None
) -> None
```

###### `key_result_statement`<sup>Optional</sup> <a name="key_result_statement" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.putScriptOptions.parameter.keyResultStatement"></a>

- *Type:* str

Determines which statement in the script represents the "key result", used to populate the schema and query results of the script job.

Possible values: ["LAST", "FIRST_SELECT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#key_result_statement GoogleBigqueryJob#key_result_statement}

---

###### `statement_byte_budget`<sup>Optional</sup> <a name="statement_byte_budget" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.putScriptOptions.parameter.statementByteBudget"></a>

- *Type:* str

Limit on the number of bytes billed per statement. Exceeding this budget results in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#statement_byte_budget GoogleBigqueryJob#statement_byte_budget}

---

###### `statement_timeout_ms`<sup>Optional</sup> <a name="statement_timeout_ms" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.putScriptOptions.parameter.statementTimeoutMs"></a>

- *Type:* str

Timeout period for each statement in a script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_job#statement_timeout_ms GoogleBigqueryJob#statement_timeout_ms}

---

##### `put_user_defined_function_resources` <a name="put_user_defined_function_resources" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.putUserDefinedFunctionResources"></a>

```python
def put_user_defined_function_resources(
  value: typing.Union[IResolvable, typing.List[GoogleBigqueryJobQueryUserDefinedFunctionResources]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.putUserDefinedFunctionResources.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResources">GoogleBigqueryJobQueryUserDefinedFunctionResources</a>]]

---

##### `reset_allow_large_results` <a name="reset_allow_large_results" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetAllowLargeResults"></a>

```python
def reset_allow_large_results() -> None
```

##### `reset_create_disposition` <a name="reset_create_disposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetCreateDisposition"></a>

```python
def reset_create_disposition() -> None
```

##### `reset_default_dataset` <a name="reset_default_dataset" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetDefaultDataset"></a>

```python
def reset_default_dataset() -> None
```

##### `reset_destination_encryption_configuration` <a name="reset_destination_encryption_configuration" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetDestinationEncryptionConfiguration"></a>

```python
def reset_destination_encryption_configuration() -> None
```

##### `reset_destination_table` <a name="reset_destination_table" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetDestinationTable"></a>

```python
def reset_destination_table() -> None
```

##### `reset_flatten_results` <a name="reset_flatten_results" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetFlattenResults"></a>

```python
def reset_flatten_results() -> None
```

##### `reset_maximum_billing_tier` <a name="reset_maximum_billing_tier" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetMaximumBillingTier"></a>

```python
def reset_maximum_billing_tier() -> None
```

##### `reset_maximum_bytes_billed` <a name="reset_maximum_bytes_billed" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetMaximumBytesBilled"></a>

```python
def reset_maximum_bytes_billed() -> None
```

##### `reset_parameter_mode` <a name="reset_parameter_mode" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetParameterMode"></a>

```python
def reset_parameter_mode() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_schema_update_options` <a name="reset_schema_update_options" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetSchemaUpdateOptions"></a>

```python
def reset_schema_update_options() -> None
```

##### `reset_script_options` <a name="reset_script_options" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetScriptOptions"></a>

```python
def reset_script_options() -> None
```

##### `reset_use_legacy_sql` <a name="reset_use_legacy_sql" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetUseLegacySql"></a>

```python
def reset_use_legacy_sql() -> None
```

##### `reset_use_query_cache` <a name="reset_use_query_cache" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetUseQueryCache"></a>

```python
def reset_use_query_cache() -> None
```

##### `reset_user_defined_function_resources` <a name="reset_user_defined_function_resources" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetUserDefinedFunctionResources"></a>

```python
def reset_user_defined_function_resources() -> None
```

##### `reset_write_disposition` <a name="reset_write_disposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetWriteDisposition"></a>

```python
def reset_write_disposition() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.defaultDataset">default_dataset</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference">GoogleBigqueryJobQueryDefaultDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.destinationEncryptionConfiguration">destination_encryption_configuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference">GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.destinationTable">destination_table</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference">GoogleBigqueryJobQueryDestinationTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.scriptOptions">script_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference">GoogleBigqueryJobQueryScriptOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.userDefinedFunctionResources">user_defined_function_resources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList">GoogleBigqueryJobQueryUserDefinedFunctionResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.allowLargeResultsInput">allow_large_results_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.createDispositionInput">create_disposition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.defaultDatasetInput">default_dataset_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDataset">GoogleBigqueryJobQueryDefaultDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.destinationEncryptionConfigurationInput">destination_encryption_configuration_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfiguration">GoogleBigqueryJobQueryDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.destinationTableInput">destination_table_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTable">GoogleBigqueryJobQueryDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.flattenResultsInput">flatten_results_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.maximumBillingTierInput">maximum_billing_tier_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.maximumBytesBilledInput">maximum_bytes_billed_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.parameterModeInput">parameter_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.priorityInput">priority_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.schemaUpdateOptionsInput">schema_update_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.scriptOptionsInput">script_options_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptions">GoogleBigqueryJobQueryScriptOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.useLegacySqlInput">use_legacy_sql_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.useQueryCacheInput">use_query_cache_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.userDefinedFunctionResourcesInput">user_defined_function_resources_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResources">GoogleBigqueryJobQueryUserDefinedFunctionResources</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.writeDispositionInput">write_disposition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.allowLargeResults">allow_large_results</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.createDisposition">create_disposition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.flattenResults">flatten_results</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.maximumBillingTier">maximum_billing_tier</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.maximumBytesBilled">maximum_bytes_billed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.parameterMode">parameter_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.priority">priority</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.schemaUpdateOptions">schema_update_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.useLegacySql">use_legacy_sql</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.useQueryCache">use_query_cache</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.writeDisposition">write_disposition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery">GoogleBigqueryJobQuery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_dataset`<sup>Required</sup> <a name="default_dataset" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.defaultDataset"></a>

```python
default_dataset: GoogleBigqueryJobQueryDefaultDatasetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference">GoogleBigqueryJobQueryDefaultDatasetOutputReference</a>

---

##### `destination_encryption_configuration`<sup>Required</sup> <a name="destination_encryption_configuration" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.destinationEncryptionConfiguration"></a>

```python
destination_encryption_configuration: GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference">GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference</a>

---

##### `destination_table`<sup>Required</sup> <a name="destination_table" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.destinationTable"></a>

```python
destination_table: GoogleBigqueryJobQueryDestinationTableOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference">GoogleBigqueryJobQueryDestinationTableOutputReference</a>

---

##### `script_options`<sup>Required</sup> <a name="script_options" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.scriptOptions"></a>

```python
script_options: GoogleBigqueryJobQueryScriptOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference">GoogleBigqueryJobQueryScriptOptionsOutputReference</a>

---

##### `user_defined_function_resources`<sup>Required</sup> <a name="user_defined_function_resources" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.userDefinedFunctionResources"></a>

```python
user_defined_function_resources: GoogleBigqueryJobQueryUserDefinedFunctionResourcesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList">GoogleBigqueryJobQueryUserDefinedFunctionResourcesList</a>

---

##### `allow_large_results_input`<sup>Optional</sup> <a name="allow_large_results_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.allowLargeResultsInput"></a>

```python
allow_large_results_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `create_disposition_input`<sup>Optional</sup> <a name="create_disposition_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.createDispositionInput"></a>

```python
create_disposition_input: str
```

- *Type:* str

---

##### `default_dataset_input`<sup>Optional</sup> <a name="default_dataset_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.defaultDatasetInput"></a>

```python
default_dataset_input: GoogleBigqueryJobQueryDefaultDataset
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDataset">GoogleBigqueryJobQueryDefaultDataset</a>

---

##### `destination_encryption_configuration_input`<sup>Optional</sup> <a name="destination_encryption_configuration_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.destinationEncryptionConfigurationInput"></a>

```python
destination_encryption_configuration_input: GoogleBigqueryJobQueryDestinationEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfiguration">GoogleBigqueryJobQueryDestinationEncryptionConfiguration</a>

---

##### `destination_table_input`<sup>Optional</sup> <a name="destination_table_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.destinationTableInput"></a>

```python
destination_table_input: GoogleBigqueryJobQueryDestinationTable
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTable">GoogleBigqueryJobQueryDestinationTable</a>

---

##### `flatten_results_input`<sup>Optional</sup> <a name="flatten_results_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.flattenResultsInput"></a>

```python
flatten_results_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `maximum_billing_tier_input`<sup>Optional</sup> <a name="maximum_billing_tier_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.maximumBillingTierInput"></a>

```python
maximum_billing_tier_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_bytes_billed_input`<sup>Optional</sup> <a name="maximum_bytes_billed_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.maximumBytesBilledInput"></a>

```python
maximum_bytes_billed_input: str
```

- *Type:* str

---

##### `parameter_mode_input`<sup>Optional</sup> <a name="parameter_mode_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.parameterModeInput"></a>

```python
parameter_mode_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.priorityInput"></a>

```python
priority_input: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `schema_update_options_input`<sup>Optional</sup> <a name="schema_update_options_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.schemaUpdateOptionsInput"></a>

```python
schema_update_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `script_options_input`<sup>Optional</sup> <a name="script_options_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.scriptOptionsInput"></a>

```python
script_options_input: GoogleBigqueryJobQueryScriptOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptions">GoogleBigqueryJobQueryScriptOptions</a>

---

##### `use_legacy_sql_input`<sup>Optional</sup> <a name="use_legacy_sql_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.useLegacySqlInput"></a>

```python
use_legacy_sql_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_query_cache_input`<sup>Optional</sup> <a name="use_query_cache_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.useQueryCacheInput"></a>

```python
use_query_cache_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `user_defined_function_resources_input`<sup>Optional</sup> <a name="user_defined_function_resources_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.userDefinedFunctionResourcesInput"></a>

```python
user_defined_function_resources_input: typing.Union[IResolvable, typing.List[GoogleBigqueryJobQueryUserDefinedFunctionResources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResources">GoogleBigqueryJobQueryUserDefinedFunctionResources</a>]]

---

##### `write_disposition_input`<sup>Optional</sup> <a name="write_disposition_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.writeDispositionInput"></a>

```python
write_disposition_input: str
```

- *Type:* str

---

##### `allow_large_results`<sup>Required</sup> <a name="allow_large_results" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.allowLargeResults"></a>

```python
allow_large_results: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `create_disposition`<sup>Required</sup> <a name="create_disposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.createDisposition"></a>

```python
create_disposition: str
```

- *Type:* str

---

##### `flatten_results`<sup>Required</sup> <a name="flatten_results" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.flattenResults"></a>

```python
flatten_results: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `maximum_billing_tier`<sup>Required</sup> <a name="maximum_billing_tier" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.maximumBillingTier"></a>

```python
maximum_billing_tier: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_bytes_billed`<sup>Required</sup> <a name="maximum_bytes_billed" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.maximumBytesBilled"></a>

```python
maximum_bytes_billed: str
```

- *Type:* str

---

##### `parameter_mode`<sup>Required</sup> <a name="parameter_mode" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.parameterMode"></a>

```python
parameter_mode: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.priority"></a>

```python
priority: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `schema_update_options`<sup>Required</sup> <a name="schema_update_options" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.schemaUpdateOptions"></a>

```python
schema_update_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `use_legacy_sql`<sup>Required</sup> <a name="use_legacy_sql" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.useLegacySql"></a>

```python
use_legacy_sql: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_query_cache`<sup>Required</sup> <a name="use_query_cache" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.useQueryCache"></a>

```python
use_query_cache: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `write_disposition`<sup>Required</sup> <a name="write_disposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.writeDisposition"></a>

```python
write_disposition: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryJobQuery
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery">GoogleBigqueryJobQuery</a>

---


### GoogleBigqueryJobQueryScriptOptionsOutputReference <a name="GoogleBigqueryJobQueryScriptOptionsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.resetKeyResultStatement">reset_key_result_statement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.resetStatementByteBudget">reset_statement_byte_budget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.resetStatementTimeoutMs">reset_statement_timeout_ms</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key_result_statement` <a name="reset_key_result_statement" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.resetKeyResultStatement"></a>

```python
def reset_key_result_statement() -> None
```

##### `reset_statement_byte_budget` <a name="reset_statement_byte_budget" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.resetStatementByteBudget"></a>

```python
def reset_statement_byte_budget() -> None
```

##### `reset_statement_timeout_ms` <a name="reset_statement_timeout_ms" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.resetStatementTimeoutMs"></a>

```python
def reset_statement_timeout_ms() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.keyResultStatementInput">key_result_statement_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.statementByteBudgetInput">statement_byte_budget_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.statementTimeoutMsInput">statement_timeout_ms_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.keyResultStatement">key_result_statement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.statementByteBudget">statement_byte_budget</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.statementTimeoutMs">statement_timeout_ms</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptions">GoogleBigqueryJobQueryScriptOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_result_statement_input`<sup>Optional</sup> <a name="key_result_statement_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.keyResultStatementInput"></a>

```python
key_result_statement_input: str
```

- *Type:* str

---

##### `statement_byte_budget_input`<sup>Optional</sup> <a name="statement_byte_budget_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.statementByteBudgetInput"></a>

```python
statement_byte_budget_input: str
```

- *Type:* str

---

##### `statement_timeout_ms_input`<sup>Optional</sup> <a name="statement_timeout_ms_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.statementTimeoutMsInput"></a>

```python
statement_timeout_ms_input: str
```

- *Type:* str

---

##### `key_result_statement`<sup>Required</sup> <a name="key_result_statement" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.keyResultStatement"></a>

```python
key_result_statement: str
```

- *Type:* str

---

##### `statement_byte_budget`<sup>Required</sup> <a name="statement_byte_budget" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.statementByteBudget"></a>

```python
statement_byte_budget: str
```

- *Type:* str

---

##### `statement_timeout_ms`<sup>Required</sup> <a name="statement_timeout_ms" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.statementTimeoutMs"></a>

```python
statement_timeout_ms: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryJobQueryScriptOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptions">GoogleBigqueryJobQueryScriptOptions</a>

---


### GoogleBigqueryJobQueryUserDefinedFunctionResourcesList <a name="GoogleBigqueryJobQueryUserDefinedFunctionResourcesList" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResources">GoogleBigqueryJobQueryUserDefinedFunctionResources</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleBigqueryJobQueryUserDefinedFunctionResources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResources">GoogleBigqueryJobQueryUserDefinedFunctionResources</a>]]

---


### GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference <a name="GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.resetInlineCode">reset_inline_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.resetResourceUri">reset_resource_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_inline_code` <a name="reset_inline_code" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.resetInlineCode"></a>

```python
def reset_inline_code() -> None
```

##### `reset_resource_uri` <a name="reset_resource_uri" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.resetResourceUri"></a>

```python
def reset_resource_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.inlineCodeInput">inline_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.resourceUriInput">resource_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.inlineCode">inline_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.resourceUri">resource_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResources">GoogleBigqueryJobQueryUserDefinedFunctionResources</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `inline_code_input`<sup>Optional</sup> <a name="inline_code_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.inlineCodeInput"></a>

```python
inline_code_input: str
```

- *Type:* str

---

##### `resource_uri_input`<sup>Optional</sup> <a name="resource_uri_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.resourceUriInput"></a>

```python
resource_uri_input: str
```

- *Type:* str

---

##### `inline_code`<sup>Required</sup> <a name="inline_code" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.inlineCode"></a>

```python
inline_code: str
```

- *Type:* str

---

##### `resource_uri`<sup>Required</sup> <a name="resource_uri" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.resourceUri"></a>

```python
resource_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleBigqueryJobQueryUserDefinedFunctionResources]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResources">GoogleBigqueryJobQueryUserDefinedFunctionResources</a>]

---


### GoogleBigqueryJobStatusErrorResultList <a name="GoogleBigqueryJobStatusErrorResultList" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleBigqueryJobStatusErrorResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleBigqueryJobStatusErrorResultOutputReference <a name="GoogleBigqueryJobStatusErrorResultOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.property.reason">reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResult">GoogleBigqueryJobStatusErrorResult</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.property.reason"></a>

```python
reason: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryJobStatusErrorResult
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResult">GoogleBigqueryJobStatusErrorResult</a>

---


### GoogleBigqueryJobStatusErrorsList <a name="GoogleBigqueryJobStatusErrorsList" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJobStatusErrorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleBigqueryJobStatusErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleBigqueryJobStatusErrorsOutputReference <a name="GoogleBigqueryJobStatusErrorsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.property.reason">reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrors">GoogleBigqueryJobStatusErrors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.property.reason"></a>

```python
reason: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryJobStatusErrors
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrors">GoogleBigqueryJobStatusErrors</a>

---


### GoogleBigqueryJobStatusList <a name="GoogleBigqueryJobStatusList" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJobStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleBigqueryJobStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleBigqueryJobStatusOutputReference <a name="GoogleBigqueryJobStatusOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJobStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.property.errorResult">error_result</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList">GoogleBigqueryJobStatusErrorResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.property.errors">errors</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList">GoogleBigqueryJobStatusErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatus">GoogleBigqueryJobStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `error_result`<sup>Required</sup> <a name="error_result" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.property.errorResult"></a>

```python
error_result: GoogleBigqueryJobStatusErrorResultList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList">GoogleBigqueryJobStatusErrorResultList</a>

---

##### `errors`<sup>Required</sup> <a name="errors" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.property.errors"></a>

```python
errors: GoogleBigqueryJobStatusErrorsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList">GoogleBigqueryJobStatusErrorsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryJobStatus
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatus">GoogleBigqueryJobStatus</a>

---


### GoogleBigqueryJobTimeoutsOutputReference <a name="GoogleBigqueryJobTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_job

googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeouts">GoogleBigqueryJobTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleBigqueryJobTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeouts">GoogleBigqueryJobTimeouts</a>]

---



