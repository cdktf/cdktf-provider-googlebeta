# `googleDataprocJob` Submodule <a name="`googleDataprocJob` Submodule" id="@cdktf/provider-google-beta.googleDataprocJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataprocJob <a name="GoogleDataprocJob" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job google_dataproc_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_job.GoogleDataprocJob;

GoogleDataprocJob.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .placement(GoogleDataprocJobPlacement)
//  .forceDelete(java.lang.Boolean)
//  .forceDelete(IResolvable)
//  .hadoopConfig(GoogleDataprocJobHadoopConfig)
//  .hiveConfig(GoogleDataprocJobHiveConfig)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .pigConfig(GoogleDataprocJobPigConfig)
//  .prestoConfig(GoogleDataprocJobPrestoConfig)
//  .project(java.lang.String)
//  .pysparkConfig(GoogleDataprocJobPysparkConfig)
//  .reference(GoogleDataprocJobReference)
//  .region(java.lang.String)
//  .scheduling(GoogleDataprocJobScheduling)
//  .sparkConfig(GoogleDataprocJobSparkConfig)
//  .sparksqlConfig(GoogleDataprocJobSparksqlConfig)
//  .timeouts(GoogleDataprocJobTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.placement">placement</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacement">GoogleDataprocJobPlacement</a></code> | placement block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.forceDelete">forceDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | By default, you can only delete inactive jobs within Dataproc. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.hadoopConfig">hadoopConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig">GoogleDataprocJobHadoopConfig</a></code> | hadoop_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.hiveConfig">hiveConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfig">GoogleDataprocJobHiveConfig</a></code> | hive_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#id GoogleDataprocJob#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. The labels to associate with this job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.pigConfig">pigConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfig">GoogleDataprocJobPigConfig</a></code> | pig_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.prestoConfig">prestoConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfig">GoogleDataprocJobPrestoConfig</a></code> | presto_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The project in which the cluster can be found and jobs subsequently run against. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.pysparkConfig">pysparkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig">GoogleDataprocJobPysparkConfig</a></code> | pyspark_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.reference">reference</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReference">GoogleDataprocJobReference</a></code> | reference block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The Cloud Dataproc region. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.scheduling">scheduling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobScheduling">GoogleDataprocJobScheduling</a></code> | scheduling block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.sparkConfig">sparkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig">GoogleDataprocJobSparkConfig</a></code> | spark_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.sparksqlConfig">sparksqlConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfig">GoogleDataprocJobSparksqlConfig</a></code> | sparksql_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeouts">GoogleDataprocJobTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `placement`<sup>Required</sup> <a name="placement" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.placement"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacement">GoogleDataprocJobPlacement</a>

placement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#placement GoogleDataprocJob#placement}

---

##### `forceDelete`<sup>Optional</sup> <a name="forceDelete" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.forceDelete"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

By default, you can only delete inactive jobs within Dataproc.

Setting this to true, and calling destroy, will ensure that the job is first cancelled before issuing the delete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#force_delete GoogleDataprocJob#force_delete}

---

##### `hadoopConfig`<sup>Optional</sup> <a name="hadoopConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.hadoopConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig">GoogleDataprocJobHadoopConfig</a>

hadoop_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#hadoop_config GoogleDataprocJob#hadoop_config}

---

##### `hiveConfig`<sup>Optional</sup> <a name="hiveConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.hiveConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfig">GoogleDataprocJobHiveConfig</a>

hive_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#hive_config GoogleDataprocJob#hive_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#id GoogleDataprocJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. The labels to associate with this job.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#labels GoogleDataprocJob#labels}

---

##### `pigConfig`<sup>Optional</sup> <a name="pigConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.pigConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfig">GoogleDataprocJobPigConfig</a>

pig_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#pig_config GoogleDataprocJob#pig_config}

---

##### `prestoConfig`<sup>Optional</sup> <a name="prestoConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.prestoConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfig">GoogleDataprocJobPrestoConfig</a>

presto_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#presto_config GoogleDataprocJob#presto_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The project in which the cluster can be found and jobs subsequently run against.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#project GoogleDataprocJob#project}

---

##### `pysparkConfig`<sup>Optional</sup> <a name="pysparkConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.pysparkConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig">GoogleDataprocJobPysparkConfig</a>

pyspark_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#pyspark_config GoogleDataprocJob#pyspark_config}

---

##### `reference`<sup>Optional</sup> <a name="reference" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.reference"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReference">GoogleDataprocJobReference</a>

reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#reference GoogleDataprocJob#reference}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The Cloud Dataproc region.

This essentially determines which clusters are available for this job to be submitted to. If not specified, defaults to global.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#region GoogleDataprocJob#region}

---

##### `scheduling`<sup>Optional</sup> <a name="scheduling" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.scheduling"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobScheduling">GoogleDataprocJobScheduling</a>

scheduling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#scheduling GoogleDataprocJob#scheduling}

---

##### `sparkConfig`<sup>Optional</sup> <a name="sparkConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.sparkConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig">GoogleDataprocJobSparkConfig</a>

spark_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#spark_config GoogleDataprocJob#spark_config}

---

##### `sparksqlConfig`<sup>Optional</sup> <a name="sparksqlConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.sparksqlConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfig">GoogleDataprocJobSparksqlConfig</a>

sparksql_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#sparksql_config GoogleDataprocJob#sparksql_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeouts">GoogleDataprocJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#timeouts GoogleDataprocJob#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putHadoopConfig">putHadoopConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putHiveConfig">putHiveConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putPigConfig">putPigConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putPlacement">putPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putPrestoConfig">putPrestoConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putPysparkConfig">putPysparkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putReference">putReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putScheduling">putScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putSparkConfig">putSparkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putSparksqlConfig">putSparksqlConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetForceDelete">resetForceDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetHadoopConfig">resetHadoopConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetHiveConfig">resetHiveConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetPigConfig">resetPigConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetPrestoConfig">resetPrestoConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetPysparkConfig">resetPysparkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetReference">resetReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetScheduling">resetScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetSparkConfig">resetSparkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetSparksqlConfig">resetSparksqlConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putHadoopConfig` <a name="putHadoopConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putHadoopConfig"></a>

