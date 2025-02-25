# `googleDataprocJob` Submodule <a name="`googleDataprocJob` Submodule" id="@cdktf/provider-google-beta.googleDataprocJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataprocJob <a name="GoogleDataprocJob" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job google_dataproc_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_job

googleDataprocJob.GoogleDataprocJob(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  placement: GoogleDataprocJobPlacement,
  force_delete: typing.Union[bool, IResolvable] = None,
  hadoop_config: GoogleDataprocJobHadoopConfig = None,
  hive_config: GoogleDataprocJobHiveConfig = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  pig_config: GoogleDataprocJobPigConfig = None,
  presto_config: GoogleDataprocJobPrestoConfig = None,
  project: str = None,
  pyspark_config: GoogleDataprocJobPysparkConfig = None,
  reference: GoogleDataprocJobReference = None,
  region: str = None,
  scheduling: GoogleDataprocJobScheduling = None,
  spark_config: GoogleDataprocJobSparkConfig = None,
  sparksql_config: GoogleDataprocJobSparksqlConfig = None,
  timeouts: GoogleDataprocJobTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.placement">placement</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacement">GoogleDataprocJobPlacement</a></code> | placement block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.forceDelete">force_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | By default, you can only delete inactive jobs within Dataproc. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.hadoopConfig">hadoop_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig">GoogleDataprocJobHadoopConfig</a></code> | hadoop_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.hiveConfig">hive_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfig">GoogleDataprocJobHiveConfig</a></code> | hive_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#id GoogleDataprocJob#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. The labels to associate with this job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.pigConfig">pig_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfig">GoogleDataprocJobPigConfig</a></code> | pig_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.prestoConfig">presto_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfig">GoogleDataprocJobPrestoConfig</a></code> | presto_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.project">project</a></code> | <code>str</code> | The project in which the cluster can be found and jobs subsequently run against. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.pysparkConfig">pyspark_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig">GoogleDataprocJobPysparkConfig</a></code> | pyspark_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.reference">reference</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReference">GoogleDataprocJobReference</a></code> | reference block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.region">region</a></code> | <code>str</code> | The Cloud Dataproc region. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.scheduling">scheduling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobScheduling">GoogleDataprocJobScheduling</a></code> | scheduling block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.sparkConfig">spark_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig">GoogleDataprocJobSparkConfig</a></code> | spark_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.sparksqlConfig">sparksql_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfig">GoogleDataprocJobSparksqlConfig</a></code> | sparksql_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeouts">GoogleDataprocJobTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `placement`<sup>Required</sup> <a name="placement" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.placement"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacement">GoogleDataprocJobPlacement</a>

placement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#placement GoogleDataprocJob#placement}

---

##### `force_delete`<sup>Optional</sup> <a name="force_delete" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.forceDelete"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

By default, you can only delete inactive jobs within Dataproc.

Setting this to true, and calling destroy, will ensure that the job is first cancelled before issuing the delete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#force_delete GoogleDataprocJob#force_delete}

---

##### `hadoop_config`<sup>Optional</sup> <a name="hadoop_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.hadoopConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig">GoogleDataprocJobHadoopConfig</a>

hadoop_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#hadoop_config GoogleDataprocJob#hadoop_config}

---

##### `hive_config`<sup>Optional</sup> <a name="hive_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.hiveConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfig">GoogleDataprocJobHiveConfig</a>

hive_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#hive_config GoogleDataprocJob#hive_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#id GoogleDataprocJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Optional. The labels to associate with this job.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#labels GoogleDataprocJob#labels}

---

##### `pig_config`<sup>Optional</sup> <a name="pig_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.pigConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfig">GoogleDataprocJobPigConfig</a>

pig_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#pig_config GoogleDataprocJob#pig_config}

---

##### `presto_config`<sup>Optional</sup> <a name="presto_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.prestoConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfig">GoogleDataprocJobPrestoConfig</a>

presto_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#presto_config GoogleDataprocJob#presto_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.project"></a>

- *Type:* str

The project in which the cluster can be found and jobs subsequently run against.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#project GoogleDataprocJob#project}

---

##### `pyspark_config`<sup>Optional</sup> <a name="pyspark_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.pysparkConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig">GoogleDataprocJobPysparkConfig</a>

pyspark_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#pyspark_config GoogleDataprocJob#pyspark_config}

---

##### `reference`<sup>Optional</sup> <a name="reference" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.reference"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReference">GoogleDataprocJobReference</a>

reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#reference GoogleDataprocJob#reference}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.region"></a>

- *Type:* str

The Cloud Dataproc region.

This essentially determines which clusters are available for this job to be submitted to. If not specified, defaults to global.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#region GoogleDataprocJob#region}

---

##### `scheduling`<sup>Optional</sup> <a name="scheduling" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.scheduling"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobScheduling">GoogleDataprocJobScheduling</a>

scheduling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#scheduling GoogleDataprocJob#scheduling}

---

##### `spark_config`<sup>Optional</sup> <a name="spark_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.sparkConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig">GoogleDataprocJobSparkConfig</a>

spark_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#spark_config GoogleDataprocJob#spark_config}

---

##### `sparksql_config`<sup>Optional</sup> <a name="sparksql_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.sparksqlConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfig">GoogleDataprocJobSparksqlConfig</a>

sparksql_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#sparksql_config GoogleDataprocJob#sparksql_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeouts">GoogleDataprocJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#timeouts GoogleDataprocJob#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putHadoopConfig">put_hadoop_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putHiveConfig">put_hive_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putPigConfig">put_pig_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putPlacement">put_placement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putPrestoConfig">put_presto_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putPysparkConfig">put_pyspark_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putReference">put_reference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putScheduling">put_scheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putSparkConfig">put_spark_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putSparksqlConfig">put_sparksql_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetForceDelete">reset_force_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetHadoopConfig">reset_hadoop_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetHiveConfig">reset_hive_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetPigConfig">reset_pig_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetPrestoConfig">reset_presto_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetPysparkConfig">reset_pyspark_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetReference">reset_reference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetScheduling">reset_scheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetSparkConfig">reset_spark_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetSparksqlConfig">reset_sparksql_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_hadoop_config` <a name="put_hadoop_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putHadoopConfig"></a>

```python
def put_hadoop_config(
  archive_uris: typing.List[str] = None,
  args: typing.List[str] = None,
  file_uris: typing.List[str] = None,
  jar_file_uris: typing.List[str] = None,
  logging_config: GoogleDataprocJobHadoopConfigLoggingConfig = None,
  main_class: str = None,
  main_jar_file_uri: str = None,
  properties: typing.Mapping[str] = None
) -> None
```

###### `archive_uris`<sup>Optional</sup> <a name="archive_uris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putHadoopConfig.parameter.archiveUris"></a>

- *Type:* typing.List[str]

HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#archive_uris GoogleDataprocJob#archive_uris}

---

###### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putHadoopConfig.parameter.args"></a>

- *Type:* typing.List[str]

The arguments to pass to the driver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#args GoogleDataprocJob#args}

---

###### `file_uris`<sup>Optional</sup> <a name="file_uris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putHadoopConfig.parameter.fileUris"></a>

- *Type:* typing.List[str]

HCFS URIs of files to be copied to the working directory of Spark drivers and distributed tasks.

Useful for naively parallel tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#file_uris GoogleDataprocJob#file_uris}

---

###### `jar_file_uris`<sup>Optional</sup> <a name="jar_file_uris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putHadoopConfig.parameter.jarFileUris"></a>

- *Type:* typing.List[str]

HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#jar_file_uris GoogleDataprocJob#jar_file_uris}

---

###### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putHadoopConfig.parameter.loggingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfig">GoogleDataprocJobHadoopConfigLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#logging_config GoogleDataprocJob#logging_config}

---

###### `main_class`<sup>Optional</sup> <a name="main_class" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putHadoopConfig.parameter.mainClass"></a>

- *Type:* str

The class containing the main method of the driver.

Must be in a provided jar or jar that is already on the classpath. Conflicts with main_jar_file_uri

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#main_class GoogleDataprocJob#main_class}

---

###### `main_jar_file_uri`<sup>Optional</sup> <a name="main_jar_file_uri" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putHadoopConfig.parameter.mainJarFileUri"></a>

- *Type:* str

The HCFS URI of jar file containing the driver jar. Conflicts with main_class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#main_jar_file_uri GoogleDataprocJob#main_jar_file_uri}

---

###### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putHadoopConfig.parameter.properties"></a>

- *Type:* typing.Mapping[str]

A mapping of property names to values, used to configure Spark.

Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#properties GoogleDataprocJob#properties}

---

##### `put_hive_config` <a name="put_hive_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putHiveConfig"></a>

```python
def put_hive_config(
  continue_on_failure: typing.Union[bool, IResolvable] = None,
  jar_file_uris: typing.List[str] = None,
  properties: typing.Mapping[str] = None,
  query_file_uri: str = None,
  query_list: typing.List[str] = None,
  script_variables: typing.Mapping[str] = None
) -> None
```

###### `continue_on_failure`<sup>Optional</sup> <a name="continue_on_failure" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putHiveConfig.parameter.continueOnFailure"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to continue executing queries if a query fails.

The default value is false. Setting to true can be useful when executing independent parallel queries. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#continue_on_failure GoogleDataprocJob#continue_on_failure}

---

###### `jar_file_uris`<sup>Optional</sup> <a name="jar_file_uris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putHiveConfig.parameter.jarFileUris"></a>

- *Type:* typing.List[str]

HCFS URIs of jar files to add to the CLASSPATH of the Hive server and Hadoop MapReduce (MR) tasks.

Can contain Hive SerDes and UDFs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#jar_file_uris GoogleDataprocJob#jar_file_uris}

---

###### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putHiveConfig.parameter.properties"></a>

- *Type:* typing.Mapping[str]

A mapping of property names and values, used to configure Hive.

Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/hive/conf/hive-site.xml, and classes in user code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#properties GoogleDataprocJob#properties}

---

###### `query_file_uri`<sup>Optional</sup> <a name="query_file_uri" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putHiveConfig.parameter.queryFileUri"></a>

- *Type:* str

HCFS URI of file containing Hive script to execute as the job. Conflicts with query_list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#query_file_uri GoogleDataprocJob#query_file_uri}

---

###### `query_list`<sup>Optional</sup> <a name="query_list" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putHiveConfig.parameter.queryList"></a>

- *Type:* typing.List[str]

The list of Hive queries or statements to execute as part of the job. Conflicts with query_file_uri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#query_list GoogleDataprocJob#query_list}

---

###### `script_variables`<sup>Optional</sup> <a name="script_variables" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putHiveConfig.parameter.scriptVariables"></a>

- *Type:* typing.Mapping[str]

Mapping of query variable names to values (equivalent to the Hive command: SET name="value";).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#script_variables GoogleDataprocJob#script_variables}

---

##### `put_pig_config` <a name="put_pig_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putPigConfig"></a>

```python
def put_pig_config(
  continue_on_failure: typing.Union[bool, IResolvable] = None,
  jar_file_uris: typing.List[str] = None,
  logging_config: GoogleDataprocJobPigConfigLoggingConfig = None,
  properties: typing.Mapping[str] = None,
  query_file_uri: str = None,
  query_list: typing.List[str] = None,
  script_variables: typing.Mapping[str] = None
) -> None
```

###### `continue_on_failure`<sup>Optional</sup> <a name="continue_on_failure" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putPigConfig.parameter.continueOnFailure"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to continue executing queries if a query fails.

The default value is false. Setting to true can be useful when executing independent parallel queries. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#continue_on_failure GoogleDataprocJob#continue_on_failure}

---

###### `jar_file_uris`<sup>Optional</sup> <a name="jar_file_uris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putPigConfig.parameter.jarFileUris"></a>

- *Type:* typing.List[str]

HCFS URIs of jar files to add to the CLASSPATH of the Pig Client and Hadoop MapReduce (MR) tasks.

Can contain Pig UDFs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#jar_file_uris GoogleDataprocJob#jar_file_uris}

---

###### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putPigConfig.parameter.loggingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfig">GoogleDataprocJobPigConfigLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#logging_config GoogleDataprocJob#logging_config}

---

###### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putPigConfig.parameter.properties"></a>

- *Type:* typing.Mapping[str]

A mapping of property names to values, used to configure Pig.

Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/pig/conf/pig.properties, and classes in user code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#properties GoogleDataprocJob#properties}

---

###### `query_file_uri`<sup>Optional</sup> <a name="query_file_uri" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putPigConfig.parameter.queryFileUri"></a>

- *Type:* str

HCFS URI of file containing Hive script to execute as the job. Conflicts with query_list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#query_file_uri GoogleDataprocJob#query_file_uri}

---

###### `query_list`<sup>Optional</sup> <a name="query_list" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putPigConfig.parameter.queryList"></a>

- *Type:* typing.List[str]

The list of Hive queries or statements to execute as part of the job. Conflicts with query_file_uri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#query_list GoogleDataprocJob#query_list}

---

###### `script_variables`<sup>Optional</sup> <a name="script_variables" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putPigConfig.parameter.scriptVariables"></a>

- *Type:* typing.Mapping[str]

Mapping of query variable names to values (equivalent to the Pig command: name=[value]).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#script_variables GoogleDataprocJob#script_variables}

---

##### `put_placement` <a name="put_placement" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putPlacement"></a>

```python
def put_placement(
  cluster_name: str
) -> None
```

###### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putPlacement.parameter.clusterName"></a>

- *Type:* str

The name of the cluster where the job will be submitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#cluster_name GoogleDataprocJob#cluster_name}

---

##### `put_presto_config` <a name="put_presto_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putPrestoConfig"></a>

```python
def put_presto_config(
  client_tags: typing.List[str] = None,
  continue_on_failure: typing.Union[bool, IResolvable] = None,
  logging_config: GoogleDataprocJobPrestoConfigLoggingConfig = None,
  output_format: str = None,
  properties: typing.Mapping[str] = None,
  query_file_uri: str = None,
  query_list: typing.List[str] = None
) -> None
```

###### `client_tags`<sup>Optional</sup> <a name="client_tags" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putPrestoConfig.parameter.clientTags"></a>

- *Type:* typing.List[str]

Presto client tags to attach to this query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#client_tags GoogleDataprocJob#client_tags}

---

###### `continue_on_failure`<sup>Optional</sup> <a name="continue_on_failure" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putPrestoConfig.parameter.continueOnFailure"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to continue executing queries if a query fails.

Setting to true can be useful when executing independent parallel queries. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#continue_on_failure GoogleDataprocJob#continue_on_failure}

---

###### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putPrestoConfig.parameter.loggingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfig">GoogleDataprocJobPrestoConfigLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#logging_config GoogleDataprocJob#logging_config}

---

###### `output_format`<sup>Optional</sup> <a name="output_format" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putPrestoConfig.parameter.outputFormat"></a>

- *Type:* str

The format in which query output will be displayed. See the Presto documentation for supported output formats.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#output_format GoogleDataprocJob#output_format}

---

###### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putPrestoConfig.parameter.properties"></a>

- *Type:* typing.Mapping[str]

A mapping of property names to values.

Used to set Presto session properties Equivalent to using the --session flag in the Presto CLI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#properties GoogleDataprocJob#properties}

---

###### `query_file_uri`<sup>Optional</sup> <a name="query_file_uri" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putPrestoConfig.parameter.queryFileUri"></a>

- *Type:* str

The HCFS URI of the script that contains SQL queries. Conflicts with query_list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#query_file_uri GoogleDataprocJob#query_file_uri}

---

###### `query_list`<sup>Optional</sup> <a name="query_list" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putPrestoConfig.parameter.queryList"></a>

- *Type:* typing.List[str]

The list of SQL queries or statements to execute as part of the job. Conflicts with query_file_uri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#query_list GoogleDataprocJob#query_list}

---

##### `put_pyspark_config` <a name="put_pyspark_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putPysparkConfig"></a>

```python
def put_pyspark_config(
  main_python_file_uri: str,
  archive_uris: typing.List[str] = None,
  args: typing.List[str] = None,
  file_uris: typing.List[str] = None,
  jar_file_uris: typing.List[str] = None,
  logging_config: GoogleDataprocJobPysparkConfigLoggingConfig = None,
  properties: typing.Mapping[str] = None,
  python_file_uris: typing.List[str] = None
) -> None
```

###### `main_python_file_uri`<sup>Required</sup> <a name="main_python_file_uri" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putPysparkConfig.parameter.mainPythonFileUri"></a>

- *Type:* str

Required. The HCFS URI of the main Python file to use as the driver. Must be a .py file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#main_python_file_uri GoogleDataprocJob#main_python_file_uri}

---

###### `archive_uris`<sup>Optional</sup> <a name="archive_uris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putPysparkConfig.parameter.archiveUris"></a>

- *Type:* typing.List[str]

Optional. HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#archive_uris GoogleDataprocJob#archive_uris}

---

###### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putPysparkConfig.parameter.args"></a>

- *Type:* typing.List[str]

Optional.

The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job properties, since a collision may occur that causes an incorrect job submission

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#args GoogleDataprocJob#args}

---

###### `file_uris`<sup>Optional</sup> <a name="file_uris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putPysparkConfig.parameter.fileUris"></a>

- *Type:* typing.List[str]

Optional.

HCFS URIs of files to be copied to the working directory of Python drivers and distributed tasks. Useful for naively parallel tasks

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#file_uris GoogleDataprocJob#file_uris}

---

###### `jar_file_uris`<sup>Optional</sup> <a name="jar_file_uris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putPysparkConfig.parameter.jarFileUris"></a>

- *Type:* typing.List[str]

Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#jar_file_uris GoogleDataprocJob#jar_file_uris}

---

###### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putPysparkConfig.parameter.loggingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfig">GoogleDataprocJobPysparkConfigLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#logging_config GoogleDataprocJob#logging_config}

---

###### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putPysparkConfig.parameter.properties"></a>

- *Type:* typing.Mapping[str]

Optional.

A mapping of property names to values, used to configure PySpark. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#properties GoogleDataprocJob#properties}

---

###### `python_file_uris`<sup>Optional</sup> <a name="python_file_uris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putPysparkConfig.parameter.pythonFileUris"></a>

- *Type:* typing.List[str]

Optional.

HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#python_file_uris GoogleDataprocJob#python_file_uris}

---

##### `put_reference` <a name="put_reference" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putReference"></a>

```python
def put_reference(
  job_id: str = None
) -> None
```

###### `job_id`<sup>Optional</sup> <a name="job_id" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putReference.parameter.jobId"></a>

- *Type:* str

The job ID, which must be unique within the project.

The job ID is generated by the server upon job submission or provided by the user as a means to perform retries without creating duplicate jobs

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#job_id GoogleDataprocJob#job_id}

---

##### `put_scheduling` <a name="put_scheduling" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putScheduling"></a>

```python
def put_scheduling(
  max_failures_per_hour: typing.Union[int, float],
  max_failures_total: typing.Union[int, float]
) -> None
```

###### `max_failures_per_hour`<sup>Required</sup> <a name="max_failures_per_hour" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putScheduling.parameter.maxFailuresPerHour"></a>

- *Type:* typing.Union[int, float]

Maximum number of times per hour a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#max_failures_per_hour GoogleDataprocJob#max_failures_per_hour}

---

###### `max_failures_total`<sup>Required</sup> <a name="max_failures_total" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putScheduling.parameter.maxFailuresTotal"></a>

- *Type:* typing.Union[int, float]

Maximum number of times in total a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#max_failures_total GoogleDataprocJob#max_failures_total}

---

##### `put_spark_config` <a name="put_spark_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putSparkConfig"></a>

```python
def put_spark_config(
  archive_uris: typing.List[str] = None,
  args: typing.List[str] = None,
  file_uris: typing.List[str] = None,
  jar_file_uris: typing.List[str] = None,
  logging_config: GoogleDataprocJobSparkConfigLoggingConfig = None,
  main_class: str = None,
  main_jar_file_uri: str = None,
  properties: typing.Mapping[str] = None
) -> None
```

###### `archive_uris`<sup>Optional</sup> <a name="archive_uris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putSparkConfig.parameter.archiveUris"></a>

- *Type:* typing.List[str]

HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#archive_uris GoogleDataprocJob#archive_uris}

---

###### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putSparkConfig.parameter.args"></a>

- *Type:* typing.List[str]

The arguments to pass to the driver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#args GoogleDataprocJob#args}

---

###### `file_uris`<sup>Optional</sup> <a name="file_uris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putSparkConfig.parameter.fileUris"></a>

- *Type:* typing.List[str]

HCFS URIs of files to be copied to the working directory of Spark drivers and distributed tasks.

Useful for naively parallel tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#file_uris GoogleDataprocJob#file_uris}

---

###### `jar_file_uris`<sup>Optional</sup> <a name="jar_file_uris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putSparkConfig.parameter.jarFileUris"></a>

- *Type:* typing.List[str]

HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#jar_file_uris GoogleDataprocJob#jar_file_uris}

---

###### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putSparkConfig.parameter.loggingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfig">GoogleDataprocJobSparkConfigLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#logging_config GoogleDataprocJob#logging_config}

---

###### `main_class`<sup>Optional</sup> <a name="main_class" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putSparkConfig.parameter.mainClass"></a>

- *Type:* str

The class containing the main method of the driver.

Must be in a provided jar or jar that is already on the classpath. Conflicts with main_jar_file_uri

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#main_class GoogleDataprocJob#main_class}

---

###### `main_jar_file_uri`<sup>Optional</sup> <a name="main_jar_file_uri" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putSparkConfig.parameter.mainJarFileUri"></a>

- *Type:* str

The HCFS URI of jar file containing the driver jar. Conflicts with main_class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#main_jar_file_uri GoogleDataprocJob#main_jar_file_uri}

---

###### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putSparkConfig.parameter.properties"></a>

- *Type:* typing.Mapping[str]

A mapping of property names to values, used to configure Spark.

Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#properties GoogleDataprocJob#properties}

---

##### `put_sparksql_config` <a name="put_sparksql_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putSparksqlConfig"></a>

```python
def put_sparksql_config(
  jar_file_uris: typing.List[str] = None,
  logging_config: GoogleDataprocJobSparksqlConfigLoggingConfig = None,
  properties: typing.Mapping[str] = None,
  query_file_uri: str = None,
  query_list: typing.List[str] = None,
  script_variables: typing.Mapping[str] = None
) -> None
```

###### `jar_file_uris`<sup>Optional</sup> <a name="jar_file_uris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putSparksqlConfig.parameter.jarFileUris"></a>

- *Type:* typing.List[str]

HCFS URIs of jar files to be added to the Spark CLASSPATH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#jar_file_uris GoogleDataprocJob#jar_file_uris}

---

###### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putSparksqlConfig.parameter.loggingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfig">GoogleDataprocJobSparksqlConfigLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#logging_config GoogleDataprocJob#logging_config}

---

###### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putSparksqlConfig.parameter.properties"></a>

- *Type:* typing.Mapping[str]

A mapping of property names to values, used to configure Spark SQL's SparkConf.

Properties that conflict with values set by the Cloud Dataproc API may be overwritten.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#properties GoogleDataprocJob#properties}

---

###### `query_file_uri`<sup>Optional</sup> <a name="query_file_uri" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putSparksqlConfig.parameter.queryFileUri"></a>

- *Type:* str

The HCFS URI of the script that contains SQL queries. Conflicts with query_list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#query_file_uri GoogleDataprocJob#query_file_uri}

---

###### `query_list`<sup>Optional</sup> <a name="query_list" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putSparksqlConfig.parameter.queryList"></a>

- *Type:* typing.List[str]

The list of SQL queries or statements to execute as part of the job. Conflicts with query_file_uri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#query_list GoogleDataprocJob#query_list}

---

###### `script_variables`<sup>Optional</sup> <a name="script_variables" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putSparksqlConfig.parameter.scriptVariables"></a>

- *Type:* typing.Mapping[str]

Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#script_variables GoogleDataprocJob#script_variables}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#create GoogleDataprocJob#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#delete GoogleDataprocJob#delete}.

---

##### `reset_force_delete` <a name="reset_force_delete" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetForceDelete"></a>

```python
def reset_force_delete() -> None
```

##### `reset_hadoop_config` <a name="reset_hadoop_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetHadoopConfig"></a>

```python
def reset_hadoop_config() -> None
```

##### `reset_hive_config` <a name="reset_hive_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetHiveConfig"></a>

```python
def reset_hive_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_pig_config` <a name="reset_pig_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetPigConfig"></a>

```python
def reset_pig_config() -> None
```

##### `reset_presto_config` <a name="reset_presto_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetPrestoConfig"></a>

```python
def reset_presto_config() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_pyspark_config` <a name="reset_pyspark_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetPysparkConfig"></a>

```python
def reset_pyspark_config() -> None
```

##### `reset_reference` <a name="reset_reference" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetReference"></a>

```python
def reset_reference() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_scheduling` <a name="reset_scheduling" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetScheduling"></a>

```python
def reset_scheduling() -> None
```

##### `reset_spark_config` <a name="reset_spark_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetSparkConfig"></a>

```python
def reset_spark_config() -> None
```

##### `reset_sparksql_config` <a name="reset_sparksql_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetSparksqlConfig"></a>

```python
def reset_sparksql_config() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleDataprocJob resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_job

googleDataprocJob.GoogleDataprocJob.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_job

googleDataprocJob.GoogleDataprocJob.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_job

googleDataprocJob.GoogleDataprocJob.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_job

googleDataprocJob.GoogleDataprocJob.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleDataprocJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDataprocJob to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDataprocJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataprocJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.driverControlsFilesUri">driver_controls_files_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.driverOutputResourceUri">driver_output_resource_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.hadoopConfig">hadoop_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference">GoogleDataprocJobHadoopConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.hiveConfig">hive_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference">GoogleDataprocJobHiveConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.pigConfig">pig_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference">GoogleDataprocJobPigConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.placement">placement</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference">GoogleDataprocJobPlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.prestoConfig">presto_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference">GoogleDataprocJobPrestoConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.pysparkConfig">pyspark_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference">GoogleDataprocJobPysparkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.reference">reference</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference">GoogleDataprocJobReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.scheduling">scheduling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference">GoogleDataprocJobSchedulingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.sparkConfig">spark_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference">GoogleDataprocJobSparkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.sparksqlConfig">sparksql_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference">GoogleDataprocJobSparksqlConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.status">status</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList">GoogleDataprocJobStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference">GoogleDataprocJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.forceDeleteInput">force_delete_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.hadoopConfigInput">hadoop_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig">GoogleDataprocJobHadoopConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.hiveConfigInput">hive_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfig">GoogleDataprocJobHiveConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.pigConfigInput">pig_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfig">GoogleDataprocJobPigConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.placementInput">placement_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacement">GoogleDataprocJobPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.prestoConfigInput">presto_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfig">GoogleDataprocJobPrestoConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.pysparkConfigInput">pyspark_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig">GoogleDataprocJobPysparkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.referenceInput">reference_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReference">GoogleDataprocJobReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.schedulingInput">scheduling_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobScheduling">GoogleDataprocJobScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.sparkConfigInput">spark_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig">GoogleDataprocJobSparkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.sparksqlConfigInput">sparksql_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfig">GoogleDataprocJobSparksqlConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeouts">GoogleDataprocJobTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.forceDelete">force_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `driver_controls_files_uri`<sup>Required</sup> <a name="driver_controls_files_uri" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.driverControlsFilesUri"></a>

```python
driver_controls_files_uri: str
```

- *Type:* str

---

##### `driver_output_resource_uri`<sup>Required</sup> <a name="driver_output_resource_uri" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.driverOutputResourceUri"></a>

```python
driver_output_resource_uri: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `hadoop_config`<sup>Required</sup> <a name="hadoop_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.hadoopConfig"></a>

```python
hadoop_config: GoogleDataprocJobHadoopConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference">GoogleDataprocJobHadoopConfigOutputReference</a>

---

##### `hive_config`<sup>Required</sup> <a name="hive_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.hiveConfig"></a>

```python
hive_config: GoogleDataprocJobHiveConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference">GoogleDataprocJobHiveConfigOutputReference</a>

---

##### `pig_config`<sup>Required</sup> <a name="pig_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.pigConfig"></a>

```python
pig_config: GoogleDataprocJobPigConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference">GoogleDataprocJobPigConfigOutputReference</a>

---

##### `placement`<sup>Required</sup> <a name="placement" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.placement"></a>

```python
placement: GoogleDataprocJobPlacementOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference">GoogleDataprocJobPlacementOutputReference</a>

---

##### `presto_config`<sup>Required</sup> <a name="presto_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.prestoConfig"></a>

```python
presto_config: GoogleDataprocJobPrestoConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference">GoogleDataprocJobPrestoConfigOutputReference</a>

---

##### `pyspark_config`<sup>Required</sup> <a name="pyspark_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.pysparkConfig"></a>

```python
pyspark_config: GoogleDataprocJobPysparkConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference">GoogleDataprocJobPysparkConfigOutputReference</a>

---

##### `reference`<sup>Required</sup> <a name="reference" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.reference"></a>

```python
reference: GoogleDataprocJobReferenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference">GoogleDataprocJobReferenceOutputReference</a>

---

##### `scheduling`<sup>Required</sup> <a name="scheduling" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.scheduling"></a>

```python
scheduling: GoogleDataprocJobSchedulingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference">GoogleDataprocJobSchedulingOutputReference</a>

---

##### `spark_config`<sup>Required</sup> <a name="spark_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.sparkConfig"></a>

```python
spark_config: GoogleDataprocJobSparkConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference">GoogleDataprocJobSparkConfigOutputReference</a>

---

##### `sparksql_config`<sup>Required</sup> <a name="sparksql_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.sparksqlConfig"></a>

```python
sparksql_config: GoogleDataprocJobSparksqlConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference">GoogleDataprocJobSparksqlConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.status"></a>

```python
status: GoogleDataprocJobStatusList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList">GoogleDataprocJobStatusList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.timeouts"></a>

```python
timeouts: GoogleDataprocJobTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference">GoogleDataprocJobTimeoutsOutputReference</a>

---

##### `force_delete_input`<sup>Optional</sup> <a name="force_delete_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.forceDeleteInput"></a>

```python
force_delete_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hadoop_config_input`<sup>Optional</sup> <a name="hadoop_config_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.hadoopConfigInput"></a>

```python
hadoop_config_input: GoogleDataprocJobHadoopConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig">GoogleDataprocJobHadoopConfig</a>

---

##### `hive_config_input`<sup>Optional</sup> <a name="hive_config_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.hiveConfigInput"></a>

```python
hive_config_input: GoogleDataprocJobHiveConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfig">GoogleDataprocJobHiveConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `pig_config_input`<sup>Optional</sup> <a name="pig_config_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.pigConfigInput"></a>

```python
pig_config_input: GoogleDataprocJobPigConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfig">GoogleDataprocJobPigConfig</a>

---

##### `placement_input`<sup>Optional</sup> <a name="placement_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.placementInput"></a>

```python
placement_input: GoogleDataprocJobPlacement
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacement">GoogleDataprocJobPlacement</a>

---

##### `presto_config_input`<sup>Optional</sup> <a name="presto_config_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.prestoConfigInput"></a>

```python
presto_config_input: GoogleDataprocJobPrestoConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfig">GoogleDataprocJobPrestoConfig</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `pyspark_config_input`<sup>Optional</sup> <a name="pyspark_config_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.pysparkConfigInput"></a>

```python
pyspark_config_input: GoogleDataprocJobPysparkConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig">GoogleDataprocJobPysparkConfig</a>

---

##### `reference_input`<sup>Optional</sup> <a name="reference_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.referenceInput"></a>

```python
reference_input: GoogleDataprocJobReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReference">GoogleDataprocJobReference</a>

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `scheduling_input`<sup>Optional</sup> <a name="scheduling_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.schedulingInput"></a>

```python
scheduling_input: GoogleDataprocJobScheduling
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobScheduling">GoogleDataprocJobScheduling</a>

---

##### `spark_config_input`<sup>Optional</sup> <a name="spark_config_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.sparkConfigInput"></a>

```python
spark_config_input: GoogleDataprocJobSparkConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig">GoogleDataprocJobSparkConfig</a>

---

##### `sparksql_config_input`<sup>Optional</sup> <a name="sparksql_config_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.sparksqlConfigInput"></a>

```python
sparksql_config_input: GoogleDataprocJobSparksqlConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfig">GoogleDataprocJobSparksqlConfig</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleDataprocJobTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeouts">GoogleDataprocJobTimeouts</a>]

