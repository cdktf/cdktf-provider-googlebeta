# `googleDataprocBatch` Submodule <a name="`googleDataprocBatch` Submodule" id="@cdktf/provider-google-beta.googleDataprocBatch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataprocBatch <a name="GoogleDataprocBatch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch google_dataproc_batch}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_batch.GoogleDataprocBatch;

GoogleDataprocBatch.Builder.create(Construct scope, java.lang.String id)
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
//  .batchId(java.lang.String)
//  .environmentConfig(GoogleDataprocBatchEnvironmentConfig)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .pysparkBatch(GoogleDataprocBatchPysparkBatch)
//  .runtimeConfig(GoogleDataprocBatchRuntimeConfig)
//  .sparkBatch(GoogleDataprocBatchSparkBatch)
//  .sparkRBatch(GoogleDataprocBatchSparkRBatch)
//  .sparkSqlBatch(GoogleDataprocBatchSparkSqlBatch)
//  .timeouts(GoogleDataprocBatchTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.batchId">batchId</a></code> | <code>java.lang.String</code> | The ID to use for the batch, which will become the final component of the batch's resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.environmentConfig">environmentConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfig">GoogleDataprocBatchEnvironmentConfig</a></code> | environment_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#id GoogleDataprocBatch#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels to associate with this batch. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location in which the batch will be created in. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#project GoogleDataprocBatch#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.pysparkBatch">pysparkBatch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch">GoogleDataprocBatchPysparkBatch</a></code> | pyspark_batch block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.runtimeConfig">runtimeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig">GoogleDataprocBatchRuntimeConfig</a></code> | runtime_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.sparkBatch">sparkBatch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch">GoogleDataprocBatchSparkBatch</a></code> | spark_batch block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.sparkRBatch">sparkRBatch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch">GoogleDataprocBatchSparkRBatch</a></code> | spark_r_batch block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.sparkSqlBatch">sparkSqlBatch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatch">GoogleDataprocBatchSparkSqlBatch</a></code> | spark_sql_batch block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeouts">GoogleDataprocBatchTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `batchId`<sup>Optional</sup> <a name="batchId" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.batchId"></a>

- *Type:* java.lang.String

The ID to use for the batch, which will become the final component of the batch's resource name.

This value must be 4-63 characters. Valid characters are /[a-z][0-9]-/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#batch_id GoogleDataprocBatch#batch_id}

---

##### `environmentConfig`<sup>Optional</sup> <a name="environmentConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.environmentConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfig">GoogleDataprocBatchEnvironmentConfig</a>

environment_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#environment_config GoogleDataprocBatch#environment_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#id GoogleDataprocBatch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels to associate with this batch.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#labels GoogleDataprocBatch#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location in which the batch will be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#location GoogleDataprocBatch#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#project GoogleDataprocBatch#project}.

---

##### `pysparkBatch`<sup>Optional</sup> <a name="pysparkBatch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.pysparkBatch"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch">GoogleDataprocBatchPysparkBatch</a>

pyspark_batch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#pyspark_batch GoogleDataprocBatch#pyspark_batch}

---

##### `runtimeConfig`<sup>Optional</sup> <a name="runtimeConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.runtimeConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig">GoogleDataprocBatchRuntimeConfig</a>

runtime_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#runtime_config GoogleDataprocBatch#runtime_config}

---

##### `sparkBatch`<sup>Optional</sup> <a name="sparkBatch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.sparkBatch"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch">GoogleDataprocBatchSparkBatch</a>

spark_batch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#spark_batch GoogleDataprocBatch#spark_batch}

---

##### `sparkRBatch`<sup>Optional</sup> <a name="sparkRBatch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.sparkRBatch"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch">GoogleDataprocBatchSparkRBatch</a>

spark_r_batch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#spark_r_batch GoogleDataprocBatch#spark_r_batch}

---

##### `sparkSqlBatch`<sup>Optional</sup> <a name="sparkSqlBatch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.sparkSqlBatch"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatch">GoogleDataprocBatchSparkSqlBatch</a>

spark_sql_batch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#spark_sql_batch GoogleDataprocBatch#spark_sql_batch}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeouts">GoogleDataprocBatchTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#timeouts GoogleDataprocBatch#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putEnvironmentConfig">putEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putPysparkBatch">putPysparkBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putRuntimeConfig">putRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putSparkBatch">putSparkBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putSparkRBatch">putSparkRBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putSparkSqlBatch">putSparkSqlBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetBatchId">resetBatchId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetEnvironmentConfig">resetEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetPysparkBatch">resetPysparkBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetRuntimeConfig">resetRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetSparkBatch">resetSparkBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetSparkRBatch">resetSparkRBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetSparkSqlBatch">resetSparkSqlBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEnvironmentConfig` <a name="putEnvironmentConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putEnvironmentConfig"></a>