```java
public void putHadoopConfig(GoogleDataprocJobHadoopConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putHadoopConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig">GoogleDataprocJobHadoopConfig</a>

---

##### `putHiveConfig` <a name="putHiveConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putHiveConfig"></a>

```java
public void putHiveConfig(GoogleDataprocJobHiveConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putHiveConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfig">GoogleDataprocJobHiveConfig</a>

---

##### `putPigConfig` <a name="putPigConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putPigConfig"></a>

```java
public void putPigConfig(GoogleDataprocJobPigConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putPigConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfig">GoogleDataprocJobPigConfig</a>

---

##### `putPlacement` <a name="putPlacement" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putPlacement"></a>

```java
public void putPlacement(GoogleDataprocJobPlacement value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putPlacement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacement">GoogleDataprocJobPlacement</a>

---

##### `putPrestoConfig` <a name="putPrestoConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putPrestoConfig"></a>

```java
public void putPrestoConfig(GoogleDataprocJobPrestoConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putPrestoConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfig">GoogleDataprocJobPrestoConfig</a>

---

##### `putPysparkConfig` <a name="putPysparkConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putPysparkConfig"></a>

```java
public void putPysparkConfig(GoogleDataprocJobPysparkConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putPysparkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig">GoogleDataprocJobPysparkConfig</a>

---

##### `putReference` <a name="putReference" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putReference"></a>

```java
public void putReference(GoogleDataprocJobReference value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReference">GoogleDataprocJobReference</a>

---

##### `putScheduling` <a name="putScheduling" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putScheduling"></a>

```java
public void putScheduling(GoogleDataprocJobScheduling value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putScheduling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobScheduling">GoogleDataprocJobScheduling</a>

---

##### `putSparkConfig` <a name="putSparkConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putSparkConfig"></a>

```java
public void putSparkConfig(GoogleDataprocJobSparkConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putSparkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig">GoogleDataprocJobSparkConfig</a>

---

##### `putSparksqlConfig` <a name="putSparksqlConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putSparksqlConfig"></a>

```java
public void putSparksqlConfig(GoogleDataprocJobSparksqlConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putSparksqlConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfig">GoogleDataprocJobSparksqlConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putTimeouts"></a>

```java
public void putTimeouts(GoogleDataprocJobTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeouts">GoogleDataprocJobTimeouts</a>

---

##### `resetForceDelete` <a name="resetForceDelete" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetForceDelete"></a>

```java
public void resetForceDelete()
```

##### `resetHadoopConfig` <a name="resetHadoopConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetHadoopConfig"></a>

```java
public void resetHadoopConfig()
```

##### `resetHiveConfig` <a name="resetHiveConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetHiveConfig"></a>

```java
public void resetHiveConfig()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetPigConfig` <a name="resetPigConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetPigConfig"></a>

```java
public void resetPigConfig()
```

##### `resetPrestoConfig` <a name="resetPrestoConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetPrestoConfig"></a>

```java
public void resetPrestoConfig()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetProject"></a>

```java
public void resetProject()
```

##### `resetPysparkConfig` <a name="resetPysparkConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetPysparkConfig"></a>

```java
public void resetPysparkConfig()
```

##### `resetReference` <a name="resetReference" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetReference"></a>

```java
public void resetReference()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetScheduling` <a name="resetScheduling" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetScheduling"></a>

```java
public void resetScheduling()
```

##### `resetSparkConfig` <a name="resetSparkConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetSparkConfig"></a>

```java
public void resetSparkConfig()
```

##### `resetSparksqlConfig` <a name="resetSparksqlConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetSparksqlConfig"></a>

```java
public void resetSparksqlConfig()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDataprocJob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_job.GoogleDataprocJob;

GoogleDataprocJob.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_job.GoogleDataprocJob;

GoogleDataprocJob.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_job.GoogleDataprocJob;

GoogleDataprocJob.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_job.GoogleDataprocJob;

GoogleDataprocJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDataprocJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleDataprocJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDataprocJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDataprocJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataprocJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.driverControlsFilesUri">driverControlsFilesUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.driverOutputResourceUri">driverOutputResourceUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.hadoopConfig">hadoopConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference">GoogleDataprocJobHadoopConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.hiveConfig">hiveConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference">GoogleDataprocJobHiveConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.pigConfig">pigConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference">GoogleDataprocJobPigConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.placement">placement</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference">GoogleDataprocJobPlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.prestoConfig">prestoConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference">GoogleDataprocJobPrestoConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.pysparkConfig">pysparkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference">GoogleDataprocJobPysparkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.reference">reference</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference">GoogleDataprocJobReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.scheduling">scheduling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference">GoogleDataprocJobSchedulingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.sparkConfig">sparkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference">GoogleDataprocJobSparkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.sparksqlConfig">sparksqlConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference">GoogleDataprocJobSparksqlConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.status">status</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList">GoogleDataprocJobStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference">GoogleDataprocJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.forceDeleteInput">forceDeleteInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.hadoopConfigInput">hadoopConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig">GoogleDataprocJobHadoopConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.hiveConfigInput">hiveConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfig">GoogleDataprocJobHiveConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.pigConfigInput">pigConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfig">GoogleDataprocJobPigConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.placementInput">placementInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacement">GoogleDataprocJobPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.prestoConfigInput">prestoConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfig">GoogleDataprocJobPrestoConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.pysparkConfigInput">pysparkConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig">GoogleDataprocJobPysparkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.referenceInput">referenceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReference">GoogleDataprocJobReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.schedulingInput">schedulingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobScheduling">GoogleDataprocJobScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.sparkConfigInput">sparkConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig">GoogleDataprocJobSparkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.sparksqlConfigInput">sparksqlConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfig">GoogleDataprocJobSparksqlConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeouts">GoogleDataprocJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.forceDelete">forceDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `driverControlsFilesUri`<sup>Required</sup> <a name="driverControlsFilesUri" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.driverControlsFilesUri"></a>

```java
public java.lang.String getDriverControlsFilesUri();
```

- *Type:* java.lang.String

---

##### `driverOutputResourceUri`<sup>Required</sup> <a name="driverOutputResourceUri" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.driverOutputResourceUri"></a>

```java
public java.lang.String getDriverOutputResourceUri();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `hadoopConfig`<sup>Required</sup> <a name="hadoopConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.hadoopConfig"></a>

```java
public GoogleDataprocJobHadoopConfigOutputReference getHadoopConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference">GoogleDataprocJobHadoopConfigOutputReference</a>

---

##### `hiveConfig`<sup>Required</sup> <a name="hiveConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.hiveConfig"></a>

```java
public GoogleDataprocJobHiveConfigOutputReference getHiveConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference">GoogleDataprocJobHiveConfigOutputReference</a>

---

##### `pigConfig`<sup>Required</sup> <a name="pigConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.pigConfig"></a>

```java
public GoogleDataprocJobPigConfigOutputReference getPigConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference">GoogleDataprocJobPigConfigOutputReference</a>

---

##### `placement`<sup>Required</sup> <a name="placement" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.placement"></a>

```java
public GoogleDataprocJobPlacementOutputReference getPlacement();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference">GoogleDataprocJobPlacementOutputReference</a>

---

##### `prestoConfig`<sup>Required</sup> <a name="prestoConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.prestoConfig"></a>

```java
public GoogleDataprocJobPrestoConfigOutputReference getPrestoConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference">GoogleDataprocJobPrestoConfigOutputReference</a>

---

##### `pysparkConfig`<sup>Required</sup> <a name="pysparkConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.pysparkConfig"></a>

```java
public GoogleDataprocJobPysparkConfigOutputReference getPysparkConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference">GoogleDataprocJobPysparkConfigOutputReference</a>

---

##### `reference`<sup>Required</sup> <a name="reference" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.reference"></a>

```java
public GoogleDataprocJobReferenceOutputReference getReference();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference">GoogleDataprocJobReferenceOutputReference</a>

---

##### `scheduling`<sup>Required</sup> <a name="scheduling" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.scheduling"></a>

```java
public GoogleDataprocJobSchedulingOutputReference getScheduling();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference">GoogleDataprocJobSchedulingOutputReference</a>

---

##### `sparkConfig`<sup>Required</sup> <a name="sparkConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.sparkConfig"></a>

```java
public GoogleDataprocJobSparkConfigOutputReference getSparkConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference">GoogleDataprocJobSparkConfigOutputReference</a>

---

##### `sparksqlConfig`<sup>Required</sup> <a name="sparksqlConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.sparksqlConfig"></a>

```java
public GoogleDataprocJobSparksqlConfigOutputReference getSparksqlConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference">GoogleDataprocJobSparksqlConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.status"></a>

```java
public GoogleDataprocJobStatusList getStatus();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList">GoogleDataprocJobStatusList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.timeouts"></a>

```java
public GoogleDataprocJobTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference">GoogleDataprocJobTimeoutsOutputReference</a>

---

##### `forceDeleteInput`<sup>Optional</sup> <a name="forceDeleteInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.forceDeleteInput"></a>

```java
public java.lang.Object getForceDeleteInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hadoopConfigInput`<sup>Optional</sup> <a name="hadoopConfigInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.hadoopConfigInput"></a>

```java
public GoogleDataprocJobHadoopConfig getHadoopConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig">GoogleDataprocJobHadoopConfig</a>

---

##### `hiveConfigInput`<sup>Optional</sup> <a name="hiveConfigInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.hiveConfigInput"></a>

```java
public GoogleDataprocJobHiveConfig getHiveConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfig">GoogleDataprocJobHiveConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `pigConfigInput`<sup>Optional</sup> <a name="pigConfigInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.pigConfigInput"></a>

```java
public GoogleDataprocJobPigConfig getPigConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfig">GoogleDataprocJobPigConfig</a>

---

##### `placementInput`<sup>Optional</sup> <a name="placementInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.placementInput"></a>

```java
public GoogleDataprocJobPlacement getPlacementInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacement">GoogleDataprocJobPlacement</a>

---

##### `prestoConfigInput`<sup>Optional</sup> <a name="prestoConfigInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.prestoConfigInput"></a>

```java
public GoogleDataprocJobPrestoConfig getPrestoConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfig">GoogleDataprocJobPrestoConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `pysparkConfigInput`<sup>Optional</sup> <a name="pysparkConfigInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.pysparkConfigInput"></a>

```java
public GoogleDataprocJobPysparkConfig getPysparkConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig">GoogleDataprocJobPysparkConfig</a>

---

##### `referenceInput`<sup>Optional</sup> <a name="referenceInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.referenceInput"></a>

```java
public GoogleDataprocJobReference getReferenceInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReference">GoogleDataprocJobReference</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `schedulingInput`<sup>Optional</sup> <a name="schedulingInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.schedulingInput"></a>

```java
public GoogleDataprocJobScheduling getSchedulingInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobScheduling">GoogleDataprocJobScheduling</a>

---

##### `sparkConfigInput`<sup>Optional</sup> <a name="sparkConfigInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.sparkConfigInput"></a>

```java
public GoogleDataprocJobSparkConfig getSparkConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig">GoogleDataprocJobSparkConfig</a>

---

##### `sparksqlConfigInput`<sup>Optional</sup> <a name="sparksqlConfigInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.sparksqlConfigInput"></a>

```java
public GoogleDataprocJobSparksqlConfig getSparksqlConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfig">GoogleDataprocJobSparksqlConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeouts">GoogleDataprocJobTimeouts</a>

---

##### `forceDelete`<sup>Required</sup> <a name="forceDelete" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.forceDelete"></a>

```java
public java.lang.Object getForceDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJob.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataprocJobConfig <a name="GoogleDataprocJobConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_job.GoogleDataprocJobConfig;

GoogleDataprocJobConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .placement(GoogleDataprocJobPlacement)
//  .forceDelete(java.lang.Boolean)
//  .forceDelete(IResolvable)
//  .hadoopConfig(GoogleDataprocJobHadoopConfig)
//  .hiveConfig(GoogleDataprocJobHiveConfig)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .pigConfig(GoogleDataprocJobPigConfig)
//  .prestoConfig(GoogleDataprocJobPrestoConfig)
//  .project(java.lang.String)
//  .pysparkConfig(GoogleDataprocJobPysparkConfig)
//  .reference(GoogleDataprocJobReference)
//  .region(java.lang.String)
//  .scheduling(GoogleDataprocJobScheduling)
//  .sparkConfig(GoogleDataprocJobSparkConfig)
//  .sparksqlConfig(GoogleDataprocJobSparksqlConfig)
//  .timeouts(GoogleDataprocJobTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.placement">placement</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacement">GoogleDataprocJobPlacement</a></code> | placement block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.forceDelete">forceDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | By default, you can only delete inactive jobs within Dataproc. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.hadoopConfig">hadoopConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig">GoogleDataprocJobHadoopConfig</a></code> | hadoop_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.hiveConfig">hiveConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfig">GoogleDataprocJobHiveConfig</a></code> | hive_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#id GoogleDataprocJob#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. The labels to associate with this job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.pigConfig">pigConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfig">GoogleDataprocJobPigConfig</a></code> | pig_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.prestoConfig">prestoConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfig">GoogleDataprocJobPrestoConfig</a></code> | presto_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.project">project</a></code> | <code>java.lang.String</code> | The project in which the cluster can be found and jobs subsequently run against. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.pysparkConfig">pysparkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig">GoogleDataprocJobPysparkConfig</a></code> | pyspark_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.reference">reference</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReference">GoogleDataprocJobReference</a></code> | reference block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.region">region</a></code> | <code>java.lang.String</code> | The Cloud Dataproc region. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.scheduling">scheduling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobScheduling">GoogleDataprocJobScheduling</a></code> | scheduling block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.sparkConfig">sparkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig">GoogleDataprocJobSparkConfig</a></code> | spark_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.sparksqlConfig">sparksqlConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfig">GoogleDataprocJobSparksqlConfig</a></code> | sparksql_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeouts">GoogleDataprocJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `placement`<sup>Required</sup> <a name="placement" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.placement"></a>

```java
public GoogleDataprocJobPlacement getPlacement();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacement">GoogleDataprocJobPlacement</a>

placement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#placement GoogleDataprocJob#placement}

---

##### `forceDelete`<sup>Optional</sup> <a name="forceDelete" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.forceDelete"></a>

```java
public java.lang.Object getForceDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

By default, you can only delete inactive jobs within Dataproc.

Setting this to true, and calling destroy, will ensure that the job is first cancelled before issuing the delete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#force_delete GoogleDataprocJob#force_delete}

---

##### `hadoopConfig`<sup>Optional</sup> <a name="hadoopConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.hadoopConfig"></a>

```java
public GoogleDataprocJobHadoopConfig getHadoopConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig">GoogleDataprocJobHadoopConfig</a>

hadoop_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#hadoop_config GoogleDataprocJob#hadoop_config}

---

##### `hiveConfig`<sup>Optional</sup> <a name="hiveConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.hiveConfig"></a>

```java
public GoogleDataprocJobHiveConfig getHiveConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfig">GoogleDataprocJobHiveConfig</a>

hive_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#hive_config GoogleDataprocJob#hive_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#id GoogleDataprocJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. The labels to associate with this job.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#labels GoogleDataprocJob#labels}

---

##### `pigConfig`<sup>Optional</sup> <a name="pigConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.pigConfig"></a>

```java
public GoogleDataprocJobPigConfig getPigConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfig">GoogleDataprocJobPigConfig</a>

pig_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#pig_config GoogleDataprocJob#pig_config}

---

##### `prestoConfig`<sup>Optional</sup> <a name="prestoConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.prestoConfig"></a>

```java
public GoogleDataprocJobPrestoConfig getPrestoConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfig">GoogleDataprocJobPrestoConfig</a>

presto_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#presto_config GoogleDataprocJob#presto_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The project in which the cluster can be found and jobs subsequently run against.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#project GoogleDataprocJob#project}

---

##### `pysparkConfig`<sup>Optional</sup> <a name="pysparkConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.pysparkConfig"></a>

```java
public GoogleDataprocJobPysparkConfig getPysparkConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig">GoogleDataprocJobPysparkConfig</a>

pyspark_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#pyspark_config GoogleDataprocJob#pyspark_config}

---

##### `reference`<sup>Optional</sup> <a name="reference" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.reference"></a>

```java
public GoogleDataprocJobReference getReference();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReference">GoogleDataprocJobReference</a>

reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#reference GoogleDataprocJob#reference}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The Cloud Dataproc region.

This essentially determines which clusters are available for this job to be submitted to. If not specified, defaults to global.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#region GoogleDataprocJob#region}

---

##### `scheduling`<sup>Optional</sup> <a name="scheduling" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.scheduling"></a>

```java
public GoogleDataprocJobScheduling getScheduling();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobScheduling">GoogleDataprocJobScheduling</a>

scheduling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#scheduling GoogleDataprocJob#scheduling}

---

##### `sparkConfig`<sup>Optional</sup> <a name="sparkConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.sparkConfig"></a>

```java
public GoogleDataprocJobSparkConfig getSparkConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig">GoogleDataprocJobSparkConfig</a>

spark_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#spark_config GoogleDataprocJob#spark_config}

---

##### `sparksqlConfig`<sup>Optional</sup> <a name="sparksqlConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.sparksqlConfig"></a>

```java
public GoogleDataprocJobSparksqlConfig getSparksqlConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfig">GoogleDataprocJobSparksqlConfig</a>

sparksql_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#sparksql_config GoogleDataprocJob#sparksql_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobConfig.property.timeouts"></a>

```java
public GoogleDataprocJobTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeouts">GoogleDataprocJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#timeouts GoogleDataprocJob#timeouts}

---

### GoogleDataprocJobHadoopConfig <a name="GoogleDataprocJobHadoopConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_job.GoogleDataprocJobHadoopConfig;

GoogleDataprocJobHadoopConfig.builder()
//  .archiveUris(java.util.List<java.lang.String>)
//  .args(java.util.List<java.lang.String>)
//  .fileUris(java.util.List<java.lang.String>)
//  .jarFileUris(java.util.List<java.lang.String>)
//  .loggingConfig(GoogleDataprocJobHadoopConfigLoggingConfig)
//  .mainClass(java.lang.String)
//  .mainJarFileUri(java.lang.String)
//  .properties(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig.property.archiveUris">archiveUris</a></code> | <code>java.util.List<java.lang.String></code> | HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | The arguments to pass to the driver. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig.property.fileUris">fileUris</a></code> | <code>java.util.List<java.lang.String></code> | HCFS URIs of files to be copied to the working directory of Spark drivers and distributed tasks. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig.property.jarFileUris">jarFileUris</a></code> | <code>java.util.List<java.lang.String></code> | HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfig">GoogleDataprocJobHadoopConfigLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig.property.mainClass">mainClass</a></code> | <code>java.lang.String</code> | The class containing the main method of the driver. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig.property.mainJarFileUri">mainJarFileUri</a></code> | <code>java.lang.String</code> | The HCFS URI of jar file containing the driver jar. Conflicts with main_class. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A mapping of property names to values, used to configure Spark. |

---

##### `archiveUris`<sup>Optional</sup> <a name="archiveUris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig.property.archiveUris"></a>

```java
public java.util.List<java.lang.String> getArchiveUris();
```

- *Type:* java.util.List<java.lang.String>

HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#archive_uris GoogleDataprocJob#archive_uris}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

The arguments to pass to the driver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#args GoogleDataprocJob#args}

---

##### `fileUris`<sup>Optional</sup> <a name="fileUris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig.property.fileUris"></a>

```java
public java.util.List<java.lang.String> getFileUris();
```

- *Type:* java.util.List<java.lang.String>

HCFS URIs of files to be copied to the working directory of Spark drivers and distributed tasks.

Useful for naively parallel tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#file_uris GoogleDataprocJob#file_uris}

---

##### `jarFileUris`<sup>Optional</sup> <a name="jarFileUris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig.property.jarFileUris"></a>

```java
public java.util.List<java.lang.String> getJarFileUris();
```

- *Type:* java.util.List<java.lang.String>

HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#jar_file_uris GoogleDataprocJob#jar_file_uris}

---

##### `loggingConfig`<sup>Optional</sup> <a name="loggingConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig.property.loggingConfig"></a>

```java
public GoogleDataprocJobHadoopConfigLoggingConfig getLoggingConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfig">GoogleDataprocJobHadoopConfigLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#logging_config GoogleDataprocJob#logging_config}

---

##### `mainClass`<sup>Optional</sup> <a name="mainClass" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig.property.mainClass"></a>

```java
public java.lang.String getMainClass();
```

- *Type:* java.lang.String

The class containing the main method of the driver.

Must be in a provided jar or jar that is already on the classpath. Conflicts with main_jar_file_uri

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#main_class GoogleDataprocJob#main_class}

---

##### `mainJarFileUri`<sup>Optional</sup> <a name="mainJarFileUri" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig.property.mainJarFileUri"></a>

```java
public java.lang.String getMainJarFileUri();
```

- *Type:* java.lang.String

The HCFS URI of jar file containing the driver jar. Conflicts with main_class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#main_jar_file_uri GoogleDataprocJob#main_jar_file_uri}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A mapping of property names to values, used to configure Spark.

Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#properties GoogleDataprocJob#properties}

---

### GoogleDataprocJobHadoopConfigLoggingConfig <a name="GoogleDataprocJobHadoopConfigLoggingConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_job.GoogleDataprocJobHadoopConfigLoggingConfig;

GoogleDataprocJobHadoopConfigLoggingConfig.builder()
    .driverLogLevels(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfig.property.driverLogLevels">driverLogLevels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. |

---

##### `driverLogLevels`<sup>Required</sup> <a name="driverLogLevels" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfig.property.driverLogLevels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDriverLogLevels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional.

The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#driver_log_levels GoogleDataprocJob#driver_log_levels}

---

### GoogleDataprocJobHiveConfig <a name="GoogleDataprocJobHiveConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_job.GoogleDataprocJobHiveConfig;

GoogleDataprocJobHiveConfig.builder()
//  .continueOnFailure(java.lang.Boolean)
//  .continueOnFailure(IResolvable)
//  .jarFileUris(java.util.List<java.lang.String>)
//  .properties(java.util.Map<java.lang.String, java.lang.String>)
//  .queryFileUri(java.lang.String)
//  .queryList(java.util.List<java.lang.String>)
//  .scriptVariables(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfig.property.continueOnFailure">continueOnFailure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to continue executing queries if a query fails. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfig.property.jarFileUris">jarFileUris</a></code> | <code>java.util.List<java.lang.String></code> | HCFS URIs of jar files to add to the CLASSPATH of the Hive server and Hadoop MapReduce (MR) tasks. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfig.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A mapping of property names and values, used to configure Hive. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfig.property.queryFileUri">queryFileUri</a></code> | <code>java.lang.String</code> | HCFS URI of file containing Hive script to execute as the job. Conflicts with query_list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfig.property.queryList">queryList</a></code> | <code>java.util.List<java.lang.String></code> | The list of Hive queries or statements to execute as part of the job. Conflicts with query_file_uri. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfig.property.scriptVariables">scriptVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Mapping of query variable names to values (equivalent to the Hive command: SET name="value";). |

---

##### `continueOnFailure`<sup>Optional</sup> <a name="continueOnFailure" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfig.property.continueOnFailure"></a>

```java
public java.lang.Object getContinueOnFailure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to continue executing queries if a query fails.

The default value is false. Setting to true can be useful when executing independent parallel queries. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#continue_on_failure GoogleDataprocJob#continue_on_failure}

---

##### `jarFileUris`<sup>Optional</sup> <a name="jarFileUris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfig.property.jarFileUris"></a>

```java
public java.util.List<java.lang.String> getJarFileUris();
```

- *Type:* java.util.List<java.lang.String>

HCFS URIs of jar files to add to the CLASSPATH of the Hive server and Hadoop MapReduce (MR) tasks.

Can contain Hive SerDes and UDFs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#jar_file_uris GoogleDataprocJob#jar_file_uris}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfig.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A mapping of property names and values, used to configure Hive.

Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/hive/conf/hive-site.xml, and classes in user code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#properties GoogleDataprocJob#properties}

---

##### `queryFileUri`<sup>Optional</sup> <a name="queryFileUri" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfig.property.queryFileUri"></a>

```java
public java.lang.String getQueryFileUri();
```

- *Type:* java.lang.String

HCFS URI of file containing Hive script to execute as the job. Conflicts with query_list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#query_file_uri GoogleDataprocJob#query_file_uri}

---

##### `queryList`<sup>Optional</sup> <a name="queryList" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfig.property.queryList"></a>

```java
public java.util.List<java.lang.String> getQueryList();
```

- *Type:* java.util.List<java.lang.String>

The list of Hive queries or statements to execute as part of the job. Conflicts with query_file_uri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#query_list GoogleDataprocJob#query_list}

---

##### `scriptVariables`<sup>Optional</sup> <a name="scriptVariables" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfig.property.scriptVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getScriptVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Mapping of query variable names to values (equivalent to the Hive command: SET name="value";).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#script_variables GoogleDataprocJob#script_variables}

---

### GoogleDataprocJobPigConfig <a name="GoogleDataprocJobPigConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_job.GoogleDataprocJobPigConfig;

GoogleDataprocJobPigConfig.builder()
//  .continueOnFailure(java.lang.Boolean)
//  .continueOnFailure(IResolvable)
//  .jarFileUris(java.util.List<java.lang.String>)
//  .loggingConfig(GoogleDataprocJobPigConfigLoggingConfig)
//  .properties(java.util.Map<java.lang.String, java.lang.String>)
//  .queryFileUri(java.lang.String)
//  .queryList(java.util.List<java.lang.String>)
//  .scriptVariables(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfig.property.continueOnFailure">continueOnFailure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to continue executing queries if a query fails. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfig.property.jarFileUris">jarFileUris</a></code> | <code>java.util.List<java.lang.String></code> | HCFS URIs of jar files to add to the CLASSPATH of the Pig Client and Hadoop MapReduce (MR) tasks. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfig.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfig">GoogleDataprocJobPigConfigLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfig.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A mapping of property names to values, used to configure Pig. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfig.property.queryFileUri">queryFileUri</a></code> | <code>java.lang.String</code> | HCFS URI of file containing Hive script to execute as the job. Conflicts with query_list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfig.property.queryList">queryList</a></code> | <code>java.util.List<java.lang.String></code> | The list of Hive queries or statements to execute as part of the job. Conflicts with query_file_uri. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfig.property.scriptVariables">scriptVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Mapping of query variable names to values (equivalent to the Pig command: name=[value]). |

---

##### `continueOnFailure`<sup>Optional</sup> <a name="continueOnFailure" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfig.property.continueOnFailure"></a>

```java
public java.lang.Object getContinueOnFailure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to continue executing queries if a query fails.

The default value is false. Setting to true can be useful when executing independent parallel queries. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#continue_on_failure GoogleDataprocJob#continue_on_failure}

---

##### `jarFileUris`<sup>Optional</sup> <a name="jarFileUris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfig.property.jarFileUris"></a>

```java
public java.util.List<java.lang.String> getJarFileUris();
```

- *Type:* java.util.List<java.lang.String>

HCFS URIs of jar files to add to the CLASSPATH of the Pig Client and Hadoop MapReduce (MR) tasks.

Can contain Pig UDFs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#jar_file_uris GoogleDataprocJob#jar_file_uris}

---

##### `loggingConfig`<sup>Optional</sup> <a name="loggingConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfig.property.loggingConfig"></a>

```java
public GoogleDataprocJobPigConfigLoggingConfig getLoggingConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfig">GoogleDataprocJobPigConfigLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#logging_config GoogleDataprocJob#logging_config}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfig.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A mapping of property names to values, used to configure Pig.

Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/pig/conf/pig.properties, and classes in user code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#properties GoogleDataprocJob#properties}

---

##### `queryFileUri`<sup>Optional</sup> <a name="queryFileUri" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfig.property.queryFileUri"></a>

```java
public java.lang.String getQueryFileUri();
```

- *Type:* java.lang.String

HCFS URI of file containing Hive script to execute as the job. Conflicts with query_list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#query_file_uri GoogleDataprocJob#query_file_uri}

---

##### `queryList`<sup>Optional</sup> <a name="queryList" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfig.property.queryList"></a>

```java
public java.util.List<java.lang.String> getQueryList();
```

- *Type:* java.util.List<java.lang.String>

The list of Hive queries or statements to execute as part of the job. Conflicts with query_file_uri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#query_list GoogleDataprocJob#query_list}

---

##### `scriptVariables`<sup>Optional</sup> <a name="scriptVariables" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfig.property.scriptVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getScriptVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Mapping of query variable names to values (equivalent to the Pig command: name=[value]).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#script_variables GoogleDataprocJob#script_variables}

---

### GoogleDataprocJobPigConfigLoggingConfig <a name="GoogleDataprocJobPigConfigLoggingConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_job.GoogleDataprocJobPigConfigLoggingConfig;

GoogleDataprocJobPigConfigLoggingConfig.builder()
    .driverLogLevels(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfig.property.driverLogLevels">driverLogLevels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. |

---

##### `driverLogLevels`<sup>Required</sup> <a name="driverLogLevels" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfig.property.driverLogLevels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDriverLogLevels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional.

The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#driver_log_levels GoogleDataprocJob#driver_log_levels}

---

### GoogleDataprocJobPlacement <a name="GoogleDataprocJobPlacement" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacement.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_job.GoogleDataprocJobPlacement;

GoogleDataprocJobPlacement.builder()
    .clusterName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacement.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | The name of the cluster where the job will be submitted. |

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacement.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

The name of the cluster where the job will be submitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#cluster_name GoogleDataprocJob#cluster_name}

---

### GoogleDataprocJobPrestoConfig <a name="GoogleDataprocJobPrestoConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_job.GoogleDataprocJobPrestoConfig;

GoogleDataprocJobPrestoConfig.builder()
//  .clientTags(java.util.List<java.lang.String>)
//  .continueOnFailure(java.lang.Boolean)
//  .continueOnFailure(IResolvable)
//  .loggingConfig(GoogleDataprocJobPrestoConfigLoggingConfig)
//  .outputFormat(java.lang.String)
//  .properties(java.util.Map<java.lang.String, java.lang.String>)
//  .queryFileUri(java.lang.String)
//  .queryList(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfig.property.clientTags">clientTags</a></code> | <code>java.util.List<java.lang.String></code> | Presto client tags to attach to this query. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfig.property.continueOnFailure">continueOnFailure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to continue executing queries if a query fails. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfig.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfig">GoogleDataprocJobPrestoConfigLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfig.property.outputFormat">outputFormat</a></code> | <code>java.lang.String</code> | The format in which query output will be displayed. See the Presto documentation for supported output formats. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfig.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A mapping of property names to values. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfig.property.queryFileUri">queryFileUri</a></code> | <code>java.lang.String</code> | The HCFS URI of the script that contains SQL queries. Conflicts with query_list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfig.property.queryList">queryList</a></code> | <code>java.util.List<java.lang.String></code> | The list of SQL queries or statements to execute as part of the job. Conflicts with query_file_uri. |

---

##### `clientTags`<sup>Optional</sup> <a name="clientTags" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfig.property.clientTags"></a>

```java
public java.util.List<java.lang.String> getClientTags();
```

- *Type:* java.util.List<java.lang.String>

Presto client tags to attach to this query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#client_tags GoogleDataprocJob#client_tags}

---

##### `continueOnFailure`<sup>Optional</sup> <a name="continueOnFailure" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfig.property.continueOnFailure"></a>

```java
public java.lang.Object getContinueOnFailure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to continue executing queries if a query fails.

Setting to true can be useful when executing independent parallel queries. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#continue_on_failure GoogleDataprocJob#continue_on_failure}

---

##### `loggingConfig`<sup>Optional</sup> <a name="loggingConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfig.property.loggingConfig"></a>

```java
public GoogleDataprocJobPrestoConfigLoggingConfig getLoggingConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfig">GoogleDataprocJobPrestoConfigLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#logging_config GoogleDataprocJob#logging_config}

---

##### `outputFormat`<sup>Optional</sup> <a name="outputFormat" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfig.property.outputFormat"></a>

```java
public java.lang.String getOutputFormat();
```

- *Type:* java.lang.String

The format in which query output will be displayed. See the Presto documentation for supported output formats.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#output_format GoogleDataprocJob#output_format}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfig.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A mapping of property names to values.

Used to set Presto session properties Equivalent to using the --session flag in the Presto CLI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#properties GoogleDataprocJob#properties}

---

##### `queryFileUri`<sup>Optional</sup> <a name="queryFileUri" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfig.property.queryFileUri"></a>

```java
public java.lang.String getQueryFileUri();
```

- *Type:* java.lang.String

The HCFS URI of the script that contains SQL queries. Conflicts with query_list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#query_file_uri GoogleDataprocJob#query_file_uri}

---

##### `queryList`<sup>Optional</sup> <a name="queryList" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfig.property.queryList"></a>

```java
public java.util.List<java.lang.String> getQueryList();
```

- *Type:* java.util.List<java.lang.String>

The list of SQL queries or statements to execute as part of the job. Conflicts with query_file_uri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#query_list GoogleDataprocJob#query_list}

---

### GoogleDataprocJobPrestoConfigLoggingConfig <a name="GoogleDataprocJobPrestoConfigLoggingConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_job.GoogleDataprocJobPrestoConfigLoggingConfig;

GoogleDataprocJobPrestoConfigLoggingConfig.builder()
    .driverLogLevels(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfig.property.driverLogLevels">driverLogLevels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. |

---

##### `driverLogLevels`<sup>Required</sup> <a name="driverLogLevels" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfig.property.driverLogLevels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDriverLogLevels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional.

The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#driver_log_levels GoogleDataprocJob#driver_log_levels}

---

### GoogleDataprocJobPysparkConfig <a name="GoogleDataprocJobPysparkConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_job.GoogleDataprocJobPysparkConfig;

GoogleDataprocJobPysparkConfig.builder()
    .mainPythonFileUri(java.lang.String)
//  .archiveUris(java.util.List<java.lang.String>)
//  .args(java.util.List<java.lang.String>)
//  .fileUris(java.util.List<java.lang.String>)
//  .jarFileUris(java.util.List<java.lang.String>)
//  .loggingConfig(GoogleDataprocJobPysparkConfigLoggingConfig)
//  .properties(java.util.Map<java.lang.String, java.lang.String>)
//  .pythonFileUris(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig.property.mainPythonFileUri">mainPythonFileUri</a></code> | <code>java.lang.String</code> | Required. The HCFS URI of the main Python file to use as the driver. Must be a .py file. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig.property.archiveUris">archiveUris</a></code> | <code>java.util.List<java.lang.String></code> | Optional. HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig.property.fileUris">fileUris</a></code> | <code>java.util.List<java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig.property.jarFileUris">jarFileUris</a></code> | <code>java.util.List<java.lang.String></code> | Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfig">GoogleDataprocJobPysparkConfigLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig.property.pythonFileUris">pythonFileUris</a></code> | <code>java.util.List<java.lang.String></code> | Optional. |

---

##### `mainPythonFileUri`<sup>Required</sup> <a name="mainPythonFileUri" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig.property.mainPythonFileUri"></a>

```java
public java.lang.String getMainPythonFileUri();
```

- *Type:* java.lang.String

Required. The HCFS URI of the main Python file to use as the driver. Must be a .py file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#main_python_file_uri GoogleDataprocJob#main_python_file_uri}

---

##### `archiveUris`<sup>Optional</sup> <a name="archiveUris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig.property.archiveUris"></a>

```java
public java.util.List<java.lang.String> getArchiveUris();
```

- *Type:* java.util.List<java.lang.String>

Optional. HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#archive_uris GoogleDataprocJob#archive_uris}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

Optional.

The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job properties, since a collision may occur that causes an incorrect job submission

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#args GoogleDataprocJob#args}

---

##### `fileUris`<sup>Optional</sup> <a name="fileUris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig.property.fileUris"></a>

```java
public java.util.List<java.lang.String> getFileUris();
```

- *Type:* java.util.List<java.lang.String>

Optional.

HCFS URIs of files to be copied to the working directory of Python drivers and distributed tasks. Useful for naively parallel tasks

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#file_uris GoogleDataprocJob#file_uris}

---

##### `jarFileUris`<sup>Optional</sup> <a name="jarFileUris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig.property.jarFileUris"></a>

```java
public java.util.List<java.lang.String> getJarFileUris();
```

- *Type:* java.util.List<java.lang.String>

Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#jar_file_uris GoogleDataprocJob#jar_file_uris}

---

##### `loggingConfig`<sup>Optional</sup> <a name="loggingConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig.property.loggingConfig"></a>

```java
public GoogleDataprocJobPysparkConfigLoggingConfig getLoggingConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfig">GoogleDataprocJobPysparkConfigLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#logging_config GoogleDataprocJob#logging_config}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional.

A mapping of property names to values, used to configure PySpark. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#properties GoogleDataprocJob#properties}

---

##### `pythonFileUris`<sup>Optional</sup> <a name="pythonFileUris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig.property.pythonFileUris"></a>

```java
public java.util.List<java.lang.String> getPythonFileUris();
```

- *Type:* java.util.List<java.lang.String>

Optional.

HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#python_file_uris GoogleDataprocJob#python_file_uris}

---

### GoogleDataprocJobPysparkConfigLoggingConfig <a name="GoogleDataprocJobPysparkConfigLoggingConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_job.GoogleDataprocJobPysparkConfigLoggingConfig;

GoogleDataprocJobPysparkConfigLoggingConfig.builder()
    .driverLogLevels(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfig.property.driverLogLevels">driverLogLevels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. |

---

##### `driverLogLevels`<sup>Required</sup> <a name="driverLogLevels" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfig.property.driverLogLevels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDriverLogLevels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional.

The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#driver_log_levels GoogleDataprocJob#driver_log_levels}

---

### GoogleDataprocJobReference <a name="GoogleDataprocJobReference" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_job.GoogleDataprocJobReference;

GoogleDataprocJobReference.builder()
//  .jobId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReference.property.jobId">jobId</a></code> | <code>java.lang.String</code> | The job ID, which must be unique within the project. |

---

##### `jobId`<sup>Optional</sup> <a name="jobId" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReference.property.jobId"></a>

```java
public java.lang.String getJobId();
```

- *Type:* java.lang.String

The job ID, which must be unique within the project.

The job ID is generated by the server upon job submission or provided by the user as a means to perform retries without creating duplicate jobs

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#job_id GoogleDataprocJob#job_id}

---

### GoogleDataprocJobScheduling <a name="GoogleDataprocJobScheduling" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobScheduling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobScheduling.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_job.GoogleDataprocJobScheduling;

GoogleDataprocJobScheduling.builder()
    .maxFailuresPerHour(java.lang.Number)
    .maxFailuresTotal(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobScheduling.property.maxFailuresPerHour">maxFailuresPerHour</a></code> | <code>java.lang.Number</code> | Maximum number of times per hour a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobScheduling.property.maxFailuresTotal">maxFailuresTotal</a></code> | <code>java.lang.Number</code> | Maximum number of times in total a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed. |

---

##### `maxFailuresPerHour`<sup>Required</sup> <a name="maxFailuresPerHour" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobScheduling.property.maxFailuresPerHour"></a>

```java
public java.lang.Number getMaxFailuresPerHour();
```

- *Type:* java.lang.Number

Maximum number of times per hour a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#max_failures_per_hour GoogleDataprocJob#max_failures_per_hour}

---

##### `maxFailuresTotal`<sup>Required</sup> <a name="maxFailuresTotal" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobScheduling.property.maxFailuresTotal"></a>

```java
public java.lang.Number getMaxFailuresTotal();
```

- *Type:* java.lang.Number

Maximum number of times in total a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#max_failures_total GoogleDataprocJob#max_failures_total}

---

### GoogleDataprocJobSparkConfig <a name="GoogleDataprocJobSparkConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_job.GoogleDataprocJobSparkConfig;

GoogleDataprocJobSparkConfig.builder()
//  .archiveUris(java.util.List<java.lang.String>)
//  .args(java.util.List<java.lang.String>)
//  .fileUris(java.util.List<java.lang.String>)
//  .jarFileUris(java.util.List<java.lang.String>)
//  .loggingConfig(GoogleDataprocJobSparkConfigLoggingConfig)
//  .mainClass(java.lang.String)
//  .mainJarFileUri(java.lang.String)
//  .properties(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig.property.archiveUris">archiveUris</a></code> | <code>java.util.List<java.lang.String></code> | HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | The arguments to pass to the driver. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig.property.fileUris">fileUris</a></code> | <code>java.util.List<java.lang.String></code> | HCFS URIs of files to be copied to the working directory of Spark drivers and distributed tasks. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig.property.jarFileUris">jarFileUris</a></code> | <code>java.util.List<java.lang.String></code> | HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfig">GoogleDataprocJobSparkConfigLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig.property.mainClass">mainClass</a></code> | <code>java.lang.String</code> | The class containing the main method of the driver. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig.property.mainJarFileUri">mainJarFileUri</a></code> | <code>java.lang.String</code> | The HCFS URI of jar file containing the driver jar. Conflicts with main_class. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A mapping of property names to values, used to configure Spark. |

---

##### `archiveUris`<sup>Optional</sup> <a name="archiveUris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig.property.archiveUris"></a>

```java
public java.util.List<java.lang.String> getArchiveUris();
```

- *Type:* java.util.List<java.lang.String>

HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#archive_uris GoogleDataprocJob#archive_uris}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

The arguments to pass to the driver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#args GoogleDataprocJob#args}

---

##### `fileUris`<sup>Optional</sup> <a name="fileUris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig.property.fileUris"></a>

```java
public java.util.List<java.lang.String> getFileUris();
```

- *Type:* java.util.List<java.lang.String>

HCFS URIs of files to be copied to the working directory of Spark drivers and distributed tasks.

Useful for naively parallel tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#file_uris GoogleDataprocJob#file_uris}

---

##### `jarFileUris`<sup>Optional</sup> <a name="jarFileUris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig.property.jarFileUris"></a>

```java
public java.util.List<java.lang.String> getJarFileUris();
```

- *Type:* java.util.List<java.lang.String>

HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#jar_file_uris GoogleDataprocJob#jar_file_uris}

---

##### `loggingConfig`<sup>Optional</sup> <a name="loggingConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig.property.loggingConfig"></a>

```java
public GoogleDataprocJobSparkConfigLoggingConfig getLoggingConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfig">GoogleDataprocJobSparkConfigLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#logging_config GoogleDataprocJob#logging_config}

---

##### `mainClass`<sup>Optional</sup> <a name="mainClass" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig.property.mainClass"></a>

```java
public java.lang.String getMainClass();
```

- *Type:* java.lang.String

The class containing the main method of the driver.

Must be in a provided jar or jar that is already on the classpath. Conflicts with main_jar_file_uri

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#main_class GoogleDataprocJob#main_class}

---

##### `mainJarFileUri`<sup>Optional</sup> <a name="mainJarFileUri" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig.property.mainJarFileUri"></a>

```java
public java.lang.String getMainJarFileUri();
```

- *Type:* java.lang.String

The HCFS URI of jar file containing the driver jar. Conflicts with main_class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#main_jar_file_uri GoogleDataprocJob#main_jar_file_uri}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A mapping of property names to values, used to configure Spark.

Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#properties GoogleDataprocJob#properties}

---

### GoogleDataprocJobSparkConfigLoggingConfig <a name="GoogleDataprocJobSparkConfigLoggingConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_job.GoogleDataprocJobSparkConfigLoggingConfig;

GoogleDataprocJobSparkConfigLoggingConfig.builder()
    .driverLogLevels(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfig.property.driverLogLevels">driverLogLevels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. |

---

##### `driverLogLevels`<sup>Required</sup> <a name="driverLogLevels" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfig.property.driverLogLevels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDriverLogLevels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional.

The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#driver_log_levels GoogleDataprocJob#driver_log_levels}

---

### GoogleDataprocJobSparksqlConfig <a name="GoogleDataprocJobSparksqlConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_job.GoogleDataprocJobSparksqlConfig;

GoogleDataprocJobSparksqlConfig.builder()
//  .jarFileUris(java.util.List<java.lang.String>)
//  .loggingConfig(GoogleDataprocJobSparksqlConfigLoggingConfig)
//  .properties(java.util.Map<java.lang.String, java.lang.String>)
//  .queryFileUri(java.lang.String)
//  .queryList(java.util.List<java.lang.String>)
//  .scriptVariables(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfig.property.jarFileUris">jarFileUris</a></code> | <code>java.util.List<java.lang.String></code> | HCFS URIs of jar files to be added to the Spark CLASSPATH. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfig.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfig">GoogleDataprocJobSparksqlConfigLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfig.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A mapping of property names to values, used to configure Spark SQL's SparkConf. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfig.property.queryFileUri">queryFileUri</a></code> | <code>java.lang.String</code> | The HCFS URI of the script that contains SQL queries. Conflicts with query_list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfig.property.queryList">queryList</a></code> | <code>java.util.List<java.lang.String></code> | The list of SQL queries or statements to execute as part of the job. Conflicts with query_file_uri. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfig.property.scriptVariables">scriptVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";). |

---

##### `jarFileUris`<sup>Optional</sup> <a name="jarFileUris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfig.property.jarFileUris"></a>

```java
public java.util.List<java.lang.String> getJarFileUris();
```

- *Type:* java.util.List<java.lang.String>

HCFS URIs of jar files to be added to the Spark CLASSPATH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#jar_file_uris GoogleDataprocJob#jar_file_uris}

---

##### `loggingConfig`<sup>Optional</sup> <a name="loggingConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfig.property.loggingConfig"></a>

```java
public GoogleDataprocJobSparksqlConfigLoggingConfig getLoggingConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfig">GoogleDataprocJobSparksqlConfigLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#logging_config GoogleDataprocJob#logging_config}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfig.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A mapping of property names to values, used to configure Spark SQL's SparkConf.

Properties that conflict with values set by the Cloud Dataproc API may be overwritten.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#properties GoogleDataprocJob#properties}

---

##### `queryFileUri`<sup>Optional</sup> <a name="queryFileUri" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfig.property.queryFileUri"></a>

```java
public java.lang.String getQueryFileUri();
```

- *Type:* java.lang.String

The HCFS URI of the script that contains SQL queries. Conflicts with query_list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#query_file_uri GoogleDataprocJob#query_file_uri}

---

##### `queryList`<sup>Optional</sup> <a name="queryList" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfig.property.queryList"></a>

```java
public java.util.List<java.lang.String> getQueryList();
```

- *Type:* java.util.List<java.lang.String>

The list of SQL queries or statements to execute as part of the job. Conflicts with query_file_uri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#query_list GoogleDataprocJob#query_list}

---

##### `scriptVariables`<sup>Optional</sup> <a name="scriptVariables" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfig.property.scriptVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getScriptVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#script_variables GoogleDataprocJob#script_variables}

---

### GoogleDataprocJobSparksqlConfigLoggingConfig <a name="GoogleDataprocJobSparksqlConfigLoggingConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_job.GoogleDataprocJobSparksqlConfigLoggingConfig;

GoogleDataprocJobSparksqlConfigLoggingConfig.builder()
    .driverLogLevels(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfig.property.driverLogLevels">driverLogLevels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. |

---

##### `driverLogLevels`<sup>Required</sup> <a name="driverLogLevels" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfig.property.driverLogLevels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDriverLogLevels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional.

The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#driver_log_levels GoogleDataprocJob#driver_log_levels}

---

### GoogleDataprocJobStatus <a name="GoogleDataprocJobStatus" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatus.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_job.GoogleDataprocJobStatus;

GoogleDataprocJobStatus.builder()
    .build();
```


### GoogleDataprocJobTimeouts <a name="GoogleDataprocJobTimeouts" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_job.GoogleDataprocJobTimeouts;

GoogleDataprocJobTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#create GoogleDataprocJob#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#delete GoogleDataprocJob#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#create GoogleDataprocJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_job#delete GoogleDataprocJob#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataprocJobHadoopConfigLoggingConfigOutputReference <a name="GoogleDataprocJobHadoopConfigLoggingConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_job.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference;

new GoogleDataprocJobHadoopConfigLoggingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.property.driverLogLevelsInput">driverLogLevelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.property.driverLogLevels">driverLogLevels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfig">GoogleDataprocJobHadoopConfigLoggingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `driverLogLevelsInput`<sup>Optional</sup> <a name="driverLogLevelsInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.property.driverLogLevelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDriverLogLevelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `driverLogLevels`<sup>Required</sup> <a name="driverLogLevels" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.property.driverLogLevels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDriverLogLevels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference.property.internalValue"></a>

```java
public GoogleDataprocJobHadoopConfigLoggingConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfig">GoogleDataprocJobHadoopConfigLoggingConfig</a>

---


### GoogleDataprocJobHadoopConfigOutputReference <a name="GoogleDataprocJobHadoopConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_job.GoogleDataprocJobHadoopConfigOutputReference;

new GoogleDataprocJobHadoopConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.putLoggingConfig">putLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.resetArchiveUris">resetArchiveUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.resetFileUris">resetFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.resetJarFileUris">resetJarFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.resetLoggingConfig">resetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.resetMainClass">resetMainClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.resetMainJarFileUri">resetMainJarFileUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.resetProperties">resetProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLoggingConfig` <a name="putLoggingConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.putLoggingConfig"></a>

```java
public void putLoggingConfig(GoogleDataprocJobHadoopConfigLoggingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfig">GoogleDataprocJobHadoopConfigLoggingConfig</a>

---

##### `resetArchiveUris` <a name="resetArchiveUris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.resetArchiveUris"></a>

```java
public void resetArchiveUris()
```

##### `resetArgs` <a name="resetArgs" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.resetArgs"></a>

```java
public void resetArgs()
```

##### `resetFileUris` <a name="resetFileUris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.resetFileUris"></a>

```java
public void resetFileUris()
```

##### `resetJarFileUris` <a name="resetJarFileUris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.resetJarFileUris"></a>

```java
public void resetJarFileUris()
```

##### `resetLoggingConfig` <a name="resetLoggingConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.resetLoggingConfig"></a>

```java
public void resetLoggingConfig()
```

##### `resetMainClass` <a name="resetMainClass" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.resetMainClass"></a>

```java
public void resetMainClass()
```

##### `resetMainJarFileUri` <a name="resetMainJarFileUri" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.resetMainJarFileUri"></a>

```java
public void resetMainJarFileUri()
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.resetProperties"></a>

```java
public void resetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference">GoogleDataprocJobHadoopConfigLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.archiveUrisInput">archiveUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.argsInput">argsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.fileUrisInput">fileUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.jarFileUrisInput">jarFileUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.loggingConfigInput">loggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfig">GoogleDataprocJobHadoopConfigLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.mainClassInput">mainClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.mainJarFileUriInput">mainJarFileUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.archiveUris">archiveUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.fileUris">fileUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.jarFileUris">jarFileUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.mainClass">mainClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.mainJarFileUri">mainJarFileUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig">GoogleDataprocJobHadoopConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `loggingConfig`<sup>Required</sup> <a name="loggingConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.loggingConfig"></a>

```java
public GoogleDataprocJobHadoopConfigLoggingConfigOutputReference getLoggingConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfigOutputReference">GoogleDataprocJobHadoopConfigLoggingConfigOutputReference</a>

---

##### `archiveUrisInput`<sup>Optional</sup> <a name="archiveUrisInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.archiveUrisInput"></a>

```java
public java.util.List<java.lang.String> getArchiveUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.argsInput"></a>

```java
public java.util.List<java.lang.String> getArgsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fileUrisInput`<sup>Optional</sup> <a name="fileUrisInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.fileUrisInput"></a>

```java
public java.util.List<java.lang.String> getFileUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jarFileUrisInput`<sup>Optional</sup> <a name="jarFileUrisInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.jarFileUrisInput"></a>

```java
public java.util.List<java.lang.String> getJarFileUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loggingConfigInput`<sup>Optional</sup> <a name="loggingConfigInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.loggingConfigInput"></a>

```java
public GoogleDataprocJobHadoopConfigLoggingConfig getLoggingConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigLoggingConfig">GoogleDataprocJobHadoopConfigLoggingConfig</a>

---

##### `mainClassInput`<sup>Optional</sup> <a name="mainClassInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.mainClassInput"></a>

```java
public java.lang.String getMainClassInput();
```

- *Type:* java.lang.String

---

##### `mainJarFileUriInput`<sup>Optional</sup> <a name="mainJarFileUriInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.mainJarFileUriInput"></a>

```java
public java.lang.String getMainJarFileUriInput();
```

- *Type:* java.lang.String

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.propertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `archiveUris`<sup>Required</sup> <a name="archiveUris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.archiveUris"></a>

```java
public java.util.List<java.lang.String> getArchiveUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fileUris`<sup>Required</sup> <a name="fileUris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.fileUris"></a>

```java
public java.util.List<java.lang.String> getFileUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jarFileUris`<sup>Required</sup> <a name="jarFileUris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.jarFileUris"></a>

```java
public java.util.List<java.lang.String> getJarFileUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mainClass`<sup>Required</sup> <a name="mainClass" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.mainClass"></a>

```java
public java.lang.String getMainClass();
```

- *Type:* java.lang.String

---

##### `mainJarFileUri`<sup>Required</sup> <a name="mainJarFileUri" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.mainJarFileUri"></a>

```java
public java.lang.String getMainJarFileUri();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfigOutputReference.property.internalValue"></a>

```java
public GoogleDataprocJobHadoopConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHadoopConfig">GoogleDataprocJobHadoopConfig</a>

---


### GoogleDataprocJobHiveConfigOutputReference <a name="GoogleDataprocJobHiveConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_job.GoogleDataprocJobHiveConfigOutputReference;

new GoogleDataprocJobHiveConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.resetContinueOnFailure">resetContinueOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.resetJarFileUris">resetJarFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.resetQueryFileUri">resetQueryFileUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.resetQueryList">resetQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.resetScriptVariables">resetScriptVariables</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContinueOnFailure` <a name="resetContinueOnFailure" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.resetContinueOnFailure"></a>

```java
public void resetContinueOnFailure()
```

##### `resetJarFileUris` <a name="resetJarFileUris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.resetJarFileUris"></a>

```java
public void resetJarFileUris()
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.resetProperties"></a>

```java
public void resetProperties()
```

##### `resetQueryFileUri` <a name="resetQueryFileUri" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.resetQueryFileUri"></a>

```java
public void resetQueryFileUri()
```

##### `resetQueryList` <a name="resetQueryList" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.resetQueryList"></a>

```java
public void resetQueryList()
```

##### `resetScriptVariables` <a name="resetScriptVariables" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.resetScriptVariables"></a>

```java
public void resetScriptVariables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.continueOnFailureInput">continueOnFailureInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.jarFileUrisInput">jarFileUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.queryFileUriInput">queryFileUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.queryListInput">queryListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.scriptVariablesInput">scriptVariablesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.continueOnFailure">continueOnFailure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.jarFileUris">jarFileUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.queryFileUri">queryFileUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.queryList">queryList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.scriptVariables">scriptVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfig">GoogleDataprocJobHiveConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `continueOnFailureInput`<sup>Optional</sup> <a name="continueOnFailureInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.continueOnFailureInput"></a>

```java
public java.lang.Object getContinueOnFailureInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jarFileUrisInput`<sup>Optional</sup> <a name="jarFileUrisInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.jarFileUrisInput"></a>

```java
public java.util.List<java.lang.String> getJarFileUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.propertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `queryFileUriInput`<sup>Optional</sup> <a name="queryFileUriInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.queryFileUriInput"></a>

```java
public java.lang.String getQueryFileUriInput();
```

- *Type:* java.lang.String

---

##### `queryListInput`<sup>Optional</sup> <a name="queryListInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.queryListInput"></a>

```java
public java.util.List<java.lang.String> getQueryListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scriptVariablesInput`<sup>Optional</sup> <a name="scriptVariablesInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.scriptVariablesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getScriptVariablesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `continueOnFailure`<sup>Required</sup> <a name="continueOnFailure" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.continueOnFailure"></a>

```java
public java.lang.Object getContinueOnFailure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jarFileUris`<sup>Required</sup> <a name="jarFileUris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.jarFileUris"></a>

```java
public java.util.List<java.lang.String> getJarFileUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `queryFileUri`<sup>Required</sup> <a name="queryFileUri" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.queryFileUri"></a>

```java
public java.lang.String getQueryFileUri();
```

- *Type:* java.lang.String

---

##### `queryList`<sup>Required</sup> <a name="queryList" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.queryList"></a>

```java
public java.util.List<java.lang.String> getQueryList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scriptVariables`<sup>Required</sup> <a name="scriptVariables" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.scriptVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getScriptVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfigOutputReference.property.internalValue"></a>

```java
public GoogleDataprocJobHiveConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobHiveConfig">GoogleDataprocJobHiveConfig</a>

---


### GoogleDataprocJobPigConfigLoggingConfigOutputReference <a name="GoogleDataprocJobPigConfigLoggingConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_job.GoogleDataprocJobPigConfigLoggingConfigOutputReference;

new GoogleDataprocJobPigConfigLoggingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.property.driverLogLevelsInput">driverLogLevelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.property.driverLogLevels">driverLogLevels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfig">GoogleDataprocJobPigConfigLoggingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `driverLogLevelsInput`<sup>Optional</sup> <a name="driverLogLevelsInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.property.driverLogLevelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDriverLogLevelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `driverLogLevels`<sup>Required</sup> <a name="driverLogLevels" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.property.driverLogLevels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDriverLogLevels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference.property.internalValue"></a>

```java
public GoogleDataprocJobPigConfigLoggingConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfig">GoogleDataprocJobPigConfigLoggingConfig</a>

---


### GoogleDataprocJobPigConfigOutputReference <a name="GoogleDataprocJobPigConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_job.GoogleDataprocJobPigConfigOutputReference;

new GoogleDataprocJobPigConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.putLoggingConfig">putLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.resetContinueOnFailure">resetContinueOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.resetJarFileUris">resetJarFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.resetLoggingConfig">resetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.resetQueryFileUri">resetQueryFileUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.resetQueryList">resetQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.resetScriptVariables">resetScriptVariables</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLoggingConfig` <a name="putLoggingConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.putLoggingConfig"></a>

```java
public void putLoggingConfig(GoogleDataprocJobPigConfigLoggingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfig">GoogleDataprocJobPigConfigLoggingConfig</a>

---

##### `resetContinueOnFailure` <a name="resetContinueOnFailure" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.resetContinueOnFailure"></a>

```java
public void resetContinueOnFailure()
```

##### `resetJarFileUris` <a name="resetJarFileUris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.resetJarFileUris"></a>

```java
public void resetJarFileUris()
```

##### `resetLoggingConfig` <a name="resetLoggingConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.resetLoggingConfig"></a>

```java
public void resetLoggingConfig()
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.resetProperties"></a>

```java
public void resetProperties()
```

##### `resetQueryFileUri` <a name="resetQueryFileUri" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.resetQueryFileUri"></a>

```java
public void resetQueryFileUri()
```

##### `resetQueryList` <a name="resetQueryList" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.resetQueryList"></a>

```java
public void resetQueryList()
```

##### `resetScriptVariables` <a name="resetScriptVariables" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.resetScriptVariables"></a>

```java
public void resetScriptVariables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference">GoogleDataprocJobPigConfigLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.continueOnFailureInput">continueOnFailureInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.jarFileUrisInput">jarFileUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.loggingConfigInput">loggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfig">GoogleDataprocJobPigConfigLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.queryFileUriInput">queryFileUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.queryListInput">queryListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.scriptVariablesInput">scriptVariablesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.continueOnFailure">continueOnFailure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.jarFileUris">jarFileUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.queryFileUri">queryFileUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.queryList">queryList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.scriptVariables">scriptVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfig">GoogleDataprocJobPigConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `loggingConfig`<sup>Required</sup> <a name="loggingConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.loggingConfig"></a>

```java
public GoogleDataprocJobPigConfigLoggingConfigOutputReference getLoggingConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfigOutputReference">GoogleDataprocJobPigConfigLoggingConfigOutputReference</a>

---

##### `continueOnFailureInput`<sup>Optional</sup> <a name="continueOnFailureInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.continueOnFailureInput"></a>

```java
public java.lang.Object getContinueOnFailureInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jarFileUrisInput`<sup>Optional</sup> <a name="jarFileUrisInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.jarFileUrisInput"></a>

```java
public java.util.List<java.lang.String> getJarFileUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loggingConfigInput`<sup>Optional</sup> <a name="loggingConfigInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.loggingConfigInput"></a>

```java
public GoogleDataprocJobPigConfigLoggingConfig getLoggingConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigLoggingConfig">GoogleDataprocJobPigConfigLoggingConfig</a>

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.propertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `queryFileUriInput`<sup>Optional</sup> <a name="queryFileUriInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.queryFileUriInput"></a>

```java
public java.lang.String getQueryFileUriInput();
```

- *Type:* java.lang.String

---

##### `queryListInput`<sup>Optional</sup> <a name="queryListInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.queryListInput"></a>

```java
public java.util.List<java.lang.String> getQueryListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scriptVariablesInput`<sup>Optional</sup> <a name="scriptVariablesInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.scriptVariablesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getScriptVariablesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `continueOnFailure`<sup>Required</sup> <a name="continueOnFailure" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.continueOnFailure"></a>

```java
public java.lang.Object getContinueOnFailure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jarFileUris`<sup>Required</sup> <a name="jarFileUris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.jarFileUris"></a>

```java
public java.util.List<java.lang.String> getJarFileUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `queryFileUri`<sup>Required</sup> <a name="queryFileUri" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.queryFileUri"></a>

```java
public java.lang.String getQueryFileUri();
```

- *Type:* java.lang.String

---

##### `queryList`<sup>Required</sup> <a name="queryList" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.queryList"></a>

```java
public java.util.List<java.lang.String> getQueryList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scriptVariables`<sup>Required</sup> <a name="scriptVariables" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.scriptVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getScriptVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfigOutputReference.property.internalValue"></a>

```java
public GoogleDataprocJobPigConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPigConfig">GoogleDataprocJobPigConfig</a>

---


### GoogleDataprocJobPlacementOutputReference <a name="GoogleDataprocJobPlacementOutputReference" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_job.GoogleDataprocJobPlacementOutputReference;

new GoogleDataprocJobPlacementOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.property.clusterUuid">clusterUuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.property.clusterNameInput">clusterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacement">GoogleDataprocJobPlacement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clusterUuid`<sup>Required</sup> <a name="clusterUuid" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.property.clusterUuid"></a>

```java
public java.lang.String getClusterUuid();
```

- *Type:* java.lang.String

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.property.clusterNameInput"></a>

```java
public java.lang.String getClusterNameInput();
```

- *Type:* java.lang.String

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacementOutputReference.property.internalValue"></a>

```java
public GoogleDataprocJobPlacement getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPlacement">GoogleDataprocJobPlacement</a>

---


### GoogleDataprocJobPrestoConfigLoggingConfigOutputReference <a name="GoogleDataprocJobPrestoConfigLoggingConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_job.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference;

new GoogleDataprocJobPrestoConfigLoggingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.property.driverLogLevelsInput">driverLogLevelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.property.driverLogLevels">driverLogLevels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfig">GoogleDataprocJobPrestoConfigLoggingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `driverLogLevelsInput`<sup>Optional</sup> <a name="driverLogLevelsInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.property.driverLogLevelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDriverLogLevelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `driverLogLevels`<sup>Required</sup> <a name="driverLogLevels" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.property.driverLogLevels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDriverLogLevels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference.property.internalValue"></a>

```java
public GoogleDataprocJobPrestoConfigLoggingConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfig">GoogleDataprocJobPrestoConfigLoggingConfig</a>

---


### GoogleDataprocJobPrestoConfigOutputReference <a name="GoogleDataprocJobPrestoConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_job.GoogleDataprocJobPrestoConfigOutputReference;

new GoogleDataprocJobPrestoConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.putLoggingConfig">putLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.resetClientTags">resetClientTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.resetContinueOnFailure">resetContinueOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.resetLoggingConfig">resetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.resetOutputFormat">resetOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.resetQueryFileUri">resetQueryFileUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.resetQueryList">resetQueryList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLoggingConfig` <a name="putLoggingConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.putLoggingConfig"></a>

```java
public void putLoggingConfig(GoogleDataprocJobPrestoConfigLoggingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfig">GoogleDataprocJobPrestoConfigLoggingConfig</a>

---

##### `resetClientTags` <a name="resetClientTags" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.resetClientTags"></a>

```java
public void resetClientTags()
```

##### `resetContinueOnFailure` <a name="resetContinueOnFailure" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.resetContinueOnFailure"></a>

```java
public void resetContinueOnFailure()
```

##### `resetLoggingConfig` <a name="resetLoggingConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.resetLoggingConfig"></a>

```java
public void resetLoggingConfig()
```

##### `resetOutputFormat` <a name="resetOutputFormat" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.resetOutputFormat"></a>

```java
public void resetOutputFormat()
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.resetProperties"></a>

```java
public void resetProperties()
```

##### `resetQueryFileUri` <a name="resetQueryFileUri" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.resetQueryFileUri"></a>

```java
public void resetQueryFileUri()
```

##### `resetQueryList` <a name="resetQueryList" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.resetQueryList"></a>

```java
public void resetQueryList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference">GoogleDataprocJobPrestoConfigLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.clientTagsInput">clientTagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.continueOnFailureInput">continueOnFailureInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.loggingConfigInput">loggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfig">GoogleDataprocJobPrestoConfigLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.outputFormatInput">outputFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.queryFileUriInput">queryFileUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.queryListInput">queryListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.clientTags">clientTags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.continueOnFailure">continueOnFailure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.outputFormat">outputFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.queryFileUri">queryFileUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.queryList">queryList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfig">GoogleDataprocJobPrestoConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `loggingConfig`<sup>Required</sup> <a name="loggingConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.loggingConfig"></a>

```java
public GoogleDataprocJobPrestoConfigLoggingConfigOutputReference getLoggingConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfigOutputReference">GoogleDataprocJobPrestoConfigLoggingConfigOutputReference</a>

---

##### `clientTagsInput`<sup>Optional</sup> <a name="clientTagsInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.clientTagsInput"></a>

```java
public java.util.List<java.lang.String> getClientTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `continueOnFailureInput`<sup>Optional</sup> <a name="continueOnFailureInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.continueOnFailureInput"></a>

```java
public java.lang.Object getContinueOnFailureInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `loggingConfigInput`<sup>Optional</sup> <a name="loggingConfigInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.loggingConfigInput"></a>

```java
public GoogleDataprocJobPrestoConfigLoggingConfig getLoggingConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigLoggingConfig">GoogleDataprocJobPrestoConfigLoggingConfig</a>

---

##### `outputFormatInput`<sup>Optional</sup> <a name="outputFormatInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.outputFormatInput"></a>

```java
public java.lang.String getOutputFormatInput();
```

- *Type:* java.lang.String

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.propertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `queryFileUriInput`<sup>Optional</sup> <a name="queryFileUriInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.queryFileUriInput"></a>

```java
public java.lang.String getQueryFileUriInput();
```

- *Type:* java.lang.String

---

##### `queryListInput`<sup>Optional</sup> <a name="queryListInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.queryListInput"></a>

```java
public java.util.List<java.lang.String> getQueryListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientTags`<sup>Required</sup> <a name="clientTags" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.clientTags"></a>

```java
public java.util.List<java.lang.String> getClientTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `continueOnFailure`<sup>Required</sup> <a name="continueOnFailure" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.continueOnFailure"></a>

```java
public java.lang.Object getContinueOnFailure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `outputFormat`<sup>Required</sup> <a name="outputFormat" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.outputFormat"></a>

```java
public java.lang.String getOutputFormat();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `queryFileUri`<sup>Required</sup> <a name="queryFileUri" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.queryFileUri"></a>

```java
public java.lang.String getQueryFileUri();
```

- *Type:* java.lang.String

---

##### `queryList`<sup>Required</sup> <a name="queryList" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.queryList"></a>

```java
public java.util.List<java.lang.String> getQueryList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfigOutputReference.property.internalValue"></a>

```java
public GoogleDataprocJobPrestoConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPrestoConfig">GoogleDataprocJobPrestoConfig</a>

---


### GoogleDataprocJobPysparkConfigLoggingConfigOutputReference <a name="GoogleDataprocJobPysparkConfigLoggingConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_job.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference;

new GoogleDataprocJobPysparkConfigLoggingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.property.driverLogLevelsInput">driverLogLevelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.property.driverLogLevels">driverLogLevels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfig">GoogleDataprocJobPysparkConfigLoggingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `driverLogLevelsInput`<sup>Optional</sup> <a name="driverLogLevelsInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.property.driverLogLevelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDriverLogLevelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `driverLogLevels`<sup>Required</sup> <a name="driverLogLevels" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.property.driverLogLevels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDriverLogLevels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference.property.internalValue"></a>

```java
public GoogleDataprocJobPysparkConfigLoggingConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfig">GoogleDataprocJobPysparkConfigLoggingConfig</a>

---


### GoogleDataprocJobPysparkConfigOutputReference <a name="GoogleDataprocJobPysparkConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_job.GoogleDataprocJobPysparkConfigOutputReference;

new GoogleDataprocJobPysparkConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.putLoggingConfig">putLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.resetArchiveUris">resetArchiveUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.resetFileUris">resetFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.resetJarFileUris">resetJarFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.resetLoggingConfig">resetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.resetPythonFileUris">resetPythonFileUris</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLoggingConfig` <a name="putLoggingConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.putLoggingConfig"></a>

```java
public void putLoggingConfig(GoogleDataprocJobPysparkConfigLoggingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfig">GoogleDataprocJobPysparkConfigLoggingConfig</a>

---

##### `resetArchiveUris` <a name="resetArchiveUris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.resetArchiveUris"></a>

```java
public void resetArchiveUris()
```

##### `resetArgs` <a name="resetArgs" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.resetArgs"></a>

```java
public void resetArgs()
```

##### `resetFileUris` <a name="resetFileUris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.resetFileUris"></a>

```java
public void resetFileUris()
```

##### `resetJarFileUris` <a name="resetJarFileUris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.resetJarFileUris"></a>

```java
public void resetJarFileUris()
```

##### `resetLoggingConfig` <a name="resetLoggingConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.resetLoggingConfig"></a>

```java
public void resetLoggingConfig()
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.resetProperties"></a>

```java
public void resetProperties()
```

##### `resetPythonFileUris` <a name="resetPythonFileUris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.resetPythonFileUris"></a>

```java
public void resetPythonFileUris()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference">GoogleDataprocJobPysparkConfigLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.archiveUrisInput">archiveUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.argsInput">argsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.fileUrisInput">fileUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.jarFileUrisInput">jarFileUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.loggingConfigInput">loggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfig">GoogleDataprocJobPysparkConfigLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.mainPythonFileUriInput">mainPythonFileUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.pythonFileUrisInput">pythonFileUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.archiveUris">archiveUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.fileUris">fileUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.jarFileUris">jarFileUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.mainPythonFileUri">mainPythonFileUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.pythonFileUris">pythonFileUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig">GoogleDataprocJobPysparkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `loggingConfig`<sup>Required</sup> <a name="loggingConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.loggingConfig"></a>

```java
public GoogleDataprocJobPysparkConfigLoggingConfigOutputReference getLoggingConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfigOutputReference">GoogleDataprocJobPysparkConfigLoggingConfigOutputReference</a>

---

##### `archiveUrisInput`<sup>Optional</sup> <a name="archiveUrisInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.archiveUrisInput"></a>

```java
public java.util.List<java.lang.String> getArchiveUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.argsInput"></a>

```java
public java.util.List<java.lang.String> getArgsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fileUrisInput`<sup>Optional</sup> <a name="fileUrisInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.fileUrisInput"></a>

```java
public java.util.List<java.lang.String> getFileUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jarFileUrisInput`<sup>Optional</sup> <a name="jarFileUrisInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.jarFileUrisInput"></a>

```java
public java.util.List<java.lang.String> getJarFileUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loggingConfigInput`<sup>Optional</sup> <a name="loggingConfigInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.loggingConfigInput"></a>

```java
public GoogleDataprocJobPysparkConfigLoggingConfig getLoggingConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigLoggingConfig">GoogleDataprocJobPysparkConfigLoggingConfig</a>

---

##### `mainPythonFileUriInput`<sup>Optional</sup> <a name="mainPythonFileUriInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.mainPythonFileUriInput"></a>

```java
public java.lang.String getMainPythonFileUriInput();
```

- *Type:* java.lang.String

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.propertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `pythonFileUrisInput`<sup>Optional</sup> <a name="pythonFileUrisInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.pythonFileUrisInput"></a>

```java
public java.util.List<java.lang.String> getPythonFileUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `archiveUris`<sup>Required</sup> <a name="archiveUris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.archiveUris"></a>

```java
public java.util.List<java.lang.String> getArchiveUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fileUris`<sup>Required</sup> <a name="fileUris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.fileUris"></a>

```java
public java.util.List<java.lang.String> getFileUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jarFileUris`<sup>Required</sup> <a name="jarFileUris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.jarFileUris"></a>

```java
public java.util.List<java.lang.String> getJarFileUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mainPythonFileUri`<sup>Required</sup> <a name="mainPythonFileUri" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.mainPythonFileUri"></a>

```java
public java.lang.String getMainPythonFileUri();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `pythonFileUris`<sup>Required</sup> <a name="pythonFileUris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.pythonFileUris"></a>

```java
public java.util.List<java.lang.String> getPythonFileUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfigOutputReference.property.internalValue"></a>

```java
public GoogleDataprocJobPysparkConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobPysparkConfig">GoogleDataprocJobPysparkConfig</a>

---


### GoogleDataprocJobReferenceOutputReference <a name="GoogleDataprocJobReferenceOutputReference" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_job.GoogleDataprocJobReferenceOutputReference;

new GoogleDataprocJobReferenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.resetJobId">resetJobId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetJobId` <a name="resetJobId" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.resetJobId"></a>

```java
public void resetJobId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.property.jobIdInput">jobIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.property.jobId">jobId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReference">GoogleDataprocJobReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `jobIdInput`<sup>Optional</sup> <a name="jobIdInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.property.jobIdInput"></a>

```java
public java.lang.String getJobIdInput();
```

- *Type:* java.lang.String

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.property.jobId"></a>

```java
public java.lang.String getJobId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReferenceOutputReference.property.internalValue"></a>

```java
public GoogleDataprocJobReference getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobReference">GoogleDataprocJobReference</a>

---


### GoogleDataprocJobSchedulingOutputReference <a name="GoogleDataprocJobSchedulingOutputReference" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_job.GoogleDataprocJobSchedulingOutputReference;

new GoogleDataprocJobSchedulingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.property.maxFailuresPerHourInput">maxFailuresPerHourInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.property.maxFailuresTotalInput">maxFailuresTotalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.property.maxFailuresPerHour">maxFailuresPerHour</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.property.maxFailuresTotal">maxFailuresTotal</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobScheduling">GoogleDataprocJobScheduling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxFailuresPerHourInput`<sup>Optional</sup> <a name="maxFailuresPerHourInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.property.maxFailuresPerHourInput"></a>

```java
public java.lang.Number getMaxFailuresPerHourInput();
```

- *Type:* java.lang.Number

---

##### `maxFailuresTotalInput`<sup>Optional</sup> <a name="maxFailuresTotalInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.property.maxFailuresTotalInput"></a>

```java
public java.lang.Number getMaxFailuresTotalInput();
```

- *Type:* java.lang.Number

---

##### `maxFailuresPerHour`<sup>Required</sup> <a name="maxFailuresPerHour" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.property.maxFailuresPerHour"></a>

```java
public java.lang.Number getMaxFailuresPerHour();
```

- *Type:* java.lang.Number

---

##### `maxFailuresTotal`<sup>Required</sup> <a name="maxFailuresTotal" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.property.maxFailuresTotal"></a>

```java
public java.lang.Number getMaxFailuresTotal();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSchedulingOutputReference.property.internalValue"></a>

```java
public GoogleDataprocJobScheduling getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobScheduling">GoogleDataprocJobScheduling</a>

---


### GoogleDataprocJobSparkConfigLoggingConfigOutputReference <a name="GoogleDataprocJobSparkConfigLoggingConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_job.GoogleDataprocJobSparkConfigLoggingConfigOutputReference;

new GoogleDataprocJobSparkConfigLoggingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.property.driverLogLevelsInput">driverLogLevelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.property.driverLogLevels">driverLogLevels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfig">GoogleDataprocJobSparkConfigLoggingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `driverLogLevelsInput`<sup>Optional</sup> <a name="driverLogLevelsInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.property.driverLogLevelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDriverLogLevelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `driverLogLevels`<sup>Required</sup> <a name="driverLogLevels" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.property.driverLogLevels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDriverLogLevels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference.property.internalValue"></a>

```java
public GoogleDataprocJobSparkConfigLoggingConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfig">GoogleDataprocJobSparkConfigLoggingConfig</a>

---


### GoogleDataprocJobSparkConfigOutputReference <a name="GoogleDataprocJobSparkConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_job.GoogleDataprocJobSparkConfigOutputReference;

new GoogleDataprocJobSparkConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.putLoggingConfig">putLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.resetArchiveUris">resetArchiveUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.resetFileUris">resetFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.resetJarFileUris">resetJarFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.resetLoggingConfig">resetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.resetMainClass">resetMainClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.resetMainJarFileUri">resetMainJarFileUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.resetProperties">resetProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLoggingConfig` <a name="putLoggingConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.putLoggingConfig"></a>

```java
public void putLoggingConfig(GoogleDataprocJobSparkConfigLoggingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfig">GoogleDataprocJobSparkConfigLoggingConfig</a>

---

##### `resetArchiveUris` <a name="resetArchiveUris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.resetArchiveUris"></a>

```java
public void resetArchiveUris()
```

##### `resetArgs` <a name="resetArgs" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.resetArgs"></a>

```java
public void resetArgs()
```

##### `resetFileUris` <a name="resetFileUris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.resetFileUris"></a>

```java
public void resetFileUris()
```

##### `resetJarFileUris` <a name="resetJarFileUris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.resetJarFileUris"></a>

```java
public void resetJarFileUris()
```

##### `resetLoggingConfig` <a name="resetLoggingConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.resetLoggingConfig"></a>

```java
public void resetLoggingConfig()
```

##### `resetMainClass` <a name="resetMainClass" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.resetMainClass"></a>

```java
public void resetMainClass()
```

##### `resetMainJarFileUri` <a name="resetMainJarFileUri" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.resetMainJarFileUri"></a>

```java
public void resetMainJarFileUri()
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.resetProperties"></a>

```java
public void resetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference">GoogleDataprocJobSparkConfigLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.archiveUrisInput">archiveUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.argsInput">argsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.fileUrisInput">fileUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.jarFileUrisInput">jarFileUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.loggingConfigInput">loggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfig">GoogleDataprocJobSparkConfigLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.mainClassInput">mainClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.mainJarFileUriInput">mainJarFileUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.archiveUris">archiveUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.fileUris">fileUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.jarFileUris">jarFileUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.mainClass">mainClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.mainJarFileUri">mainJarFileUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig">GoogleDataprocJobSparkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `loggingConfig`<sup>Required</sup> <a name="loggingConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.loggingConfig"></a>

```java
public GoogleDataprocJobSparkConfigLoggingConfigOutputReference getLoggingConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfigOutputReference">GoogleDataprocJobSparkConfigLoggingConfigOutputReference</a>

---

##### `archiveUrisInput`<sup>Optional</sup> <a name="archiveUrisInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.archiveUrisInput"></a>

```java
public java.util.List<java.lang.String> getArchiveUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.argsInput"></a>

```java
public java.util.List<java.lang.String> getArgsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fileUrisInput`<sup>Optional</sup> <a name="fileUrisInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.fileUrisInput"></a>

```java
public java.util.List<java.lang.String> getFileUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jarFileUrisInput`<sup>Optional</sup> <a name="jarFileUrisInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.jarFileUrisInput"></a>

```java
public java.util.List<java.lang.String> getJarFileUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loggingConfigInput`<sup>Optional</sup> <a name="loggingConfigInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.loggingConfigInput"></a>

```java
public GoogleDataprocJobSparkConfigLoggingConfig getLoggingConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigLoggingConfig">GoogleDataprocJobSparkConfigLoggingConfig</a>

---

##### `mainClassInput`<sup>Optional</sup> <a name="mainClassInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.mainClassInput"></a>

```java
public java.lang.String getMainClassInput();
```

- *Type:* java.lang.String

---

##### `mainJarFileUriInput`<sup>Optional</sup> <a name="mainJarFileUriInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.mainJarFileUriInput"></a>

```java
public java.lang.String getMainJarFileUriInput();
```

- *Type:* java.lang.String

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.propertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `archiveUris`<sup>Required</sup> <a name="archiveUris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.archiveUris"></a>

```java
public java.util.List<java.lang.String> getArchiveUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fileUris`<sup>Required</sup> <a name="fileUris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.fileUris"></a>

```java
public java.util.List<java.lang.String> getFileUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jarFileUris`<sup>Required</sup> <a name="jarFileUris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.jarFileUris"></a>

```java
public java.util.List<java.lang.String> getJarFileUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mainClass`<sup>Required</sup> <a name="mainClass" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.mainClass"></a>

```java
public java.lang.String getMainClass();
```

- *Type:* java.lang.String

---

##### `mainJarFileUri`<sup>Required</sup> <a name="mainJarFileUri" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.mainJarFileUri"></a>

```java
public java.lang.String getMainJarFileUri();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfigOutputReference.property.internalValue"></a>

```java
public GoogleDataprocJobSparkConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparkConfig">GoogleDataprocJobSparkConfig</a>

---


### GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference <a name="GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_job.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference;

new GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.property.driverLogLevelsInput">driverLogLevelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.property.driverLogLevels">driverLogLevels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfig">GoogleDataprocJobSparksqlConfigLoggingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `driverLogLevelsInput`<sup>Optional</sup> <a name="driverLogLevelsInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.property.driverLogLevelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDriverLogLevelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `driverLogLevels`<sup>Required</sup> <a name="driverLogLevels" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.property.driverLogLevels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDriverLogLevels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference.property.internalValue"></a>

```java
public GoogleDataprocJobSparksqlConfigLoggingConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfig">GoogleDataprocJobSparksqlConfigLoggingConfig</a>

---


### GoogleDataprocJobSparksqlConfigOutputReference <a name="GoogleDataprocJobSparksqlConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_job.GoogleDataprocJobSparksqlConfigOutputReference;

new GoogleDataprocJobSparksqlConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.putLoggingConfig">putLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.resetJarFileUris">resetJarFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.resetLoggingConfig">resetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.resetQueryFileUri">resetQueryFileUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.resetQueryList">resetQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.resetScriptVariables">resetScriptVariables</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLoggingConfig` <a name="putLoggingConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.putLoggingConfig"></a>

```java
public void putLoggingConfig(GoogleDataprocJobSparksqlConfigLoggingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfig">GoogleDataprocJobSparksqlConfigLoggingConfig</a>

---

##### `resetJarFileUris` <a name="resetJarFileUris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.resetJarFileUris"></a>

```java
public void resetJarFileUris()
```

##### `resetLoggingConfig` <a name="resetLoggingConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.resetLoggingConfig"></a>

```java
public void resetLoggingConfig()
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.resetProperties"></a>

```java
public void resetProperties()
```

##### `resetQueryFileUri` <a name="resetQueryFileUri" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.resetQueryFileUri"></a>

```java
public void resetQueryFileUri()
```

##### `resetQueryList` <a name="resetQueryList" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.resetQueryList"></a>

```java
public void resetQueryList()
```

##### `resetScriptVariables` <a name="resetScriptVariables" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.resetScriptVariables"></a>

```java
public void resetScriptVariables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference">GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.jarFileUrisInput">jarFileUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.loggingConfigInput">loggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfig">GoogleDataprocJobSparksqlConfigLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.queryFileUriInput">queryFileUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.queryListInput">queryListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.scriptVariablesInput">scriptVariablesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.jarFileUris">jarFileUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.queryFileUri">queryFileUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.queryList">queryList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.scriptVariables">scriptVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfig">GoogleDataprocJobSparksqlConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `loggingConfig`<sup>Required</sup> <a name="loggingConfig" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.loggingConfig"></a>

```java
public GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference getLoggingConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference">GoogleDataprocJobSparksqlConfigLoggingConfigOutputReference</a>

---

##### `jarFileUrisInput`<sup>Optional</sup> <a name="jarFileUrisInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.jarFileUrisInput"></a>

```java
public java.util.List<java.lang.String> getJarFileUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loggingConfigInput`<sup>Optional</sup> <a name="loggingConfigInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.loggingConfigInput"></a>

```java
public GoogleDataprocJobSparksqlConfigLoggingConfig getLoggingConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigLoggingConfig">GoogleDataprocJobSparksqlConfigLoggingConfig</a>

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.propertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `queryFileUriInput`<sup>Optional</sup> <a name="queryFileUriInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.queryFileUriInput"></a>

```java
public java.lang.String getQueryFileUriInput();
```

- *Type:* java.lang.String

---

##### `queryListInput`<sup>Optional</sup> <a name="queryListInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.queryListInput"></a>

```java
public java.util.List<java.lang.String> getQueryListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scriptVariablesInput`<sup>Optional</sup> <a name="scriptVariablesInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.scriptVariablesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getScriptVariablesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `jarFileUris`<sup>Required</sup> <a name="jarFileUris" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.jarFileUris"></a>

```java
public java.util.List<java.lang.String> getJarFileUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `queryFileUri`<sup>Required</sup> <a name="queryFileUri" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.queryFileUri"></a>

```java
public java.lang.String getQueryFileUri();
```

- *Type:* java.lang.String

---

##### `queryList`<sup>Required</sup> <a name="queryList" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.queryList"></a>

```java
public java.util.List<java.lang.String> getQueryList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scriptVariables`<sup>Required</sup> <a name="scriptVariables" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.scriptVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getScriptVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfigOutputReference.property.internalValue"></a>

```java
public GoogleDataprocJobSparksqlConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobSparksqlConfig">GoogleDataprocJobSparksqlConfig</a>

---


### GoogleDataprocJobStatusList <a name="GoogleDataprocJobStatusList" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_job.GoogleDataprocJobStatusList;

new GoogleDataprocJobStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList.get"></a>

```java
public GoogleDataprocJobStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleDataprocJobStatusOutputReference <a name="GoogleDataprocJobStatusOutputReference" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_job.GoogleDataprocJobStatusOutputReference;

new GoogleDataprocJobStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.property.details">details</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.property.stateStartTime">stateStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.property.substate">substate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatus">GoogleDataprocJobStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.property.details"></a>

```java
public java.lang.String getDetails();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateStartTime`<sup>Required</sup> <a name="stateStartTime" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.property.stateStartTime"></a>

```java
public java.lang.String getStateStartTime();
```

- *Type:* java.lang.String

---

##### `substate`<sup>Required</sup> <a name="substate" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.property.substate"></a>

```java
public java.lang.String getSubstate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatusOutputReference.property.internalValue"></a>

```java
public GoogleDataprocJobStatus getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobStatus">GoogleDataprocJobStatus</a>

---


### GoogleDataprocJobTimeoutsOutputReference <a name="GoogleDataprocJobTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_job.GoogleDataprocJobTimeoutsOutputReference;

new GoogleDataprocJobTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeouts">GoogleDataprocJobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataprocJob.GoogleDataprocJobTimeouts">GoogleDataprocJobTimeouts</a>

---