---

##### `force_delete`<sup>Required</sup> <a name="force_delete" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.forceDelete"></a>

```python
force_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataprocJobConfig <a name="GoogleDataprocJobConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_job

googleDataprocJob.GoogleDataprocJobConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  placement: GoogleDataprocJobPlacement,
  force_delete: typing.Union[bool, IResolvable] = None,
  hadoop_config: GoogleDataprocJobHadoopConfig = None,
  hive_config: GoogleDataprocJobHiveConfig = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  pig_config: GoogleDataprocJobPigConfig = None,
  presto_config: GoogleDataprocJobPrestoConfig = None,
  project: str = None,
  pyspark_config: GoogleDataprocJobPysparkConfig = None,
  reference: GoogleDataprocJobReference = None,
  region: str = None,
  scheduling: GoogleDataprocJobScheduling = None,
  spark_config: GoogleDataprocJobSparkConfig = None,
  sparksql_config: GoogleDataprocJobSparksqlConfig = None,
  timeouts: GoogleDataprocJobTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.placement">placement</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacement">GoogleDataprocJobPlacement</a></code> | placement block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.forceDelete">force_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | By default, you can only delete inactive jobs within Dataproc. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.hadoopConfig">hadoop_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig">GoogleDataprocJobHadoopConfig</a></code> | hadoop_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.hiveConfig">hive_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfig">GoogleDataprocJobHiveConfig</a></code> | hive_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#id GoogleDataprocJob#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. The labels to associate with this job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.pigConfig">pig_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfig">GoogleDataprocJobPigConfig</a></code> | pig_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.prestoConfig">presto_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfig">GoogleDataprocJobPrestoConfig</a></code> | presto_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.project">project</a></code> | <code>str</code> | The project in which the cluster can be found and jobs subsequently run against. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.pysparkConfig">pyspark_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig">GoogleDataprocJobPysparkConfig</a></code> | pyspark_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.reference">reference</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReference">GoogleDataprocJobReference</a></code> | reference block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.region">region</a></code> | <code>str</code> | The Cloud Dataproc region. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.scheduling">scheduling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobScheduling">GoogleDataprocJobScheduling</a></code> | scheduling block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.sparkConfig">spark_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig">GoogleDataprocJobSparkConfig</a></code> | spark_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.sparksqlConfig">sparksql_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfig">GoogleDataprocJobSparksqlConfig</a></code> | sparksql_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeouts">GoogleDataprocJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `placement`<sup>Required</sup> <a name="placement" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.placement"></a>

```python
placement: GoogleDataprocJobPlacement
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacement">GoogleDataprocJobPlacement</a>