```java
public void putEnvironmentConfig(GoogleDataprocBatchEnvironmentConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putEnvironmentConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfig">GoogleDataprocBatchEnvironmentConfig</a>

---

##### `putPysparkBatch` <a name="putPysparkBatch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putPysparkBatch"></a>

```java
public void putPysparkBatch(GoogleDataprocBatchPysparkBatch value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putPysparkBatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch">GoogleDataprocBatchPysparkBatch</a>

---

##### `putRuntimeConfig` <a name="putRuntimeConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putRuntimeConfig"></a>

```java
public void putRuntimeConfig(GoogleDataprocBatchRuntimeConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putRuntimeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig">GoogleDataprocBatchRuntimeConfig</a>

---

##### `putSparkBatch` <a name="putSparkBatch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putSparkBatch"></a>

```java
public void putSparkBatch(GoogleDataprocBatchSparkBatch value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putSparkBatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch">GoogleDataprocBatchSparkBatch</a>

---

##### `putSparkRBatch` <a name="putSparkRBatch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putSparkRBatch"></a>

```java
public void putSparkRBatch(GoogleDataprocBatchSparkRBatch value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putSparkRBatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch">GoogleDataprocBatchSparkRBatch</a>

---

##### `putSparkSqlBatch` <a name="putSparkSqlBatch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putSparkSqlBatch"></a>

```java
public void putSparkSqlBatch(GoogleDataprocBatchSparkSqlBatch value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putSparkSqlBatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatch">GoogleDataprocBatchSparkSqlBatch</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putTimeouts"></a>

```java
public void putTimeouts(GoogleDataprocBatchTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeouts">GoogleDataprocBatchTimeouts</a>

---

##### `resetBatchId` <a name="resetBatchId" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetBatchId"></a>

```java
public void resetBatchId()
```

##### `resetEnvironmentConfig` <a name="resetEnvironmentConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetEnvironmentConfig"></a>

```java
public void resetEnvironmentConfig()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetProject"></a>

```java
public void resetProject()
```

##### `resetPysparkBatch` <a name="resetPysparkBatch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetPysparkBatch"></a>

```java
public void resetPysparkBatch()
```

##### `resetRuntimeConfig` <a name="resetRuntimeConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetRuntimeConfig"></a>

```java
public void resetRuntimeConfig()
```

##### `resetSparkBatch` <a name="resetSparkBatch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetSparkBatch"></a>

```java
public void resetSparkBatch()
```

##### `resetSparkRBatch` <a name="resetSparkRBatch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetSparkRBatch"></a>

```java
public void resetSparkRBatch()
```

##### `resetSparkSqlBatch` <a name="resetSparkSqlBatch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetSparkSqlBatch"></a>

```java
public void resetSparkSqlBatch()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDataprocBatch resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_batch.GoogleDataprocBatch;

GoogleDataprocBatch.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_batch.GoogleDataprocBatch;

GoogleDataprocBatch.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_batch.GoogleDataprocBatch;

GoogleDataprocBatch.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_batch.GoogleDataprocBatch;

GoogleDataprocBatch.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDataprocBatch.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleDataprocBatch resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDataprocBatch to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDataprocBatch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataprocBatch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.creator">creator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.environmentConfig">environmentConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference">GoogleDataprocBatchEnvironmentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.operation">operation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.pysparkBatch">pysparkBatch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference">GoogleDataprocBatchPysparkBatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.runtimeConfig">runtimeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference">GoogleDataprocBatchRuntimeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.runtimeInfo">runtimeInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList">GoogleDataprocBatchRuntimeInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.sparkBatch">sparkBatch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference">GoogleDataprocBatchSparkBatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.sparkRBatch">sparkRBatch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference">GoogleDataprocBatchSparkRBatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.sparkSqlBatch">sparkSqlBatch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference">GoogleDataprocBatchSparkSqlBatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.stateHistory">stateHistory</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList">GoogleDataprocBatchStateHistoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.stateMessage">stateMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.stateTime">stateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference">GoogleDataprocBatchTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.uuid">uuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.batchIdInput">batchIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.environmentConfigInput">environmentConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfig">GoogleDataprocBatchEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.pysparkBatchInput">pysparkBatchInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch">GoogleDataprocBatchPysparkBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.runtimeConfigInput">runtimeConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig">GoogleDataprocBatchRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.sparkBatchInput">sparkBatchInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch">GoogleDataprocBatchSparkBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.sparkRBatchInput">sparkRBatchInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch">GoogleDataprocBatchSparkRBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.sparkSqlBatchInput">sparkSqlBatchInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatch">GoogleDataprocBatchSparkSqlBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeouts">GoogleDataprocBatchTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.batchId">batchId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.creator"></a>

```java
public java.lang.String getCreator();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `environmentConfig`<sup>Required</sup> <a name="environmentConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.environmentConfig"></a>

```java
public GoogleDataprocBatchEnvironmentConfigOutputReference getEnvironmentConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference">GoogleDataprocBatchEnvironmentConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.operation"></a>

```java
public java.lang.String getOperation();
```

- *Type:* java.lang.String

---

##### `pysparkBatch`<sup>Required</sup> <a name="pysparkBatch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.pysparkBatch"></a>

```java
public GoogleDataprocBatchPysparkBatchOutputReference getPysparkBatch();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference">GoogleDataprocBatchPysparkBatchOutputReference</a>

---

##### `runtimeConfig`<sup>Required</sup> <a name="runtimeConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.runtimeConfig"></a>

```java
public GoogleDataprocBatchRuntimeConfigOutputReference getRuntimeConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference">GoogleDataprocBatchRuntimeConfigOutputReference</a>

---

##### `runtimeInfo`<sup>Required</sup> <a name="runtimeInfo" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.runtimeInfo"></a>

```java
public GoogleDataprocBatchRuntimeInfoList getRuntimeInfo();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList">GoogleDataprocBatchRuntimeInfoList</a>

---

##### `sparkBatch`<sup>Required</sup> <a name="sparkBatch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.sparkBatch"></a>

```java
public GoogleDataprocBatchSparkBatchOutputReference getSparkBatch();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference">GoogleDataprocBatchSparkBatchOutputReference</a>

---

##### `sparkRBatch`<sup>Required</sup> <a name="sparkRBatch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.sparkRBatch"></a>

```java
public GoogleDataprocBatchSparkRBatchOutputReference getSparkRBatch();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference">GoogleDataprocBatchSparkRBatchOutputReference</a>

---

##### `sparkSqlBatch`<sup>Required</sup> <a name="sparkSqlBatch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.sparkSqlBatch"></a>

```java
public GoogleDataprocBatchSparkSqlBatchOutputReference getSparkSqlBatch();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference">GoogleDataprocBatchSparkSqlBatchOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateHistory`<sup>Required</sup> <a name="stateHistory" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.stateHistory"></a>

```java
public GoogleDataprocBatchStateHistoryList getStateHistory();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList">GoogleDataprocBatchStateHistoryList</a>

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.stateMessage"></a>

```java
public java.lang.String getStateMessage();
```

- *Type:* java.lang.String

---

##### `stateTime`<sup>Required</sup> <a name="stateTime" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.stateTime"></a>

```java
public java.lang.String getStateTime();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.timeouts"></a>

```java
public GoogleDataprocBatchTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference">GoogleDataprocBatchTimeoutsOutputReference</a>

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

---

##### `batchIdInput`<sup>Optional</sup> <a name="batchIdInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.batchIdInput"></a>

```java
public java.lang.String getBatchIdInput();
```

- *Type:* java.lang.String

---

##### `environmentConfigInput`<sup>Optional</sup> <a name="environmentConfigInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.environmentConfigInput"></a>

```java
public GoogleDataprocBatchEnvironmentConfig getEnvironmentConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfig">GoogleDataprocBatchEnvironmentConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `pysparkBatchInput`<sup>Optional</sup> <a name="pysparkBatchInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.pysparkBatchInput"></a>

```java
public GoogleDataprocBatchPysparkBatch getPysparkBatchInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch">GoogleDataprocBatchPysparkBatch</a>

---

##### `runtimeConfigInput`<sup>Optional</sup> <a name="runtimeConfigInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.runtimeConfigInput"></a>

```java
public GoogleDataprocBatchRuntimeConfig getRuntimeConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig">GoogleDataprocBatchRuntimeConfig</a>

---

##### `sparkBatchInput`<sup>Optional</sup> <a name="sparkBatchInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.sparkBatchInput"></a>

```java
public GoogleDataprocBatchSparkBatch getSparkBatchInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch">GoogleDataprocBatchSparkBatch</a>

---

##### `sparkRBatchInput`<sup>Optional</sup> <a name="sparkRBatchInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.sparkRBatchInput"></a>

```java
public GoogleDataprocBatchSparkRBatch getSparkRBatchInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch">GoogleDataprocBatchSparkRBatch</a>

---

##### `sparkSqlBatchInput`<sup>Optional</sup> <a name="sparkSqlBatchInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.sparkSqlBatchInput"></a>

```java
public GoogleDataprocBatchSparkSqlBatch getSparkSqlBatchInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatch">GoogleDataprocBatchSparkSqlBatch</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeouts">GoogleDataprocBatchTimeouts</a>

---

##### `batchId`<sup>Required</sup> <a name="batchId" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.batchId"></a>

```java
public java.lang.String getBatchId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatch.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataprocBatchConfig <a name="GoogleDataprocBatchConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_batch.GoogleDataprocBatchConfig;

GoogleDataprocBatchConfig.builder()
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
//  .batchId(java.lang.String)
//  .environmentConfig(GoogleDataprocBatchEnvironmentConfig)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .pysparkBatch(GoogleDataprocBatchPysparkBatch)
//  .runtimeConfig(GoogleDataprocBatchRuntimeConfig)
//  .sparkBatch(GoogleDataprocBatchSparkBatch)
//  .sparkRBatch(GoogleDataprocBatchSparkRBatch)
//  .sparkSqlBatch(GoogleDataprocBatchSparkSqlBatch)
//  .timeouts(GoogleDataprocBatchTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.batchId">batchId</a></code> | <code>java.lang.String</code> | The ID to use for the batch, which will become the final component of the batch's resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.environmentConfig">environmentConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfig">GoogleDataprocBatchEnvironmentConfig</a></code> | environment_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#id GoogleDataprocBatch#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels to associate with this batch. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location in which the batch will be created in. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#project GoogleDataprocBatch#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.pysparkBatch">pysparkBatch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch">GoogleDataprocBatchPysparkBatch</a></code> | pyspark_batch block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.runtimeConfig">runtimeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig">GoogleDataprocBatchRuntimeConfig</a></code> | runtime_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.sparkBatch">sparkBatch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch">GoogleDataprocBatchSparkBatch</a></code> | spark_batch block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.sparkRBatch">sparkRBatch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch">GoogleDataprocBatchSparkRBatch</a></code> | spark_r_batch block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.sparkSqlBatch">sparkSqlBatch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatch">GoogleDataprocBatchSparkSqlBatch</a></code> | spark_sql_batch block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeouts">GoogleDataprocBatchTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `batchId`<sup>Optional</sup> <a name="batchId" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.batchId"></a>

```java
public java.lang.String getBatchId();
```

- *Type:* java.lang.String

The ID to use for the batch, which will become the final component of the batch's resource name.

This value must be 4-63 characters. Valid characters are /[a-z][0-9]-/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#batch_id GoogleDataprocBatch#batch_id}

---

##### `environmentConfig`<sup>Optional</sup> <a name="environmentConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.environmentConfig"></a>

```java
public GoogleDataprocBatchEnvironmentConfig getEnvironmentConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfig">GoogleDataprocBatchEnvironmentConfig</a>

environment_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#environment_config GoogleDataprocBatch#environment_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#id GoogleDataprocBatch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels to associate with this batch.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#labels GoogleDataprocBatch#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location in which the batch will be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#location GoogleDataprocBatch#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#project GoogleDataprocBatch#project}.

---

##### `pysparkBatch`<sup>Optional</sup> <a name="pysparkBatch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.pysparkBatch"></a>

```java
public GoogleDataprocBatchPysparkBatch getPysparkBatch();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch">GoogleDataprocBatchPysparkBatch</a>

pyspark_batch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#pyspark_batch GoogleDataprocBatch#pyspark_batch}

---

##### `runtimeConfig`<sup>Optional</sup> <a name="runtimeConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.runtimeConfig"></a>

```java
public GoogleDataprocBatchRuntimeConfig getRuntimeConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig">GoogleDataprocBatchRuntimeConfig</a>

runtime_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#runtime_config GoogleDataprocBatch#runtime_config}

---

##### `sparkBatch`<sup>Optional</sup> <a name="sparkBatch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.sparkBatch"></a>

```java
public GoogleDataprocBatchSparkBatch getSparkBatch();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch">GoogleDataprocBatchSparkBatch</a>

spark_batch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#spark_batch GoogleDataprocBatch#spark_batch}

---

##### `sparkRBatch`<sup>Optional</sup> <a name="sparkRBatch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.sparkRBatch"></a>

```java
public GoogleDataprocBatchSparkRBatch getSparkRBatch();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch">GoogleDataprocBatchSparkRBatch</a>

spark_r_batch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#spark_r_batch GoogleDataprocBatch#spark_r_batch}

---

##### `sparkSqlBatch`<sup>Optional</sup> <a name="sparkSqlBatch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.sparkSqlBatch"></a>

```java
public GoogleDataprocBatchSparkSqlBatch getSparkSqlBatch();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatch">GoogleDataprocBatchSparkSqlBatch</a>

spark_sql_batch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#spark_sql_batch GoogleDataprocBatch#spark_sql_batch}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchConfig.property.timeouts"></a>

```java
public GoogleDataprocBatchTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeouts">GoogleDataprocBatchTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#timeouts GoogleDataprocBatch#timeouts}

---

### GoogleDataprocBatchEnvironmentConfig <a name="GoogleDataprocBatchEnvironmentConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_batch.GoogleDataprocBatchEnvironmentConfig;

GoogleDataprocBatchEnvironmentConfig.builder()
//  .executionConfig(GoogleDataprocBatchEnvironmentConfigExecutionConfig)
//  .peripheralsConfig(GoogleDataprocBatchEnvironmentConfigPeripheralsConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfig.property.executionConfig">executionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig">GoogleDataprocBatchEnvironmentConfigExecutionConfig</a></code> | execution_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfig.property.peripheralsConfig">peripheralsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfig">GoogleDataprocBatchEnvironmentConfigPeripheralsConfig</a></code> | peripherals_config block. |

---

##### `executionConfig`<sup>Optional</sup> <a name="executionConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfig.property.executionConfig"></a>

```java
public GoogleDataprocBatchEnvironmentConfigExecutionConfig getExecutionConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig">GoogleDataprocBatchEnvironmentConfigExecutionConfig</a>

execution_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#execution_config GoogleDataprocBatch#execution_config}

---

##### `peripheralsConfig`<sup>Optional</sup> <a name="peripheralsConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfig.property.peripheralsConfig"></a>

```java
public GoogleDataprocBatchEnvironmentConfigPeripheralsConfig getPeripheralsConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfig">GoogleDataprocBatchEnvironmentConfigPeripheralsConfig</a>

peripherals_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#peripherals_config GoogleDataprocBatch#peripherals_config}

---

### GoogleDataprocBatchEnvironmentConfigExecutionConfig <a name="GoogleDataprocBatchEnvironmentConfigExecutionConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_batch.GoogleDataprocBatchEnvironmentConfigExecutionConfig;

GoogleDataprocBatchEnvironmentConfigExecutionConfig.builder()
//  .kmsKey(java.lang.String)
//  .networkTags(java.util.List<java.lang.String>)
//  .networkUri(java.lang.String)
//  .serviceAccount(java.lang.String)
//  .stagingBucket(java.lang.String)
//  .subnetworkUri(java.lang.String)
//  .ttl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | The Cloud KMS key to use for encryption. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig.property.networkTags">networkTags</a></code> | <code>java.util.List<java.lang.String></code> | Tags used for network traffic control. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig.property.networkUri">networkUri</a></code> | <code>java.lang.String</code> | Network configuration for workload execution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | Service account that used to execute workload. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig.property.stagingBucket">stagingBucket</a></code> | <code>java.lang.String</code> | A Cloud Storage bucket used to stage workload dependencies, config files, and store workload output and other ephemeral data, such as Spark history files. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig.property.subnetworkUri">subnetworkUri</a></code> | <code>java.lang.String</code> | Subnetwork configuration for workload execution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig.property.ttl">ttl</a></code> | <code>java.lang.String</code> | The duration after which the workload will be terminated. |

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

The Cloud KMS key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#kms_key GoogleDataprocBatch#kms_key}

---

##### `networkTags`<sup>Optional</sup> <a name="networkTags" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig.property.networkTags"></a>

```java
public java.util.List<java.lang.String> getNetworkTags();
```

- *Type:* java.util.List<java.lang.String>

Tags used for network traffic control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#network_tags GoogleDataprocBatch#network_tags}

---

##### `networkUri`<sup>Optional</sup> <a name="networkUri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig.property.networkUri"></a>

```java
public java.lang.String getNetworkUri();
```

- *Type:* java.lang.String

Network configuration for workload execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#network_uri GoogleDataprocBatch#network_uri}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

Service account that used to execute workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#service_account GoogleDataprocBatch#service_account}

---

##### `stagingBucket`<sup>Optional</sup> <a name="stagingBucket" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig.property.stagingBucket"></a>

```java
public java.lang.String getStagingBucket();
```

- *Type:* java.lang.String

A Cloud Storage bucket used to stage workload dependencies, config files, and store workload output and other ephemeral data, such as Spark history files.

If you do not specify a staging bucket,
Cloud Dataproc will determine a Cloud Storage location according to the region where your workload is running,
and then create and manage project-level, per-location staging and temporary buckets.
This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#staging_bucket GoogleDataprocBatch#staging_bucket}

---

##### `subnetworkUri`<sup>Optional</sup> <a name="subnetworkUri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig.property.subnetworkUri"></a>

```java
public java.lang.String getSubnetworkUri();
```

- *Type:* java.lang.String

Subnetwork configuration for workload execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#subnetwork_uri GoogleDataprocBatch#subnetwork_uri}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

The duration after which the workload will be terminated.

When the workload exceeds this duration, it will be unconditionally terminated without waiting for ongoing
work to finish. If ttl is not specified for a batch workload, the workload will be allowed to run until it
exits naturally (or run forever without exiting). If ttl is not specified for an interactive session,
it defaults to 24 hours. If ttl is not specified for a batch that uses 2.1+ runtime version, it defaults to 4 hours.
Minimum value is 10 minutes; maximum value is 14 days. If both ttl and idleTtl are specified (for an interactive session),
the conditions are treated as OR conditions: the workload will be terminated when it has been idle for idleTtl or
when ttl has been exceeded, whichever occurs first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#ttl GoogleDataprocBatch#ttl}

---

### GoogleDataprocBatchEnvironmentConfigPeripheralsConfig <a name="GoogleDataprocBatchEnvironmentConfigPeripheralsConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_batch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfig;

GoogleDataprocBatchEnvironmentConfigPeripheralsConfig.builder()
//  .metastoreService(java.lang.String)
//  .sparkHistoryServerConfig(GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfig.property.metastoreService">metastoreService</a></code> | <code>java.lang.String</code> | Resource name of an existing Dataproc Metastore service. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfig.property.sparkHistoryServerConfig">sparkHistoryServerConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a></code> | spark_history_server_config block. |

---

##### `metastoreService`<sup>Optional</sup> <a name="metastoreService" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfig.property.metastoreService"></a>

```java
public java.lang.String getMetastoreService();
```

- *Type:* java.lang.String

Resource name of an existing Dataproc Metastore service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#metastore_service GoogleDataprocBatch#metastore_service}

---

##### `sparkHistoryServerConfig`<sup>Optional</sup> <a name="sparkHistoryServerConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfig.property.sparkHistoryServerConfig"></a>

```java
public GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig getSparkHistoryServerConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a>

spark_history_server_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#spark_history_server_config GoogleDataprocBatch#spark_history_server_config}

---

### GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig <a name="GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_batch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig;

GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig.builder()
//  .dataprocCluster(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig.property.dataprocCluster">dataprocCluster</a></code> | <code>java.lang.String</code> | Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload. |

---

##### `dataprocCluster`<sup>Optional</sup> <a name="dataprocCluster" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig.property.dataprocCluster"></a>

```java
public java.lang.String getDataprocCluster();
```

- *Type:* java.lang.String

Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#dataproc_cluster GoogleDataprocBatch#dataproc_cluster}

---

### GoogleDataprocBatchPysparkBatch <a name="GoogleDataprocBatchPysparkBatch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_batch.GoogleDataprocBatchPysparkBatch;

GoogleDataprocBatchPysparkBatch.builder()
//  .archiveUris(java.util.List<java.lang.String>)
//  .args(java.util.List<java.lang.String>)
//  .fileUris(java.util.List<java.lang.String>)
//  .jarFileUris(java.util.List<java.lang.String>)
//  .mainPythonFileUri(java.lang.String)
//  .pythonFileUris(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch.property.archiveUris">archiveUris</a></code> | <code>java.util.List<java.lang.String></code> | HCFS URIs of archives to be extracted into the working directory of each executor. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | The arguments to pass to the driver. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch.property.fileUris">fileUris</a></code> | <code>java.util.List<java.lang.String></code> | HCFS URIs of files to be placed in the working directory of each executor. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch.property.jarFileUris">jarFileUris</a></code> | <code>java.util.List<java.lang.String></code> | HCFS URIs of jar files to add to the classpath of the Spark driver and tasks. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch.property.mainPythonFileUri">mainPythonFileUri</a></code> | <code>java.lang.String</code> | The HCFS URI of the main Python file to use as the Spark driver. Must be a .py file. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch.property.pythonFileUris">pythonFileUris</a></code> | <code>java.util.List<java.lang.String></code> | HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip. |

---

##### `archiveUris`<sup>Optional</sup> <a name="archiveUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch.property.archiveUris"></a>

```java
public java.util.List<java.lang.String> getArchiveUris();
```

- *Type:* java.util.List<java.lang.String>

HCFS URIs of archives to be extracted into the working directory of each executor.

Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#archive_uris GoogleDataprocBatch#archive_uris}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

The arguments to pass to the driver.

Do not include arguments that can be set as batch
properties, such as --conf, since a collision can occur that causes an incorrect batch submission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#args GoogleDataprocBatch#args}

---

##### `fileUris`<sup>Optional</sup> <a name="fileUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch.property.fileUris"></a>

```java
public java.util.List<java.lang.String> getFileUris();
```

- *Type:* java.util.List<java.lang.String>

HCFS URIs of files to be placed in the working directory of each executor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#file_uris GoogleDataprocBatch#file_uris}

---

##### `jarFileUris`<sup>Optional</sup> <a name="jarFileUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch.property.jarFileUris"></a>

```java
public java.util.List<java.lang.String> getJarFileUris();
```

- *Type:* java.util.List<java.lang.String>

HCFS URIs of jar files to add to the classpath of the Spark driver and tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#jar_file_uris GoogleDataprocBatch#jar_file_uris}

---

##### `mainPythonFileUri`<sup>Optional</sup> <a name="mainPythonFileUri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch.property.mainPythonFileUri"></a>

```java
public java.lang.String getMainPythonFileUri();
```

- *Type:* java.lang.String

The HCFS URI of the main Python file to use as the Spark driver. Must be a .py file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#main_python_file_uri GoogleDataprocBatch#main_python_file_uri}

---

##### `pythonFileUris`<sup>Optional</sup> <a name="pythonFileUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch.property.pythonFileUris"></a>

```java
public java.util.List<java.lang.String> getPythonFileUris();
```

- *Type:* java.util.List<java.lang.String>

HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#python_file_uris GoogleDataprocBatch#python_file_uris}

---

### GoogleDataprocBatchRuntimeConfig <a name="GoogleDataprocBatchRuntimeConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_batch.GoogleDataprocBatchRuntimeConfig;

GoogleDataprocBatchRuntimeConfig.builder()
//  .autotuningConfig(GoogleDataprocBatchRuntimeConfigAutotuningConfig)
//  .cohort(java.lang.String)
//  .containerImage(java.lang.String)
//  .properties(java.util.Map<java.lang.String, java.lang.String>)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig.property.autotuningConfig">autotuningConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfig">GoogleDataprocBatchRuntimeConfigAutotuningConfig</a></code> | autotuning_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig.property.cohort">cohort</a></code> | <code>java.lang.String</code> | Optional. Cohort identifier. Identifies families of the workloads having the same shape, e.g. daily ETL jobs. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig.property.containerImage">containerImage</a></code> | <code>java.lang.String</code> | Optional custom container image for the job runtime environment. If not specified, a default container image will be used. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A mapping of property names to values, which are used to configure workload execution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig.property.version">version</a></code> | <code>java.lang.String</code> | Version of the batch runtime. |

---

##### `autotuningConfig`<sup>Optional</sup> <a name="autotuningConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig.property.autotuningConfig"></a>

```java
public GoogleDataprocBatchRuntimeConfigAutotuningConfig getAutotuningConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfig">GoogleDataprocBatchRuntimeConfigAutotuningConfig</a>

autotuning_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#autotuning_config GoogleDataprocBatch#autotuning_config}

---

##### `cohort`<sup>Optional</sup> <a name="cohort" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig.property.cohort"></a>

```java
public java.lang.String getCohort();
```

- *Type:* java.lang.String

Optional. Cohort identifier. Identifies families of the workloads having the same shape, e.g. daily ETL jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#cohort GoogleDataprocBatch#cohort}

---

##### `containerImage`<sup>Optional</sup> <a name="containerImage" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig.property.containerImage"></a>

```java
public java.lang.String getContainerImage();
```

- *Type:* java.lang.String

Optional custom container image for the job runtime environment. If not specified, a default container image will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#container_image GoogleDataprocBatch#container_image}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A mapping of property names to values, which are used to configure workload execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#properties GoogleDataprocBatch#properties}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Version of the batch runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#version GoogleDataprocBatch#version}

---

### GoogleDataprocBatchRuntimeConfigAutotuningConfig <a name="GoogleDataprocBatchRuntimeConfigAutotuningConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_batch.GoogleDataprocBatchRuntimeConfigAutotuningConfig;

GoogleDataprocBatchRuntimeConfigAutotuningConfig.builder()
//  .scenarios(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfig.property.scenarios">scenarios</a></code> | <code>java.util.List<java.lang.String></code> | Optional. Scenarios for which tunings are applied. Possible values: ["SCALING", "BROADCAST_HASH_JOIN", "MEMORY"]. |

---

##### `scenarios`<sup>Optional</sup> <a name="scenarios" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfig.property.scenarios"></a>

```java
public java.util.List<java.lang.String> getScenarios();
```

- *Type:* java.util.List<java.lang.String>

Optional. Scenarios for which tunings are applied. Possible values: ["SCALING", "BROADCAST_HASH_JOIN", "MEMORY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#scenarios GoogleDataprocBatch#scenarios}

---

### GoogleDataprocBatchRuntimeInfo <a name="GoogleDataprocBatchRuntimeInfo" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_batch.GoogleDataprocBatchRuntimeInfo;

GoogleDataprocBatchRuntimeInfo.builder()
    .build();
```


### GoogleDataprocBatchRuntimeInfoApproximateUsage <a name="GoogleDataprocBatchRuntimeInfoApproximateUsage" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_batch.GoogleDataprocBatchRuntimeInfoApproximateUsage;

GoogleDataprocBatchRuntimeInfoApproximateUsage.builder()
    .build();
```


### GoogleDataprocBatchRuntimeInfoCurrentUsage <a name="GoogleDataprocBatchRuntimeInfoCurrentUsage" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_batch.GoogleDataprocBatchRuntimeInfoCurrentUsage;

GoogleDataprocBatchRuntimeInfoCurrentUsage.builder()
    .build();
```


### GoogleDataprocBatchSparkBatch <a name="GoogleDataprocBatchSparkBatch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_batch.GoogleDataprocBatchSparkBatch;

GoogleDataprocBatchSparkBatch.builder()
//  .archiveUris(java.util.List<java.lang.String>)
//  .args(java.util.List<java.lang.String>)
//  .fileUris(java.util.List<java.lang.String>)
//  .jarFileUris(java.util.List<java.lang.String>)
//  .mainClass(java.lang.String)
//  .mainJarFileUri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch.property.archiveUris">archiveUris</a></code> | <code>java.util.List<java.lang.String></code> | HCFS URIs of archives to be extracted into the working directory of each executor. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | The arguments to pass to the driver. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch.property.fileUris">fileUris</a></code> | <code>java.util.List<java.lang.String></code> | HCFS URIs of files to be placed in the working directory of each executor. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch.property.jarFileUris">jarFileUris</a></code> | <code>java.util.List<java.lang.String></code> | HCFS URIs of jar files to add to the classpath of the Spark driver and tasks. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch.property.mainClass">mainClass</a></code> | <code>java.lang.String</code> | The name of the driver main class. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch.property.mainJarFileUri">mainJarFileUri</a></code> | <code>java.lang.String</code> | The HCFS URI of the jar file that contains the main class. |

---

##### `archiveUris`<sup>Optional</sup> <a name="archiveUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch.property.archiveUris"></a>

```java
public java.util.List<java.lang.String> getArchiveUris();
```

- *Type:* java.util.List<java.lang.String>

HCFS URIs of archives to be extracted into the working directory of each executor.

Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#archive_uris GoogleDataprocBatch#archive_uris}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

The arguments to pass to the driver.

Do not include arguments that can be set as batch
properties, such as --conf, since a collision can occur that causes an incorrect batch submission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#args GoogleDataprocBatch#args}

---

##### `fileUris`<sup>Optional</sup> <a name="fileUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch.property.fileUris"></a>

```java
public java.util.List<java.lang.String> getFileUris();
```

- *Type:* java.util.List<java.lang.String>

HCFS URIs of files to be placed in the working directory of each executor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#file_uris GoogleDataprocBatch#file_uris}

---

##### `jarFileUris`<sup>Optional</sup> <a name="jarFileUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch.property.jarFileUris"></a>

```java
public java.util.List<java.lang.String> getJarFileUris();
```

- *Type:* java.util.List<java.lang.String>

HCFS URIs of jar files to add to the classpath of the Spark driver and tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#jar_file_uris GoogleDataprocBatch#jar_file_uris}

---

##### `mainClass`<sup>Optional</sup> <a name="mainClass" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch.property.mainClass"></a>

```java
public java.lang.String getMainClass();
```

- *Type:* java.lang.String

The name of the driver main class.

The jar file that contains the class must be in the
classpath or specified in jarFileUris.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#main_class GoogleDataprocBatch#main_class}

---

##### `mainJarFileUri`<sup>Optional</sup> <a name="mainJarFileUri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch.property.mainJarFileUri"></a>

```java
public java.lang.String getMainJarFileUri();
```

- *Type:* java.lang.String

The HCFS URI of the jar file that contains the main class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#main_jar_file_uri GoogleDataprocBatch#main_jar_file_uri}

---

### GoogleDataprocBatchSparkRBatch <a name="GoogleDataprocBatchSparkRBatch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_batch.GoogleDataprocBatchSparkRBatch;

GoogleDataprocBatchSparkRBatch.builder()
//  .archiveUris(java.util.List<java.lang.String>)
//  .args(java.util.List<java.lang.String>)
//  .fileUris(java.util.List<java.lang.String>)
//  .mainRFileUri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch.property.archiveUris">archiveUris</a></code> | <code>java.util.List<java.lang.String></code> | HCFS URIs of archives to be extracted into the working directory of each executor. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | The arguments to pass to the driver. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch.property.fileUris">fileUris</a></code> | <code>java.util.List<java.lang.String></code> | HCFS URIs of files to be placed in the working directory of each executor. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch.property.mainRFileUri">mainRFileUri</a></code> | <code>java.lang.String</code> | The HCFS URI of the main R file to use as the driver. |

---

##### `archiveUris`<sup>Optional</sup> <a name="archiveUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch.property.archiveUris"></a>

```java
public java.util.List<java.lang.String> getArchiveUris();
```

- *Type:* java.util.List<java.lang.String>

HCFS URIs of archives to be extracted into the working directory of each executor.

Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#archive_uris GoogleDataprocBatch#archive_uris}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

The arguments to pass to the driver.

Do not include arguments that can be set as batch
properties, such as --conf, since a collision can occur that causes an incorrect batch submission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#args GoogleDataprocBatch#args}

---

##### `fileUris`<sup>Optional</sup> <a name="fileUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch.property.fileUris"></a>

```java
public java.util.List<java.lang.String> getFileUris();
```

- *Type:* java.util.List<java.lang.String>

HCFS URIs of files to be placed in the working directory of each executor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#file_uris GoogleDataprocBatch#file_uris}

---

##### `mainRFileUri`<sup>Optional</sup> <a name="mainRFileUri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch.property.mainRFileUri"></a>

```java
public java.lang.String getMainRFileUri();
```

- *Type:* java.lang.String

The HCFS URI of the main R file to use as the driver.

Must be a .R or .r file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#main_r_file_uri GoogleDataprocBatch#main_r_file_uri}

---

### GoogleDataprocBatchSparkSqlBatch <a name="GoogleDataprocBatchSparkSqlBatch" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatch.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_batch.GoogleDataprocBatchSparkSqlBatch;

GoogleDataprocBatchSparkSqlBatch.builder()
//  .jarFileUris(java.util.List<java.lang.String>)
//  .queryFileUri(java.lang.String)
//  .queryVariables(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatch.property.jarFileUris">jarFileUris</a></code> | <code>java.util.List<java.lang.String></code> | HCFS URIs of jar files to be added to the Spark CLASSPATH. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatch.property.queryFileUri">queryFileUri</a></code> | <code>java.lang.String</code> | The HCFS URI of the script that contains Spark SQL queries to execute. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatch.property.queryVariables">queryVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";). |

---

##### `jarFileUris`<sup>Optional</sup> <a name="jarFileUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatch.property.jarFileUris"></a>

```java
public java.util.List<java.lang.String> getJarFileUris();
```

- *Type:* java.util.List<java.lang.String>

HCFS URIs of jar files to be added to the Spark CLASSPATH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#jar_file_uris GoogleDataprocBatch#jar_file_uris}

---

##### `queryFileUri`<sup>Optional</sup> <a name="queryFileUri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatch.property.queryFileUri"></a>

```java
public java.lang.String getQueryFileUri();
```

- *Type:* java.lang.String

The HCFS URI of the script that contains Spark SQL queries to execute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#query_file_uri GoogleDataprocBatch#query_file_uri}

---

##### `queryVariables`<sup>Optional</sup> <a name="queryVariables" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatch.property.queryVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getQueryVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#query_variables GoogleDataprocBatch#query_variables}

---

### GoogleDataprocBatchStateHistory <a name="GoogleDataprocBatchStateHistory" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistory.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_batch.GoogleDataprocBatchStateHistory;

GoogleDataprocBatchStateHistory.builder()
    .build();
```


### GoogleDataprocBatchTimeouts <a name="GoogleDataprocBatchTimeouts" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_batch.GoogleDataprocBatchTimeouts;

GoogleDataprocBatchTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#create GoogleDataprocBatch#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#delete GoogleDataprocBatch#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#update GoogleDataprocBatch#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#create GoogleDataprocBatch#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#delete GoogleDataprocBatch#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataproc_batch#update GoogleDataprocBatch#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference <a name="GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_batch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference;

new GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetNetworkTags">resetNetworkTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetNetworkUri">resetNetworkUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetStagingBucket">resetStagingBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetSubnetworkUri">resetSubnetworkUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetKmsKey"></a>

```java
public void resetKmsKey()
```

##### `resetNetworkTags` <a name="resetNetworkTags" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetNetworkTags"></a>

```java
public void resetNetworkTags()
```

##### `resetNetworkUri` <a name="resetNetworkUri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetNetworkUri"></a>

```java
public void resetNetworkUri()
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetServiceAccount"></a>

```java
public void resetServiceAccount()
```

##### `resetStagingBucket` <a name="resetStagingBucket" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetStagingBucket"></a>

```java
public void resetStagingBucket()
```

##### `resetSubnetworkUri` <a name="resetSubnetworkUri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetSubnetworkUri"></a>

```java
public void resetSubnetworkUri()
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetTtl"></a>

```java
public void resetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.networkTagsInput">networkTagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.networkUriInput">networkUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.stagingBucketInput">stagingBucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.subnetworkUriInput">subnetworkUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.ttlInput">ttlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.networkTags">networkTags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.networkUri">networkUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.stagingBucket">stagingBucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.subnetworkUri">subnetworkUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.ttl">ttl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig">GoogleDataprocBatchEnvironmentConfigExecutionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.kmsKeyInput"></a>

```java
public java.lang.String getKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `networkTagsInput`<sup>Optional</sup> <a name="networkTagsInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.networkTagsInput"></a>

```java
public java.util.List<java.lang.String> getNetworkTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `networkUriInput`<sup>Optional</sup> <a name="networkUriInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.networkUriInput"></a>

```java
public java.lang.String getNetworkUriInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.serviceAccountInput"></a>

```java
public java.lang.String getServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `stagingBucketInput`<sup>Optional</sup> <a name="stagingBucketInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.stagingBucketInput"></a>

```java
public java.lang.String getStagingBucketInput();
```

- *Type:* java.lang.String

---

##### `subnetworkUriInput`<sup>Optional</sup> <a name="subnetworkUriInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.subnetworkUriInput"></a>

```java
public java.lang.String getSubnetworkUriInput();
```

- *Type:* java.lang.String

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.ttlInput"></a>

```java
public java.lang.String getTtlInput();
```

- *Type:* java.lang.String

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `networkTags`<sup>Required</sup> <a name="networkTags" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.networkTags"></a>

```java
public java.util.List<java.lang.String> getNetworkTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `networkUri`<sup>Required</sup> <a name="networkUri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.networkUri"></a>

```java
public java.lang.String getNetworkUri();
```

- *Type:* java.lang.String

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

##### `stagingBucket`<sup>Required</sup> <a name="stagingBucket" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.stagingBucket"></a>

```java
public java.lang.String getStagingBucket();
```

- *Type:* java.lang.String

---

##### `subnetworkUri`<sup>Required</sup> <a name="subnetworkUri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.subnetworkUri"></a>

```java
public java.lang.String getSubnetworkUri();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.internalValue"></a>

```java
public GoogleDataprocBatchEnvironmentConfigExecutionConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig">GoogleDataprocBatchEnvironmentConfigExecutionConfig</a>

---


### GoogleDataprocBatchEnvironmentConfigOutputReference <a name="GoogleDataprocBatchEnvironmentConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_batch.GoogleDataprocBatchEnvironmentConfigOutputReference;

new GoogleDataprocBatchEnvironmentConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.putExecutionConfig">putExecutionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.putPeripheralsConfig">putPeripheralsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.resetExecutionConfig">resetExecutionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.resetPeripheralsConfig">resetPeripheralsConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExecutionConfig` <a name="putExecutionConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.putExecutionConfig"></a>

```java
public void putExecutionConfig(GoogleDataprocBatchEnvironmentConfigExecutionConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.putExecutionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig">GoogleDataprocBatchEnvironmentConfigExecutionConfig</a>

---

##### `putPeripheralsConfig` <a name="putPeripheralsConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.putPeripheralsConfig"></a>

```java
public void putPeripheralsConfig(GoogleDataprocBatchEnvironmentConfigPeripheralsConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.putPeripheralsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfig">GoogleDataprocBatchEnvironmentConfigPeripheralsConfig</a>

---

##### `resetExecutionConfig` <a name="resetExecutionConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.resetExecutionConfig"></a>

```java
public void resetExecutionConfig()
```

##### `resetPeripheralsConfig` <a name="resetPeripheralsConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.resetPeripheralsConfig"></a>

```java
public void resetPeripheralsConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.property.executionConfig">executionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference">GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.property.peripheralsConfig">peripheralsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference">GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.property.executionConfigInput">executionConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig">GoogleDataprocBatchEnvironmentConfigExecutionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.property.peripheralsConfigInput">peripheralsConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfig">GoogleDataprocBatchEnvironmentConfigPeripheralsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfig">GoogleDataprocBatchEnvironmentConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `executionConfig`<sup>Required</sup> <a name="executionConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.property.executionConfig"></a>

```java
public GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference getExecutionConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference">GoogleDataprocBatchEnvironmentConfigExecutionConfigOutputReference</a>

---

##### `peripheralsConfig`<sup>Required</sup> <a name="peripheralsConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.property.peripheralsConfig"></a>

```java
public GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference getPeripheralsConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference">GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference</a>

---

##### `executionConfigInput`<sup>Optional</sup> <a name="executionConfigInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.property.executionConfigInput"></a>

```java
public GoogleDataprocBatchEnvironmentConfigExecutionConfig getExecutionConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigExecutionConfig">GoogleDataprocBatchEnvironmentConfigExecutionConfig</a>

---

##### `peripheralsConfigInput`<sup>Optional</sup> <a name="peripheralsConfigInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.property.peripheralsConfigInput"></a>

```java
public GoogleDataprocBatchEnvironmentConfigPeripheralsConfig getPeripheralsConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfig">GoogleDataprocBatchEnvironmentConfigPeripheralsConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigOutputReference.property.internalValue"></a>

```java
public GoogleDataprocBatchEnvironmentConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfig">GoogleDataprocBatchEnvironmentConfig</a>

---


### GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference <a name="GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_batch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference;

new GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.putSparkHistoryServerConfig">putSparkHistoryServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.resetMetastoreService">resetMetastoreService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.resetSparkHistoryServerConfig">resetSparkHistoryServerConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSparkHistoryServerConfig` <a name="putSparkHistoryServerConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.putSparkHistoryServerConfig"></a>

```java
public void putSparkHistoryServerConfig(GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.putSparkHistoryServerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a>

---

##### `resetMetastoreService` <a name="resetMetastoreService" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.resetMetastoreService"></a>

```java
public void resetMetastoreService()
```

##### `resetSparkHistoryServerConfig` <a name="resetSparkHistoryServerConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.resetSparkHistoryServerConfig"></a>

```java
public void resetSparkHistoryServerConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.sparkHistoryServerConfig">sparkHistoryServerConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference">GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.metastoreServiceInput">metastoreServiceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.sparkHistoryServerConfigInput">sparkHistoryServerConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.metastoreService">metastoreService</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfig">GoogleDataprocBatchEnvironmentConfigPeripheralsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sparkHistoryServerConfig`<sup>Required</sup> <a name="sparkHistoryServerConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.sparkHistoryServerConfig"></a>

```java
public GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference getSparkHistoryServerConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference">GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference</a>

---

##### `metastoreServiceInput`<sup>Optional</sup> <a name="metastoreServiceInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.metastoreServiceInput"></a>

```java
public java.lang.String getMetastoreServiceInput();
```

- *Type:* java.lang.String

---

##### `sparkHistoryServerConfigInput`<sup>Optional</sup> <a name="sparkHistoryServerConfigInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.sparkHistoryServerConfigInput"></a>

```java
public GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig getSparkHistoryServerConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a>

---

##### `metastoreService`<sup>Required</sup> <a name="metastoreService" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.metastoreService"></a>

```java
public java.lang.String getMetastoreService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.internalValue"></a>

```java
public GoogleDataprocBatchEnvironmentConfigPeripheralsConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfig">GoogleDataprocBatchEnvironmentConfigPeripheralsConfig</a>

---


### GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference <a name="GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_batch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference;

new GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resetDataprocCluster">resetDataprocCluster</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataprocCluster` <a name="resetDataprocCluster" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resetDataprocCluster"></a>

```java
public void resetDataprocCluster()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.dataprocClusterInput">dataprocClusterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.dataprocCluster">dataprocCluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataprocClusterInput`<sup>Optional</sup> <a name="dataprocClusterInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.dataprocClusterInput"></a>

```java
public java.lang.String getDataprocClusterInput();
```

- *Type:* java.lang.String

---

##### `dataprocCluster`<sup>Required</sup> <a name="dataprocCluster" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.dataprocCluster"></a>

```java
public java.lang.String getDataprocCluster();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.internalValue"></a>

```java
public GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">GoogleDataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a>

---


### GoogleDataprocBatchPysparkBatchOutputReference <a name="GoogleDataprocBatchPysparkBatchOutputReference" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_batch.GoogleDataprocBatchPysparkBatchOutputReference;

new GoogleDataprocBatchPysparkBatchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.resetArchiveUris">resetArchiveUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.resetFileUris">resetFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.resetJarFileUris">resetJarFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.resetMainPythonFileUri">resetMainPythonFileUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.resetPythonFileUris">resetPythonFileUris</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArchiveUris` <a name="resetArchiveUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.resetArchiveUris"></a>

```java
public void resetArchiveUris()
```

##### `resetArgs` <a name="resetArgs" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.resetArgs"></a>

```java
public void resetArgs()
```

##### `resetFileUris` <a name="resetFileUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.resetFileUris"></a>

```java
public void resetFileUris()
```

##### `resetJarFileUris` <a name="resetJarFileUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.resetJarFileUris"></a>

```java
public void resetJarFileUris()
```

##### `resetMainPythonFileUri` <a name="resetMainPythonFileUri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.resetMainPythonFileUri"></a>

```java
public void resetMainPythonFileUri()
```

##### `resetPythonFileUris` <a name="resetPythonFileUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.resetPythonFileUris"></a>

```java
public void resetPythonFileUris()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.archiveUrisInput">archiveUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.argsInput">argsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.fileUrisInput">fileUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.jarFileUrisInput">jarFileUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.mainPythonFileUriInput">mainPythonFileUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.pythonFileUrisInput">pythonFileUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.archiveUris">archiveUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.fileUris">fileUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.jarFileUris">jarFileUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.mainPythonFileUri">mainPythonFileUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.pythonFileUris">pythonFileUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch">GoogleDataprocBatchPysparkBatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `archiveUrisInput`<sup>Optional</sup> <a name="archiveUrisInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.archiveUrisInput"></a>

```java
public java.util.List<java.lang.String> getArchiveUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.argsInput"></a>

```java
public java.util.List<java.lang.String> getArgsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fileUrisInput`<sup>Optional</sup> <a name="fileUrisInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.fileUrisInput"></a>

```java
public java.util.List<java.lang.String> getFileUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jarFileUrisInput`<sup>Optional</sup> <a name="jarFileUrisInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.jarFileUrisInput"></a>

```java
public java.util.List<java.lang.String> getJarFileUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mainPythonFileUriInput`<sup>Optional</sup> <a name="mainPythonFileUriInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.mainPythonFileUriInput"></a>

```java
public java.lang.String getMainPythonFileUriInput();
```

- *Type:* java.lang.String

---

##### `pythonFileUrisInput`<sup>Optional</sup> <a name="pythonFileUrisInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.pythonFileUrisInput"></a>

```java
public java.util.List<java.lang.String> getPythonFileUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `archiveUris`<sup>Required</sup> <a name="archiveUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.archiveUris"></a>

```java
public java.util.List<java.lang.String> getArchiveUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fileUris`<sup>Required</sup> <a name="fileUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.fileUris"></a>

```java
public java.util.List<java.lang.String> getFileUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jarFileUris`<sup>Required</sup> <a name="jarFileUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.jarFileUris"></a>

```java
public java.util.List<java.lang.String> getJarFileUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mainPythonFileUri`<sup>Required</sup> <a name="mainPythonFileUri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.mainPythonFileUri"></a>

```java
public java.lang.String getMainPythonFileUri();
```

- *Type:* java.lang.String

---

##### `pythonFileUris`<sup>Required</sup> <a name="pythonFileUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.pythonFileUris"></a>

```java
public java.util.List<java.lang.String> getPythonFileUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatchOutputReference.property.internalValue"></a>

```java
public GoogleDataprocBatchPysparkBatch getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchPysparkBatch">GoogleDataprocBatchPysparkBatch</a>

---


### GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference <a name="GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_batch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference;

new GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.resetScenarios">resetScenarios</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScenarios` <a name="resetScenarios" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.resetScenarios"></a>

```java
public void resetScenarios()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.scenariosInput">scenariosInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.scenarios">scenarios</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfig">GoogleDataprocBatchRuntimeConfigAutotuningConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scenariosInput`<sup>Optional</sup> <a name="scenariosInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.scenariosInput"></a>

```java
public java.util.List<java.lang.String> getScenariosInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scenarios`<sup>Required</sup> <a name="scenarios" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.scenarios"></a>

```java
public java.util.List<java.lang.String> getScenarios();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.internalValue"></a>

```java
public GoogleDataprocBatchRuntimeConfigAutotuningConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfig">GoogleDataprocBatchRuntimeConfigAutotuningConfig</a>

---


### GoogleDataprocBatchRuntimeConfigOutputReference <a name="GoogleDataprocBatchRuntimeConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_batch.GoogleDataprocBatchRuntimeConfigOutputReference;

new GoogleDataprocBatchRuntimeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.putAutotuningConfig">putAutotuningConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.resetAutotuningConfig">resetAutotuningConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.resetCohort">resetCohort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.resetContainerImage">resetContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutotuningConfig` <a name="putAutotuningConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.putAutotuningConfig"></a>

```java
public void putAutotuningConfig(GoogleDataprocBatchRuntimeConfigAutotuningConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.putAutotuningConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfig">GoogleDataprocBatchRuntimeConfigAutotuningConfig</a>

---

##### `resetAutotuningConfig` <a name="resetAutotuningConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.resetAutotuningConfig"></a>

```java
public void resetAutotuningConfig()
```

##### `resetCohort` <a name="resetCohort" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.resetCohort"></a>

```java
public void resetCohort()
```

##### `resetContainerImage` <a name="resetContainerImage" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.resetContainerImage"></a>

```java
public void resetContainerImage()
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.resetProperties"></a>

```java
public void resetProperties()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.autotuningConfig">autotuningConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference">GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.effectiveProperties">effectiveProperties</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.autotuningConfigInput">autotuningConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfig">GoogleDataprocBatchRuntimeConfigAutotuningConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.cohortInput">cohortInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.containerImageInput">containerImageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.cohort">cohort</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.containerImage">containerImage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig">GoogleDataprocBatchRuntimeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autotuningConfig`<sup>Required</sup> <a name="autotuningConfig" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.autotuningConfig"></a>

```java
public GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference getAutotuningConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference">GoogleDataprocBatchRuntimeConfigAutotuningConfigOutputReference</a>

---

##### `effectiveProperties`<sup>Required</sup> <a name="effectiveProperties" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.effectiveProperties"></a>

```java
public StringMap getEffectiveProperties();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `autotuningConfigInput`<sup>Optional</sup> <a name="autotuningConfigInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.autotuningConfigInput"></a>

```java
public GoogleDataprocBatchRuntimeConfigAutotuningConfig getAutotuningConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigAutotuningConfig">GoogleDataprocBatchRuntimeConfigAutotuningConfig</a>

---

##### `cohortInput`<sup>Optional</sup> <a name="cohortInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.cohortInput"></a>

```java
public java.lang.String getCohortInput();
```

- *Type:* java.lang.String

---

##### `containerImageInput`<sup>Optional</sup> <a name="containerImageInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.containerImageInput"></a>

```java
public java.lang.String getContainerImageInput();
```

- *Type:* java.lang.String

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.propertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `cohort`<sup>Required</sup> <a name="cohort" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.cohort"></a>

```java
public java.lang.String getCohort();
```

- *Type:* java.lang.String

---

##### `containerImage`<sup>Required</sup> <a name="containerImage" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.containerImage"></a>

```java
public java.lang.String getContainerImage();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfigOutputReference.property.internalValue"></a>

```java
public GoogleDataprocBatchRuntimeConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeConfig">GoogleDataprocBatchRuntimeConfig</a>

---


### GoogleDataprocBatchRuntimeInfoApproximateUsageList <a name="GoogleDataprocBatchRuntimeInfoApproximateUsageList" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_batch.GoogleDataprocBatchRuntimeInfoApproximateUsageList;

new GoogleDataprocBatchRuntimeInfoApproximateUsageList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.get"></a>

```java
public GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference <a name="GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_batch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference;

new GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.property.acceleratorType">acceleratorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.property.milliAcceleratorSeconds">milliAcceleratorSeconds</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.property.milliDcuSeconds">milliDcuSeconds</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.property.shuffleStorageGbSeconds">shuffleStorageGbSeconds</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsage">GoogleDataprocBatchRuntimeInfoApproximateUsage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acceleratorType`<sup>Required</sup> <a name="acceleratorType" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.property.acceleratorType"></a>

```java
public java.lang.String getAcceleratorType();
```

- *Type:* java.lang.String

---

##### `milliAcceleratorSeconds`<sup>Required</sup> <a name="milliAcceleratorSeconds" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.property.milliAcceleratorSeconds"></a>

```java
public java.lang.String getMilliAcceleratorSeconds();
```

- *Type:* java.lang.String

---

##### `milliDcuSeconds`<sup>Required</sup> <a name="milliDcuSeconds" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.property.milliDcuSeconds"></a>

```java
public java.lang.String getMilliDcuSeconds();
```

- *Type:* java.lang.String

---

##### `shuffleStorageGbSeconds`<sup>Required</sup> <a name="shuffleStorageGbSeconds" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.property.shuffleStorageGbSeconds"></a>

```java
public java.lang.String getShuffleStorageGbSeconds();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageOutputReference.property.internalValue"></a>

```java
public GoogleDataprocBatchRuntimeInfoApproximateUsage getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsage">GoogleDataprocBatchRuntimeInfoApproximateUsage</a>

---


### GoogleDataprocBatchRuntimeInfoCurrentUsageList <a name="GoogleDataprocBatchRuntimeInfoCurrentUsageList" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_batch.GoogleDataprocBatchRuntimeInfoCurrentUsageList;

new GoogleDataprocBatchRuntimeInfoCurrentUsageList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.get"></a>

```java
public GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference <a name="GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_batch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference;

new GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.acceleratorType">acceleratorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.milliAccelerator">milliAccelerator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.milliDcu">milliDcu</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.milliDcuPremium">milliDcuPremium</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.shuffleStorageGb">shuffleStorageGb</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.shuffleStorageGbPremium">shuffleStorageGbPremium</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.snapshotTime">snapshotTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsage">GoogleDataprocBatchRuntimeInfoCurrentUsage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acceleratorType`<sup>Required</sup> <a name="acceleratorType" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.acceleratorType"></a>

```java
public java.lang.String getAcceleratorType();
```

- *Type:* java.lang.String

---

##### `milliAccelerator`<sup>Required</sup> <a name="milliAccelerator" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.milliAccelerator"></a>

```java
public java.lang.String getMilliAccelerator();
```

- *Type:* java.lang.String

---

##### `milliDcu`<sup>Required</sup> <a name="milliDcu" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.milliDcu"></a>

```java
public java.lang.String getMilliDcu();
```

- *Type:* java.lang.String

---

##### `milliDcuPremium`<sup>Required</sup> <a name="milliDcuPremium" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.milliDcuPremium"></a>

```java
public java.lang.String getMilliDcuPremium();
```

- *Type:* java.lang.String

---

##### `shuffleStorageGb`<sup>Required</sup> <a name="shuffleStorageGb" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.shuffleStorageGb"></a>

```java
public java.lang.String getShuffleStorageGb();
```

- *Type:* java.lang.String

---

##### `shuffleStorageGbPremium`<sup>Required</sup> <a name="shuffleStorageGbPremium" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.shuffleStorageGbPremium"></a>

```java
public java.lang.String getShuffleStorageGbPremium();
```

- *Type:* java.lang.String

---

##### `snapshotTime`<sup>Required</sup> <a name="snapshotTime" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.snapshotTime"></a>

```java
public java.lang.String getSnapshotTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageOutputReference.property.internalValue"></a>

```java
public GoogleDataprocBatchRuntimeInfoCurrentUsage getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsage">GoogleDataprocBatchRuntimeInfoCurrentUsage</a>

---


### GoogleDataprocBatchRuntimeInfoList <a name="GoogleDataprocBatchRuntimeInfoList" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_batch.GoogleDataprocBatchRuntimeInfoList;

new GoogleDataprocBatchRuntimeInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.get"></a>

```java
public GoogleDataprocBatchRuntimeInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleDataprocBatchRuntimeInfoOutputReference <a name="GoogleDataprocBatchRuntimeInfoOutputReference" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_batch.GoogleDataprocBatchRuntimeInfoOutputReference;

new GoogleDataprocBatchRuntimeInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.property.approximateUsage">approximateUsage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList">GoogleDataprocBatchRuntimeInfoApproximateUsageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.property.currentUsage">currentUsage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList">GoogleDataprocBatchRuntimeInfoCurrentUsageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.property.diagnosticOutputUri">diagnosticOutputUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.property.endpoints">endpoints</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.property.outputUri">outputUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfo">GoogleDataprocBatchRuntimeInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `approximateUsage`<sup>Required</sup> <a name="approximateUsage" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.property.approximateUsage"></a>

```java
public GoogleDataprocBatchRuntimeInfoApproximateUsageList getApproximateUsage();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoApproximateUsageList">GoogleDataprocBatchRuntimeInfoApproximateUsageList</a>

---

##### `currentUsage`<sup>Required</sup> <a name="currentUsage" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.property.currentUsage"></a>

```java
public GoogleDataprocBatchRuntimeInfoCurrentUsageList getCurrentUsage();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoCurrentUsageList">GoogleDataprocBatchRuntimeInfoCurrentUsageList</a>

---

##### `diagnosticOutputUri`<sup>Required</sup> <a name="diagnosticOutputUri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.property.diagnosticOutputUri"></a>

```java
public java.lang.String getDiagnosticOutputUri();
```

- *Type:* java.lang.String

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.property.endpoints"></a>

```java
public StringMap getEndpoints();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `outputUri`<sup>Required</sup> <a name="outputUri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.property.outputUri"></a>

```java
public java.lang.String getOutputUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfoOutputReference.property.internalValue"></a>

```java
public GoogleDataprocBatchRuntimeInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchRuntimeInfo">GoogleDataprocBatchRuntimeInfo</a>

---


### GoogleDataprocBatchSparkBatchOutputReference <a name="GoogleDataprocBatchSparkBatchOutputReference" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_batch.GoogleDataprocBatchSparkBatchOutputReference;

new GoogleDataprocBatchSparkBatchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.resetArchiveUris">resetArchiveUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.resetFileUris">resetFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.resetJarFileUris">resetJarFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.resetMainClass">resetMainClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.resetMainJarFileUri">resetMainJarFileUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArchiveUris` <a name="resetArchiveUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.resetArchiveUris"></a>

```java
public void resetArchiveUris()
```

##### `resetArgs` <a name="resetArgs" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.resetArgs"></a>

```java
public void resetArgs()
```

##### `resetFileUris` <a name="resetFileUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.resetFileUris"></a>

```java
public void resetFileUris()
```

##### `resetJarFileUris` <a name="resetJarFileUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.resetJarFileUris"></a>

```java
public void resetJarFileUris()
```

##### `resetMainClass` <a name="resetMainClass" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.resetMainClass"></a>

```java
public void resetMainClass()
```

##### `resetMainJarFileUri` <a name="resetMainJarFileUri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.resetMainJarFileUri"></a>

```java
public void resetMainJarFileUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.archiveUrisInput">archiveUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.argsInput">argsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.fileUrisInput">fileUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.jarFileUrisInput">jarFileUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.mainClassInput">mainClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.mainJarFileUriInput">mainJarFileUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.archiveUris">archiveUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.fileUris">fileUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.jarFileUris">jarFileUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.mainClass">mainClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.mainJarFileUri">mainJarFileUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch">GoogleDataprocBatchSparkBatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `archiveUrisInput`<sup>Optional</sup> <a name="archiveUrisInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.archiveUrisInput"></a>

```java
public java.util.List<java.lang.String> getArchiveUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.argsInput"></a>

```java
public java.util.List<java.lang.String> getArgsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fileUrisInput`<sup>Optional</sup> <a name="fileUrisInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.fileUrisInput"></a>

```java
public java.util.List<java.lang.String> getFileUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jarFileUrisInput`<sup>Optional</sup> <a name="jarFileUrisInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.jarFileUrisInput"></a>

```java
public java.util.List<java.lang.String> getJarFileUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mainClassInput`<sup>Optional</sup> <a name="mainClassInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.mainClassInput"></a>

```java
public java.lang.String getMainClassInput();
```

- *Type:* java.lang.String

---

##### `mainJarFileUriInput`<sup>Optional</sup> <a name="mainJarFileUriInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.mainJarFileUriInput"></a>

```java
public java.lang.String getMainJarFileUriInput();
```

- *Type:* java.lang.String

---

##### `archiveUris`<sup>Required</sup> <a name="archiveUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.archiveUris"></a>

```java
public java.util.List<java.lang.String> getArchiveUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fileUris`<sup>Required</sup> <a name="fileUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.fileUris"></a>

```java
public java.util.List<java.lang.String> getFileUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jarFileUris`<sup>Required</sup> <a name="jarFileUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.jarFileUris"></a>

```java
public java.util.List<java.lang.String> getJarFileUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mainClass`<sup>Required</sup> <a name="mainClass" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.mainClass"></a>

```java
public java.lang.String getMainClass();
```

- *Type:* java.lang.String

---

##### `mainJarFileUri`<sup>Required</sup> <a name="mainJarFileUri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.mainJarFileUri"></a>

```java
public java.lang.String getMainJarFileUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatchOutputReference.property.internalValue"></a>

```java
public GoogleDataprocBatchSparkBatch getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkBatch">GoogleDataprocBatchSparkBatch</a>

---


### GoogleDataprocBatchSparkRBatchOutputReference <a name="GoogleDataprocBatchSparkRBatchOutputReference" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_batch.GoogleDataprocBatchSparkRBatchOutputReference;

new GoogleDataprocBatchSparkRBatchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.resetArchiveUris">resetArchiveUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.resetFileUris">resetFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.resetMainRFileUri">resetMainRFileUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArchiveUris` <a name="resetArchiveUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.resetArchiveUris"></a>

```java
public void resetArchiveUris()
```

##### `resetArgs` <a name="resetArgs" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.resetArgs"></a>

```java
public void resetArgs()
```

##### `resetFileUris` <a name="resetFileUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.resetFileUris"></a>

```java
public void resetFileUris()
```

##### `resetMainRFileUri` <a name="resetMainRFileUri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.resetMainRFileUri"></a>

```java
public void resetMainRFileUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.archiveUrisInput">archiveUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.argsInput">argsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.fileUrisInput">fileUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.mainRFileUriInput">mainRFileUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.archiveUris">archiveUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.fileUris">fileUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.mainRFileUri">mainRFileUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch">GoogleDataprocBatchSparkRBatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `archiveUrisInput`<sup>Optional</sup> <a name="archiveUrisInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.archiveUrisInput"></a>

```java
public java.util.List<java.lang.String> getArchiveUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.argsInput"></a>

```java
public java.util.List<java.lang.String> getArgsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fileUrisInput`<sup>Optional</sup> <a name="fileUrisInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.fileUrisInput"></a>

```java
public java.util.List<java.lang.String> getFileUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mainRFileUriInput`<sup>Optional</sup> <a name="mainRFileUriInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.mainRFileUriInput"></a>

```java
public java.lang.String getMainRFileUriInput();
```

- *Type:* java.lang.String

---

##### `archiveUris`<sup>Required</sup> <a name="archiveUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.archiveUris"></a>

```java
public java.util.List<java.lang.String> getArchiveUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fileUris`<sup>Required</sup> <a name="fileUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.fileUris"></a>

```java
public java.util.List<java.lang.String> getFileUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mainRFileUri`<sup>Required</sup> <a name="mainRFileUri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.mainRFileUri"></a>

```java
public java.lang.String getMainRFileUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatchOutputReference.property.internalValue"></a>

```java
public GoogleDataprocBatchSparkRBatch getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkRBatch">GoogleDataprocBatchSparkRBatch</a>

---


### GoogleDataprocBatchSparkSqlBatchOutputReference <a name="GoogleDataprocBatchSparkSqlBatchOutputReference" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_batch.GoogleDataprocBatchSparkSqlBatchOutputReference;

new GoogleDataprocBatchSparkSqlBatchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.resetJarFileUris">resetJarFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.resetQueryFileUri">resetQueryFileUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.resetQueryVariables">resetQueryVariables</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetJarFileUris` <a name="resetJarFileUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.resetJarFileUris"></a>

```java
public void resetJarFileUris()
```

##### `resetQueryFileUri` <a name="resetQueryFileUri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.resetQueryFileUri"></a>

```java
public void resetQueryFileUri()
```

##### `resetQueryVariables` <a name="resetQueryVariables" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.resetQueryVariables"></a>

```java
public void resetQueryVariables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.jarFileUrisInput">jarFileUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.queryFileUriInput">queryFileUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.queryVariablesInput">queryVariablesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.jarFileUris">jarFileUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.queryFileUri">queryFileUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.queryVariables">queryVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatch">GoogleDataprocBatchSparkSqlBatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `jarFileUrisInput`<sup>Optional</sup> <a name="jarFileUrisInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.jarFileUrisInput"></a>

```java
public java.util.List<java.lang.String> getJarFileUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `queryFileUriInput`<sup>Optional</sup> <a name="queryFileUriInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.queryFileUriInput"></a>

```java
public java.lang.String getQueryFileUriInput();
```

- *Type:* java.lang.String

---

##### `queryVariablesInput`<sup>Optional</sup> <a name="queryVariablesInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.queryVariablesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getQueryVariablesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `jarFileUris`<sup>Required</sup> <a name="jarFileUris" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.jarFileUris"></a>

```java
public java.util.List<java.lang.String> getJarFileUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `queryFileUri`<sup>Required</sup> <a name="queryFileUri" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.queryFileUri"></a>

```java
public java.lang.String getQueryFileUri();
```

- *Type:* java.lang.String

---

##### `queryVariables`<sup>Required</sup> <a name="queryVariables" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.queryVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getQueryVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatchOutputReference.property.internalValue"></a>

```java
public GoogleDataprocBatchSparkSqlBatch getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchSparkSqlBatch">GoogleDataprocBatchSparkSqlBatch</a>

---


### GoogleDataprocBatchStateHistoryList <a name="GoogleDataprocBatchStateHistoryList" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_batch.GoogleDataprocBatchStateHistoryList;

new GoogleDataprocBatchStateHistoryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.get"></a>

```java
public GoogleDataprocBatchStateHistoryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleDataprocBatchStateHistoryOutputReference <a name="GoogleDataprocBatchStateHistoryOutputReference" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_batch.GoogleDataprocBatchStateHistoryOutputReference;

new GoogleDataprocBatchStateHistoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.property.stateMessage">stateMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.property.stateStartTime">stateStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistory">GoogleDataprocBatchStateHistory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.property.stateMessage"></a>

```java
public java.lang.String getStateMessage();
```

- *Type:* java.lang.String

---

##### `stateStartTime`<sup>Required</sup> <a name="stateStartTime" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.property.stateStartTime"></a>

```java
public java.lang.String getStateStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistoryOutputReference.property.internalValue"></a>

```java
public GoogleDataprocBatchStateHistory getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchStateHistory">GoogleDataprocBatchStateHistory</a>

---


### GoogleDataprocBatchTimeoutsOutputReference <a name="GoogleDataprocBatchTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_batch.GoogleDataprocBatchTimeoutsOutputReference;

new GoogleDataprocBatchTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeouts">GoogleDataprocBatchTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataprocBatch.GoogleDataprocBatchTimeouts">GoogleDataprocBatchTimeouts</a>

---



