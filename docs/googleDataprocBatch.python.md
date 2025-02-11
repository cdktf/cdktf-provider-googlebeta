# `googleDataprocBatch` Submodule <a name="`googleDataprocBatch` Submodule" id="@cdktf/provider-google-beta.googleDataprocBatch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataprocBatch <a name="GoogleDataprocBatch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch google_dataproc_batch}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_batch

googleDataprocBatch.GoogleDataprocBatch(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  batch_id: str = None,
  environment_config: GoogleDataprocBatchEnvironmentConfig = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  project: str = None,
  pyspark_batch: GoogleDataprocBatchPysparkBatch = None,
  runtime_config: GoogleDataprocBatchRuntimeConfig = None,
  spark_batch: GoogleDataprocBatchSparkBatch = None,
  spark_r_batch: GoogleDataprocBatchSparkRBatch = None,
  spark_sql_batch: GoogleDataprocBatchSparkSqlBatch = None,
  timeouts: GoogleDataprocBatchTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.batchId">batch_id</a></code> | <code>str</code> | The ID to use for the batch, which will become the final component of the batch's resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.environmentConfig">environment_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfig">GoogleDataprocBatchEnvironmentConfig</a></code> | environment_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#id GoogleDataprocBatch#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels to associate with this batch. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.location">location</a></code> | <code>str</code> | The location in which the batch will be created in. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#project GoogleDataprocBatch#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.pysparkBatch">pyspark_batch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch">GoogleDataprocBatchPysparkBatch</a></code> | pyspark_batch block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.runtimeConfig">runtime_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig">GoogleDataprocBatchRuntimeConfig</a></code> | runtime_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.sparkBatch">spark_batch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch">GoogleDataprocBatchSparkBatch</a></code> | spark_batch block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.sparkRBatch">spark_r_batch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch">GoogleDataprocBatchSparkRBatch</a></code> | spark_r_batch block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.sparkSqlBatch">spark_sql_batch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatch">GoogleDataprocBatchSparkSqlBatch</a></code> | spark_sql_batch block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeouts">GoogleDataprocBatchTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `batch_id`<sup>Optional</sup> <a name="batch_id" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.batchId"></a>

- *Type:* str

The ID to use for the batch, which will become the final component of the batch's resource name.

This value must be 4-63 characters. Valid characters are /[a-z][0-9]-/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#batch_id GoogleDataprocBatch#batch_id}

---

##### `environment_config`<sup>Optional</sup> <a name="environment_config" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.environmentConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfig">GoogleDataprocBatchEnvironmentConfig</a>

environment_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#environment_config GoogleDataprocBatch#environment_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#id GoogleDataprocBatch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The labels to associate with this batch.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#labels GoogleDataprocBatch#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.location"></a>

- *Type:* str

The location in which the batch will be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#location GoogleDataprocBatch#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#project GoogleDataprocBatch#project}.

---

##### `pyspark_batch`<sup>Optional</sup> <a name="pyspark_batch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.pysparkBatch"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch">GoogleDataprocBatchPysparkBatch</a>

pyspark_batch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#pyspark_batch GoogleDataprocBatch#pyspark_batch}

---

##### `runtime_config`<sup>Optional</sup> <a name="runtime_config" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.runtimeConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig">GoogleDataprocBatchRuntimeConfig</a>

runtime_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#runtime_config GoogleDataprocBatch#runtime_config}

---

##### `spark_batch`<sup>Optional</sup> <a name="spark_batch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.sparkBatch"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch">GoogleDataprocBatchSparkBatch</a>

spark_batch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#spark_batch GoogleDataprocBatch#spark_batch}

---

##### `spark_r_batch`<sup>Optional</sup> <a name="spark_r_batch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.sparkRBatch"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch">GoogleDataprocBatchSparkRBatch</a>

spark_r_batch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#spark_r_batch GoogleDataprocBatch#spark_r_batch}

---

##### `spark_sql_batch`<sup>Optional</sup> <a name="spark_sql_batch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.sparkSqlBatch"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatch">GoogleDataprocBatchSparkSqlBatch</a>

spark_sql_batch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#spark_sql_batch GoogleDataprocBatch#spark_sql_batch}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeouts">GoogleDataprocBatchTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#timeouts GoogleDataprocBatch#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putEnvironmentConfig">put_environment_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putPysparkBatch">put_pyspark_batch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putRuntimeConfig">put_runtime_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putSparkBatch">put_spark_batch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putSparkRBatch">put_spark_r_batch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putSparkSqlBatch">put_spark_sql_batch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetBatchId">reset_batch_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetEnvironmentConfig">reset_environment_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetPysparkBatch">reset_pyspark_batch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetRuntimeConfig">reset_runtime_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetSparkBatch">reset_spark_batch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetSparkRBatch">reset_spark_r_batch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetSparkSqlBatch">reset_spark_sql_batch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_environment_config` <a name="put_environment_config" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putEnvironmentConfig"></a>

```python
def put_environment_config(
  execution_config: GoogleDataprocBatchEnvironmentConfigExecutionConfig = None,
  peripherals_config: GoogleDataprocBatchEnvironmentConfigPeripheralsConfig = None
) -> None
```

###### `execution_config`<sup>Optional</sup> <a name="execution_config" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putEnvironmentConfig.parameter.executionConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig">GoogleDataprocBatchEnvironmentConfigExecutionConfig</a>

execution_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#execution_config GoogleDataprocBatch#execution_config}

---

###### `peripherals_config`<sup>Optional</sup> <a name="peripherals_config" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putEnvironmentConfig.parameter.peripheralsConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfig">GoogleDataprocBatchEnvironmentConfigPeripheralsConfig</a>

peripherals_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#peripherals_config GoogleDataprocBatch#peripherals_config}

---

##### `put_pyspark_batch` <a name="put_pyspark_batch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putPysparkBatch"></a>

```python
def put_pyspark_batch(
  archive_uris: typing.List[str] = None,
  args: typing.List[str] = None,
  file_uris: typing.List[str] = None,
  jar_file_uris: typing.List[str] = None,
  main_python_file_uri: str = None,
  python_file_uris: typing.List[str] = None
) -> None
```

###### `archive_uris`<sup>Optional</sup> <a name="archive_uris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putPysparkBatch.parameter.archiveUris"></a>

- *Type:* typing.List[str]

HCFS URIs of archives to be extracted into the working directory of each executor.

Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#archive_uris GoogleDataprocBatch#archive_uris}

---

###### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putPysparkBatch.parameter.args"></a>

- *Type:* typing.List[str]

The arguments to pass to the driver.

Do not include arguments that can be set as batch
properties, such as --conf, since a collision can occur that causes an incorrect batch submission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#args GoogleDataprocBatch#args}

---

###### `file_uris`<sup>Optional</sup> <a name="file_uris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putPysparkBatch.parameter.fileUris"></a>

- *Type:* typing.List[str]

HCFS URIs of files to be placed in the working directory of each executor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#file_uris GoogleDataprocBatch#file_uris}

---

###### `jar_file_uris`<sup>Optional</sup> <a name="jar_file_uris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putPysparkBatch.parameter.jarFileUris"></a>

- *Type:* typing.List[str]

HCFS URIs of jar files to add to the classpath of the Spark driver and tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#jar_file_uris GoogleDataprocBatch#jar_file_uris}

---

###### `main_python_file_uri`<sup>Optional</sup> <a name="main_python_file_uri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putPysparkBatch.parameter.mainPythonFileUri"></a>

- *Type:* str

The HCFS URI of the main Python file to use as the Spark driver. Must be a .py file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#main_python_file_uri GoogleDataprocBatch#main_python_file_uri}

---

###### `python_file_uris`<sup>Optional</sup> <a name="python_file_uris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putPysparkBatch.parameter.pythonFileUris"></a>

- *Type:* typing.List[str]

HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#python_file_uris GoogleDataprocBatch#python_file_uris}

---

##### `put_runtime_config` <a name="put_runtime_config" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putRuntimeConfig"></a>

```python
def put_runtime_config(
  autotuning_config: GoogleDataprocBatchRuntimeConfigAutotuningConfig = None,
  cohort: str = None,
  container_image: str = None,
  properties: typing.Mapping[str] = None,
  version: str = None
) -> None
```

###### `autotuning_config`<sup>Optional</sup> <a name="autotuning_config" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putRuntimeConfig.parameter.autotuningConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfig">GoogleDataprocBatchRuntimeConfigAutotuningConfig</a>

autotuning_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#autotuning_config GoogleDataprocBatch#autotuning_config}

---

###### `cohort`<sup>Optional</sup> <a name="cohort" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putRuntimeConfig.parameter.cohort"></a>

- *Type:* str

Optional. Cohort identifier. Identifies families of the workloads having the same shape, e.g. daily ETL jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#cohort GoogleDataprocBatch#cohort}

---

###### `container_image`<sup>Optional</sup> <a name="container_image" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putRuntimeConfig.parameter.containerImage"></a>

- *Type:* str

Optional custom container image for the job runtime environment. If not specified, a default container image will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#container_image GoogleDataprocBatch#container_image}

---

###### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putRuntimeConfig.parameter.properties"></a>

- *Type:* typing.Mapping[str]

A mapping of property names to values, which are used to configure workload execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#properties GoogleDataprocBatch#properties}

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putRuntimeConfig.parameter.version"></a>

- *Type:* str

Version of the batch runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#version GoogleDataprocBatch#version}

---

##### `put_spark_batch` <a name="put_spark_batch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putSparkBatch"></a>

```python
def put_spark_batch(
  archive_uris: typing.List[str] = None,
  args: typing.List[str] = None,
  file_uris: typing.List[str] = None,
  jar_file_uris: typing.List[str] = None,
  main_class: str = None,
  main_jar_file_uri: str = None
) -> None
```

###### `archive_uris`<sup>Optional</sup> <a name="archive_uris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putSparkBatch.parameter.archiveUris"></a>

- *Type:* typing.List[str]

HCFS URIs of archives to be extracted into the working directory of each executor.

Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#archive_uris GoogleDataprocBatch#archive_uris}

---

###### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putSparkBatch.parameter.args"></a>

- *Type:* typing.List[str]

The arguments to pass to the driver.

Do not include arguments that can be set as batch
properties, such as --conf, since a collision can occur that causes an incorrect batch submission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#args GoogleDataprocBatch#args}

---

###### `file_uris`<sup>Optional</sup> <a name="file_uris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putSparkBatch.parameter.fileUris"></a>

- *Type:* typing.List[str]

HCFS URIs of files to be placed in the working directory of each executor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#file_uris GoogleDataprocBatch#file_uris}

---

###### `jar_file_uris`<sup>Optional</sup> <a name="jar_file_uris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putSparkBatch.parameter.jarFileUris"></a>

- *Type:* typing.List[str]

HCFS URIs of jar files to add to the classpath of the Spark driver and tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#jar_file_uris GoogleDataprocBatch#jar_file_uris}

---

###### `main_class`<sup>Optional</sup> <a name="main_class" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putSparkBatch.parameter.mainClass"></a>

- *Type:* str

The name of the driver main class.

The jar file that contains the class must be in the
classpath or specified in jarFileUris.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#main_class GoogleDataprocBatch#main_class}

---

###### `main_jar_file_uri`<sup>Optional</sup> <a name="main_jar_file_uri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putSparkBatch.parameter.mainJarFileUri"></a>

- *Type:* str

The HCFS URI of the jar file that contains the main class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#main_jar_file_uri GoogleDataprocBatch#main_jar_file_uri}

---

##### `put_spark_r_batch` <a name="put_spark_r_batch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putSparkRBatch"></a>

```python
def put_spark_r_batch(
  archive_uris: typing.List[str] = None,
  args: typing.List[str] = None,
  file_uris: typing.List[str] = None,
  main_r_file_uri: str = None
) -> None
```

###### `archive_uris`<sup>Optional</sup> <a name="archive_uris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putSparkRBatch.parameter.archiveUris"></a>

- *Type:* typing.List[str]

HCFS URIs of archives to be extracted into the working directory of each executor.

Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#archive_uris GoogleDataprocBatch#archive_uris}

---

###### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putSparkRBatch.parameter.args"></a>

- *Type:* typing.List[str]

The arguments to pass to the driver.

Do not include arguments that can be set as batch
properties, such as --conf, since a collision can occur that causes an incorrect batch submission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#args GoogleDataprocBatch#args}

---

###### `file_uris`<sup>Optional</sup> <a name="file_uris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putSparkRBatch.parameter.fileUris"></a>

- *Type:* typing.List[str]

HCFS URIs of files to be placed in the working directory of each executor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#file_uris GoogleDataprocBatch#file_uris}

---

###### `main_r_file_uri`<sup>Optional</sup> <a name="main_r_file_uri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putSparkRBatch.parameter.mainRFileUri"></a>

- *Type:* str

The HCFS URI of the main R file to use as the driver.

Must be a .R or .r file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#main_r_file_uri GoogleDataprocBatch#main_r_file_uri}

---

##### `put_spark_sql_batch` <a name="put_spark_sql_batch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putSparkSqlBatch"></a>

```python
def put_spark_sql_batch(
  jar_file_uris: typing.List[str] = None,
  query_file_uri: str = None,
  query_variables: typing.Mapping[str] = None
) -> None
```

###### `jar_file_uris`<sup>Optional</sup> <a name="jar_file_uris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putSparkSqlBatch.parameter.jarFileUris"></a>

- *Type:* typing.List[str]

HCFS URIs of jar files to be added to the Spark CLASSPATH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#jar_file_uris GoogleDataprocBatch#jar_file_uris}

---

###### `query_file_uri`<sup>Optional</sup> <a name="query_file_uri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putSparkSqlBatch.parameter.queryFileUri"></a>

- *Type:* str

The HCFS URI of the script that contains Spark SQL queries to execute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#query_file_uri GoogleDataprocBatch#query_file_uri}

---

###### `query_variables`<sup>Optional</sup> <a name="query_variables" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putSparkSqlBatch.parameter.queryVariables"></a>

- *Type:* typing.Mapping[str]

Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#query_variables GoogleDataprocBatch#query_variables}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#create GoogleDataprocBatch#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#delete GoogleDataprocBatch#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#update GoogleDataprocBatch#update}.

---

##### `reset_batch_id` <a name="reset_batch_id" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetBatchId"></a>

```python
def reset_batch_id() -> None
```

##### `reset_environment_config` <a name="reset_environment_config" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetEnvironmentConfig"></a>

```python
def reset_environment_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_pyspark_batch` <a name="reset_pyspark_batch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetPysparkBatch"></a>

```python
def reset_pyspark_batch() -> None
```

##### `reset_runtime_config` <a name="reset_runtime_config" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetRuntimeConfig"></a>

```python
def reset_runtime_config() -> None
```

##### `reset_spark_batch` <a name="reset_spark_batch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetSparkBatch"></a>

```python
def reset_spark_batch() -> None
```

##### `reset_spark_r_batch` <a name="reset_spark_r_batch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetSparkRBatch"></a>

```python
def reset_spark_r_batch() -> None
```

##### `reset_spark_sql_batch` <a name="reset_spark_sql_batch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetSparkSqlBatch"></a>

```python
def reset_spark_sql_batch() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleDataprocBatch resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_batch

googleDataprocBatch.GoogleDataprocBatch.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_batch

googleDataprocBatch.GoogleDataprocBatch.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_batch

googleDataprocBatch.GoogleDataprocBatch.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_batch

googleDataprocBatch.GoogleDataprocBatch.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleDataprocBatch resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDataprocBatch to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDataprocBatch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataprocBatch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.creator">creator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.environmentConfig">environment_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference">GoogleDataprocBatchEnvironmentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.operation">operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.pysparkBatch">pyspark_batch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference">GoogleDataprocBatchPysparkBatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.runtimeConfig">runtime_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference">GoogleDataprocBatchRuntimeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.runtimeInfo">runtime_info</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList">GoogleDataprocBatchRuntimeInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.sparkBatch">spark_batch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference">GoogleDataprocBatchSparkBatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.sparkRBatch">spark_r_batch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference">GoogleDataprocBatchSparkRBatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.sparkSqlBatch">spark_sql_batch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference">GoogleDataprocBatchSparkSqlBatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.stateHistory">state_history</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList">GoogleDataprocBatchStateHistoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.stateMessage">state_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.stateTime">state_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference">GoogleDataprocBatchTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.batchIdInput">batch_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.environmentConfigInput">environment_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfig">GoogleDataprocBatchEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.pysparkBatchInput">pyspark_batch_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch">GoogleDataprocBatchPysparkBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.runtimeConfigInput">runtime_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig">GoogleDataprocBatchRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.sparkBatchInput">spark_batch_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch">GoogleDataprocBatchSparkBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.sparkRBatchInput">spark_r_batch_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch">GoogleDataprocBatchSparkRBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.sparkSqlBatchInput">spark_sql_batch_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatch">GoogleDataprocBatchSparkSqlBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeouts">GoogleDataprocBatchTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.batchId">batch_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.creator"></a>

```python
creator: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `environment_config`<sup>Required</sup> <a name="environment_config" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.environmentConfig"></a>

```python
environment_config: GoogleDataprocBatchEnvironmentConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference">GoogleDataprocBatchEnvironmentConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.operation"></a>

```python
operation: str
```

- *Type:* str

---

##### `pyspark_batch`<sup>Required</sup> <a name="pyspark_batch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.pysparkBatch"></a>

```python
pyspark_batch: GoogleDataprocBatchPysparkBatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference">GoogleDataprocBatchPysparkBatchOutputReference</a>

---

##### `runtime_config`<sup>Required</sup> <a name="runtime_config" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.runtimeConfig"></a>

```python
runtime_config: GoogleDataprocBatchRuntimeConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference">GoogleDataprocBatchRuntimeConfigOutputReference</a>

---

##### `runtime_info`<sup>Required</sup> <a name="runtime_info" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.runtimeInfo"></a>

```python
runtime_info: GoogleDataprocBatchRuntimeInfoList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList">GoogleDataprocBatchRuntimeInfoList</a>

---

##### `spark_batch`<sup>Required</sup> <a name="spark_batch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.sparkBatch"></a>

```python
spark_batch: GoogleDataprocBatchSparkBatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference">GoogleDataprocBatchSparkBatchOutputReference</a>

---

##### `spark_r_batch`<sup>Required</sup> <a name="spark_r_batch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.sparkRBatch"></a>

```python
spark_r_batch: GoogleDataprocBatchSparkRBatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference">GoogleDataprocBatchSparkRBatchOutputReference</a>

---

##### `spark_sql_batch`<sup>Required</sup> <a name="spark_sql_batch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.sparkSqlBatch"></a>

```python
spark_sql_batch: GoogleDataprocBatchSparkSqlBatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference">GoogleDataprocBatchSparkSqlBatchOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_history`<sup>Required</sup> <a name="state_history" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.stateHistory"></a>

```python
state_history: GoogleDataprocBatchStateHistoryList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList">GoogleDataprocBatchStateHistoryList</a>

---

##### `state_message`<sup>Required</sup> <a name="state_message" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.stateMessage"></a>

```python
state_message: str
```

- *Type:* str

---

##### `state_time`<sup>Required</sup> <a name="state_time" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.stateTime"></a>

```python
state_time: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.timeouts"></a>

```python
timeouts: GoogleDataprocBatchTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference">GoogleDataprocBatchTimeoutsOutputReference</a>

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `batch_id_input`<sup>Optional</sup> <a name="batch_id_input" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.batchIdInput"></a>

```python
batch_id_input: str
```

- *Type:* str

---

##### `environment_config_input`<sup>Optional</sup> <a name="environment_config_input" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.environmentConfigInput"></a>

```python
environment_config_input: GoogleDataprocBatchEnvironmentConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfig">GoogleDataprocBatchEnvironmentConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `pyspark_batch_input`<sup>Optional</sup> <a name="pyspark_batch_input" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.pysparkBatchInput"></a>

```python
pyspark_batch_input: GoogleDataprocBatchPysparkBatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch">GoogleDataprocBatchPysparkBatch</a>

---

##### `runtime_config_input`<sup>Optional</sup> <a name="runtime_config_input" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.runtimeConfigInput"></a>

```python
runtime_config_input: GoogleDataprocBatchRuntimeConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig">GoogleDataprocBatchRuntimeConfig</a>

---

##### `spark_batch_input`<sup>Optional</sup> <a name="spark_batch_input" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.sparkBatchInput"></a>

```python
spark_batch_input: GoogleDataprocBatchSparkBatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch">GoogleDataprocBatchSparkBatch</a>

---

##### `spark_r_batch_input`<sup>Optional</sup> <a name="spark_r_batch_input" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.sparkRBatchInput"></a>

```python
spark_r_batch_input: GoogleDataprocBatchSparkRBatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch">GoogleDataprocBatchSparkRBatch</a>

---

##### `spark_sql_batch_input`<sup>Optional</sup> <a name="spark_sql_batch_input" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.sparkSqlBatchInput"></a>

```python
spark_sql_batch_input: GoogleDataprocBatchSparkSqlBatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatch">GoogleDataprocBatchSparkSqlBatch</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleDataprocBatchTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeouts">GoogleDataprocBatchTimeouts</a>]

---

##### `batch_id`<sup>Required</sup> <a name="batch_id" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.batchId"></a>

```python
batch_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataprocBatchConfig <a name="GoogleDataprocBatchConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_batch

googleDataprocBatch.GoogleDataprocBatchConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  batch_id: str = None,
  environment_config: GoogleDataprocBatchEnvironmentConfig = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  project: str = None,
  pyspark_batch: GoogleDataprocBatchPysparkBatch = None,
  runtime_config: GoogleDataprocBatchRuntimeConfig = None,
  spark_batch: GoogleDataprocBatchSparkBatch = None,
  spark_r_batch: GoogleDataprocBatchSparkRBatch = None,
  spark_sql_batch: GoogleDataprocBatchSparkSqlBatch = None,
  timeouts: GoogleDataprocBatchTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.batchId">batch_id</a></code> | <code>str</code> | The ID to use for the batch, which will become the final component of the batch's resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.environmentConfig">environment_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfig">GoogleDataprocBatchEnvironmentConfig</a></code> | environment_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#id GoogleDataprocBatch#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels to associate with this batch. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.location">location</a></code> | <code>str</code> | The location in which the batch will be created in. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#project GoogleDataprocBatch#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.pysparkBatch">pyspark_batch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch">GoogleDataprocBatchPysparkBatch</a></code> | pyspark_batch block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.runtimeConfig">runtime_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig">GoogleDataprocBatchRuntimeConfig</a></code> | runtime_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.sparkBatch">spark_batch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch">GoogleDataprocBatchSparkBatch</a></code> | spark_batch block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.sparkRBatch">spark_r_batch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch">GoogleDataprocBatchSparkRBatch</a></code> | spark_r_batch block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.sparkSqlBatch">spark_sql_batch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatch">GoogleDataprocBatchSparkSqlBatch</a></code> | spark_sql_batch block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeouts">GoogleDataprocBatchTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `batch_id`<sup>Optional</sup> <a name="batch_id" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.batchId"></a>

```python
batch_id: str
```

- *Type:* str

The ID to use for the batch, which will become the final component of the batch's resource name.

This value must be 4-63 characters. Valid characters are /[a-z][0-9]-/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#batch_id GoogleDataprocBatch#batch_id}

---

##### `environment_config`<sup>Optional</sup> <a name="environment_config" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.environmentConfig"></a>

```python
environment_config: GoogleDataprocBatchEnvironmentConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfig">GoogleDataprocBatchEnvironmentConfig</a>

environment_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#environment_config GoogleDataprocBatch#environment_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#id GoogleDataprocBatch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The labels to associate with this batch.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#labels GoogleDataprocBatch#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location in which the batch will be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#location GoogleDataprocBatch#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#project GoogleDataprocBatch#project}.

---

##### `pyspark_batch`<sup>Optional</sup> <a name="pyspark_batch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.pysparkBatch"></a>

```python
pyspark_batch: GoogleDataprocBatchPysparkBatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch">GoogleDataprocBatchPysparkBatch</a>

pyspark_batch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#pyspark_batch GoogleDataprocBatch#pyspark_batch}

---

##### `runtime_config`<sup>Optional</sup> <a name="runtime_config" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.runtimeConfig"></a>

```python
runtime_config: GoogleDataprocBatchRuntimeConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig">GoogleDataprocBatchRuntimeConfig</a>

runtime_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#runtime_config GoogleDataprocBatch#runtime_config}

---

##### `spark_batch`<sup>Optional</sup> <a name="spark_batch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.sparkBatch"></a>

```python
spark_batch: GoogleDataprocBatchSparkBatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch">GoogleDataprocBatchSparkBatch</a>

spark_batch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#spark_batch GoogleDataprocBatch#spark_batch}

---

##### `spark_r_batch`<sup>Optional</sup> <a name="spark_r_batch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.sparkRBatch"></a>

```python
spark_r_batch: GoogleDataprocBatchSparkRBatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch">GoogleDataprocBatchSparkRBatch</a>

spark_r_batch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#spark_r_batch GoogleDataprocBatch#spark_r_batch}

---

##### `spark_sql_batch`<sup>Optional</sup> <a name="spark_sql_batch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.sparkSqlBatch"></a>

```python
spark_sql_batch: GoogleDataprocBatchSparkSqlBatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatch">GoogleDataprocBatchSparkSqlBatch</a>

spark_sql_batch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#spark_sql_batch GoogleDataprocBatch#spark_sql_batch}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.timeouts"></a>

```python
timeouts: GoogleDataprocBatchTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeouts">GoogleDataprocBatchTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#timeouts GoogleDataprocBatch#timeouts}

---

### GoogleDataprocBatchEnvironmentConfig <a name="GoogleDataprocBatchEnvironmentConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_batch

googleDataprocBatch.GoogleDataprocBatchEnvironmentConfig(
  execution_config: GoogleDataprocBatchEnvironmentConfigExecutionConfig = None,
  peripherals_config: GoogleDataprocBatchEnvironmentConfigPeripheralsConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfig.property.executionConfig">execution_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig">GoogleDataprocBatchEnvironmentConfigExecutionConfig</a></code> | execution_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfig.property.peripheralsConfig">peripherals_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfig">GoogleDataprocBatchEnvironmentConfigPeripheralsConfig</a></code> | peripherals_config block. |

---

##### `execution_config`<sup>Optional</sup> <a name="execution_config" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfig.property.executionConfig"></a>

```python
execution_config: GoogleDataprocBatchEnvironmentConfigExecutionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig">GoogleDataprocBatchEnvironmentConfigExecutionConfig</a>

execution_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#execution_config GoogleDataprocBatch#execution_config}

---

##### `peripherals_config`<sup>Optional</sup> <a name="peripherals_config" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfig.property.peripheralsConfig"></a>

```python
peripherals_config: GoogleDataprocBatchEnvironmentConfigPeripheralsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfig">GoogleDataprocBatchEnvironmentConfigPeripheralsConfig</a>

peripherals_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#peripherals_config GoogleDataprocBatch#peripherals_config}

---

### GoogleDataprocBatchEnvironmentConfigExecutionConfig <a name="GoogleDataprocBatchEnvironmentConfigExecutionConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_batch

googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig(
  kms_key: str = None,
  network_tags: typing.List[str] = None,
  network_uri: str = None,
  service_account: str = None,
  staging_bucket: str = None,
  subnetwork_uri: str = None,
  ttl: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig.property.kmsKey">kms_key</a></code> | <code>str</code> | The Cloud KMS key to use for encryption. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig.property.networkTags">network_tags</a></code> | <code>typing.List[str]</code> | Tags used for network traffic control. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig.property.networkUri">network_uri</a></code> | <code>str</code> | Network configuration for workload execution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig.property.serviceAccount">service_account</a></code> | <code>str</code> | Service account that used to execute workload. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig.property.stagingBucket">staging_bucket</a></code> | <code>str</code> | A Cloud Storage bucket used to stage workload dependencies, config files, and store workload output and other ephemeral data, such as Spark history files. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig.property.subnetworkUri">subnetwork_uri</a></code> | <code>str</code> | Subnetwork configuration for workload execution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig.property.ttl">ttl</a></code> | <code>str</code> | The duration after which the workload will be terminated. |

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

The Cloud KMS key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#kms_key GoogleDataprocBatch#kms_key}

---

##### `network_tags`<sup>Optional</sup> <a name="network_tags" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig.property.networkTags"></a>

```python
network_tags: typing.List[str]
```

- *Type:* typing.List[str]

Tags used for network traffic control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#network_tags GoogleDataprocBatch#network_tags}

---

##### `network_uri`<sup>Optional</sup> <a name="network_uri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig.property.networkUri"></a>

```python
network_uri: str
```

- *Type:* str

Network configuration for workload execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#network_uri GoogleDataprocBatch#network_uri}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

Service account that used to execute workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#service_account GoogleDataprocBatch#service_account}

---

##### `staging_bucket`<sup>Optional</sup> <a name="staging_bucket" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig.property.stagingBucket"></a>

```python
staging_bucket: str
```

- *Type:* str

A Cloud Storage bucket used to stage workload dependencies, config files, and store workload output and other ephemeral data, such as Spark history files.

If you do not specify a staging bucket,
Cloud Dataproc will determine a Cloud Storage location according to the region where your workload is running,
and then create and manage project-level, per-location staging and temporary buckets.
This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#staging_bucket GoogleDataprocBatch#staging_bucket}

---

##### `subnetwork_uri`<sup>Optional</sup> <a name="subnetwork_uri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig.property.subnetworkUri"></a>

```python
subnetwork_uri: str
```

- *Type:* str

Subnetwork configuration for workload execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#subnetwork_uri GoogleDataprocBatch#subnetwork_uri}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

The duration after which the workload will be terminated.

When the workload exceeds this duration, it will be unconditionally terminated without waiting for ongoing
work to finish. If ttl is not specified for a batch workload, the workload will be allowed to run until it
exits naturally (or run forever without exiting). If ttl is not specified for an interactive session,
it defaults to 24 hours. If ttl is not specified for a batch that uses 2.1+ runtime version, it defaults to 4 hours.
Minimum value is 10 minutes; maximum value is 14 days. If both ttl and idleTtl are specified (for an interactive session),
the conditions are treated as OR conditions: the workload will be terminated when it has been idle for idleTtl or
when ttl has been exceeded, whichever occurs first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#ttl GoogleDataprocBatch#ttl}

---

### GoogleDataprocBatchEnvironmentConfigPeripheralsConfig <a name="GoogleDataprocBatchEnvironmentConfigPeripheralsConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_batch

googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfig(
  metastore_service: str = None,
  spark_history_server_config: GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfig.property.metastoreService">metastore_service</a></code> | <code>str</code> | Resource name of an existing Dataproc Metastore service. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfig.property.sparkHistoryServerConfig">spark_history_server_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a></code> | spark_history_server_config block. |

---

##### `metastore_service`<sup>Optional</sup> <a name="metastore_service" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfig.property.metastoreService"></a>

```python
metastore_service: str
```

- *Type:* str

Resource name of an existing Dataproc Metastore service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#metastore_service GoogleDataprocBatch#metastore_service}

---

##### `spark_history_server_config`<sup>Optional</sup> <a name="spark_history_server_config" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfig.property.sparkHistoryServerConfig"></a>

```python
spark_history_server_config: GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a>

spark_history_server_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#spark_history_server_config GoogleDataprocBatch#spark_history_server_config}

---

### GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig <a name="GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_batch

googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig(
  dataproc_cluster: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig.property.dataprocCluster">dataproc_cluster</a></code> | <code>str</code> | Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload. |

---

##### `dataproc_cluster`<sup>Optional</sup> <a name="dataproc_cluster" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig.property.dataprocCluster"></a>

```python
dataproc_cluster: str
```

- *Type:* str

Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#dataproc_cluster GoogleDataprocBatch#dataproc_cluster}

---

### GoogleDataprocBatchPysparkBatch <a name="GoogleDataprocBatchPysparkBatch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_batch

googleDataprocBatch.GoogleDataprocBatchPysparkBatch(
  archive_uris: typing.List[str] = None,
  args: typing.List[str] = None,
  file_uris: typing.List[str] = None,
  jar_file_uris: typing.List[str] = None,
  main_python_file_uri: str = None,
  python_file_uris: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch.property.archiveUris">archive_uris</a></code> | <code>typing.List[str]</code> | HCFS URIs of archives to be extracted into the working directory of each executor. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch.property.args">args</a></code> | <code>typing.List[str]</code> | The arguments to pass to the driver. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch.property.fileUris">file_uris</a></code> | <code>typing.List[str]</code> | HCFS URIs of files to be placed in the working directory of each executor. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch.property.jarFileUris">jar_file_uris</a></code> | <code>typing.List[str]</code> | HCFS URIs of jar files to add to the classpath of the Spark driver and tasks. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch.property.mainPythonFileUri">main_python_file_uri</a></code> | <code>str</code> | The HCFS URI of the main Python file to use as the Spark driver. Must be a .py file. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch.property.pythonFileUris">python_file_uris</a></code> | <code>typing.List[str]</code> | HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip. |

---

##### `archive_uris`<sup>Optional</sup> <a name="archive_uris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch.property.archiveUris"></a>

```python
archive_uris: typing.List[str]
```

- *Type:* typing.List[str]

HCFS URIs of archives to be extracted into the working directory of each executor.

Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#archive_uris GoogleDataprocBatch#archive_uris}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

The arguments to pass to the driver.

Do not include arguments that can be set as batch
properties, such as --conf, since a collision can occur that causes an incorrect batch submission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#args GoogleDataprocBatch#args}

---

##### `file_uris`<sup>Optional</sup> <a name="file_uris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch.property.fileUris"></a>

```python
file_uris: typing.List[str]
```

- *Type:* typing.List[str]

HCFS URIs of files to be placed in the working directory of each executor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#file_uris GoogleDataprocBatch#file_uris}

---

##### `jar_file_uris`<sup>Optional</sup> <a name="jar_file_uris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch.property.jarFileUris"></a>

```python
jar_file_uris: typing.List[str]
```

- *Type:* typing.List[str]

HCFS URIs of jar files to add to the classpath of the Spark driver and tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#jar_file_uris GoogleDataprocBatch#jar_file_uris}

---

##### `main_python_file_uri`<sup>Optional</sup> <a name="main_python_file_uri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch.property.mainPythonFileUri"></a>

```python
main_python_file_uri: str
```

- *Type:* str

The HCFS URI of the main Python file to use as the Spark driver. Must be a .py file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#main_python_file_uri GoogleDataprocBatch#main_python_file_uri}

---

##### `python_file_uris`<sup>Optional</sup> <a name="python_file_uris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch.property.pythonFileUris"></a>

```python
python_file_uris: typing.List[str]
```

- *Type:* typing.List[str]

HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#python_file_uris GoogleDataprocBatch#python_file_uris}

---

### GoogleDataprocBatchRuntimeConfig <a name="GoogleDataprocBatchRuntimeConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_batch

googleDataprocBatch.GoogleDataprocBatchRuntimeConfig(
  autotuning_config: GoogleDataprocBatchRuntimeConfigAutotuningConfig = None,
  cohort: str = None,
  container_image: str = None,
  properties: typing.Mapping[str] = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig.property.autotuningConfig">autotuning_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfig">GoogleDataprocBatchRuntimeConfigAutotuningConfig</a></code> | autotuning_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig.property.cohort">cohort</a></code> | <code>str</code> | Optional. Cohort identifier. Identifies families of the workloads having the same shape, e.g. daily ETL jobs. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig.property.containerImage">container_image</a></code> | <code>str</code> | Optional custom container image for the job runtime environment. If not specified, a default container image will be used. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | A mapping of property names to values, which are used to configure workload execution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig.property.version">version</a></code> | <code>str</code> | Version of the batch runtime. |

---

##### `autotuning_config`<sup>Optional</sup> <a name="autotuning_config" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig.property.autotuningConfig"></a>

```python
autotuning_config: GoogleDataprocBatchRuntimeConfigAutotuningConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfig">GoogleDataprocBatchRuntimeConfigAutotuningConfig</a>

autotuning_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#autotuning_config GoogleDataprocBatch#autotuning_config}

---

##### `cohort`<sup>Optional</sup> <a name="cohort" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig.property.cohort"></a>

```python
cohort: str
```

- *Type:* str

Optional. Cohort identifier. Identifies families of the workloads having the same shape, e.g. daily ETL jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#cohort GoogleDataprocBatch#cohort}

---

##### `container_image`<sup>Optional</sup> <a name="container_image" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig.property.containerImage"></a>

```python
container_image: str
```

- *Type:* str

Optional custom container image for the job runtime environment. If not specified, a default container image will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#container_image GoogleDataprocBatch#container_image}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A mapping of property names to values, which are used to configure workload execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#properties GoogleDataprocBatch#properties}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig.property.version"></a>

```python
version: str
```

- *Type:* str

Version of the batch runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#version GoogleDataprocBatch#version}

---

### GoogleDataprocBatchRuntimeConfigAutotuningConfig <a name="GoogleDataprocBatchRuntimeConfigAutotuningConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_batch

googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfig(
  scenarios: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfig.property.scenarios">scenarios</a></code> | <code>typing.List[str]</code> | Optional. Scenarios for which tunings are applied. Possible values: ["SCALING", "BROADCAST_HASH_JOIN", "MEMORY"]. |

---

##### `scenarios`<sup>Optional</sup> <a name="scenarios" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfig.property.scenarios"></a>

```python
scenarios: typing.List[str]
```

- *Type:* typing.List[str]

Optional. Scenarios for which tunings are applied. Possible values: ["SCALING", "BROADCAST_HASH_JOIN", "MEMORY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#scenarios GoogleDataprocBatch#scenarios}

---

### GoogleDataprocBatchRuntimeInfo <a name="GoogleDataprocBatchRuntimeInfo" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_batch

googleDataprocBatch.GoogleDataprocBatchRuntimeInfo()
```


### GoogleDataprocBatchRuntimeInfoApproximateUsage <a name="GoogleDataprocBatchRuntimeInfoApproximateUsage" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsage.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_batch

googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsage()
```


### GoogleDataprocBatchRuntimeInfoCurrentUsage <a name="GoogleDataprocBatchRuntimeInfoCurrentUsage" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsage.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_batch

googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsage()
```


### GoogleDataprocBatchSparkBatch <a name="GoogleDataprocBatchSparkBatch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_batch

googleDataprocBatch.GoogleDataprocBatchSparkBatch(
  archive_uris: typing.List[str] = None,
  args: typing.List[str] = None,
  file_uris: typing.List[str] = None,
  jar_file_uris: typing.List[str] = None,
  main_class: str = None,
  main_jar_file_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch.property.archiveUris">archive_uris</a></code> | <code>typing.List[str]</code> | HCFS URIs of archives to be extracted into the working directory of each executor. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch.property.args">args</a></code> | <code>typing.List[str]</code> | The arguments to pass to the driver. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch.property.fileUris">file_uris</a></code> | <code>typing.List[str]</code> | HCFS URIs of files to be placed in the working directory of each executor. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch.property.jarFileUris">jar_file_uris</a></code> | <code>typing.List[str]</code> | HCFS URIs of jar files to add to the classpath of the Spark driver and tasks. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch.property.mainClass">main_class</a></code> | <code>str</code> | The name of the driver main class. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch.property.mainJarFileUri">main_jar_file_uri</a></code> | <code>str</code> | The HCFS URI of the jar file that contains the main class. |

---

##### `archive_uris`<sup>Optional</sup> <a name="archive_uris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch.property.archiveUris"></a>

```python
archive_uris: typing.List[str]
```

- *Type:* typing.List[str]

HCFS URIs of archives to be extracted into the working directory of each executor.

Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#archive_uris GoogleDataprocBatch#archive_uris}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

The arguments to pass to the driver.

Do not include arguments that can be set as batch
properties, such as --conf, since a collision can occur that causes an incorrect batch submission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#args GoogleDataprocBatch#args}

---

##### `file_uris`<sup>Optional</sup> <a name="file_uris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch.property.fileUris"></a>

```python
file_uris: typing.List[str]
```

- *Type:* typing.List[str]

HCFS URIs of files to be placed in the working directory of each executor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#file_uris GoogleDataprocBatch#file_uris}

---

##### `jar_file_uris`<sup>Optional</sup> <a name="jar_file_uris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch.property.jarFileUris"></a>

```python
jar_file_uris: typing.List[str]
```

- *Type:* typing.List[str]

HCFS URIs of jar files to add to the classpath of the Spark driver and tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#jar_file_uris GoogleDataprocBatch#jar_file_uris}

---

##### `main_class`<sup>Optional</sup> <a name="main_class" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch.property.mainClass"></a>

```python
main_class: str
```

- *Type:* str

The name of the driver main class.

The jar file that contains the class must be in the
classpath or specified in jarFileUris.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#main_class GoogleDataprocBatch#main_class}

---

##### `main_jar_file_uri`<sup>Optional</sup> <a name="main_jar_file_uri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch.property.mainJarFileUri"></a>

```python
main_jar_file_uri: str
```

- *Type:* str

The HCFS URI of the jar file that contains the main class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#main_jar_file_uri GoogleDataprocBatch#main_jar_file_uri}

---

### GoogleDataprocBatchSparkRBatch <a name="GoogleDataprocBatchSparkRBatch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_batch

googleDataprocBatch.GoogleDataprocBatchSparkRBatch(
  archive_uris: typing.List[str] = None,
  args: typing.List[str] = None,
  file_uris: typing.List[str] = None,
  main_r_file_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch.property.archiveUris">archive_uris</a></code> | <code>typing.List[str]</code> | HCFS URIs of archives to be extracted into the working directory of each executor. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch.property.args">args</a></code> | <code>typing.List[str]</code> | The arguments to pass to the driver. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch.property.fileUris">file_uris</a></code> | <code>typing.List[str]</code> | HCFS URIs of files to be placed in the working directory of each executor. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch.property.mainRFileUri">main_r_file_uri</a></code> | <code>str</code> | The HCFS URI of the main R file to use as the driver. |

---

##### `archive_uris`<sup>Optional</sup> <a name="archive_uris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch.property.archiveUris"></a>

```python
archive_uris: typing.List[str]
```

- *Type:* typing.List[str]

HCFS URIs of archives to be extracted into the working directory of each executor.

Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#archive_uris GoogleDataprocBatch#archive_uris}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

The arguments to pass to the driver.

Do not include arguments that can be set as batch
properties, such as --conf, since a collision can occur that causes an incorrect batch submission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#args GoogleDataprocBatch#args}

---

##### `file_uris`<sup>Optional</sup> <a name="file_uris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch.property.fileUris"></a>

```python
file_uris: typing.List[str]
```

- *Type:* typing.List[str]

HCFS URIs of files to be placed in the working directory of each executor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#file_uris GoogleDataprocBatch#file_uris}

---

##### `main_r_file_uri`<sup>Optional</sup> <a name="main_r_file_uri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch.property.mainRFileUri"></a>

```python
main_r_file_uri: str
```

- *Type:* str

The HCFS URI of the main R file to use as the driver.

Must be a .R or .r file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#main_r_file_uri GoogleDataprocBatch#main_r_file_uri}

---

### GoogleDataprocBatchSparkSqlBatch <a name="GoogleDataprocBatchSparkSqlBatch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatch.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_batch

googleDataprocBatch.GoogleDataprocBatchSparkSqlBatch(
  jar_file_uris: typing.List[str] = None,
  query_file_uri: str = None,
  query_variables: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatch.property.jarFileUris">jar_file_uris</a></code> | <code>typing.List[str]</code> | HCFS URIs of jar files to be added to the Spark CLASSPATH. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatch.property.queryFileUri">query_file_uri</a></code> | <code>str</code> | The HCFS URI of the script that contains Spark SQL queries to execute. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatch.property.queryVariables">query_variables</a></code> | <code>typing.Mapping[str]</code> | Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";). |

---

##### `jar_file_uris`<sup>Optional</sup> <a name="jar_file_uris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatch.property.jarFileUris"></a>

```python
jar_file_uris: typing.List[str]
```

- *Type:* typing.List[str]

HCFS URIs of jar files to be added to the Spark CLASSPATH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#jar_file_uris GoogleDataprocBatch#jar_file_uris}

---

##### `query_file_uri`<sup>Optional</sup> <a name="query_file_uri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatch.property.queryFileUri"></a>

```python
query_file_uri: str
```

- *Type:* str

The HCFS URI of the script that contains Spark SQL queries to execute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#query_file_uri GoogleDataprocBatch#query_file_uri}

---

##### `query_variables`<sup>Optional</sup> <a name="query_variables" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatch.property.queryVariables"></a>

```python
query_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#query_variables GoogleDataprocBatch#query_variables}

---

### GoogleDataprocBatchStateHistory <a name="GoogleDataprocBatchStateHistory" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistory.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_batch

googleDataprocBatch.GoogleDataprocBatchStateHistory()
```


### GoogleDataprocBatchTimeouts <a name="GoogleDataprocBatchTimeouts" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_batch

googleDataprocBatch.GoogleDataprocBatchTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#create GoogleDataprocBatch#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#delete GoogleDataprocBatch#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#update GoogleDataprocBatch#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#create GoogleDataprocBatch#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#delete GoogleDataprocBatch#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#update GoogleDataprocBatch#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference <a name="GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_batch

googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetKmsKey">reset_kms_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetNetworkTags">reset_network_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetNetworkUri">reset_network_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetServiceAccount">reset_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetStagingBucket">reset_staging_bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetSubnetworkUri">reset_subnetwork_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetTtl">reset_ttl</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```

##### `reset_network_tags` <a name="reset_network_tags" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetNetworkTags"></a>

```python
def reset_network_tags() -> None
```

##### `reset_network_uri` <a name="reset_network_uri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetNetworkUri"></a>

```python
def reset_network_uri() -> None
```

##### `reset_service_account` <a name="reset_service_account" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetServiceAccount"></a>

```python
def reset_service_account() -> None
```

##### `reset_staging_bucket` <a name="reset_staging_bucket" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetStagingBucket"></a>

```python
def reset_staging_bucket() -> None
```

##### `reset_subnetwork_uri` <a name="reset_subnetwork_uri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetSubnetworkUri"></a>

```python
def reset_subnetwork_uri() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetTtl"></a>

```python
def reset_ttl() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.networkTagsInput">network_tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.networkUriInput">network_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.stagingBucketInput">staging_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.subnetworkUriInput">subnetwork_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.ttlInput">ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.networkTags">network_tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.networkUri">network_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.stagingBucket">staging_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.subnetworkUri">subnetwork_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.ttl">ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig">GoogleDataprocBatchEnvironmentConfigExecutionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `network_tags_input`<sup>Optional</sup> <a name="network_tags_input" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.networkTagsInput"></a>

```python
network_tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `network_uri_input`<sup>Optional</sup> <a name="network_uri_input" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.networkUriInput"></a>

```python
network_uri_input: str
```

- *Type:* str

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `staging_bucket_input`<sup>Optional</sup> <a name="staging_bucket_input" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.stagingBucketInput"></a>

```python
staging_bucket_input: str
```

- *Type:* str

---

##### `subnetwork_uri_input`<sup>Optional</sup> <a name="subnetwork_uri_input" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.subnetworkUriInput"></a>

```python
subnetwork_uri_input: str
```

- *Type:* str

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.ttlInput"></a>

```python
ttl_input: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `network_tags`<sup>Required</sup> <a name="network_tags" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.networkTags"></a>

```python
network_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `network_uri`<sup>Required</sup> <a name="network_uri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.networkUri"></a>

```python
network_uri: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `staging_bucket`<sup>Required</sup> <a name="staging_bucket" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.stagingBucket"></a>

```python
staging_bucket: str
```

- *Type:* str

---

##### `subnetwork_uri`<sup>Required</sup> <a name="subnetwork_uri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.subnetworkUri"></a>

```python
subnetwork_uri: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocBatchEnvironmentConfigExecutionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig">GoogleDataprocBatchEnvironmentConfigExecutionConfig</a>

---


### GoogleDataprocBatchEnvironmentConfigOutputReference <a name="GoogleDataprocBatchEnvironmentConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_batch

googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.putExecutionConfig">put_execution_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.putPeripheralsConfig">put_peripherals_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.resetExecutionConfig">reset_execution_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.resetPeripheralsConfig">reset_peripherals_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_execution_config` <a name="put_execution_config" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.putExecutionConfig"></a>

```python
def put_execution_config(
  kms_key: str = None,
  network_tags: typing.List[str] = None,
  network_uri: str = None,
  service_account: str = None,
  staging_bucket: str = None,
  subnetwork_uri: str = None,
  ttl: str = None
) -> None
```

###### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.putExecutionConfig.parameter.kmsKey"></a>

- *Type:* str

The Cloud KMS key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#kms_key GoogleDataprocBatch#kms_key}

---

###### `network_tags`<sup>Optional</sup> <a name="network_tags" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.putExecutionConfig.parameter.networkTags"></a>

- *Type:* typing.List[str]

Tags used for network traffic control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#network_tags GoogleDataprocBatch#network_tags}

---

###### `network_uri`<sup>Optional</sup> <a name="network_uri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.putExecutionConfig.parameter.networkUri"></a>

- *Type:* str

Network configuration for workload execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#network_uri GoogleDataprocBatch#network_uri}

---

###### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.putExecutionConfig.parameter.serviceAccount"></a>

- *Type:* str

Service account that used to execute workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#service_account GoogleDataprocBatch#service_account}

---

###### `staging_bucket`<sup>Optional</sup> <a name="staging_bucket" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.putExecutionConfig.parameter.stagingBucket"></a>

- *Type:* str

A Cloud Storage bucket used to stage workload dependencies, config files, and store workload output and other ephemeral data, such as Spark history files.

If you do not specify a staging bucket,
Cloud Dataproc will determine a Cloud Storage location according to the region where your workload is running,
and then create and manage project-level, per-location staging and temporary buckets.
This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#staging_bucket GoogleDataprocBatch#staging_bucket}

---

###### `subnetwork_uri`<sup>Optional</sup> <a name="subnetwork_uri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.putExecutionConfig.parameter.subnetworkUri"></a>

- *Type:* str

Subnetwork configuration for workload execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#subnetwork_uri GoogleDataprocBatch#subnetwork_uri}

---

###### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.putExecutionConfig.parameter.ttl"></a>

- *Type:* str

The duration after which the workload will be terminated.

When the workload exceeds this duration, it will be unconditionally terminated without waiting for ongoing
work to finish. If ttl is not specified for a batch workload, the workload will be allowed to run until it
exits naturally (or run forever without exiting). If ttl is not specified for an interactive session,
it defaults to 24 hours. If ttl is not specified for a batch that uses 2.1+ runtime version, it defaults to 4 hours.
Minimum value is 10 minutes; maximum value is 14 days. If both ttl and idleTtl are specified (for an interactive session),
the conditions are treated as OR conditions: the workload will be terminated when it has been idle for idleTtl or
when ttl has been exceeded, whichever occurs first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#ttl GoogleDataprocBatch#ttl}

---

##### `put_peripherals_config` <a name="put_peripherals_config" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.putPeripheralsConfig"></a>

```python
def put_peripherals_config(
  metastore_service: str = None,
  spark_history_server_config: GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig = None
) -> None
```

###### `metastore_service`<sup>Optional</sup> <a name="metastore_service" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.putPeripheralsConfig.parameter.metastoreService"></a>

- *Type:* str

Resource name of an existing Dataproc Metastore service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#metastore_service GoogleDataprocBatch#metastore_service}

---

###### `spark_history_server_config`<sup>Optional</sup> <a name="spark_history_server_config" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.putPeripheralsConfig.parameter.sparkHistoryServerConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a>

spark_history_server_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#spark_history_server_config GoogleDataprocBatch#spark_history_server_config}

---

##### `reset_execution_config` <a name="reset_execution_config" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.resetExecutionConfig"></a>

```python
def reset_execution_config() -> None
```

##### `reset_peripherals_config` <a name="reset_peripherals_config" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.resetPeripheralsConfig"></a>

```python
def reset_peripherals_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.property.executionConfig">execution_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference">GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.property.peripheralsConfig">peripherals_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference">GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.property.executionConfigInput">execution_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig">GoogleDataprocBatchEnvironmentConfigExecutionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.property.peripheralsConfigInput">peripherals_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfig">GoogleDataprocBatchEnvironmentConfigPeripheralsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfig">GoogleDataprocBatchEnvironmentConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `execution_config`<sup>Required</sup> <a name="execution_config" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.property.executionConfig"></a>

```python
execution_config: GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference">GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference</a>

---

##### `peripherals_config`<sup>Required</sup> <a name="peripherals_config" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.property.peripheralsConfig"></a>

```python
peripherals_config: GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference">GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference</a>

---

##### `execution_config_input`<sup>Optional</sup> <a name="execution_config_input" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.property.executionConfigInput"></a>

```python
execution_config_input: GoogleDataprocBatchEnvironmentConfigExecutionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig">GoogleDataprocBatchEnvironmentConfigExecutionConfig</a>

---

##### `peripherals_config_input`<sup>Optional</sup> <a name="peripherals_config_input" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.property.peripheralsConfigInput"></a>

```python
peripherals_config_input: GoogleDataprocBatchEnvironmentConfigPeripheralsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfig">GoogleDataprocBatchEnvironmentConfigPeripheralsConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocBatchEnvironmentConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfig">GoogleDataprocBatchEnvironmentConfig</a>

---


### GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference <a name="GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_batch

googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.putSparkHistoryServerConfig">put_spark_history_server_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.resetMetastoreService">reset_metastore_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.resetSparkHistoryServerConfig">reset_spark_history_server_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_spark_history_server_config` <a name="put_spark_history_server_config" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.putSparkHistoryServerConfig"></a>

```python
def put_spark_history_server_config(
  dataproc_cluster: str = None
) -> None
```

###### `dataproc_cluster`<sup>Optional</sup> <a name="dataproc_cluster" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.putSparkHistoryServerConfig.parameter.dataprocCluster"></a>

- *Type:* str

Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#dataproc_cluster GoogleDataprocBatch#dataproc_cluster}

---

##### `reset_metastore_service` <a name="reset_metastore_service" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.resetMetastoreService"></a>

```python
def reset_metastore_service() -> None
```

##### `reset_spark_history_server_config` <a name="reset_spark_history_server_config" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.resetSparkHistoryServerConfig"></a>

```python
def reset_spark_history_server_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.sparkHistoryServerConfig">spark_history_server_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference">GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.metastoreServiceInput">metastore_service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.sparkHistoryServerConfigInput">spark_history_server_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.metastoreService">metastore_service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfig">GoogleDataprocBatchEnvironmentConfigPeripheralsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `spark_history_server_config`<sup>Required</sup> <a name="spark_history_server_config" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.sparkHistoryServerConfig"></a>

```python
spark_history_server_config: GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference">GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference</a>

---

##### `metastore_service_input`<sup>Optional</sup> <a name="metastore_service_input" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.metastoreServiceInput"></a>

```python
metastore_service_input: str
```

- *Type:* str

---

##### `spark_history_server_config_input`<sup>Optional</sup> <a name="spark_history_server_config_input" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.sparkHistoryServerConfigInput"></a>

```python
spark_history_server_config_input: GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a>

---

##### `metastore_service`<sup>Required</sup> <a name="metastore_service" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.metastoreService"></a>

```python
metastore_service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocBatchEnvironmentConfigPeripheralsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfig">GoogleDataprocBatchEnvironmentConfigPeripheralsConfig</a>

---


### GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference <a name="GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_batch

googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resetDataprocCluster">reset_dataproc_cluster</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dataproc_cluster` <a name="reset_dataproc_cluster" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resetDataprocCluster"></a>

```python
def reset_dataproc_cluster() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.dataprocClusterInput">dataproc_cluster_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.dataprocCluster">dataproc_cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataproc_cluster_input`<sup>Optional</sup> <a name="dataproc_cluster_input" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.dataprocClusterInput"></a>

```python
dataproc_cluster_input: str
```

- *Type:* str

---

##### `dataproc_cluster`<sup>Required</sup> <a name="dataproc_cluster" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.dataprocCluster"></a>

```python
dataproc_cluster: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a>

---


### GoogleDataprocBatchPysparkBatchOutputReference <a name="GoogleDataprocBatchPysparkBatchOutputReference" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_batch

googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.resetArchiveUris">reset_archive_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.resetArgs">reset_args</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.resetFileUris">reset_file_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.resetJarFileUris">reset_jar_file_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.resetMainPythonFileUri">reset_main_python_file_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.resetPythonFileUris">reset_python_file_uris</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_archive_uris` <a name="reset_archive_uris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.resetArchiveUris"></a>

```python
def reset_archive_uris() -> None
```

##### `reset_args` <a name="reset_args" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.resetArgs"></a>

```python
def reset_args() -> None
```

##### `reset_file_uris` <a name="reset_file_uris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.resetFileUris"></a>

```python
def reset_file_uris() -> None
```

##### `reset_jar_file_uris` <a name="reset_jar_file_uris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.resetJarFileUris"></a>

```python
def reset_jar_file_uris() -> None
```

##### `reset_main_python_file_uri` <a name="reset_main_python_file_uri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.resetMainPythonFileUri"></a>

```python
def reset_main_python_file_uri() -> None
```

##### `reset_python_file_uris` <a name="reset_python_file_uris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.resetPythonFileUris"></a>

```python
def reset_python_file_uris() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.archiveUrisInput">archive_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.argsInput">args_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.fileUrisInput">file_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.jarFileUrisInput">jar_file_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.mainPythonFileUriInput">main_python_file_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.pythonFileUrisInput">python_file_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.archiveUris">archive_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.args">args</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.fileUris">file_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.jarFileUris">jar_file_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.mainPythonFileUri">main_python_file_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.pythonFileUris">python_file_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch">GoogleDataprocBatchPysparkBatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `archive_uris_input`<sup>Optional</sup> <a name="archive_uris_input" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.archiveUrisInput"></a>

```python
archive_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `args_input`<sup>Optional</sup> <a name="args_input" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.argsInput"></a>

```python
args_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `file_uris_input`<sup>Optional</sup> <a name="file_uris_input" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.fileUrisInput"></a>

```python
file_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jar_file_uris_input`<sup>Optional</sup> <a name="jar_file_uris_input" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.jarFileUrisInput"></a>

```python
jar_file_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `main_python_file_uri_input`<sup>Optional</sup> <a name="main_python_file_uri_input" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.mainPythonFileUriInput"></a>

```python
main_python_file_uri_input: str
```

- *Type:* str

---

##### `python_file_uris_input`<sup>Optional</sup> <a name="python_file_uris_input" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.pythonFileUrisInput"></a>

```python
python_file_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `archive_uris`<sup>Required</sup> <a name="archive_uris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.archiveUris"></a>

```python
archive_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `file_uris`<sup>Required</sup> <a name="file_uris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.fileUris"></a>

```python
file_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jar_file_uris`<sup>Required</sup> <a name="jar_file_uris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.jarFileUris"></a>

```python
jar_file_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `main_python_file_uri`<sup>Required</sup> <a name="main_python_file_uri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.mainPythonFileUri"></a>

```python
main_python_file_uri: str
```

- *Type:* str

---

##### `python_file_uris`<sup>Required</sup> <a name="python_file_uris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.pythonFileUris"></a>

```python
python_file_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocBatchPysparkBatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch">GoogleDataprocBatchPysparkBatch</a>

---


### GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference <a name="GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_batch

googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.resetScenarios">reset_scenarios</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_scenarios` <a name="reset_scenarios" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.resetScenarios"></a>

```python
def reset_scenarios() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.scenariosInput">scenarios_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.scenarios">scenarios</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfig">GoogleDataprocBatchRuntimeConfigAutotuningConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scenarios_input`<sup>Optional</sup> <a name="scenarios_input" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.scenariosInput"></a>

```python
scenarios_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scenarios`<sup>Required</sup> <a name="scenarios" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.scenarios"></a>

```python
scenarios: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocBatchRuntimeConfigAutotuningConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfig">GoogleDataprocBatchRuntimeConfigAutotuningConfig</a>

---


### GoogleDataprocBatchRuntimeConfigOutputReference <a name="GoogleDataprocBatchRuntimeConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_batch

googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.putAutotuningConfig">put_autotuning_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.resetAutotuningConfig">reset_autotuning_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.resetCohort">reset_cohort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.resetContainerImage">reset_container_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_autotuning_config` <a name="put_autotuning_config" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.putAutotuningConfig"></a>

```python
def put_autotuning_config(
  scenarios: typing.List[str] = None
) -> None
```

###### `scenarios`<sup>Optional</sup> <a name="scenarios" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.putAutotuningConfig.parameter.scenarios"></a>

- *Type:* typing.List[str]

Optional. Scenarios for which tunings are applied. Possible values: ["SCALING", "BROADCAST_HASH_JOIN", "MEMORY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_batch#scenarios GoogleDataprocBatch#scenarios}

---

##### `reset_autotuning_config` <a name="reset_autotuning_config" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.resetAutotuningConfig"></a>

```python
def reset_autotuning_config() -> None
```

##### `reset_cohort` <a name="reset_cohort" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.resetCohort"></a>

```python
def reset_cohort() -> None
```

##### `reset_container_image` <a name="reset_container_image" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.resetContainerImage"></a>

```python
def reset_container_image() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.autotuningConfig">autotuning_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference">GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.effectiveProperties">effective_properties</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.autotuningConfigInput">autotuning_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfig">GoogleDataprocBatchRuntimeConfigAutotuningConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.cohortInput">cohort_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.containerImageInput">container_image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.propertiesInput">properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.cohort">cohort</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.containerImage">container_image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig">GoogleDataprocBatchRuntimeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autotuning_config`<sup>Required</sup> <a name="autotuning_config" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.autotuningConfig"></a>

```python
autotuning_config: GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference">GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference</a>

---

##### `effective_properties`<sup>Required</sup> <a name="effective_properties" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.effectiveProperties"></a>

```python
effective_properties: StringMap
```

- *Type:* cdktf.StringMap

---

##### `autotuning_config_input`<sup>Optional</sup> <a name="autotuning_config_input" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.autotuningConfigInput"></a>

```python
autotuning_config_input: GoogleDataprocBatchRuntimeConfigAutotuningConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfig">GoogleDataprocBatchRuntimeConfigAutotuningConfig</a>

---

##### `cohort_input`<sup>Optional</sup> <a name="cohort_input" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.cohortInput"></a>

```python
cohort_input: str
```

- *Type:* str

---

##### `container_image_input`<sup>Optional</sup> <a name="container_image_input" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.containerImageInput"></a>

```python
container_image_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.propertiesInput"></a>

```python
properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `cohort`<sup>Required</sup> <a name="cohort" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.cohort"></a>

```python
cohort: str
```

- *Type:* str

---

##### `container_image`<sup>Required</sup> <a name="container_image" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.containerImage"></a>

```python
container_image: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocBatchRuntimeConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig">GoogleDataprocBatchRuntimeConfig</a>

---


### GoogleDataprocBatchRuntimeInfoApproximateUsageList <a name="GoogleDataprocBatchRuntimeInfoApproximateUsageList" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_batch

googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference <a name="GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_batch

googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.property.acceleratorType">accelerator_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.property.milliAcceleratorSeconds">milli_accelerator_seconds</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.property.milliDcuSeconds">milli_dcu_seconds</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.property.shuffleStorageGbSeconds">shuffle_storage_gb_seconds</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsage">GoogleDataprocBatchRuntimeInfoApproximateUsage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accelerator_type`<sup>Required</sup> <a name="accelerator_type" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.property.acceleratorType"></a>

```python
accelerator_type: str
```

- *Type:* str

---

##### `milli_accelerator_seconds`<sup>Required</sup> <a name="milli_accelerator_seconds" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.property.milliAcceleratorSeconds"></a>

```python
milli_accelerator_seconds: str
```

- *Type:* str

---

##### `milli_dcu_seconds`<sup>Required</sup> <a name="milli_dcu_seconds" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.property.milliDcuSeconds"></a>

```python
milli_dcu_seconds: str
```

- *Type:* str

---

##### `shuffle_storage_gb_seconds`<sup>Required</sup> <a name="shuffle_storage_gb_seconds" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.property.shuffleStorageGbSeconds"></a>

```python
shuffle_storage_gb_seconds: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocBatchRuntimeInfoApproximateUsage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsage">GoogleDataprocBatchRuntimeInfoApproximateUsage</a>

---


### GoogleDataprocBatchRuntimeInfoCurrentUsageList <a name="GoogleDataprocBatchRuntimeInfoCurrentUsageList" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_batch

googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference <a name="GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_batch

googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.acceleratorType">accelerator_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.milliAccelerator">milli_accelerator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.milliDcu">milli_dcu</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.milliDcuPremium">milli_dcu_premium</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.shuffleStorageGb">shuffle_storage_gb</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.shuffleStorageGbPremium">shuffle_storage_gb_premium</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.snapshotTime">snapshot_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsage">GoogleDataprocBatchRuntimeInfoCurrentUsage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accelerator_type`<sup>Required</sup> <a name="accelerator_type" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.acceleratorType"></a>

```python
accelerator_type: str
```

- *Type:* str

---

##### `milli_accelerator`<sup>Required</sup> <a name="milli_accelerator" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.milliAccelerator"></a>

```python
milli_accelerator: str
```

- *Type:* str

---

##### `milli_dcu`<sup>Required</sup> <a name="milli_dcu" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.milliDcu"></a>

```python
milli_dcu: str
```

- *Type:* str

---

##### `milli_dcu_premium`<sup>Required</sup> <a name="milli_dcu_premium" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.milliDcuPremium"></a>

```python
milli_dcu_premium: str
```

- *Type:* str

---

##### `shuffle_storage_gb`<sup>Required</sup> <a name="shuffle_storage_gb" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.shuffleStorageGb"></a>

```python
shuffle_storage_gb: str
```

- *Type:* str

---

##### `shuffle_storage_gb_premium`<sup>Required</sup> <a name="shuffle_storage_gb_premium" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.shuffleStorageGbPremium"></a>

```python
shuffle_storage_gb_premium: str
```

- *Type:* str

---

##### `snapshot_time`<sup>Required</sup> <a name="snapshot_time" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.snapshotTime"></a>

```python
snapshot_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocBatchRuntimeInfoCurrentUsage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsage">GoogleDataprocBatchRuntimeInfoCurrentUsage</a>

---


### GoogleDataprocBatchRuntimeInfoList <a name="GoogleDataprocBatchRuntimeInfoList" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_batch

googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDataprocBatchRuntimeInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleDataprocBatchRuntimeInfoOutputReference <a name="GoogleDataprocBatchRuntimeInfoOutputReference" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_batch

googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.property.approximateUsage">approximate_usage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList">GoogleDataprocBatchRuntimeInfoApproximateUsageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.property.currentUsage">current_usage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList">GoogleDataprocBatchRuntimeInfoCurrentUsageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.property.diagnosticOutputUri">diagnostic_output_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.property.endpoints">endpoints</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.property.outputUri">output_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfo">GoogleDataprocBatchRuntimeInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `approximate_usage`<sup>Required</sup> <a name="approximate_usage" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.property.approximateUsage"></a>

```python
approximate_usage: GoogleDataprocBatchRuntimeInfoApproximateUsageList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList">GoogleDataprocBatchRuntimeInfoApproximateUsageList</a>

---

##### `current_usage`<sup>Required</sup> <a name="current_usage" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.property.currentUsage"></a>

```python
current_usage: GoogleDataprocBatchRuntimeInfoCurrentUsageList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList">GoogleDataprocBatchRuntimeInfoCurrentUsageList</a>

---

##### `diagnostic_output_uri`<sup>Required</sup> <a name="diagnostic_output_uri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.property.diagnosticOutputUri"></a>

```python
diagnostic_output_uri: str
```

- *Type:* str

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.property.endpoints"></a>

```python
endpoints: StringMap
```

- *Type:* cdktf.StringMap

---

##### `output_uri`<sup>Required</sup> <a name="output_uri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.property.outputUri"></a>

```python
output_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocBatchRuntimeInfo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfo">GoogleDataprocBatchRuntimeInfo</a>

---


### GoogleDataprocBatchSparkBatchOutputReference <a name="GoogleDataprocBatchSparkBatchOutputReference" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_batch

googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.resetArchiveUris">reset_archive_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.resetArgs">reset_args</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.resetFileUris">reset_file_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.resetJarFileUris">reset_jar_file_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.resetMainClass">reset_main_class</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.resetMainJarFileUri">reset_main_jar_file_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_archive_uris` <a name="reset_archive_uris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.resetArchiveUris"></a>

```python
def reset_archive_uris() -> None
```

##### `reset_args` <a name="reset_args" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.resetArgs"></a>

```python
def reset_args() -> None
```

##### `reset_file_uris` <a name="reset_file_uris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.resetFileUris"></a>

```python
def reset_file_uris() -> None
```

##### `reset_jar_file_uris` <a name="reset_jar_file_uris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.resetJarFileUris"></a>

```python
def reset_jar_file_uris() -> None
```

##### `reset_main_class` <a name="reset_main_class" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.resetMainClass"></a>

```python
def reset_main_class() -> None
```

##### `reset_main_jar_file_uri` <a name="reset_main_jar_file_uri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.resetMainJarFileUri"></a>

```python
def reset_main_jar_file_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.archiveUrisInput">archive_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.argsInput">args_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.fileUrisInput">file_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.jarFileUrisInput">jar_file_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.mainClassInput">main_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.mainJarFileUriInput">main_jar_file_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.archiveUris">archive_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.args">args</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.fileUris">file_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.jarFileUris">jar_file_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.mainClass">main_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.mainJarFileUri">main_jar_file_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch">GoogleDataprocBatchSparkBatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `archive_uris_input`<sup>Optional</sup> <a name="archive_uris_input" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.archiveUrisInput"></a>

```python
archive_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `args_input`<sup>Optional</sup> <a name="args_input" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.argsInput"></a>

```python
args_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `file_uris_input`<sup>Optional</sup> <a name="file_uris_input" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.fileUrisInput"></a>

```python
file_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jar_file_uris_input`<sup>Optional</sup> <a name="jar_file_uris_input" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.jarFileUrisInput"></a>

```python
jar_file_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `main_class_input`<sup>Optional</sup> <a name="main_class_input" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.mainClassInput"></a>

```python
main_class_input: str
```

- *Type:* str

---

##### `main_jar_file_uri_input`<sup>Optional</sup> <a name="main_jar_file_uri_input" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.mainJarFileUriInput"></a>

```python
main_jar_file_uri_input: str
```

- *Type:* str

---

##### `archive_uris`<sup>Required</sup> <a name="archive_uris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.archiveUris"></a>

```python
archive_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `file_uris`<sup>Required</sup> <a name="file_uris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.fileUris"></a>

```python
file_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jar_file_uris`<sup>Required</sup> <a name="jar_file_uris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.jarFileUris"></a>

```python
jar_file_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `main_class`<sup>Required</sup> <a name="main_class" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.mainClass"></a>

```python
main_class: str
```

- *Type:* str

---

##### `main_jar_file_uri`<sup>Required</sup> <a name="main_jar_file_uri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.mainJarFileUri"></a>

```python
main_jar_file_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocBatchSparkBatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch">GoogleDataprocBatchSparkBatch</a>

---


### GoogleDataprocBatchSparkRBatchOutputReference <a name="GoogleDataprocBatchSparkRBatchOutputReference" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_batch

googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.resetArchiveUris">reset_archive_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.resetArgs">reset_args</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.resetFileUris">reset_file_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.resetMainRFileUri">reset_main_r_file_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_archive_uris` <a name="reset_archive_uris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.resetArchiveUris"></a>

```python
def reset_archive_uris() -> None
```

##### `reset_args` <a name="reset_args" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.resetArgs"></a>

```python
def reset_args() -> None
```

##### `reset_file_uris` <a name="reset_file_uris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.resetFileUris"></a>

```python
def reset_file_uris() -> None
```

##### `reset_main_r_file_uri` <a name="reset_main_r_file_uri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.resetMainRFileUri"></a>

```python
def reset_main_r_file_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.archiveUrisInput">archive_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.argsInput">args_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.fileUrisInput">file_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.mainRFileUriInput">main_r_file_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.archiveUris">archive_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.args">args</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.fileUris">file_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.mainRFileUri">main_r_file_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch">GoogleDataprocBatchSparkRBatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `archive_uris_input`<sup>Optional</sup> <a name="archive_uris_input" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.archiveUrisInput"></a>

```python
archive_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `args_input`<sup>Optional</sup> <a name="args_input" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.argsInput"></a>

```python
args_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `file_uris_input`<sup>Optional</sup> <a name="file_uris_input" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.fileUrisInput"></a>

```python
file_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `main_r_file_uri_input`<sup>Optional</sup> <a name="main_r_file_uri_input" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.mainRFileUriInput"></a>

```python
main_r_file_uri_input: str
```

- *Type:* str

---

##### `archive_uris`<sup>Required</sup> <a name="archive_uris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.archiveUris"></a>

```python
archive_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `file_uris`<sup>Required</sup> <a name="file_uris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.fileUris"></a>

```python
file_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `main_r_file_uri`<sup>Required</sup> <a name="main_r_file_uri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.mainRFileUri"></a>

```python
main_r_file_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocBatchSparkRBatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch">GoogleDataprocBatchSparkRBatch</a>

---


### GoogleDataprocBatchSparkSqlBatchOutputReference <a name="GoogleDataprocBatchSparkSqlBatchOutputReference" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_batch

googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.resetJarFileUris">reset_jar_file_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.resetQueryFileUri">reset_query_file_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.resetQueryVariables">reset_query_variables</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_jar_file_uris` <a name="reset_jar_file_uris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.resetJarFileUris"></a>

```python
def reset_jar_file_uris() -> None
```

##### `reset_query_file_uri` <a name="reset_query_file_uri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.resetQueryFileUri"></a>

```python
def reset_query_file_uri() -> None
```

##### `reset_query_variables` <a name="reset_query_variables" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.resetQueryVariables"></a>

```python
def reset_query_variables() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.jarFileUrisInput">jar_file_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.queryFileUriInput">query_file_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.queryVariablesInput">query_variables_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.jarFileUris">jar_file_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.queryFileUri">query_file_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.queryVariables">query_variables</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatch">GoogleDataprocBatchSparkSqlBatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `jar_file_uris_input`<sup>Optional</sup> <a name="jar_file_uris_input" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.jarFileUrisInput"></a>

```python
jar_file_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query_file_uri_input`<sup>Optional</sup> <a name="query_file_uri_input" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.queryFileUriInput"></a>

```python
query_file_uri_input: str
```

- *Type:* str

---

##### `query_variables_input`<sup>Optional</sup> <a name="query_variables_input" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.queryVariablesInput"></a>

```python
query_variables_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `jar_file_uris`<sup>Required</sup> <a name="jar_file_uris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.jarFileUris"></a>

```python
jar_file_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query_file_uri`<sup>Required</sup> <a name="query_file_uri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.queryFileUri"></a>

```python
query_file_uri: str
```

- *Type:* str

---

##### `query_variables`<sup>Required</sup> <a name="query_variables" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.queryVariables"></a>

```python
query_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocBatchSparkSqlBatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatch">GoogleDataprocBatchSparkSqlBatch</a>

---


### GoogleDataprocBatchStateHistoryList <a name="GoogleDataprocBatchStateHistoryList" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_batch

googleDataprocBatch.GoogleDataprocBatchStateHistoryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDataprocBatchStateHistoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleDataprocBatchStateHistoryOutputReference <a name="GoogleDataprocBatchStateHistoryOutputReference" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_batch

googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.property.stateMessage">state_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.property.stateStartTime">state_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistory">GoogleDataprocBatchStateHistory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_message`<sup>Required</sup> <a name="state_message" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.property.stateMessage"></a>

```python
state_message: str
```

- *Type:* str

---

##### `state_start_time`<sup>Required</sup> <a name="state_start_time" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.property.stateStartTime"></a>

```python
state_start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocBatchStateHistory
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistory">GoogleDataprocBatchStateHistory</a>

---


### GoogleDataprocBatchTimeoutsOutputReference <a name="GoogleDataprocBatchTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_batch

googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeouts">GoogleDataprocBatchTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDataprocBatchTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeouts">GoogleDataprocBatchTimeouts</a>]

---