placement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#placement GoogleDataprocJob#placement}

---

##### `force_delete`<sup>Optional</sup> <a name="force_delete" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.forceDelete"></a>

```python
force_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

By default, you can only delete inactive jobs within Dataproc.

Setting this to true, and calling destroy, will ensure that the job is first cancelled before issuing the delete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#force_delete GoogleDataprocJob#force_delete}

---

##### `hadoop_config`<sup>Optional</sup> <a name="hadoop_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.hadoopConfig"></a>

```python
hadoop_config: GoogleDataprocJobHadoopConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig">GoogleDataprocJobHadoopConfig</a>

hadoop_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#hadoop_config GoogleDataprocJob#hadoop_config}

---

##### `hive_config`<sup>Optional</sup> <a name="hive_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.hiveConfig"></a>

```python
hive_config: GoogleDataprocJobHiveConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfig">GoogleDataprocJobHiveConfig</a>

hive_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#hive_config GoogleDataprocJob#hive_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#id GoogleDataprocJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional. The labels to associate with this job.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#labels GoogleDataprocJob#labels}

---

##### `pig_config`<sup>Optional</sup> <a name="pig_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.pigConfig"></a>

```python
pig_config: GoogleDataprocJobPigConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfig">GoogleDataprocJobPigConfig</a>

pig_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#pig_config GoogleDataprocJob#pig_config}

---

##### `presto_config`<sup>Optional</sup> <a name="presto_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.prestoConfig"></a>

```python
presto_config: GoogleDataprocJobPrestoConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfig">GoogleDataprocJobPrestoConfig</a>

presto_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#presto_config GoogleDataprocJob#presto_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The project in which the cluster can be found and jobs subsequently run against.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#project GoogleDataprocJob#project}

---

##### `pyspark_config`<sup>Optional</sup> <a name="pyspark_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.pysparkConfig"></a>

```python
pyspark_config: GoogleDataprocJobPysparkConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig">GoogleDataprocJobPysparkConfig</a>

pyspark_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#pyspark_config GoogleDataprocJob#pyspark_config}

---

##### `reference`<sup>Optional</sup> <a name="reference" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.reference"></a>

```python
reference: GoogleDataprocJobReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReference">GoogleDataprocJobReference</a>

reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#reference GoogleDataprocJob#reference}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The Cloud Dataproc region.

This essentially determines which clusters are available for this job to be submitted to. If not specified, defaults to global.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#region GoogleDataprocJob#region}

---

##### `scheduling`<sup>Optional</sup> <a name="scheduling" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.scheduling"></a>

```python
scheduling: GoogleDataprocJobScheduling
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobScheduling">GoogleDataprocJobScheduling</a>

scheduling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#scheduling GoogleDataprocJob#scheduling}

---

##### `spark_config`<sup>Optional</sup> <a name="spark_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.sparkConfig"></a>

```python
spark_config: GoogleDataprocJobSparkConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig">GoogleDataprocJobSparkConfig</a>

spark_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#spark_config GoogleDataprocJob#spark_config}

---

##### `sparksql_config`<sup>Optional</sup> <a name="sparksql_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.sparksqlConfig"></a>

```python
sparksql_config: GoogleDataprocJobSparksqlConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfig">GoogleDataprocJobSparksqlConfig</a>

sparksql_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#sparksql_config GoogleDataprocJob#sparksql_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.timeouts"></a>

```python
timeouts: GoogleDataprocJobTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeouts">GoogleDataprocJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#timeouts GoogleDataprocJob#timeouts}

---

### GoogleDataprocJobHadoopConfig <a name="GoogleDataprocJobHadoopConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_job

googleDataprocJob.GoogleDataprocJobHadoopConfig(
  archive_uris: typing.List[str] = None,
  args: typing.List[str] = None,
  file_uris: typing.List[str] = None,
  jar_file_uris: typing.List[str] = None,
  logging_config: GoogleDataprocJobHadoopConfigLoggingConfig = None,
  main_class: str = None,
  main_jar_file_uri: str = None,
  properties: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig.property.archiveUris">archive_uris</a></code> | <code>typing.List[str]</code> | HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig.property.args">args</a></code> | <code>typing.List[str]</code> | The arguments to pass to the driver. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig.property.fileUris">file_uris</a></code> | <code>typing.List[str]</code> | HCFS URIs of files to be copied to the working directory of Spark drivers and distributed tasks. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig.property.jarFileUris">jar_file_uris</a></code> | <code>typing.List[str]</code> | HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfig">GoogleDataprocJobHadoopConfigLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig.property.mainClass">main_class</a></code> | <code>str</code> | The class containing the main method of the driver. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig.property.mainJarFileUri">main_jar_file_uri</a></code> | <code>str</code> | The HCFS URI of jar file containing the driver jar. Conflicts with main_class. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | A mapping of property names to values, used to configure Spark. |

---

##### `archive_uris`<sup>Optional</sup> <a name="archive_uris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig.property.archiveUris"></a>

```python
archive_uris: typing.List[str]
```

- *Type:* typing.List[str]

HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#archive_uris GoogleDataprocJob#archive_uris}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

The arguments to pass to the driver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#args GoogleDataprocJob#args}

---

##### `file_uris`<sup>Optional</sup> <a name="file_uris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig.property.fileUris"></a>

```python
file_uris: typing.List[str]
```

- *Type:* typing.List[str]

HCFS URIs of files to be copied to the working directory of Spark drivers and distributed tasks.

Useful for naively parallel tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#file_uris GoogleDataprocJob#file_uris}

---

##### `jar_file_uris`<sup>Optional</sup> <a name="jar_file_uris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig.property.jarFileUris"></a>

```python
jar_file_uris: typing.List[str]
```

- *Type:* typing.List[str]

HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#jar_file_uris GoogleDataprocJob#jar_file_uris}

---

##### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig.property.loggingConfig"></a>

```python
logging_config: GoogleDataprocJobHadoopConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfig">GoogleDataprocJobHadoopConfigLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#logging_config GoogleDataprocJob#logging_config}

---

##### `main_class`<sup>Optional</sup> <a name="main_class" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig.property.mainClass"></a>

```python
main_class: str
```

- *Type:* str

The class containing the main method of the driver.

Must be in a provided jar or jar that is already on the classpath. Conflicts with main_jar_file_uri

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#main_class GoogleDataprocJob#main_class}

---

##### `main_jar_file_uri`<sup>Optional</sup> <a name="main_jar_file_uri" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig.property.mainJarFileUri"></a>

```python
main_jar_file_uri: str
```

- *Type:* str

The HCFS URI of jar file containing the driver jar. Conflicts with main_class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#main_jar_file_uri GoogleDataprocJob#main_jar_file_uri}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A mapping of property names to values, used to configure Spark.

Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#properties GoogleDataprocJob#properties}

---

### GoogleDataprocJobHadoopConfigLoggingConfig <a name="GoogleDataprocJobHadoopConfigLoggingConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_job

googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfig(
  driver_log_levels: typing.Mapping[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfig.property.driverLogLevels">driver_log_levels</a></code> | <code>typing.Mapping[str]</code> | Optional. |

---

##### `driver_log_levels`<sup>Required</sup> <a name="driver_log_levels" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfig.property.driverLogLevels"></a>

```python
driver_log_levels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional.

The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#driver_log_levels GoogleDataprocJob#driver_log_levels}

---

### GoogleDataprocJobHiveConfig <a name="GoogleDataprocJobHiveConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_job

googleDataprocJob.GoogleDataprocJobHiveConfig(
  continue_on_failure: typing.Union[bool, IResolvable] = None,
  jar_file_uris: typing.List[str] = None,
  properties: typing.Mapping[str] = None,
  query_file_uri: str = None,
  query_list: typing.List[str] = None,
  script_variables: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfig.property.continueOnFailure">continue_on_failure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to continue executing queries if a query fails. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfig.property.jarFileUris">jar_file_uris</a></code> | <code>typing.List[str]</code> | HCFS URIs of jar files to add to the CLASSPATH of the Hive server and Hadoop MapReduce (MR) tasks. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfig.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | A mapping of property names and values, used to configure Hive. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfig.property.queryFileUri">query_file_uri</a></code> | <code>str</code> | HCFS URI of file containing Hive script to execute as the job. Conflicts with query_list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfig.property.queryList">query_list</a></code> | <code>typing.List[str]</code> | The list of Hive queries or statements to execute as part of the job. Conflicts with query_file_uri. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfig.property.scriptVariables">script_variables</a></code> | <code>typing.Mapping[str]</code> | Mapping of query variable names to values (equivalent to the Hive command: SET name="value";). |

---

##### `continue_on_failure`<sup>Optional</sup> <a name="continue_on_failure" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfig.property.continueOnFailure"></a>

```python
continue_on_failure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to continue executing queries if a query fails.

The default value is false. Setting to true can be useful when executing independent parallel queries. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#continue_on_failure GoogleDataprocJob#continue_on_failure}

---

##### `jar_file_uris`<sup>Optional</sup> <a name="jar_file_uris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfig.property.jarFileUris"></a>

```python
jar_file_uris: typing.List[str]
```

- *Type:* typing.List[str]

HCFS URIs of jar files to add to the CLASSPATH of the Hive server and Hadoop MapReduce (MR) tasks.

Can contain Hive SerDes and UDFs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#jar_file_uris GoogleDataprocJob#jar_file_uris}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfig.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A mapping of property names and values, used to configure Hive.

Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/hive/conf/hive-site.xml, and classes in user code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#properties GoogleDataprocJob#properties}

---

##### `query_file_uri`<sup>Optional</sup> <a name="query_file_uri" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfig.property.queryFileUri"></a>

```python
query_file_uri: str
```

- *Type:* str

HCFS URI of file containing Hive script to execute as the job. Conflicts with query_list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#query_file_uri GoogleDataprocJob#query_file_uri}

---

##### `query_list`<sup>Optional</sup> <a name="query_list" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfig.property.queryList"></a>

```python
query_list: typing.List[str]
```

- *Type:* typing.List[str]

The list of Hive queries or statements to execute as part of the job. Conflicts with query_file_uri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#query_list GoogleDataprocJob#query_list}

---

##### `script_variables`<sup>Optional</sup> <a name="script_variables" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfig.property.scriptVariables"></a>

```python
script_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Mapping of query variable names to values (equivalent to the Hive command: SET name="value";).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#script_variables GoogleDataprocJob#script_variables}

---

### GoogleDataprocJobPigConfig <a name="GoogleDataprocJobPigConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_job

googleDataprocJob.GoogleDataprocJobPigConfig(
  continue_on_failure: typing.Union[bool, IResolvable] = None,
  jar_file_uris: typing.List[str] = None,
  logging_config: GoogleDataprocJobPigConfigLoggingConfig = None,
  properties: typing.Mapping[str] = None,
  query_file_uri: str = None,
  query_list: typing.List[str] = None,
  script_variables: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfig.property.continueOnFailure">continue_on_failure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to continue executing queries if a query fails. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfig.property.jarFileUris">jar_file_uris</a></code> | <code>typing.List[str]</code> | HCFS URIs of jar files to add to the CLASSPATH of the Pig Client and Hadoop MapReduce (MR) tasks. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfig.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfig">GoogleDataprocJobPigConfigLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfig.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | A mapping of property names to values, used to configure Pig. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfig.property.queryFileUri">query_file_uri</a></code> | <code>str</code> | HCFS URI of file containing Hive script to execute as the job. Conflicts with query_list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfig.property.queryList">query_list</a></code> | <code>typing.List[str]</code> | The list of Hive queries or statements to execute as part of the job. Conflicts with query_file_uri. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfig.property.scriptVariables">script_variables</a></code> | <code>typing.Mapping[str]</code> | Mapping of query variable names to values (equivalent to the Pig command: name=[value]). |

---

##### `continue_on_failure`<sup>Optional</sup> <a name="continue_on_failure" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfig.property.continueOnFailure"></a>

```python
continue_on_failure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to continue executing queries if a query fails.

The default value is false. Setting to true can be useful when executing independent parallel queries. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#continue_on_failure GoogleDataprocJob#continue_on_failure}

---

##### `jar_file_uris`<sup>Optional</sup> <a name="jar_file_uris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfig.property.jarFileUris"></a>

```python
jar_file_uris: typing.List[str]
```

- *Type:* typing.List[str]

HCFS URIs of jar files to add to the CLASSPATH of the Pig Client and Hadoop MapReduce (MR) tasks.

Can contain Pig UDFs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#jar_file_uris GoogleDataprocJob#jar_file_uris}

---

##### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfig.property.loggingConfig"></a>

```python
logging_config: GoogleDataprocJobPigConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfig">GoogleDataprocJobPigConfigLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#logging_config GoogleDataprocJob#logging_config}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfig.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A mapping of property names to values, used to configure Pig.

Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/pig/conf/pig.properties, and classes in user code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#properties GoogleDataprocJob#properties}

---

##### `query_file_uri`<sup>Optional</sup> <a name="query_file_uri" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfig.property.queryFileUri"></a>

```python
query_file_uri: str
```

- *Type:* str

HCFS URI of file containing Hive script to execute as the job. Conflicts with query_list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#query_file_uri GoogleDataprocJob#query_file_uri}

---

##### `query_list`<sup>Optional</sup> <a name="query_list" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfig.property.queryList"></a>

```python
query_list: typing.List[str]
```

- *Type:* typing.List[str]

The list of Hive queries or statements to execute as part of the job. Conflicts with query_file_uri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#query_list GoogleDataprocJob#query_list}

---

##### `script_variables`<sup>Optional</sup> <a name="script_variables" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfig.property.scriptVariables"></a>

```python
script_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Mapping of query variable names to values (equivalent to the Pig command: name=[value]).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#script_variables GoogleDataprocJob#script_variables}

---

### GoogleDataprocJobPigConfigLoggingConfig <a name="GoogleDataprocJobPigConfigLoggingConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_job

googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfig(
  driver_log_levels: typing.Mapping[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfig.property.driverLogLevels">driver_log_levels</a></code> | <code>typing.Mapping[str]</code> | Optional. |

---

##### `driver_log_levels`<sup>Required</sup> <a name="driver_log_levels" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfig.property.driverLogLevels"></a>

```python
driver_log_levels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional.

The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#driver_log_levels GoogleDataprocJob#driver_log_levels}

---

### GoogleDataprocJobPlacement <a name="GoogleDataprocJobPlacement" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacement.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_job

googleDataprocJob.GoogleDataprocJobPlacement(
  cluster_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacement.property.clusterName">cluster_name</a></code> | <code>str</code> | The name of the cluster where the job will be submitted. |

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacement.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

The name of the cluster where the job will be submitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#cluster_name GoogleDataprocJob#cluster_name}

---

### GoogleDataprocJobPrestoConfig <a name="GoogleDataprocJobPrestoConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_job

googleDataprocJob.GoogleDataprocJobPrestoConfig(
  client_tags: typing.List[str] = None,
  continue_on_failure: typing.Union[bool, IResolvable] = None,
  logging_config: GoogleDataprocJobPrestoConfigLoggingConfig = None,
  output_format: str = None,
  properties: typing.Mapping[str] = None,
  query_file_uri: str = None,
  query_list: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfig.property.clientTags">client_tags</a></code> | <code>typing.List[str]</code> | Presto client tags to attach to this query. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfig.property.continueOnFailure">continue_on_failure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to continue executing queries if a query fails. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfig.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfig">GoogleDataprocJobPrestoConfigLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfig.property.outputFormat">output_format</a></code> | <code>str</code> | The format in which query output will be displayed. See the Presto documentation for supported output formats. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfig.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | A mapping of property names to values. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfig.property.queryFileUri">query_file_uri</a></code> | <code>str</code> | The HCFS URI of the script that contains SQL queries. Conflicts with query_list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfig.property.queryList">query_list</a></code> | <code>typing.List[str]</code> | The list of SQL queries or statements to execute as part of the job. Conflicts with query_file_uri. |

---

##### `client_tags`<sup>Optional</sup> <a name="client_tags" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfig.property.clientTags"></a>

```python
client_tags: typing.List[str]
```

- *Type:* typing.List[str]

Presto client tags to attach to this query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#client_tags GoogleDataprocJob#client_tags}

---

##### `continue_on_failure`<sup>Optional</sup> <a name="continue_on_failure" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfig.property.continueOnFailure"></a>

```python
continue_on_failure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to continue executing queries if a query fails.

Setting to true can be useful when executing independent parallel queries. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#continue_on_failure GoogleDataprocJob#continue_on_failure}

---

##### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfig.property.loggingConfig"></a>

```python
logging_config: GoogleDataprocJobPrestoConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfig">GoogleDataprocJobPrestoConfigLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#logging_config GoogleDataprocJob#logging_config}

---

##### `output_format`<sup>Optional</sup> <a name="output_format" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfig.property.outputFormat"></a>

```python
output_format: str
```

- *Type:* str

The format in which query output will be displayed. See the Presto documentation for supported output formats.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#output_format GoogleDataprocJob#output_format}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfig.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A mapping of property names to values.

Used to set Presto session properties Equivalent to using the --session flag in the Presto CLI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#properties GoogleDataprocJob#properties}

---

##### `query_file_uri`<sup>Optional</sup> <a name="query_file_uri" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfig.property.queryFileUri"></a>

```python
query_file_uri: str
```

- *Type:* str

The HCFS URI of the script that contains SQL queries. Conflicts with query_list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#query_file_uri GoogleDataprocJob#query_file_uri}

---

##### `query_list`<sup>Optional</sup> <a name="query_list" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfig.property.queryList"></a>

```python
query_list: typing.List[str]
```

- *Type:* typing.List[str]

The list of SQL queries or statements to execute as part of the job. Conflicts with query_file_uri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#query_list GoogleDataprocJob#query_list}

---

### GoogleDataprocJobPrestoConfigLoggingConfig <a name="GoogleDataprocJobPrestoConfigLoggingConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_job

googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfig(
  driver_log_levels: typing.Mapping[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfig.property.driverLogLevels">driver_log_levels</a></code> | <code>typing.Mapping[str]</code> | Optional. |

---

##### `driver_log_levels`<sup>Required</sup> <a name="driver_log_levels" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfig.property.driverLogLevels"></a>

```python
driver_log_levels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional.

The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#driver_log_levels GoogleDataprocJob#driver_log_levels}

---

### GoogleDataprocJobPysparkConfig <a name="GoogleDataprocJobPysparkConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_job

googleDataprocJob.GoogleDataprocJobPysparkConfig(
  main_python_file_uri: str,
  archive_uris: typing.List[str] = None,
  args: typing.List[str] = None,
  file_uris: typing.List[str] = None,
  jar_file_uris: typing.List[str] = None,
  logging_config: GoogleDataprocJobPysparkConfigLoggingConfig = None,
  properties: typing.Mapping[str] = None,
  python_file_uris: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig.property.mainPythonFileUri">main_python_file_uri</a></code> | <code>str</code> | Required. The HCFS URI of the main Python file to use as the driver. Must be a .py file. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig.property.archiveUris">archive_uris</a></code> | <code>typing.List[str]</code> | Optional. HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig.property.args">args</a></code> | <code>typing.List[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig.property.fileUris">file_uris</a></code> | <code>typing.List[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig.property.jarFileUris">jar_file_uris</a></code> | <code>typing.List[str]</code> | Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfig">GoogleDataprocJobPysparkConfigLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig.property.pythonFileUris">python_file_uris</a></code> | <code>typing.List[str]</code> | Optional. |

---

##### `main_python_file_uri`<sup>Required</sup> <a name="main_python_file_uri" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig.property.mainPythonFileUri"></a>

```python
main_python_file_uri: str
```

- *Type:* str

Required. The HCFS URI of the main Python file to use as the driver. Must be a .py file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#main_python_file_uri GoogleDataprocJob#main_python_file_uri}

---

##### `archive_uris`<sup>Optional</sup> <a name="archive_uris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig.property.archiveUris"></a>

```python
archive_uris: typing.List[str]
```

- *Type:* typing.List[str]

Optional. HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#archive_uris GoogleDataprocJob#archive_uris}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

Optional.

The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job properties, since a collision may occur that causes an incorrect job submission

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#args GoogleDataprocJob#args}

---

##### `file_uris`<sup>Optional</sup> <a name="file_uris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig.property.fileUris"></a>

```python
file_uris: typing.List[str]
```

- *Type:* typing.List[str]

Optional.

HCFS URIs of files to be copied to the working directory of Python drivers and distributed tasks. Useful for naively parallel tasks

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#file_uris GoogleDataprocJob#file_uris}

---

##### `jar_file_uris`<sup>Optional</sup> <a name="jar_file_uris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig.property.jarFileUris"></a>

```python
jar_file_uris: typing.List[str]
```

- *Type:* typing.List[str]

Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#jar_file_uris GoogleDataprocJob#jar_file_uris}

---

##### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig.property.loggingConfig"></a>

```python
logging_config: GoogleDataprocJobPysparkConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfig">GoogleDataprocJobPysparkConfigLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#logging_config GoogleDataprocJob#logging_config}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional.

A mapping of property names to values, used to configure PySpark. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#properties GoogleDataprocJob#properties}

---

##### `python_file_uris`<sup>Optional</sup> <a name="python_file_uris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig.property.pythonFileUris"></a>

```python
python_file_uris: typing.List[str]
```

- *Type:* typing.List[str]

Optional.

HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#python_file_uris GoogleDataprocJob#python_file_uris}

---

### GoogleDataprocJobPysparkConfigLoggingConfig <a name="GoogleDataprocJobPysparkConfigLoggingConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_job

googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfig(
  driver_log_levels: typing.Mapping[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfig.property.driverLogLevels">driver_log_levels</a></code> | <code>typing.Mapping[str]</code> | Optional. |

---

##### `driver_log_levels`<sup>Required</sup> <a name="driver_log_levels" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfig.property.driverLogLevels"></a>

```python
driver_log_levels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional.

The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#driver_log_levels GoogleDataprocJob#driver_log_levels}

---

### GoogleDataprocJobReference <a name="GoogleDataprocJobReference" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_job

googleDataprocJob.GoogleDataprocJobReference(
  job_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReference.property.jobId">job_id</a></code> | <code>str</code> | The job ID, which must be unique within the project. |

---

##### `job_id`<sup>Optional</sup> <a name="job_id" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReference.property.jobId"></a>

```python
job_id: str
```

- *Type:* str

The job ID, which must be unique within the project.

The job ID is generated by the server upon job submission or provided by the user as a means to perform retries without creating duplicate jobs

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#job_id GoogleDataprocJob#job_id}

---

### GoogleDataprocJobScheduling <a name="GoogleDataprocJobScheduling" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobScheduling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobScheduling.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_job

googleDataprocJob.GoogleDataprocJobScheduling(
  max_failures_per_hour: typing.Union[int, float],
  max_failures_total: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobScheduling.property.maxFailuresPerHour">max_failures_per_hour</a></code> | <code>typing.Union[int, float]</code> | Maximum number of times per hour a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobScheduling.property.maxFailuresTotal">max_failures_total</a></code> | <code>typing.Union[int, float]</code> | Maximum number of times in total a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed. |

---

##### `max_failures_per_hour`<sup>Required</sup> <a name="max_failures_per_hour" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobScheduling.property.maxFailuresPerHour"></a>

```python
max_failures_per_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of times per hour a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#max_failures_per_hour GoogleDataprocJob#max_failures_per_hour}

---

##### `max_failures_total`<sup>Required</sup> <a name="max_failures_total" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobScheduling.property.maxFailuresTotal"></a>

```python
max_failures_total: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of times in total a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#max_failures_total GoogleDataprocJob#max_failures_total}

---

### GoogleDataprocJobSparkConfig <a name="GoogleDataprocJobSparkConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_job

googleDataprocJob.GoogleDataprocJobSparkConfig(
  archive_uris: typing.List[str] = None,
  args: typing.List[str] = None,
  file_uris: typing.List[str] = None,
  jar_file_uris: typing.List[str] = None,
  logging_config: GoogleDataprocJobSparkConfigLoggingConfig = None,
  main_class: str = None,
  main_jar_file_uri: str = None,
  properties: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig.property.archiveUris">archive_uris</a></code> | <code>typing.List[str]</code> | HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig.property.args">args</a></code> | <code>typing.List[str]</code> | The arguments to pass to the driver. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig.property.fileUris">file_uris</a></code> | <code>typing.List[str]</code> | HCFS URIs of files to be copied to the working directory of Spark drivers and distributed tasks. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig.property.jarFileUris">jar_file_uris</a></code> | <code>typing.List[str]</code> | HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfig">GoogleDataprocJobSparkConfigLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig.property.mainClass">main_class</a></code> | <code>str</code> | The class containing the main method of the driver. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig.property.mainJarFileUri">main_jar_file_uri</a></code> | <code>str</code> | The HCFS URI of jar file containing the driver jar. Conflicts with main_class. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | A mapping of property names to values, used to configure Spark. |

---

##### `archive_uris`<sup>Optional</sup> <a name="archive_uris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig.property.archiveUris"></a>

```python
archive_uris: typing.List[str]
```

- *Type:* typing.List[str]

HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#archive_uris GoogleDataprocJob#archive_uris}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

The arguments to pass to the driver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#args GoogleDataprocJob#args}

---

##### `file_uris`<sup>Optional</sup> <a name="file_uris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig.property.fileUris"></a>

```python
file_uris: typing.List[str]
```

- *Type:* typing.List[str]

HCFS URIs of files to be copied to the working directory of Spark drivers and distributed tasks.

Useful for naively parallel tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#file_uris GoogleDataprocJob#file_uris}

---

##### `jar_file_uris`<sup>Optional</sup> <a name="jar_file_uris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig.property.jarFileUris"></a>

```python
jar_file_uris: typing.List[str]
```

- *Type:* typing.List[str]

HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#jar_file_uris GoogleDataprocJob#jar_file_uris}

---

##### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig.property.loggingConfig"></a>

```python
logging_config: GoogleDataprocJobSparkConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfig">GoogleDataprocJobSparkConfigLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#logging_config GoogleDataprocJob#logging_config}

---

##### `main_class`<sup>Optional</sup> <a name="main_class" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig.property.mainClass"></a>

```python
main_class: str
```

- *Type:* str

The class containing the main method of the driver.

Must be in a provided jar or jar that is already on the classpath. Conflicts with main_jar_file_uri

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#main_class GoogleDataprocJob#main_class}

---

##### `main_jar_file_uri`<sup>Optional</sup> <a name="main_jar_file_uri" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig.property.mainJarFileUri"></a>

```python
main_jar_file_uri: str
```

- *Type:* str

The HCFS URI of jar file containing the driver jar. Conflicts with main_class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#main_jar_file_uri GoogleDataprocJob#main_jar_file_uri}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A mapping of property names to values, used to configure Spark.

Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#properties GoogleDataprocJob#properties}

---

### GoogleDataprocJobSparkConfigLoggingConfig <a name="GoogleDataprocJobSparkConfigLoggingConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_job

googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfig(
  driver_log_levels: typing.Mapping[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfig.property.driverLogLevels">driver_log_levels</a></code> | <code>typing.Mapping[str]</code> | Optional. |

---

##### `driver_log_levels`<sup>Required</sup> <a name="driver_log_levels" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfig.property.driverLogLevels"></a>

```python
driver_log_levels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional.

The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#driver_log_levels GoogleDataprocJob#driver_log_levels}

---

### GoogleDataprocJobSparksqlConfig <a name="GoogleDataprocJobSparksqlConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_job

googleDataprocJob.GoogleDataprocJobSparksqlConfig(
  jar_file_uris: typing.List[str] = None,
  logging_config: GoogleDataprocJobSparksqlConfigLoggingConfig = None,
  properties: typing.Mapping[str] = None,
  query_file_uri: str = None,
  query_list: typing.List[str] = None,
  script_variables: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfig.property.jarFileUris">jar_file_uris</a></code> | <code>typing.List[str]</code> | HCFS URIs of jar files to be added to the Spark CLASSPATH. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfig.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfig">GoogleDataprocJobSparksqlConfigLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfig.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | A mapping of property names to values, used to configure Spark SQL's SparkConf. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfig.property.queryFileUri">query_file_uri</a></code> | <code>str</code> | The HCFS URI of the script that contains SQL queries. Conflicts with query_list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfig.property.queryList">query_list</a></code> | <code>typing.List[str]</code> | The list of SQL queries or statements to execute as part of the job. Conflicts with query_file_uri. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfig.property.scriptVariables">script_variables</a></code> | <code>typing.Mapping[str]</code> | Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";). |

---

##### `jar_file_uris`<sup>Optional</sup> <a name="jar_file_uris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfig.property.jarFileUris"></a>

```python
jar_file_uris: typing.List[str]
```

- *Type:* typing.List[str]

HCFS URIs of jar files to be added to the Spark CLASSPATH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#jar_file_uris GoogleDataprocJob#jar_file_uris}

---

##### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfig.property.loggingConfig"></a>

```python
logging_config: GoogleDataprocJobSparksqlConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfig">GoogleDataprocJobSparksqlConfigLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#logging_config GoogleDataprocJob#logging_config}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfig.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A mapping of property names to values, used to configure Spark SQL's SparkConf.

Properties that conflict with values set by the Cloud Dataproc API may be overwritten.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#properties GoogleDataprocJob#properties}

---

##### `query_file_uri`<sup>Optional</sup> <a name="query_file_uri" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfig.property.queryFileUri"></a>

```python
query_file_uri: str
```

- *Type:* str

The HCFS URI of the script that contains SQL queries. Conflicts with query_list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#query_file_uri GoogleDataprocJob#query_file_uri}

---

##### `query_list`<sup>Optional</sup> <a name="query_list" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfig.property.queryList"></a>

```python
query_list: typing.List[str]
```

- *Type:* typing.List[str]

The list of SQL queries or statements to execute as part of the job. Conflicts with query_file_uri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#query_list GoogleDataprocJob#query_list}

---

##### `script_variables`<sup>Optional</sup> <a name="script_variables" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfig.property.scriptVariables"></a>

```python
script_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#script_variables GoogleDataprocJob#script_variables}

---

### GoogleDataprocJobSparksqlConfigLoggingConfig <a name="GoogleDataprocJobSparksqlConfigLoggingConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_job

googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfig(
  driver_log_levels: typing.Mapping[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfig.property.driverLogLevels">driver_log_levels</a></code> | <code>typing.Mapping[str]</code> | Optional. |

---

##### `driver_log_levels`<sup>Required</sup> <a name="driver_log_levels" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfig.property.driverLogLevels"></a>

```python
driver_log_levels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional.

The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#driver_log_levels GoogleDataprocJob#driver_log_levels}

---

### GoogleDataprocJobStatus <a name="GoogleDataprocJobStatus" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_job

googleDataprocJob.GoogleDataprocJobStatus()
```


### GoogleDataprocJobTimeouts <a name="GoogleDataprocJobTimeouts" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_job

googleDataprocJob.GoogleDataprocJobTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#create GoogleDataprocJob#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#delete GoogleDataprocJob#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#create GoogleDataprocJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#delete GoogleDataprocJob#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataprocJobHadoopConfigLoggingConfigOutputReference <a name="GoogleDataprocJobHadoopConfigLoggingConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_job

googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.property.driverLogLevelsInput">driver_log_levels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.property.driverLogLevels">driver_log_levels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfig">GoogleDataprocJobHadoopConfigLoggingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `driver_log_levels_input`<sup>Optional</sup> <a name="driver_log_levels_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.property.driverLogLevelsInput"></a>

```python
driver_log_levels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `driver_log_levels`<sup>Required</sup> <a name="driver_log_levels" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.property.driverLogLevels"></a>

```python
driver_log_levels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocJobHadoopConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfig">GoogleDataprocJobHadoopConfigLoggingConfig</a>

---


### GoogleDataprocJobHadoopConfigOutputReference <a name="GoogleDataprocJobHadoopConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_job

googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.putLoggingConfig">put_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.resetArchiveUris">reset_archive_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.resetArgs">reset_args</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.resetFileUris">reset_file_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.resetJarFileUris">reset_jar_file_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.resetLoggingConfig">reset_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.resetMainClass">reset_main_class</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.resetMainJarFileUri">reset_main_jar_file_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.resetProperties">reset_properties</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_logging_config` <a name="put_logging_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.putLoggingConfig"></a>

```python
def put_logging_config(
  driver_log_levels: typing.Mapping[str]
) -> None
```

###### `driver_log_levels`<sup>Required</sup> <a name="driver_log_levels" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.putLoggingConfig.parameter.driverLogLevels"></a>

- *Type:* typing.Mapping[str]

Optional.

The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#driver_log_levels GoogleDataprocJob#driver_log_levels}

---

##### `reset_archive_uris` <a name="reset_archive_uris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.resetArchiveUris"></a>

```python
def reset_archive_uris() -> None
```

##### `reset_args` <a name="reset_args" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.resetArgs"></a>

```python
def reset_args() -> None
```

##### `reset_file_uris` <a name="reset_file_uris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.resetFileUris"></a>

```python
def reset_file_uris() -> None
```

##### `reset_jar_file_uris` <a name="reset_jar_file_uris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.resetJarFileUris"></a>

```python
def reset_jar_file_uris() -> None
```

##### `reset_logging_config` <a name="reset_logging_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.resetLoggingConfig"></a>

```python
def reset_logging_config() -> None
```

##### `reset_main_class` <a name="reset_main_class" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.resetMainClass"></a>

```python
def reset_main_class() -> None
```

##### `reset_main_jar_file_uri` <a name="reset_main_jar_file_uri" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.resetMainJarFileUri"></a>

```python
def reset_main_jar_file_uri() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference">GoogleDataprocJobHadoopConfigLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.archiveUrisInput">archive_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.argsInput">args_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.fileUrisInput">file_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.jarFileUrisInput">jar_file_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.loggingConfigInput">logging_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfig">GoogleDataprocJobHadoopConfigLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.mainClassInput">main_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.mainJarFileUriInput">main_jar_file_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.propertiesInput">properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.archiveUris">archive_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.args">args</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.fileUris">file_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.jarFileUris">jar_file_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.mainClass">main_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.mainJarFileUri">main_jar_file_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig">GoogleDataprocJobHadoopConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `logging_config`<sup>Required</sup> <a name="logging_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.loggingConfig"></a>

```python
logging_config: GoogleDataprocJobHadoopConfigLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference">GoogleDataprocJobHadoopConfigLoggingConfigOutputReference</a>

---

##### `archive_uris_input`<sup>Optional</sup> <a name="archive_uris_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.archiveUrisInput"></a>

```python
archive_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `args_input`<sup>Optional</sup> <a name="args_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.argsInput"></a>

```python
args_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `file_uris_input`<sup>Optional</sup> <a name="file_uris_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.fileUrisInput"></a>

```python
file_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jar_file_uris_input`<sup>Optional</sup> <a name="jar_file_uris_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.jarFileUrisInput"></a>

```python
jar_file_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `logging_config_input`<sup>Optional</sup> <a name="logging_config_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.loggingConfigInput"></a>

```python
logging_config_input: GoogleDataprocJobHadoopConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfig">GoogleDataprocJobHadoopConfigLoggingConfig</a>

---

##### `main_class_input`<sup>Optional</sup> <a name="main_class_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.mainClassInput"></a>

```python
main_class_input: str
```

- *Type:* str

---

##### `main_jar_file_uri_input`<sup>Optional</sup> <a name="main_jar_file_uri_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.mainJarFileUriInput"></a>

```python
main_jar_file_uri_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.propertiesInput"></a>

```python
properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `archive_uris`<sup>Required</sup> <a name="archive_uris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.archiveUris"></a>

```python
archive_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `file_uris`<sup>Required</sup> <a name="file_uris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.fileUris"></a>

```python
file_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jar_file_uris`<sup>Required</sup> <a name="jar_file_uris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.jarFileUris"></a>

```python
jar_file_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `main_class`<sup>Required</sup> <a name="main_class" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.mainClass"></a>

```python
main_class: str
```

- *Type:* str

---

##### `main_jar_file_uri`<sup>Required</sup> <a name="main_jar_file_uri" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.mainJarFileUri"></a>

```python
main_jar_file_uri: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocJobHadoopConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig">GoogleDataprocJobHadoopConfig</a>

---


### GoogleDataprocJobHiveConfigOutputReference <a name="GoogleDataprocJobHiveConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_job

googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.resetContinueOnFailure">reset_continue_on_failure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.resetJarFileUris">reset_jar_file_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.resetQueryFileUri">reset_query_file_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.resetQueryList">reset_query_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.resetScriptVariables">reset_script_variables</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_continue_on_failure` <a name="reset_continue_on_failure" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.resetContinueOnFailure"></a>

```python
def reset_continue_on_failure() -> None
```

##### `reset_jar_file_uris` <a name="reset_jar_file_uris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.resetJarFileUris"></a>

```python
def reset_jar_file_uris() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_query_file_uri` <a name="reset_query_file_uri" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.resetQueryFileUri"></a>

```python
def reset_query_file_uri() -> None
```

##### `reset_query_list` <a name="reset_query_list" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.resetQueryList"></a>

```python
def reset_query_list() -> None
```

##### `reset_script_variables` <a name="reset_script_variables" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.resetScriptVariables"></a>

```python
def reset_script_variables() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.continueOnFailureInput">continue_on_failure_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.jarFileUrisInput">jar_file_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.propertiesInput">properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.queryFileUriInput">query_file_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.queryListInput">query_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.scriptVariablesInput">script_variables_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.continueOnFailure">continue_on_failure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.jarFileUris">jar_file_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.queryFileUri">query_file_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.queryList">query_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.scriptVariables">script_variables</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfig">GoogleDataprocJobHiveConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `continue_on_failure_input`<sup>Optional</sup> <a name="continue_on_failure_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.continueOnFailureInput"></a>

```python
continue_on_failure_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `jar_file_uris_input`<sup>Optional</sup> <a name="jar_file_uris_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.jarFileUrisInput"></a>

```python
jar_file_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.propertiesInput"></a>

```python
properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `query_file_uri_input`<sup>Optional</sup> <a name="query_file_uri_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.queryFileUriInput"></a>

```python
query_file_uri_input: str
```

- *Type:* str

---

##### `query_list_input`<sup>Optional</sup> <a name="query_list_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.queryListInput"></a>

```python
query_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `script_variables_input`<sup>Optional</sup> <a name="script_variables_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.scriptVariablesInput"></a>

```python
script_variables_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `continue_on_failure`<sup>Required</sup> <a name="continue_on_failure" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.continueOnFailure"></a>

```python
continue_on_failure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `jar_file_uris`<sup>Required</sup> <a name="jar_file_uris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.jarFileUris"></a>

```python
jar_file_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `query_file_uri`<sup>Required</sup> <a name="query_file_uri" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.queryFileUri"></a>

```python
query_file_uri: str
```

- *Type:* str

---

##### `query_list`<sup>Required</sup> <a name="query_list" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.queryList"></a>

```python
query_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `script_variables`<sup>Required</sup> <a name="script_variables" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.scriptVariables"></a>

```python
script_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocJobHiveConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfig">GoogleDataprocJobHiveConfig</a>

---


### GoogleDataprocJobPigConfigLoggingConfigOutputReference <a name="GoogleDataprocJobPigConfigLoggingConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_job

googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.property.driverLogLevelsInput">driver_log_levels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.property.driverLogLevels">driver_log_levels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfig">GoogleDataprocJobPigConfigLoggingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `driver_log_levels_input`<sup>Optional</sup> <a name="driver_log_levels_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.property.driverLogLevelsInput"></a>

```python
driver_log_levels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `driver_log_levels`<sup>Required</sup> <a name="driver_log_levels" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.property.driverLogLevels"></a>

```python
driver_log_levels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocJobPigConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfig">GoogleDataprocJobPigConfigLoggingConfig</a>

---


### GoogleDataprocJobPigConfigOutputReference <a name="GoogleDataprocJobPigConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_job

googleDataprocJob.GoogleDataprocJobPigConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.putLoggingConfig">put_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.resetContinueOnFailure">reset_continue_on_failure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.resetJarFileUris">reset_jar_file_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.resetLoggingConfig">reset_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.resetQueryFileUri">reset_query_file_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.resetQueryList">reset_query_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.resetScriptVariables">reset_script_variables</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_logging_config` <a name="put_logging_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.putLoggingConfig"></a>

```python
def put_logging_config(
  driver_log_levels: typing.Mapping[str]
) -> None
```

###### `driver_log_levels`<sup>Required</sup> <a name="driver_log_levels" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.putLoggingConfig.parameter.driverLogLevels"></a>

- *Type:* typing.Mapping[str]

Optional.

The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#driver_log_levels GoogleDataprocJob#driver_log_levels}

---

##### `reset_continue_on_failure` <a name="reset_continue_on_failure" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.resetContinueOnFailure"></a>

```python
def reset_continue_on_failure() -> None
```

##### `reset_jar_file_uris` <a name="reset_jar_file_uris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.resetJarFileUris"></a>

```python
def reset_jar_file_uris() -> None
```

##### `reset_logging_config` <a name="reset_logging_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.resetLoggingConfig"></a>

```python
def reset_logging_config() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_query_file_uri` <a name="reset_query_file_uri" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.resetQueryFileUri"></a>

```python
def reset_query_file_uri() -> None
```

##### `reset_query_list` <a name="reset_query_list" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.resetQueryList"></a>

```python
def reset_query_list() -> None
```

##### `reset_script_variables` <a name="reset_script_variables" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.resetScriptVariables"></a>

```python
def reset_script_variables() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference">GoogleDataprocJobPigConfigLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.continueOnFailureInput">continue_on_failure_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.jarFileUrisInput">jar_file_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.loggingConfigInput">logging_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfig">GoogleDataprocJobPigConfigLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.propertiesInput">properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.queryFileUriInput">query_file_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.queryListInput">query_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.scriptVariablesInput">script_variables_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.continueOnFailure">continue_on_failure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.jarFileUris">jar_file_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.queryFileUri">query_file_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.queryList">query_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.scriptVariables">script_variables</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfig">GoogleDataprocJobPigConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `logging_config`<sup>Required</sup> <a name="logging_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.loggingConfig"></a>

```python
logging_config: GoogleDataprocJobPigConfigLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference">GoogleDataprocJobPigConfigLoggingConfigOutputReference</a>

---

##### `continue_on_failure_input`<sup>Optional</sup> <a name="continue_on_failure_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.continueOnFailureInput"></a>

```python
continue_on_failure_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `jar_file_uris_input`<sup>Optional</sup> <a name="jar_file_uris_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.jarFileUrisInput"></a>

```python
jar_file_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `logging_config_input`<sup>Optional</sup> <a name="logging_config_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.loggingConfigInput"></a>

```python
logging_config_input: GoogleDataprocJobPigConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfig">GoogleDataprocJobPigConfigLoggingConfig</a>

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.propertiesInput"></a>

```python
properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `query_file_uri_input`<sup>Optional</sup> <a name="query_file_uri_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.queryFileUriInput"></a>

```python
query_file_uri_input: str
```

- *Type:* str

---

##### `query_list_input`<sup>Optional</sup> <a name="query_list_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.queryListInput"></a>

```python
query_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `script_variables_input`<sup>Optional</sup> <a name="script_variables_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.scriptVariablesInput"></a>

```python
script_variables_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `continue_on_failure`<sup>Required</sup> <a name="continue_on_failure" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.continueOnFailure"></a>

```python
continue_on_failure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `jar_file_uris`<sup>Required</sup> <a name="jar_file_uris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.jarFileUris"></a>

```python
jar_file_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `query_file_uri`<sup>Required</sup> <a name="query_file_uri" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.queryFileUri"></a>

```python
query_file_uri: str
```

- *Type:* str

---

##### `query_list`<sup>Required</sup> <a name="query_list" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.queryList"></a>

```python
query_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `script_variables`<sup>Required</sup> <a name="script_variables" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.scriptVariables"></a>

```python
script_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocJobPigConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfig">GoogleDataprocJobPigConfig</a>

---


### GoogleDataprocJobPlacementOutputReference <a name="GoogleDataprocJobPlacementOutputReference" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_job

googleDataprocJob.GoogleDataprocJobPlacementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.property.clusterUuid">cluster_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.property.clusterNameInput">cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacement">GoogleDataprocJobPlacement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_uuid`<sup>Required</sup> <a name="cluster_uuid" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.property.clusterUuid"></a>

```python
cluster_uuid: str
```

- *Type:* str

---

##### `cluster_name_input`<sup>Optional</sup> <a name="cluster_name_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.property.clusterNameInput"></a>

```python
cluster_name_input: str
```

- *Type:* str

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocJobPlacement
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacement">GoogleDataprocJobPlacement</a>

---


### GoogleDataprocJobPrestoConfigLoggingConfigOutputReference <a name="GoogleDataprocJobPrestoConfigLoggingConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_job

googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.property.driverLogLevelsInput">driver_log_levels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.property.driverLogLevels">driver_log_levels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfig">GoogleDataprocJobPrestoConfigLoggingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `driver_log_levels_input`<sup>Optional</sup> <a name="driver_log_levels_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.property.driverLogLevelsInput"></a>

```python
driver_log_levels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `driver_log_levels`<sup>Required</sup> <a name="driver_log_levels" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.property.driverLogLevels"></a>

```python
driver_log_levels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocJobPrestoConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfig">GoogleDataprocJobPrestoConfigLoggingConfig</a>

---


### GoogleDataprocJobPrestoConfigOutputReference <a name="GoogleDataprocJobPrestoConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_job

googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.putLoggingConfig">put_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.resetClientTags">reset_client_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.resetContinueOnFailure">reset_continue_on_failure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.resetLoggingConfig">reset_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.resetOutputFormat">reset_output_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.resetQueryFileUri">reset_query_file_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.resetQueryList">reset_query_list</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_logging_config` <a name="put_logging_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.putLoggingConfig"></a>

```python
def put_logging_config(
  driver_log_levels: typing.Mapping[str]
) -> None
```

###### `driver_log_levels`<sup>Required</sup> <a name="driver_log_levels" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.putLoggingConfig.parameter.driverLogLevels"></a>

- *Type:* typing.Mapping[str]

Optional.

The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#driver_log_levels GoogleDataprocJob#driver_log_levels}

---

##### `reset_client_tags` <a name="reset_client_tags" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.resetClientTags"></a>

```python
def reset_client_tags() -> None
```

##### `reset_continue_on_failure` <a name="reset_continue_on_failure" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.resetContinueOnFailure"></a>

```python
def reset_continue_on_failure() -> None
```

##### `reset_logging_config` <a name="reset_logging_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.resetLoggingConfig"></a>

```python
def reset_logging_config() -> None
```

##### `reset_output_format` <a name="reset_output_format" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.resetOutputFormat"></a>

```python
def reset_output_format() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_query_file_uri` <a name="reset_query_file_uri" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.resetQueryFileUri"></a>

```python
def reset_query_file_uri() -> None
```

##### `reset_query_list` <a name="reset_query_list" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.resetQueryList"></a>

```python
def reset_query_list() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference">GoogleDataprocJobPrestoConfigLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.clientTagsInput">client_tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.continueOnFailureInput">continue_on_failure_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.loggingConfigInput">logging_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfig">GoogleDataprocJobPrestoConfigLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.outputFormatInput">output_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.propertiesInput">properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.queryFileUriInput">query_file_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.queryListInput">query_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.clientTags">client_tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.continueOnFailure">continue_on_failure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.outputFormat">output_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.queryFileUri">query_file_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.queryList">query_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfig">GoogleDataprocJobPrestoConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `logging_config`<sup>Required</sup> <a name="logging_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.loggingConfig"></a>

```python
logging_config: GoogleDataprocJobPrestoConfigLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference">GoogleDataprocJobPrestoConfigLoggingConfigOutputReference</a>

---

##### `client_tags_input`<sup>Optional</sup> <a name="client_tags_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.clientTagsInput"></a>

```python
client_tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `continue_on_failure_input`<sup>Optional</sup> <a name="continue_on_failure_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.continueOnFailureInput"></a>

```python
continue_on_failure_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `logging_config_input`<sup>Optional</sup> <a name="logging_config_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.loggingConfigInput"></a>

```python
logging_config_input: GoogleDataprocJobPrestoConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfig">GoogleDataprocJobPrestoConfigLoggingConfig</a>

---

##### `output_format_input`<sup>Optional</sup> <a name="output_format_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.outputFormatInput"></a>

```python
output_format_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.propertiesInput"></a>

```python
properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `query_file_uri_input`<sup>Optional</sup> <a name="query_file_uri_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.queryFileUriInput"></a>

```python
query_file_uri_input: str
```

- *Type:* str

---

##### `query_list_input`<sup>Optional</sup> <a name="query_list_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.queryListInput"></a>

```python
query_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_tags`<sup>Required</sup> <a name="client_tags" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.clientTags"></a>

```python
client_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `continue_on_failure`<sup>Required</sup> <a name="continue_on_failure" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.continueOnFailure"></a>

```python
continue_on_failure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `output_format`<sup>Required</sup> <a name="output_format" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.outputFormat"></a>

```python
output_format: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `query_file_uri`<sup>Required</sup> <a name="query_file_uri" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.queryFileUri"></a>

```python
query_file_uri: str
```

- *Type:* str

---

##### `query_list`<sup>Required</sup> <a name="query_list" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.queryList"></a>

```python
query_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocJobPrestoConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfig">GoogleDataprocJobPrestoConfig</a>

---


### GoogleDataprocJobPysparkConfigLoggingConfigOutputReference <a name="GoogleDataprocJobPysparkConfigLoggingConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_job

googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.property.driverLogLevelsInput">driver_log_levels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.property.driverLogLevels">driver_log_levels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfig">GoogleDataprocJobPysparkConfigLoggingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `driver_log_levels_input`<sup>Optional</sup> <a name="driver_log_levels_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.property.driverLogLevelsInput"></a>

```python
driver_log_levels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `driver_log_levels`<sup>Required</sup> <a name="driver_log_levels" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.property.driverLogLevels"></a>

```python
driver_log_levels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocJobPysparkConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfig">GoogleDataprocJobPysparkConfigLoggingConfig</a>

---


### GoogleDataprocJobPysparkConfigOutputReference <a name="GoogleDataprocJobPysparkConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_job

googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.putLoggingConfig">put_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.resetArchiveUris">reset_archive_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.resetArgs">reset_args</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.resetFileUris">reset_file_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.resetJarFileUris">reset_jar_file_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.resetLoggingConfig">reset_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.resetPythonFileUris">reset_python_file_uris</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_logging_config` <a name="put_logging_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.putLoggingConfig"></a>

```python
def put_logging_config(
  driver_log_levels: typing.Mapping[str]
) -> None
```

###### `driver_log_levels`<sup>Required</sup> <a name="driver_log_levels" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.putLoggingConfig.parameter.driverLogLevels"></a>

- *Type:* typing.Mapping[str]

Optional.

The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#driver_log_levels GoogleDataprocJob#driver_log_levels}

---

##### `reset_archive_uris` <a name="reset_archive_uris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.resetArchiveUris"></a>

```python
def reset_archive_uris() -> None
```

##### `reset_args` <a name="reset_args" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.resetArgs"></a>

```python
def reset_args() -> None
```

##### `reset_file_uris` <a name="reset_file_uris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.resetFileUris"></a>

```python
def reset_file_uris() -> None
```

##### `reset_jar_file_uris` <a name="reset_jar_file_uris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.resetJarFileUris"></a>

```python
def reset_jar_file_uris() -> None
```

##### `reset_logging_config` <a name="reset_logging_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.resetLoggingConfig"></a>

```python
def reset_logging_config() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_python_file_uris` <a name="reset_python_file_uris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.resetPythonFileUris"></a>

```python
def reset_python_file_uris() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference">GoogleDataprocJobPysparkConfigLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.archiveUrisInput">archive_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.argsInput">args_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.fileUrisInput">file_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.jarFileUrisInput">jar_file_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.loggingConfigInput">logging_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfig">GoogleDataprocJobPysparkConfigLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.mainPythonFileUriInput">main_python_file_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.propertiesInput">properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.pythonFileUrisInput">python_file_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.archiveUris">archive_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.args">args</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.fileUris">file_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.jarFileUris">jar_file_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.mainPythonFileUri">main_python_file_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.pythonFileUris">python_file_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig">GoogleDataprocJobPysparkConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `logging_config`<sup>Required</sup> <a name="logging_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.loggingConfig"></a>

```python
logging_config: GoogleDataprocJobPysparkConfigLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference">GoogleDataprocJobPysparkConfigLoggingConfigOutputReference</a>

---

##### `archive_uris_input`<sup>Optional</sup> <a name="archive_uris_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.archiveUrisInput"></a>

```python
archive_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `args_input`<sup>Optional</sup> <a name="args_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.argsInput"></a>

```python
args_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `file_uris_input`<sup>Optional</sup> <a name="file_uris_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.fileUrisInput"></a>

```python
file_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jar_file_uris_input`<sup>Optional</sup> <a name="jar_file_uris_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.jarFileUrisInput"></a>

```python
jar_file_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `logging_config_input`<sup>Optional</sup> <a name="logging_config_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.loggingConfigInput"></a>

```python
logging_config_input: GoogleDataprocJobPysparkConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfig">GoogleDataprocJobPysparkConfigLoggingConfig</a>

---

##### `main_python_file_uri_input`<sup>Optional</sup> <a name="main_python_file_uri_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.mainPythonFileUriInput"></a>

```python
main_python_file_uri_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.propertiesInput"></a>

```python
properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `python_file_uris_input`<sup>Optional</sup> <a name="python_file_uris_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.pythonFileUrisInput"></a>

```python
python_file_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `archive_uris`<sup>Required</sup> <a name="archive_uris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.archiveUris"></a>

```python
archive_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `file_uris`<sup>Required</sup> <a name="file_uris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.fileUris"></a>

```python
file_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jar_file_uris`<sup>Required</sup> <a name="jar_file_uris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.jarFileUris"></a>

```python
jar_file_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `main_python_file_uri`<sup>Required</sup> <a name="main_python_file_uri" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.mainPythonFileUri"></a>

```python
main_python_file_uri: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `python_file_uris`<sup>Required</sup> <a name="python_file_uris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.pythonFileUris"></a>

```python
python_file_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocJobPysparkConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig">GoogleDataprocJobPysparkConfig</a>

---


### GoogleDataprocJobReferenceOutputReference <a name="GoogleDataprocJobReferenceOutputReference" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_job

googleDataprocJob.GoogleDataprocJobReferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.resetJobId">reset_job_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_job_id` <a name="reset_job_id" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.resetJobId"></a>

```python
def reset_job_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.property.jobIdInput">job_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.property.jobId">job_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReference">GoogleDataprocJobReference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `job_id_input`<sup>Optional</sup> <a name="job_id_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.property.jobIdInput"></a>

```python
job_id_input: str
```

- *Type:* str

---

##### `job_id`<sup>Required</sup> <a name="job_id" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.property.jobId"></a>

```python
job_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocJobReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReference">GoogleDataprocJobReference</a>

---


### GoogleDataprocJobSchedulingOutputReference <a name="GoogleDataprocJobSchedulingOutputReference" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_job

googleDataprocJob.GoogleDataprocJobSchedulingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.property.maxFailuresPerHourInput">max_failures_per_hour_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.property.maxFailuresTotalInput">max_failures_total_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.property.maxFailuresPerHour">max_failures_per_hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.property.maxFailuresTotal">max_failures_total</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobScheduling">GoogleDataprocJobScheduling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_failures_per_hour_input`<sup>Optional</sup> <a name="max_failures_per_hour_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.property.maxFailuresPerHourInput"></a>

```python
max_failures_per_hour_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_failures_total_input`<sup>Optional</sup> <a name="max_failures_total_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.property.maxFailuresTotalInput"></a>

```python
max_failures_total_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_failures_per_hour`<sup>Required</sup> <a name="max_failures_per_hour" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.property.maxFailuresPerHour"></a>

```python
max_failures_per_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_failures_total`<sup>Required</sup> <a name="max_failures_total" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.property.maxFailuresTotal"></a>

```python
max_failures_total: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocJobScheduling
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobScheduling">GoogleDataprocJobScheduling</a>

---


### GoogleDataprocJobSparkConfigLoggingConfigOutputReference <a name="GoogleDataprocJobSparkConfigLoggingConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_job

googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.property.driverLogLevelsInput">driver_log_levels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.property.driverLogLevels">driver_log_levels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfig">GoogleDataprocJobSparkConfigLoggingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `driver_log_levels_input`<sup>Optional</sup> <a name="driver_log_levels_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.property.driverLogLevelsInput"></a>

```python
driver_log_levels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `driver_log_levels`<sup>Required</sup> <a name="driver_log_levels" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.property.driverLogLevels"></a>

```python
driver_log_levels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocJobSparkConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfig">GoogleDataprocJobSparkConfigLoggingConfig</a>

---


### GoogleDataprocJobSparkConfigOutputReference <a name="GoogleDataprocJobSparkConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_job

googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.putLoggingConfig">put_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.resetArchiveUris">reset_archive_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.resetArgs">reset_args</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.resetFileUris">reset_file_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.resetJarFileUris">reset_jar_file_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.resetLoggingConfig">reset_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.resetMainClass">reset_main_class</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.resetMainJarFileUri">reset_main_jar_file_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.resetProperties">reset_properties</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_logging_config` <a name="put_logging_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.putLoggingConfig"></a>

```python
def put_logging_config(
  driver_log_levels: typing.Mapping[str]
) -> None
```

###### `driver_log_levels`<sup>Required</sup> <a name="driver_log_levels" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.putLoggingConfig.parameter.driverLogLevels"></a>

- *Type:* typing.Mapping[str]

Optional.

The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#driver_log_levels GoogleDataprocJob#driver_log_levels}

---

##### `reset_archive_uris` <a name="reset_archive_uris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.resetArchiveUris"></a>

```python
def reset_archive_uris() -> None
```

##### `reset_args` <a name="reset_args" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.resetArgs"></a>

```python
def reset_args() -> None
```

##### `reset_file_uris` <a name="reset_file_uris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.resetFileUris"></a>

```python
def reset_file_uris() -> None
```

##### `reset_jar_file_uris` <a name="reset_jar_file_uris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.resetJarFileUris"></a>

```python
def reset_jar_file_uris() -> None
```

##### `reset_logging_config` <a name="reset_logging_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.resetLoggingConfig"></a>

```python
def reset_logging_config() -> None
```

##### `reset_main_class` <a name="reset_main_class" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.resetMainClass"></a>

```python
def reset_main_class() -> None
```

##### `reset_main_jar_file_uri` <a name="reset_main_jar_file_uri" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.resetMainJarFileUri"></a>

```python
def reset_main_jar_file_uri() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference">GoogleDataprocJobSparkConfigLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.archiveUrisInput">archive_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.argsInput">args_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.fileUrisInput">file_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.jarFileUrisInput">jar_file_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.loggingConfigInput">logging_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfig">GoogleDataprocJobSparkConfigLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.mainClassInput">main_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.mainJarFileUriInput">main_jar_file_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.propertiesInput">properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.archiveUris">archive_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.args">args</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.fileUris">file_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.jarFileUris">jar_file_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.mainClass">main_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.mainJarFileUri">main_jar_file_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig">GoogleDataprocJobSparkConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `logging_config`<sup>Required</sup> <a name="logging_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.loggingConfig"></a>

```python
logging_config: GoogleDataprocJobSparkConfigLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference">GoogleDataprocJobSparkConfigLoggingConfigOutputReference</a>

---

##### `archive_uris_input`<sup>Optional</sup> <a name="archive_uris_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.archiveUrisInput"></a>

```python
archive_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `args_input`<sup>Optional</sup> <a name="args_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.argsInput"></a>

```python
args_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `file_uris_input`<sup>Optional</sup> <a name="file_uris_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.fileUrisInput"></a>

```python
file_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jar_file_uris_input`<sup>Optional</sup> <a name="jar_file_uris_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.jarFileUrisInput"></a>

```python
jar_file_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `logging_config_input`<sup>Optional</sup> <a name="logging_config_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.loggingConfigInput"></a>

```python
logging_config_input: GoogleDataprocJobSparkConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfig">GoogleDataprocJobSparkConfigLoggingConfig</a>

---

##### `main_class_input`<sup>Optional</sup> <a name="main_class_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.mainClassInput"></a>

```python
main_class_input: str
```

- *Type:* str

---

##### `main_jar_file_uri_input`<sup>Optional</sup> <a name="main_jar_file_uri_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.mainJarFileUriInput"></a>

```python
main_jar_file_uri_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.propertiesInput"></a>

```python
properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `archive_uris`<sup>Required</sup> <a name="archive_uris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.archiveUris"></a>

```python
archive_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `file_uris`<sup>Required</sup> <a name="file_uris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.fileUris"></a>

```python
file_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jar_file_uris`<sup>Required</sup> <a name="jar_file_uris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.jarFileUris"></a>

```python
jar_file_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `main_class`<sup>Required</sup> <a name="main_class" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.mainClass"></a>

```python
main_class: str
```

- *Type:* str

---

##### `main_jar_file_uri`<sup>Required</sup> <a name="main_jar_file_uri" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.mainJarFileUri"></a>

```python
main_jar_file_uri: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocJobSparkConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig">GoogleDataprocJobSparkConfig</a>

---


### GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference <a name="GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_job

googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.property.driverLogLevelsInput">driver_log_levels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.property.driverLogLevels">driver_log_levels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfig">GoogleDataprocJobSparksqlConfigLoggingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `driver_log_levels_input`<sup>Optional</sup> <a name="driver_log_levels_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.property.driverLogLevelsInput"></a>

```python
driver_log_levels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `driver_log_levels`<sup>Required</sup> <a name="driver_log_levels" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.property.driverLogLevels"></a>

```python
driver_log_levels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocJobSparksqlConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfig">GoogleDataprocJobSparksqlConfigLoggingConfig</a>

---


### GoogleDataprocJobSparksqlConfigOutputReference <a name="GoogleDataprocJobSparksqlConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_job

googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.putLoggingConfig">put_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.resetJarFileUris">reset_jar_file_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.resetLoggingConfig">reset_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.resetQueryFileUri">reset_query_file_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.resetQueryList">reset_query_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.resetScriptVariables">reset_script_variables</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_logging_config` <a name="put_logging_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.putLoggingConfig"></a>

```python
def put_logging_config(
  driver_log_levels: typing.Mapping[str]
) -> None
```

###### `driver_log_levels`<sup>Required</sup> <a name="driver_log_levels" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.putLoggingConfig.parameter.driverLogLevels"></a>

- *Type:* typing.Mapping[str]

Optional.

The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataproc_job#driver_log_levels GoogleDataprocJob#driver_log_levels}

---

##### `reset_jar_file_uris` <a name="reset_jar_file_uris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.resetJarFileUris"></a>

```python
def reset_jar_file_uris() -> None
```

##### `reset_logging_config` <a name="reset_logging_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.resetLoggingConfig"></a>

```python
def reset_logging_config() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_query_file_uri` <a name="reset_query_file_uri" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.resetQueryFileUri"></a>

```python
def reset_query_file_uri() -> None
```

##### `reset_query_list` <a name="reset_query_list" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.resetQueryList"></a>

```python
def reset_query_list() -> None
```

##### `reset_script_variables` <a name="reset_script_variables" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.resetScriptVariables"></a>

```python
def reset_script_variables() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference">GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.jarFileUrisInput">jar_file_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.loggingConfigInput">logging_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfig">GoogleDataprocJobSparksqlConfigLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.propertiesInput">properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.queryFileUriInput">query_file_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.queryListInput">query_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.scriptVariablesInput">script_variables_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.jarFileUris">jar_file_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.queryFileUri">query_file_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.queryList">query_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.scriptVariables">script_variables</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfig">GoogleDataprocJobSparksqlConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `logging_config`<sup>Required</sup> <a name="logging_config" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.loggingConfig"></a>

```python
logging_config: GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference">GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference</a>

---

##### `jar_file_uris_input`<sup>Optional</sup> <a name="jar_file_uris_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.jarFileUrisInput"></a>

```python
jar_file_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `logging_config_input`<sup>Optional</sup> <a name="logging_config_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.loggingConfigInput"></a>

```python
logging_config_input: GoogleDataprocJobSparksqlConfigLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfig">GoogleDataprocJobSparksqlConfigLoggingConfig</a>

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.propertiesInput"></a>

```python
properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `query_file_uri_input`<sup>Optional</sup> <a name="query_file_uri_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.queryFileUriInput"></a>

```python
query_file_uri_input: str
```

- *Type:* str

---

##### `query_list_input`<sup>Optional</sup> <a name="query_list_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.queryListInput"></a>

```python
query_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `script_variables_input`<sup>Optional</sup> <a name="script_variables_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.scriptVariablesInput"></a>

```python
script_variables_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `jar_file_uris`<sup>Required</sup> <a name="jar_file_uris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.jarFileUris"></a>

```python
jar_file_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `query_file_uri`<sup>Required</sup> <a name="query_file_uri" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.queryFileUri"></a>

```python
query_file_uri: str
```

- *Type:* str

---

##### `query_list`<sup>Required</sup> <a name="query_list" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.queryList"></a>

```python
query_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `script_variables`<sup>Required</sup> <a name="script_variables" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.scriptVariables"></a>

```python
script_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocJobSparksqlConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfig">GoogleDataprocJobSparksqlConfig</a>

---


### GoogleDataprocJobStatusList <a name="GoogleDataprocJobStatusList" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_job

googleDataprocJob.GoogleDataprocJobStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDataprocJobStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleDataprocJobStatusOutputReference <a name="GoogleDataprocJobStatusOutputReference" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_job

googleDataprocJob.GoogleDataprocJobStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.property.details">details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.property.stateStartTime">state_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.property.substate">substate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatus">GoogleDataprocJobStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.property.details"></a>

```python
details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_start_time`<sup>Required</sup> <a name="state_start_time" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.property.stateStartTime"></a>

```python
state_start_time: str
```

- *Type:* str

---

##### `substate`<sup>Required</sup> <a name="substate" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.property.substate"></a>

```python
substate: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocJobStatus
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatus">GoogleDataprocJobStatus</a>

---


### GoogleDataprocJobTimeoutsOutputReference <a name="GoogleDataprocJobTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_job

googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeouts">GoogleDataprocJobTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDataprocJobTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeouts">GoogleDataprocJobTimeouts</a>]

---



