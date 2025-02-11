# `googleBigqueryJob` Submodule <a name="`googleBigqueryJob` Submodule" id="@cdktf/provider-google-beta.googleBigqueryJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigqueryJob <a name="GoogleBigqueryJob" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job google_bigquery_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJob;

GoogleBigqueryJob.Builder.create(Construct scope, java.lang.String id)
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
    .jobId(java.lang.String)
//  .copy(GoogleBigqueryJobCopy)
//  .extract(GoogleBigqueryJobExtract)
//  .id(java.lang.String)
//  .jobTimeoutMs(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .load(GoogleBigqueryJobLoad)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .query(GoogleBigqueryJobQuery)
//  .timeouts(GoogleBigqueryJobTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.jobId">jobId</a></code> | <code>java.lang.String</code> | The ID of the job. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.copy">copy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy">GoogleBigqueryJobCopy</a></code> | copy block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.extract">extract</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract">GoogleBigqueryJobExtract</a></code> | extract block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#id GoogleBigqueryJob#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.jobTimeoutMs">jobTimeoutMs</a></code> | <code>java.lang.String</code> | Job timeout in milliseconds. If this time limit is exceeded, BigQuery may attempt to terminate the job. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels associated with this job. You can use these to organize and group your jobs. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.load">load</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad">GoogleBigqueryJobLoad</a></code> | load block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The geographic location of the job. The default value is US. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#project GoogleBigqueryJob#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.query">query</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery">GoogleBigqueryJobQuery</a></code> | query block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeouts">GoogleBigqueryJobTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.jobId"></a>

- *Type:* java.lang.String

The ID of the job.

The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-). The maximum length is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#job_id GoogleBigqueryJob#job_id}

---

##### `copy`<sup>Optional</sup> <a name="copy" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.copy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy">GoogleBigqueryJobCopy</a>

copy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#copy GoogleBigqueryJob#copy}

---

##### `extract`<sup>Optional</sup> <a name="extract" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.extract"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract">GoogleBigqueryJobExtract</a>

extract block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#extract GoogleBigqueryJob#extract}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#id GoogleBigqueryJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jobTimeoutMs`<sup>Optional</sup> <a name="jobTimeoutMs" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.jobTimeoutMs"></a>

- *Type:* java.lang.String

Job timeout in milliseconds. If this time limit is exceeded, BigQuery may attempt to terminate the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#job_timeout_ms GoogleBigqueryJob#job_timeout_ms}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels associated with this job. You can use these to organize and group your jobs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#labels GoogleBigqueryJob#labels}

---

##### `load`<sup>Optional</sup> <a name="load" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.load"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad">GoogleBigqueryJobLoad</a>

load block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#load GoogleBigqueryJob#load}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The geographic location of the job. The default value is US.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#location GoogleBigqueryJob#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#project GoogleBigqueryJob#project}.

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.query"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery">GoogleBigqueryJobQuery</a>

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#query GoogleBigqueryJob#query}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeouts">GoogleBigqueryJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#timeouts GoogleBigqueryJob#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putCopy">putCopy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putExtract">putExtract</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putLoad">putLoad</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putQuery">putQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetCopy">resetCopy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetExtract">resetExtract</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetJobTimeoutMs">resetJobTimeoutMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetLoad">resetLoad</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetQuery">resetQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCopy` <a name="putCopy" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putCopy"></a>

```java
public void putCopy(GoogleBigqueryJobCopy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putCopy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy">GoogleBigqueryJobCopy</a>

---

##### `putExtract` <a name="putExtract" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putExtract"></a>

```java
public void putExtract(GoogleBigqueryJobExtract value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putExtract.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract">GoogleBigqueryJobExtract</a>

---

##### `putLoad` <a name="putLoad" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putLoad"></a>

```java
public void putLoad(GoogleBigqueryJobLoad value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putLoad.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad">GoogleBigqueryJobLoad</a>

---

##### `putQuery` <a name="putQuery" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putQuery"></a>

```java
public void putQuery(GoogleBigqueryJobQuery value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putQuery.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery">GoogleBigqueryJobQuery</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putTimeouts"></a>

```java
public void putTimeouts(GoogleBigqueryJobTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeouts">GoogleBigqueryJobTimeouts</a>

---

##### `resetCopy` <a name="resetCopy" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetCopy"></a>

```java
public void resetCopy()
```

##### `resetExtract` <a name="resetExtract" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetExtract"></a>

```java
public void resetExtract()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetId"></a>

```java
public void resetId()
```

##### `resetJobTimeoutMs` <a name="resetJobTimeoutMs" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetJobTimeoutMs"></a>

```java
public void resetJobTimeoutMs()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLoad` <a name="resetLoad" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetLoad"></a>

```java
public void resetLoad()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetProject"></a>

```java
public void resetProject()
```

##### `resetQuery` <a name="resetQuery" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetQuery"></a>

```java
public void resetQuery()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBigqueryJob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJob;

GoogleBigqueryJob.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJob;

GoogleBigqueryJob.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJob;

GoogleBigqueryJob.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJob;

GoogleBigqueryJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleBigqueryJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleBigqueryJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleBigqueryJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleBigqueryJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBigqueryJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.copy">copy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference">GoogleBigqueryJobCopyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.extract">extract</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference">GoogleBigqueryJobExtractOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.jobType">jobType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.load">load</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference">GoogleBigqueryJobLoadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.query">query</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference">GoogleBigqueryJobQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.status">status</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList">GoogleBigqueryJobStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference">GoogleBigqueryJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.userEmail">userEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.copyInput">copyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy">GoogleBigqueryJobCopy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.extractInput">extractInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract">GoogleBigqueryJobExtract</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.jobIdInput">jobIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.jobTimeoutMsInput">jobTimeoutMsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.loadInput">loadInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad">GoogleBigqueryJobLoad</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.queryInput">queryInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery">GoogleBigqueryJobQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeouts">GoogleBigqueryJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.jobId">jobId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.jobTimeoutMs">jobTimeoutMs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `copy`<sup>Required</sup> <a name="copy" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.copy"></a>

```java
public GoogleBigqueryJobCopyOutputReference getCopy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference">GoogleBigqueryJobCopyOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `extract`<sup>Required</sup> <a name="extract" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.extract"></a>

```java
public GoogleBigqueryJobExtractOutputReference getExtract();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference">GoogleBigqueryJobExtractOutputReference</a>

---

##### `jobType`<sup>Required</sup> <a name="jobType" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.jobType"></a>

```java
public java.lang.String getJobType();
```

- *Type:* java.lang.String

---

##### `load`<sup>Required</sup> <a name="load" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.load"></a>

```java
public GoogleBigqueryJobLoadOutputReference getLoad();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference">GoogleBigqueryJobLoadOutputReference</a>

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.query"></a>

```java
public GoogleBigqueryJobQueryOutputReference getQuery();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference">GoogleBigqueryJobQueryOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.status"></a>

```java
public GoogleBigqueryJobStatusList getStatus();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList">GoogleBigqueryJobStatusList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.timeouts"></a>

```java
public GoogleBigqueryJobTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference">GoogleBigqueryJobTimeoutsOutputReference</a>

---

##### `userEmail`<sup>Required</sup> <a name="userEmail" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.userEmail"></a>

```java
public java.lang.String getUserEmail();
```

- *Type:* java.lang.String

---

##### `copyInput`<sup>Optional</sup> <a name="copyInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.copyInput"></a>

```java
public GoogleBigqueryJobCopy getCopyInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy">GoogleBigqueryJobCopy</a>

---

##### `extractInput`<sup>Optional</sup> <a name="extractInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.extractInput"></a>

```java
public GoogleBigqueryJobExtract getExtractInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract">GoogleBigqueryJobExtract</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `jobIdInput`<sup>Optional</sup> <a name="jobIdInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.jobIdInput"></a>

```java
public java.lang.String getJobIdInput();
```

- *Type:* java.lang.String

---

##### `jobTimeoutMsInput`<sup>Optional</sup> <a name="jobTimeoutMsInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.jobTimeoutMsInput"></a>

```java
public java.lang.String getJobTimeoutMsInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `loadInput`<sup>Optional</sup> <a name="loadInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.loadInput"></a>

```java
public GoogleBigqueryJobLoad getLoadInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad">GoogleBigqueryJobLoad</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.queryInput"></a>

```java
public GoogleBigqueryJobQuery getQueryInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery">GoogleBigqueryJobQuery</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeouts">GoogleBigqueryJobTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.jobId"></a>

```java
public java.lang.String getJobId();
```

- *Type:* java.lang.String

---

##### `jobTimeoutMs`<sup>Required</sup> <a name="jobTimeoutMs" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.jobTimeoutMs"></a>

```java
public java.lang.String getJobTimeoutMs();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigqueryJobConfig <a name="GoogleBigqueryJobConfig" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJobConfig;

GoogleBigqueryJobConfig.builder()
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
    .jobId(java.lang.String)
//  .copy(GoogleBigqueryJobCopy)
//  .extract(GoogleBigqueryJobExtract)
//  .id(java.lang.String)
//  .jobTimeoutMs(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .load(GoogleBigqueryJobLoad)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .query(GoogleBigqueryJobQuery)
//  .timeouts(GoogleBigqueryJobTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.jobId">jobId</a></code> | <code>java.lang.String</code> | The ID of the job. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.copy">copy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy">GoogleBigqueryJobCopy</a></code> | copy block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.extract">extract</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract">GoogleBigqueryJobExtract</a></code> | extract block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#id GoogleBigqueryJob#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.jobTimeoutMs">jobTimeoutMs</a></code> | <code>java.lang.String</code> | Job timeout in milliseconds. If this time limit is exceeded, BigQuery may attempt to terminate the job. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels associated with this job. You can use these to organize and group your jobs. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.load">load</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad">GoogleBigqueryJobLoad</a></code> | load block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.location">location</a></code> | <code>java.lang.String</code> | The geographic location of the job. The default value is US. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#project GoogleBigqueryJob#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.query">query</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery">GoogleBigqueryJobQuery</a></code> | query block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeouts">GoogleBigqueryJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.jobId"></a>

```java
public java.lang.String getJobId();
```

- *Type:* java.lang.String

The ID of the job.

The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-). The maximum length is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#job_id GoogleBigqueryJob#job_id}

---

##### `copy`<sup>Optional</sup> <a name="copy" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.copy"></a>

```java
public GoogleBigqueryJobCopy getCopy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy">GoogleBigqueryJobCopy</a>

copy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#copy GoogleBigqueryJob#copy}

---

##### `extract`<sup>Optional</sup> <a name="extract" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.extract"></a>

```java
public GoogleBigqueryJobExtract getExtract();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract">GoogleBigqueryJobExtract</a>

extract block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#extract GoogleBigqueryJob#extract}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#id GoogleBigqueryJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jobTimeoutMs`<sup>Optional</sup> <a name="jobTimeoutMs" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.jobTimeoutMs"></a>

```java
public java.lang.String getJobTimeoutMs();
```

- *Type:* java.lang.String

Job timeout in milliseconds. If this time limit is exceeded, BigQuery may attempt to terminate the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#job_timeout_ms GoogleBigqueryJob#job_timeout_ms}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels associated with this job. You can use these to organize and group your jobs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#labels GoogleBigqueryJob#labels}

---

##### `load`<sup>Optional</sup> <a name="load" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.load"></a>

```java
public GoogleBigqueryJobLoad getLoad();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad">GoogleBigqueryJobLoad</a>

load block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#load GoogleBigqueryJob#load}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The geographic location of the job. The default value is US.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#location GoogleBigqueryJob#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#project GoogleBigqueryJob#project}.

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.query"></a>

```java
public GoogleBigqueryJobQuery getQuery();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery">GoogleBigqueryJobQuery</a>

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#query GoogleBigqueryJob#query}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.timeouts"></a>

```java
public GoogleBigqueryJobTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeouts">GoogleBigqueryJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#timeouts GoogleBigqueryJob#timeouts}

---

### GoogleBigqueryJobCopy <a name="GoogleBigqueryJobCopy" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJobCopy;

GoogleBigqueryJobCopy.builder()
    .sourceTables(IResolvable)
    .sourceTables(java.util.List<GoogleBigqueryJobCopySourceTables>)
//  .createDisposition(java.lang.String)
//  .destinationEncryptionConfiguration(GoogleBigqueryJobCopyDestinationEncryptionConfiguration)
//  .destinationTable(GoogleBigqueryJobCopyDestinationTable)
//  .writeDisposition(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy.property.sourceTables">sourceTables</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTables">GoogleBigqueryJobCopySourceTables</a>></code> | source_tables block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy.property.createDisposition">createDisposition</a></code> | <code>java.lang.String</code> | Specifies whether the job is allowed to create new tables. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy.property.destinationEncryptionConfiguration">destinationEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfiguration">GoogleBigqueryJobCopyDestinationEncryptionConfiguration</a></code> | destination_encryption_configuration block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy.property.destinationTable">destinationTable</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTable">GoogleBigqueryJobCopyDestinationTable</a></code> | destination_table block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy.property.writeDisposition">writeDisposition</a></code> | <code>java.lang.String</code> | Specifies the action that occurs if the destination table already exists. |

---

##### `sourceTables`<sup>Required</sup> <a name="sourceTables" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy.property.sourceTables"></a>

```java
public java.lang.Object getSourceTables();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTables">GoogleBigqueryJobCopySourceTables</a>>

source_tables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#source_tables GoogleBigqueryJob#source_tables}

---

##### `createDisposition`<sup>Optional</sup> <a name="createDisposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy.property.createDisposition"></a>

```java
public java.lang.String getCreateDisposition();
```

- *Type:* java.lang.String

Specifies whether the job is allowed to create new tables.

The following values are supported:
CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table.
CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result.
Creation, truncation and append actions occur as one atomic update upon job completion Default value: "CREATE_IF_NEEDED" Possible values: ["CREATE_IF_NEEDED", "CREATE_NEVER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#create_disposition GoogleBigqueryJob#create_disposition}

---

##### `destinationEncryptionConfiguration`<sup>Optional</sup> <a name="destinationEncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy.property.destinationEncryptionConfiguration"></a>

```java
public GoogleBigqueryJobCopyDestinationEncryptionConfiguration getDestinationEncryptionConfiguration();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfiguration">GoogleBigqueryJobCopyDestinationEncryptionConfiguration</a>

destination_encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#destination_encryption_configuration GoogleBigqueryJob#destination_encryption_configuration}

---

##### `destinationTable`<sup>Optional</sup> <a name="destinationTable" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy.property.destinationTable"></a>

```java
public GoogleBigqueryJobCopyDestinationTable getDestinationTable();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTable">GoogleBigqueryJobCopyDestinationTable</a>

destination_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#destination_table GoogleBigqueryJob#destination_table}

---

##### `writeDisposition`<sup>Optional</sup> <a name="writeDisposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy.property.writeDisposition"></a>

```java
public java.lang.String getWriteDisposition();
```

- *Type:* java.lang.String

Specifies the action that occurs if the destination table already exists.

The following values are supported:
WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result.
WRITE_APPEND: If the table already exists, BigQuery appends the data to the table.
WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result.
Each action is atomic and only occurs if BigQuery is able to complete the job successfully.
Creation, truncation and append actions occur as one atomic update upon job completion. Default value: "WRITE_EMPTY" Possible values: ["WRITE_TRUNCATE", "WRITE_APPEND", "WRITE_EMPTY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#write_disposition GoogleBigqueryJob#write_disposition}

---

### GoogleBigqueryJobCopyDestinationEncryptionConfiguration <a name="GoogleBigqueryJobCopyDestinationEncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJobCopyDestinationEncryptionConfiguration;

GoogleBigqueryJobCopyDestinationEncryptionConfiguration.builder()
    .kmsKeyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfiguration.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table. |

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfiguration.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table.

The BigQuery Service Account associated with your project requires access to this encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#kms_key_name GoogleBigqueryJob#kms_key_name}

---

### GoogleBigqueryJobCopyDestinationTable <a name="GoogleBigqueryJobCopyDestinationTable" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTable.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJobCopyDestinationTable;

GoogleBigqueryJobCopyDestinationTable.builder()
    .tableId(java.lang.String)
//  .datasetId(java.lang.String)
//  .projectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTable.property.tableId">tableId</a></code> | <code>java.lang.String</code> | The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTable.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTable.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the project containing this table. |

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTable.property.tableId"></a>

```java
public java.lang.String getTableId();
```

- *Type:* java.lang.String

The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#table_id GoogleBigqueryJob#table_id}

---

##### `datasetId`<sup>Optional</sup> <a name="datasetId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTable.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#dataset_id GoogleBigqueryJob#dataset_id}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTable.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#project_id GoogleBigqueryJob#project_id}

---

### GoogleBigqueryJobCopySourceTables <a name="GoogleBigqueryJobCopySourceTables" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTables.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJobCopySourceTables;

GoogleBigqueryJobCopySourceTables.builder()
    .tableId(java.lang.String)
//  .datasetId(java.lang.String)
//  .projectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTables.property.tableId">tableId</a></code> | <code>java.lang.String</code> | The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTables.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTables.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the project containing this table. |

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTables.property.tableId"></a>

```java
public java.lang.String getTableId();
```

- *Type:* java.lang.String

The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#table_id GoogleBigqueryJob#table_id}

---

##### `datasetId`<sup>Optional</sup> <a name="datasetId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTables.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#dataset_id GoogleBigqueryJob#dataset_id}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTables.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#project_id GoogleBigqueryJob#project_id}

---

### GoogleBigqueryJobExtract <a name="GoogleBigqueryJobExtract" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJobExtract;

GoogleBigqueryJobExtract.builder()
    .destinationUris(java.util.List<java.lang.String>)
//  .compression(java.lang.String)
//  .destinationFormat(java.lang.String)
//  .fieldDelimiter(java.lang.String)
//  .printHeader(java.lang.Boolean)
//  .printHeader(IResolvable)
//  .sourceModel(GoogleBigqueryJobExtractSourceModel)
//  .sourceTable(GoogleBigqueryJobExtractSourceTable)
//  .useAvroLogicalTypes(java.lang.Boolean)
//  .useAvroLogicalTypes(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract.property.destinationUris">destinationUris</a></code> | <code>java.util.List<java.lang.String></code> | A list of fully-qualified Google Cloud Storage URIs where the extracted table should be written. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract.property.compression">compression</a></code> | <code>java.lang.String</code> | The compression type to use for exported files. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract.property.destinationFormat">destinationFormat</a></code> | <code>java.lang.String</code> | The exported file format. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract.property.fieldDelimiter">fieldDelimiter</a></code> | <code>java.lang.String</code> | When extracting data in CSV format, this defines the delimiter to use between fields in the exported data. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract.property.printHeader">printHeader</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to print out a header row in the results. Default is true. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract.property.sourceModel">sourceModel</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModel">GoogleBigqueryJobExtractSourceModel</a></code> | source_model block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract.property.sourceTable">sourceTable</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTable">GoogleBigqueryJobExtractSourceTable</a></code> | source_table block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract.property.useAvroLogicalTypes">useAvroLogicalTypes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to use logical types when extracting to AVRO format. |

---

##### `destinationUris`<sup>Required</sup> <a name="destinationUris" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract.property.destinationUris"></a>

```java
public java.util.List<java.lang.String> getDestinationUris();
```

- *Type:* java.util.List<java.lang.String>

A list of fully-qualified Google Cloud Storage URIs where the extracted table should be written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#destination_uris GoogleBigqueryJob#destination_uris}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract.property.compression"></a>

```java
public java.lang.String getCompression();
```

- *Type:* java.lang.String

The compression type to use for exported files.

Possible values include GZIP, DEFLATE, SNAPPY, and NONE.
The default value is NONE. DEFLATE and SNAPPY are only supported for Avro.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#compression GoogleBigqueryJob#compression}

---

##### `destinationFormat`<sup>Optional</sup> <a name="destinationFormat" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract.property.destinationFormat"></a>

```java
public java.lang.String getDestinationFormat();
```

- *Type:* java.lang.String

The exported file format.

Possible values include CSV, NEWLINE_DELIMITED_JSON and AVRO for tables and SAVED_MODEL for models.
The default value for tables is CSV. Tables with nested or repeated fields cannot be exported as CSV.
The default value for models is SAVED_MODEL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#destination_format GoogleBigqueryJob#destination_format}

---

##### `fieldDelimiter`<sup>Optional</sup> <a name="fieldDelimiter" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract.property.fieldDelimiter"></a>

```java
public java.lang.String getFieldDelimiter();
```

- *Type:* java.lang.String

When extracting data in CSV format, this defines the delimiter to use between fields in the exported data.

Default is ','

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#field_delimiter GoogleBigqueryJob#field_delimiter}

---

##### `printHeader`<sup>Optional</sup> <a name="printHeader" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract.property.printHeader"></a>

```java
public java.lang.Object getPrintHeader();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to print out a header row in the results. Default is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#print_header GoogleBigqueryJob#print_header}

---

##### `sourceModel`<sup>Optional</sup> <a name="sourceModel" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract.property.sourceModel"></a>

```java
public GoogleBigqueryJobExtractSourceModel getSourceModel();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModel">GoogleBigqueryJobExtractSourceModel</a>

source_model block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#source_model GoogleBigqueryJob#source_model}

---

##### `sourceTable`<sup>Optional</sup> <a name="sourceTable" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract.property.sourceTable"></a>

```java
public GoogleBigqueryJobExtractSourceTable getSourceTable();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTable">GoogleBigqueryJobExtractSourceTable</a>

source_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#source_table GoogleBigqueryJob#source_table}

---

##### `useAvroLogicalTypes`<sup>Optional</sup> <a name="useAvroLogicalTypes" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract.property.useAvroLogicalTypes"></a>

```java
public java.lang.Object getUseAvroLogicalTypes();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to use logical types when extracting to AVRO format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#use_avro_logical_types GoogleBigqueryJob#use_avro_logical_types}

---

### GoogleBigqueryJobExtractSourceModel <a name="GoogleBigqueryJobExtractSourceModel" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJobExtractSourceModel;

GoogleBigqueryJobExtractSourceModel.builder()
    .datasetId(java.lang.String)
    .modelId(java.lang.String)
    .projectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModel.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | The ID of the dataset containing this model. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModel.property.modelId">modelId</a></code> | <code>java.lang.String</code> | The ID of the model. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModel.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the project containing this model. |

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModel.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

The ID of the dataset containing this model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#dataset_id GoogleBigqueryJob#dataset_id}

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModel.property.modelId"></a>

```java
public java.lang.String getModelId();
```

- *Type:* java.lang.String

The ID of the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#model_id GoogleBigqueryJob#model_id}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModel.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The ID of the project containing this model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#project_id GoogleBigqueryJob#project_id}

---

### GoogleBigqueryJobExtractSourceTable <a name="GoogleBigqueryJobExtractSourceTable" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTable.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJobExtractSourceTable;

GoogleBigqueryJobExtractSourceTable.builder()
    .tableId(java.lang.String)
//  .datasetId(java.lang.String)
//  .projectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTable.property.tableId">tableId</a></code> | <code>java.lang.String</code> | The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTable.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTable.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the project containing this table. |

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTable.property.tableId"></a>

```java
public java.lang.String getTableId();
```

- *Type:* java.lang.String

The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#table_id GoogleBigqueryJob#table_id}

---

##### `datasetId`<sup>Optional</sup> <a name="datasetId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTable.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#dataset_id GoogleBigqueryJob#dataset_id}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTable.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#project_id GoogleBigqueryJob#project_id}

---

### GoogleBigqueryJobLoad <a name="GoogleBigqueryJobLoad" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJobLoad;

GoogleBigqueryJobLoad.builder()
    .destinationTable(GoogleBigqueryJobLoadDestinationTable)
    .sourceUris(java.util.List<java.lang.String>)
//  .allowJaggedRows(java.lang.Boolean)
//  .allowJaggedRows(IResolvable)
//  .allowQuotedNewlines(java.lang.Boolean)
//  .allowQuotedNewlines(IResolvable)
//  .autodetect(java.lang.Boolean)
//  .autodetect(IResolvable)
//  .createDisposition(java.lang.String)
//  .destinationEncryptionConfiguration(GoogleBigqueryJobLoadDestinationEncryptionConfiguration)
//  .encoding(java.lang.String)
//  .fieldDelimiter(java.lang.String)
//  .ignoreUnknownValues(java.lang.Boolean)
//  .ignoreUnknownValues(IResolvable)
//  .jsonExtension(java.lang.String)
//  .maxBadRecords(java.lang.Number)
//  .nullMarker(java.lang.String)
//  .parquetOptions(GoogleBigqueryJobLoadParquetOptions)
//  .projectionFields(java.util.List<java.lang.String>)
//  .quote(java.lang.String)
//  .schemaUpdateOptions(java.util.List<java.lang.String>)
//  .skipLeadingRows(java.lang.Number)
//  .sourceFormat(java.lang.String)
//  .timePartitioning(GoogleBigqueryJobLoadTimePartitioning)
//  .writeDisposition(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.destinationTable">destinationTable</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTable">GoogleBigqueryJobLoadDestinationTable</a></code> | destination_table block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.sourceUris">sourceUris</a></code> | <code>java.util.List<java.lang.String></code> | The fully-qualified URIs that point to your data in Google Cloud. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.allowJaggedRows">allowJaggedRows</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Accept rows that are missing trailing optional columns. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.allowQuotedNewlines">allowQuotedNewlines</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.autodetect">autodetect</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates if we should automatically infer the options and schema for CSV and JSON sources. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.createDisposition">createDisposition</a></code> | <code>java.lang.String</code> | Specifies whether the job is allowed to create new tables. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.destinationEncryptionConfiguration">destinationEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfiguration">GoogleBigqueryJobLoadDestinationEncryptionConfiguration</a></code> | destination_encryption_configuration block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.encoding">encoding</a></code> | <code>java.lang.String</code> | The character encoding of the data. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.fieldDelimiter">fieldDelimiter</a></code> | <code>java.lang.String</code> | The separator for fields in a CSV file. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.ignoreUnknownValues">ignoreUnknownValues</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates if BigQuery should allow extra values that are not represented in the table schema. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.jsonExtension">jsonExtension</a></code> | <code>java.lang.String</code> | If sourceFormat is set to newline-delimited JSON, indicates whether it should be processed as a JSON variant such as GeoJSON. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.maxBadRecords">maxBadRecords</a></code> | <code>java.lang.Number</code> | The maximum number of bad records that BigQuery can ignore when running the job. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.nullMarker">nullMarker</a></code> | <code>java.lang.String</code> | Specifies a string that represents a null value in a CSV file. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.parquetOptions">parquetOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptions">GoogleBigqueryJobLoadParquetOptions</a></code> | parquet_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.projectionFields">projectionFields</a></code> | <code>java.util.List<java.lang.String></code> | If sourceFormat is set to "DATASTORE_BACKUP", indicates which entity properties to load into BigQuery from a Cloud Datastore backup. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.quote">quote</a></code> | <code>java.lang.String</code> | The value that is used to quote data sections in a CSV file. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.schemaUpdateOptions">schemaUpdateOptions</a></code> | <code>java.util.List<java.lang.String></code> | Allows the schema of the destination table to be updated as a side effect of the load job if a schema is autodetected or supplied in the job configuration. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.skipLeadingRows">skipLeadingRows</a></code> | <code>java.lang.Number</code> | The number of rows at the top of a CSV file that BigQuery will skip when loading the data. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.sourceFormat">sourceFormat</a></code> | <code>java.lang.String</code> | The format of the data files. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.timePartitioning">timePartitioning</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioning">GoogleBigqueryJobLoadTimePartitioning</a></code> | time_partitioning block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.writeDisposition">writeDisposition</a></code> | <code>java.lang.String</code> | Specifies the action that occurs if the destination table already exists. |

---

##### `destinationTable`<sup>Required</sup> <a name="destinationTable" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.destinationTable"></a>

```java
public GoogleBigqueryJobLoadDestinationTable getDestinationTable();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTable">GoogleBigqueryJobLoadDestinationTable</a>

destination_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#destination_table GoogleBigqueryJob#destination_table}

---

##### `sourceUris`<sup>Required</sup> <a name="sourceUris" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.sourceUris"></a>

```java
public java.util.List<java.lang.String> getSourceUris();
```

- *Type:* java.util.List<java.lang.String>

The fully-qualified URIs that point to your data in Google Cloud.

For Google Cloud Storage URIs: Each URI can contain one '*' wildcard character
and it must come after the 'bucket' name. Size limits related to load jobs apply
to external data sources. For Google Cloud Bigtable URIs: Exactly one URI can be
specified and it has be a fully specified and valid HTTPS URL for a Google Cloud Bigtable table.
For Google Cloud Datastore backups: Exactly one URI can be specified. Also, the '*' wildcard character is not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#source_uris GoogleBigqueryJob#source_uris}

---

##### `allowJaggedRows`<sup>Optional</sup> <a name="allowJaggedRows" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.allowJaggedRows"></a>

```java
public java.lang.Object getAllowJaggedRows();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Accept rows that are missing trailing optional columns.

The missing values are treated as nulls.
If false, records with missing trailing columns are treated as bad records, and if there are too many bad records,
an invalid error is returned in the job result. The default value is false. Only applicable to CSV, ignored for other formats.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#allow_jagged_rows GoogleBigqueryJob#allow_jagged_rows}

---

##### `allowQuotedNewlines`<sup>Optional</sup> <a name="allowQuotedNewlines" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.allowQuotedNewlines"></a>

```java
public java.lang.Object getAllowQuotedNewlines();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file.

The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#allow_quoted_newlines GoogleBigqueryJob#allow_quoted_newlines}

---

##### `autodetect`<sup>Optional</sup> <a name="autodetect" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.autodetect"></a>

```java
public java.lang.Object getAutodetect();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates if we should automatically infer the options and schema for CSV and JSON sources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#autodetect GoogleBigqueryJob#autodetect}

---

##### `createDisposition`<sup>Optional</sup> <a name="createDisposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.createDisposition"></a>

```java
public java.lang.String getCreateDisposition();
```

- *Type:* java.lang.String

Specifies whether the job is allowed to create new tables.

The following values are supported:
CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table.
CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result.
Creation, truncation and append actions occur as one atomic update upon job completion Default value: "CREATE_IF_NEEDED" Possible values: ["CREATE_IF_NEEDED", "CREATE_NEVER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#create_disposition GoogleBigqueryJob#create_disposition}

---

##### `destinationEncryptionConfiguration`<sup>Optional</sup> <a name="destinationEncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.destinationEncryptionConfiguration"></a>

```java
public GoogleBigqueryJobLoadDestinationEncryptionConfiguration getDestinationEncryptionConfiguration();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfiguration">GoogleBigqueryJobLoadDestinationEncryptionConfiguration</a>

destination_encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#destination_encryption_configuration GoogleBigqueryJob#destination_encryption_configuration}

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.encoding"></a>

```java
public java.lang.String getEncoding();
```

- *Type:* java.lang.String

The character encoding of the data.

The supported values are UTF-8 or ISO-8859-1.
The default value is UTF-8. BigQuery decodes the data after the raw, binary data
has been split using the values of the quote and fieldDelimiter properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#encoding GoogleBigqueryJob#encoding}

---

##### `fieldDelimiter`<sup>Optional</sup> <a name="fieldDelimiter" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.fieldDelimiter"></a>

```java
public java.lang.String getFieldDelimiter();
```

- *Type:* java.lang.String

The separator for fields in a CSV file.

The separator can be any ISO-8859-1 single-byte character.
To use a character in the range 128-255, you must encode the character as UTF8. BigQuery converts
the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the
data in its raw, binary state. BigQuery also supports the escape sequence "\t" to specify a tab separator.
The default value is a comma (',').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#field_delimiter GoogleBigqueryJob#field_delimiter}

---

##### `ignoreUnknownValues`<sup>Optional</sup> <a name="ignoreUnknownValues" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.ignoreUnknownValues"></a>

```java
public java.lang.Object getIgnoreUnknownValues();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates if BigQuery should allow extra values that are not represented in the table schema.

If true, the extra values are ignored. If false, records with extra columns are treated as bad records,
and if there are too many bad records, an invalid error is returned in the job result.
The default value is false. The sourceFormat property determines what BigQuery treats as an extra value:
CSV: Trailing columns
JSON: Named values that don't match any column names

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#ignore_unknown_values GoogleBigqueryJob#ignore_unknown_values}

---

##### `jsonExtension`<sup>Optional</sup> <a name="jsonExtension" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.jsonExtension"></a>

```java
public java.lang.String getJsonExtension();
```

- *Type:* java.lang.String

If sourceFormat is set to newline-delimited JSON, indicates whether it should be processed as a JSON variant such as GeoJSON.

For a sourceFormat other than JSON, omit this field. If the sourceFormat is newline-delimited JSON: - for newline-delimited
GeoJSON: set to GEOJSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#json_extension GoogleBigqueryJob#json_extension}

---

##### `maxBadRecords`<sup>Optional</sup> <a name="maxBadRecords" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.maxBadRecords"></a>

```java
public java.lang.Number getMaxBadRecords();
```

- *Type:* java.lang.Number

The maximum number of bad records that BigQuery can ignore when running the job.

If the number of bad records exceeds this value,
an invalid error is returned in the job result. The default value is 0, which requires that all records are valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#max_bad_records GoogleBigqueryJob#max_bad_records}

---

##### `nullMarker`<sup>Optional</sup> <a name="nullMarker" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.nullMarker"></a>

```java
public java.lang.String getNullMarker();
```

- *Type:* java.lang.String

Specifies a string that represents a null value in a CSV file.

For example, if you specify "\N", BigQuery interprets "\N" as a null value
when loading a CSV file. The default value is the empty string. If you set this property to a custom value, BigQuery throws an error if an
empty string is present for all data types except for STRING and BYTE. For STRING and BYTE columns, BigQuery interprets the empty string as
an empty value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#null_marker GoogleBigqueryJob#null_marker}

---

##### `parquetOptions`<sup>Optional</sup> <a name="parquetOptions" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.parquetOptions"></a>

```java
public GoogleBigqueryJobLoadParquetOptions getParquetOptions();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptions">GoogleBigqueryJobLoadParquetOptions</a>

parquet_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#parquet_options GoogleBigqueryJob#parquet_options}

---

##### `projectionFields`<sup>Optional</sup> <a name="projectionFields" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.projectionFields"></a>

```java
public java.util.List<java.lang.String> getProjectionFields();
```

- *Type:* java.util.List<java.lang.String>

If sourceFormat is set to "DATASTORE_BACKUP", indicates which entity properties to load into BigQuery from a Cloud Datastore backup.

Property names are case sensitive and must be top-level properties. If no properties are specified, BigQuery loads all properties.
If any named property isn't found in the Cloud Datastore backup, an invalid error is returned in the job result.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#projection_fields GoogleBigqueryJob#projection_fields}

---

##### `quote`<sup>Optional</sup> <a name="quote" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.quote"></a>

```java
public java.lang.String getQuote();
```

- *Type:* java.lang.String

The value that is used to quote data sections in a CSV file.

BigQuery converts the string to ISO-8859-1 encoding,
and then uses the first byte of the encoded string to split the data in its raw, binary state.
The default value is a double-quote ('"'). If your data does not contain quoted sections, set the property value to an empty string.
If your data contains quoted newline characters, you must also set the allowQuotedNewlines property to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#quote GoogleBigqueryJob#quote}

---

##### `schemaUpdateOptions`<sup>Optional</sup> <a name="schemaUpdateOptions" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.schemaUpdateOptions"></a>

```java
public java.util.List<java.lang.String> getSchemaUpdateOptions();
```

- *Type:* java.util.List<java.lang.String>

Allows the schema of the destination table to be updated as a side effect of the load job if a schema is autodetected or supplied in the job configuration.

Schema update options are supported in two cases: when writeDisposition is WRITE_APPEND;
when writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table, specified by partition decorators.
For normal tables, WRITE_TRUNCATE will always overwrite the schema. One or more of the following values are specified:
ALLOW_FIELD_ADDITION: allow adding a nullable field to the schema.
ALLOW_FIELD_RELAXATION: allow relaxing a required field in the original schema to nullable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#schema_update_options GoogleBigqueryJob#schema_update_options}

---

##### `skipLeadingRows`<sup>Optional</sup> <a name="skipLeadingRows" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.skipLeadingRows"></a>

```java
public java.lang.Number getSkipLeadingRows();
```

- *Type:* java.lang.Number

The number of rows at the top of a CSV file that BigQuery will skip when loading the data.

The default value is 0. This property is useful if you have header rows in the file that should be skipped.
When autodetect is on, the behavior is the following:
skipLeadingRows unspecified - Autodetect tries to detect headers in the first row. If they are not detected,
the row is read as data. Otherwise data is read starting from the second row.
skipLeadingRows is 0 - Instructs autodetect that there are no headers and data should be read starting from the first row.
skipLeadingRows = N > 0 - Autodetect skips N-1 rows and tries to detect headers in row N. If headers are not detected,
row N is just skipped. Otherwise row N is used to extract column names for the detected schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#skip_leading_rows GoogleBigqueryJob#skip_leading_rows}

---

##### `sourceFormat`<sup>Optional</sup> <a name="sourceFormat" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.sourceFormat"></a>

```java
public java.lang.String getSourceFormat();
```

- *Type:* java.lang.String

The format of the data files.

For CSV files, specify "CSV". For datastore backups, specify "DATASTORE_BACKUP".
For newline-delimited JSON, specify "NEWLINE_DELIMITED_JSON". For Avro, specify "AVRO". For parquet, specify "PARQUET".
For orc, specify "ORC". [Beta] For Bigtable, specify "BIGTABLE".
The default value is CSV.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#source_format GoogleBigqueryJob#source_format}

---

##### `timePartitioning`<sup>Optional</sup> <a name="timePartitioning" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.timePartitioning"></a>

```java
public GoogleBigqueryJobLoadTimePartitioning getTimePartitioning();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioning">GoogleBigqueryJobLoadTimePartitioning</a>

time_partitioning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#time_partitioning GoogleBigqueryJob#time_partitioning}

---

##### `writeDisposition`<sup>Optional</sup> <a name="writeDisposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.writeDisposition"></a>

```java
public java.lang.String getWriteDisposition();
```

- *Type:* java.lang.String

Specifies the action that occurs if the destination table already exists.

The following values are supported:
WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result.
WRITE_APPEND: If the table already exists, BigQuery appends the data to the table.
WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result.
Each action is atomic and only occurs if BigQuery is able to complete the job successfully.
Creation, truncation and append actions occur as one atomic update upon job completion. Default value: "WRITE_EMPTY" Possible values: ["WRITE_TRUNCATE", "WRITE_APPEND", "WRITE_EMPTY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#write_disposition GoogleBigqueryJob#write_disposition}

---

### GoogleBigqueryJobLoadDestinationEncryptionConfiguration <a name="GoogleBigqueryJobLoadDestinationEncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJobLoadDestinationEncryptionConfiguration;

GoogleBigqueryJobLoadDestinationEncryptionConfiguration.builder()
    .kmsKeyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfiguration.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table. |

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfiguration.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table.

The BigQuery Service Account associated with your project requires access to this encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#kms_key_name GoogleBigqueryJob#kms_key_name}

---

### GoogleBigqueryJobLoadDestinationTable <a name="GoogleBigqueryJobLoadDestinationTable" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTable.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJobLoadDestinationTable;

GoogleBigqueryJobLoadDestinationTable.builder()
    .tableId(java.lang.String)
//  .datasetId(java.lang.String)
//  .projectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTable.property.tableId">tableId</a></code> | <code>java.lang.String</code> | The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTable.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTable.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the project containing this table. |

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTable.property.tableId"></a>

```java
public java.lang.String getTableId();
```

- *Type:* java.lang.String

The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#table_id GoogleBigqueryJob#table_id}

---

##### `datasetId`<sup>Optional</sup> <a name="datasetId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTable.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#dataset_id GoogleBigqueryJob#dataset_id}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTable.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#project_id GoogleBigqueryJob#project_id}

---

### GoogleBigqueryJobLoadParquetOptions <a name="GoogleBigqueryJobLoadParquetOptions" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJobLoadParquetOptions;

GoogleBigqueryJobLoadParquetOptions.builder()
//  .enableListInference(java.lang.Boolean)
//  .enableListInference(IResolvable)
//  .enumAsString(java.lang.Boolean)
//  .enumAsString(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptions.property.enableListInference">enableListInference</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If sourceFormat is set to PARQUET, indicates whether to use schema inference specifically for Parquet LIST logical type. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptions.property.enumAsString">enumAsString</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If sourceFormat is set to PARQUET, indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default. |

---

##### `enableListInference`<sup>Optional</sup> <a name="enableListInference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptions.property.enableListInference"></a>

```java
public java.lang.Object getEnableListInference();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If sourceFormat is set to PARQUET, indicates whether to use schema inference specifically for Parquet LIST logical type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#enable_list_inference GoogleBigqueryJob#enable_list_inference}

---

##### `enumAsString`<sup>Optional</sup> <a name="enumAsString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptions.property.enumAsString"></a>

```java
public java.lang.Object getEnumAsString();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If sourceFormat is set to PARQUET, indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#enum_as_string GoogleBigqueryJob#enum_as_string}

---

### GoogleBigqueryJobLoadTimePartitioning <a name="GoogleBigqueryJobLoadTimePartitioning" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioning.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJobLoadTimePartitioning;

GoogleBigqueryJobLoadTimePartitioning.builder()
    .type(java.lang.String)
//  .expirationMs(java.lang.String)
//  .field(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioning.property.type">type</a></code> | <code>java.lang.String</code> | The only type supported is DAY, which will generate one partition per day. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioning.property.expirationMs">expirationMs</a></code> | <code>java.lang.String</code> | Number of milliseconds for which to keep the storage for a partition. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioning.property.field">field</a></code> | <code>java.lang.String</code> | If not set, the table is partitioned by pseudo column '_PARTITIONTIME'; |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioning.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The only type supported is DAY, which will generate one partition per day.

Providing an empty string used to cause an error,
but in OnePlatform the field will be treated as unset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#type GoogleBigqueryJob#type}

---

##### `expirationMs`<sup>Optional</sup> <a name="expirationMs" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioning.property.expirationMs"></a>

```java
public java.lang.String getExpirationMs();
```

- *Type:* java.lang.String

Number of milliseconds for which to keep the storage for a partition.

A wrapper is used here because 0 is an invalid value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#expiration_ms GoogleBigqueryJob#expiration_ms}

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioning.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

If not set, the table is partitioned by pseudo column '_PARTITIONTIME';

if set, the table is partitioned by this field.
The field must be a top-level TIMESTAMP or DATE field. Its mode must be NULLABLE or REQUIRED.
A wrapper is used here because an empty string is an invalid value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#field GoogleBigqueryJob#field}

---

### GoogleBigqueryJobQuery <a name="GoogleBigqueryJobQuery" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJobQuery;

GoogleBigqueryJobQuery.builder()
    .query(java.lang.String)
//  .allowLargeResults(java.lang.Boolean)
//  .allowLargeResults(IResolvable)
//  .createDisposition(java.lang.String)
//  .defaultDataset(GoogleBigqueryJobQueryDefaultDataset)
//  .destinationEncryptionConfiguration(GoogleBigqueryJobQueryDestinationEncryptionConfiguration)
//  .destinationTable(GoogleBigqueryJobQueryDestinationTable)
//  .flattenResults(java.lang.Boolean)
//  .flattenResults(IResolvable)
//  .maximumBillingTier(java.lang.Number)
//  .maximumBytesBilled(java.lang.String)
//  .parameterMode(java.lang.String)
//  .priority(java.lang.String)
//  .schemaUpdateOptions(java.util.List<java.lang.String>)
//  .scriptOptions(GoogleBigqueryJobQueryScriptOptions)
//  .useLegacySql(java.lang.Boolean)
//  .useLegacySql(IResolvable)
//  .useQueryCache(java.lang.Boolean)
//  .useQueryCache(IResolvable)
//  .userDefinedFunctionResources(IResolvable)
//  .userDefinedFunctionResources(java.util.List<GoogleBigqueryJobQueryUserDefinedFunctionResources>)
//  .writeDisposition(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.query">query</a></code> | <code>java.lang.String</code> | SQL query text to execute. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.allowLargeResults">allowLargeResults</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true and query uses legacy SQL dialect, allows the query to produce arbitrarily large result tables at a slight cost in performance. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.createDisposition">createDisposition</a></code> | <code>java.lang.String</code> | Specifies whether the job is allowed to create new tables. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.defaultDataset">defaultDataset</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDataset">GoogleBigqueryJobQueryDefaultDataset</a></code> | default_dataset block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.destinationEncryptionConfiguration">destinationEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfiguration">GoogleBigqueryJobQueryDestinationEncryptionConfiguration</a></code> | destination_encryption_configuration block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.destinationTable">destinationTable</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTable">GoogleBigqueryJobQueryDestinationTable</a></code> | destination_table block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.flattenResults">flattenResults</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true and query uses legacy SQL dialect, flattens all nested and repeated fields in the query results. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.maximumBillingTier">maximumBillingTier</a></code> | <code>java.lang.Number</code> | Limits the billing tier for this job. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.maximumBytesBilled">maximumBytesBilled</a></code> | <code>java.lang.String</code> | Limits the bytes billed for this job. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.parameterMode">parameterMode</a></code> | <code>java.lang.String</code> | Standard SQL only. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.priority">priority</a></code> | <code>java.lang.String</code> | Specifies a priority for the query. Default value: "INTERACTIVE" Possible values: ["INTERACTIVE", "BATCH"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.schemaUpdateOptions">schemaUpdateOptions</a></code> | <code>java.util.List<java.lang.String></code> | Allows the schema of the destination table to be updated as a side effect of the query job. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.scriptOptions">scriptOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptions">GoogleBigqueryJobQueryScriptOptions</a></code> | script_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.useLegacySql">useLegacySql</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether to use BigQuery's legacy SQL dialect for this query. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.useQueryCache">useQueryCache</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to look for the result in the query cache. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.userDefinedFunctionResources">userDefinedFunctionResources</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResources">GoogleBigqueryJobQueryUserDefinedFunctionResources</a>></code> | user_defined_function_resources block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.writeDisposition">writeDisposition</a></code> | <code>java.lang.String</code> | Specifies the action that occurs if the destination table already exists. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

SQL query text to execute.

The useLegacySql field can be used to indicate whether the query uses legacy SQL or standard SQL.
*NOTE*: queries containing [DML language](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language)
('DELETE', 'UPDATE', 'MERGE', 'INSERT') must specify 'create_disposition = ""' and 'write_disposition = ""'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#query GoogleBigqueryJob#query}

---

##### `allowLargeResults`<sup>Optional</sup> <a name="allowLargeResults" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.allowLargeResults"></a>

```java
public java.lang.Object getAllowLargeResults();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true and query uses legacy SQL dialect, allows the query to produce arbitrarily large result tables at a slight cost in performance.

Requires destinationTable to be set. For standard SQL queries, this flag is ignored and large results are always allowed.
However, you must still set destinationTable when result size exceeds the allowed maximum response size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#allow_large_results GoogleBigqueryJob#allow_large_results}

---

##### `createDisposition`<sup>Optional</sup> <a name="createDisposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.createDisposition"></a>

```java
public java.lang.String getCreateDisposition();
```

- *Type:* java.lang.String

Specifies whether the job is allowed to create new tables.

The following values are supported:
CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table.
CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result.
Creation, truncation and append actions occur as one atomic update upon job completion Default value: "CREATE_IF_NEEDED" Possible values: ["CREATE_IF_NEEDED", "CREATE_NEVER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#create_disposition GoogleBigqueryJob#create_disposition}

---

##### `defaultDataset`<sup>Optional</sup> <a name="defaultDataset" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.defaultDataset"></a>

```java
public GoogleBigqueryJobQueryDefaultDataset getDefaultDataset();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDataset">GoogleBigqueryJobQueryDefaultDataset</a>

default_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#default_dataset GoogleBigqueryJob#default_dataset}

---

##### `destinationEncryptionConfiguration`<sup>Optional</sup> <a name="destinationEncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.destinationEncryptionConfiguration"></a>

```java
public GoogleBigqueryJobQueryDestinationEncryptionConfiguration getDestinationEncryptionConfiguration();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfiguration">GoogleBigqueryJobQueryDestinationEncryptionConfiguration</a>

destination_encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#destination_encryption_configuration GoogleBigqueryJob#destination_encryption_configuration}

---

##### `destinationTable`<sup>Optional</sup> <a name="destinationTable" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.destinationTable"></a>

```java
public GoogleBigqueryJobQueryDestinationTable getDestinationTable();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTable">GoogleBigqueryJobQueryDestinationTable</a>

destination_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#destination_table GoogleBigqueryJob#destination_table}

---

##### `flattenResults`<sup>Optional</sup> <a name="flattenResults" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.flattenResults"></a>

```java
public java.lang.Object getFlattenResults();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true and query uses legacy SQL dialect, flattens all nested and repeated fields in the query results.

allowLargeResults must be true if this is set to false. For standard SQL queries, this flag is ignored and results are never flattened.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#flatten_results GoogleBigqueryJob#flatten_results}

---

##### `maximumBillingTier`<sup>Optional</sup> <a name="maximumBillingTier" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.maximumBillingTier"></a>

```java
public java.lang.Number getMaximumBillingTier();
```

- *Type:* java.lang.Number

Limits the billing tier for this job.

Queries that have resource usage beyond this tier will fail (without incurring a charge).
If unspecified, this will be set to your project default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#maximum_billing_tier GoogleBigqueryJob#maximum_billing_tier}

---

##### `maximumBytesBilled`<sup>Optional</sup> <a name="maximumBytesBilled" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.maximumBytesBilled"></a>

```java
public java.lang.String getMaximumBytesBilled();
```

- *Type:* java.lang.String

Limits the bytes billed for this job.

Queries that will have bytes billed beyond this limit will fail (without incurring a charge).
If unspecified, this will be set to your project default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#maximum_bytes_billed GoogleBigqueryJob#maximum_bytes_billed}

---

##### `parameterMode`<sup>Optional</sup> <a name="parameterMode" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.parameterMode"></a>

```java
public java.lang.String getParameterMode();
```

- *Type:* java.lang.String

Standard SQL only.

Set to POSITIONAL to use positional (?) query parameters or to NAMED to use named (@myparam) query parameters in this query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#parameter_mode GoogleBigqueryJob#parameter_mode}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.priority"></a>

```java
public java.lang.String getPriority();
```

- *Type:* java.lang.String

Specifies a priority for the query. Default value: "INTERACTIVE" Possible values: ["INTERACTIVE", "BATCH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#priority GoogleBigqueryJob#priority}

---

##### `schemaUpdateOptions`<sup>Optional</sup> <a name="schemaUpdateOptions" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.schemaUpdateOptions"></a>

```java
public java.util.List<java.lang.String> getSchemaUpdateOptions();
```

- *Type:* java.util.List<java.lang.String>

Allows the schema of the destination table to be updated as a side effect of the query job.

Schema update options are supported in two cases: when writeDisposition is WRITE_APPEND;
when writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table,
specified by partition decorators. For normal tables, WRITE_TRUNCATE will always overwrite the schema.
One or more of the following values are specified:
ALLOW_FIELD_ADDITION: allow adding a nullable field to the schema.
ALLOW_FIELD_RELAXATION: allow relaxing a required field in the original schema to nullable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#schema_update_options GoogleBigqueryJob#schema_update_options}

---

##### `scriptOptions`<sup>Optional</sup> <a name="scriptOptions" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.scriptOptions"></a>

```java
public GoogleBigqueryJobQueryScriptOptions getScriptOptions();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptions">GoogleBigqueryJobQueryScriptOptions</a>

script_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#script_options GoogleBigqueryJob#script_options}

---

##### `useLegacySql`<sup>Optional</sup> <a name="useLegacySql" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.useLegacySql"></a>

```java
public java.lang.Object getUseLegacySql();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether to use BigQuery's legacy SQL dialect for this query.

The default value is true.
If set to false, the query will use BigQuery's standard SQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#use_legacy_sql GoogleBigqueryJob#use_legacy_sql}

---

##### `useQueryCache`<sup>Optional</sup> <a name="useQueryCache" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.useQueryCache"></a>

```java
public java.lang.Object getUseQueryCache();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to look for the result in the query cache.

The query cache is a best-effort cache that will be flushed whenever
tables in the query are modified. Moreover, the query cache is only available when a query does not have a destination table specified.
The default value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#use_query_cache GoogleBigqueryJob#use_query_cache}

---

##### `userDefinedFunctionResources`<sup>Optional</sup> <a name="userDefinedFunctionResources" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.userDefinedFunctionResources"></a>

```java
public java.lang.Object getUserDefinedFunctionResources();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResources">GoogleBigqueryJobQueryUserDefinedFunctionResources</a>>

user_defined_function_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#user_defined_function_resources GoogleBigqueryJob#user_defined_function_resources}

---

##### `writeDisposition`<sup>Optional</sup> <a name="writeDisposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.writeDisposition"></a>

```java
public java.lang.String getWriteDisposition();
```

- *Type:* java.lang.String

Specifies the action that occurs if the destination table already exists.

The following values are supported:
WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result.
WRITE_APPEND: If the table already exists, BigQuery appends the data to the table.
WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result.
Each action is atomic and only occurs if BigQuery is able to complete the job successfully.
Creation, truncation and append actions occur as one atomic update upon job completion. Default value: "WRITE_EMPTY" Possible values: ["WRITE_TRUNCATE", "WRITE_APPEND", "WRITE_EMPTY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#write_disposition GoogleBigqueryJob#write_disposition}

---

### GoogleBigqueryJobQueryDefaultDataset <a name="GoogleBigqueryJobQueryDefaultDataset" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDataset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDataset.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJobQueryDefaultDataset;

GoogleBigqueryJobQueryDefaultDataset.builder()
    .datasetId(java.lang.String)
//  .projectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDataset.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | The dataset. Can be specified '{{dataset_id}}' if 'project_id' is also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}' if not. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDataset.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the project containing this table. |

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDataset.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

The dataset. Can be specified '{{dataset_id}}' if 'project_id' is also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}' if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#dataset_id GoogleBigqueryJob#dataset_id}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDataset.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#project_id GoogleBigqueryJob#project_id}

---

### GoogleBigqueryJobQueryDestinationEncryptionConfiguration <a name="GoogleBigqueryJobQueryDestinationEncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJobQueryDestinationEncryptionConfiguration;

GoogleBigqueryJobQueryDestinationEncryptionConfiguration.builder()
    .kmsKeyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfiguration.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table. |

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfiguration.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table.

The BigQuery Service Account associated with your project requires access to this encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#kms_key_name GoogleBigqueryJob#kms_key_name}

---

### GoogleBigqueryJobQueryDestinationTable <a name="GoogleBigqueryJobQueryDestinationTable" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTable.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJobQueryDestinationTable;

GoogleBigqueryJobQueryDestinationTable.builder()
    .tableId(java.lang.String)
//  .datasetId(java.lang.String)
//  .projectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTable.property.tableId">tableId</a></code> | <code>java.lang.String</code> | The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTable.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTable.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the project containing this table. |

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTable.property.tableId"></a>

```java
public java.lang.String getTableId();
```

- *Type:* java.lang.String

The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#table_id GoogleBigqueryJob#table_id}

---

##### `datasetId`<sup>Optional</sup> <a name="datasetId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTable.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#dataset_id GoogleBigqueryJob#dataset_id}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTable.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#project_id GoogleBigqueryJob#project_id}

---

### GoogleBigqueryJobQueryScriptOptions <a name="GoogleBigqueryJobQueryScriptOptions" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJobQueryScriptOptions;

GoogleBigqueryJobQueryScriptOptions.builder()
//  .keyResultStatement(java.lang.String)
//  .statementByteBudget(java.lang.String)
//  .statementTimeoutMs(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptions.property.keyResultStatement">keyResultStatement</a></code> | <code>java.lang.String</code> | Determines which statement in the script represents the "key result", used to populate the schema and query results of the script job. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptions.property.statementByteBudget">statementByteBudget</a></code> | <code>java.lang.String</code> | Limit on the number of bytes billed per statement. Exceeding this budget results in an error. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptions.property.statementTimeoutMs">statementTimeoutMs</a></code> | <code>java.lang.String</code> | Timeout period for each statement in a script. |

---

##### `keyResultStatement`<sup>Optional</sup> <a name="keyResultStatement" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptions.property.keyResultStatement"></a>

```java
public java.lang.String getKeyResultStatement();
```

- *Type:* java.lang.String

Determines which statement in the script represents the "key result", used to populate the schema and query results of the script job.

Possible values: ["LAST", "FIRST_SELECT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#key_result_statement GoogleBigqueryJob#key_result_statement}

---

##### `statementByteBudget`<sup>Optional</sup> <a name="statementByteBudget" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptions.property.statementByteBudget"></a>

```java
public java.lang.String getStatementByteBudget();
```

- *Type:* java.lang.String

Limit on the number of bytes billed per statement. Exceeding this budget results in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#statement_byte_budget GoogleBigqueryJob#statement_byte_budget}

---

##### `statementTimeoutMs`<sup>Optional</sup> <a name="statementTimeoutMs" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptions.property.statementTimeoutMs"></a>

```java
public java.lang.String getStatementTimeoutMs();
```

- *Type:* java.lang.String

Timeout period for each statement in a script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#statement_timeout_ms GoogleBigqueryJob#statement_timeout_ms}

---

### GoogleBigqueryJobQueryUserDefinedFunctionResources <a name="GoogleBigqueryJobQueryUserDefinedFunctionResources" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJobQueryUserDefinedFunctionResources;

GoogleBigqueryJobQueryUserDefinedFunctionResources.builder()
//  .inlineCode(java.lang.String)
//  .resourceUri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResources.property.inlineCode">inlineCode</a></code> | <code>java.lang.String</code> | An inline resource that contains code for a user-defined function (UDF). |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResources.property.resourceUri">resourceUri</a></code> | <code>java.lang.String</code> | A code resource to load from a Google Cloud Storage URI (gs://bucket/path). |

---

##### `inlineCode`<sup>Optional</sup> <a name="inlineCode" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResources.property.inlineCode"></a>

```java
public java.lang.String getInlineCode();
```

- *Type:* java.lang.String

An inline resource that contains code for a user-defined function (UDF).

Providing a inline code resource is equivalent to providing a URI for a file containing the same code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#inline_code GoogleBigqueryJob#inline_code}

---

##### `resourceUri`<sup>Optional</sup> <a name="resourceUri" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResources.property.resourceUri"></a>

```java
public java.lang.String getResourceUri();
```

- *Type:* java.lang.String

A code resource to load from a Google Cloud Storage URI (gs://bucket/path).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#resource_uri GoogleBigqueryJob#resource_uri}

---

### GoogleBigqueryJobStatus <a name="GoogleBigqueryJobStatus" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatus.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJobStatus;

GoogleBigqueryJobStatus.builder()
    .build();
```


### GoogleBigqueryJobStatusErrorResult <a name="GoogleBigqueryJobStatusErrorResult" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResult.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJobStatusErrorResult;

GoogleBigqueryJobStatusErrorResult.builder()
    .build();
```


### GoogleBigqueryJobStatusErrors <a name="GoogleBigqueryJobStatusErrors" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrors.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJobStatusErrors;

GoogleBigqueryJobStatusErrors.builder()
    .build();
```


### GoogleBigqueryJobTimeouts <a name="GoogleBigqueryJobTimeouts" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJobTimeouts;

GoogleBigqueryJobTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#create GoogleBigqueryJob#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#delete GoogleBigqueryJob#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#update GoogleBigqueryJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#create GoogleBigqueryJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#delete GoogleBigqueryJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_job#update GoogleBigqueryJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference <a name="GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference;

new GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.kmsKeyVersion">kmsKeyVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfiguration">GoogleBigqueryJobCopyDestinationEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyVersion`<sup>Required</sup> <a name="kmsKeyVersion" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.kmsKeyVersion"></a>

```java
public java.lang.String getKmsKeyVersion();
```

- *Type:* java.lang.String

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.kmsKeyNameInput"></a>

```java
public java.lang.String getKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.internalValue"></a>

```java
public GoogleBigqueryJobCopyDestinationEncryptionConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfiguration">GoogleBigqueryJobCopyDestinationEncryptionConfiguration</a>

---


### GoogleBigqueryJobCopyDestinationTableOutputReference <a name="GoogleBigqueryJobCopyDestinationTableOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJobCopyDestinationTableOutputReference;

new GoogleBigqueryJobCopyDestinationTableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.resetDatasetId">resetDatasetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatasetId` <a name="resetDatasetId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.resetDatasetId"></a>

```java
public void resetDatasetId()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.resetProjectId"></a>

```java
public void resetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.tableIdInput">tableIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.tableId">tableId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTable">GoogleBigqueryJobCopyDestinationTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.datasetIdInput"></a>

```java
public java.lang.String getDatasetIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `tableIdInput`<sup>Optional</sup> <a name="tableIdInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.tableIdInput"></a>

```java
public java.lang.String getTableIdInput();
```

- *Type:* java.lang.String

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.tableId"></a>

```java
public java.lang.String getTableId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.internalValue"></a>

```java
public GoogleBigqueryJobCopyDestinationTable getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTable">GoogleBigqueryJobCopyDestinationTable</a>

---


### GoogleBigqueryJobCopyOutputReference <a name="GoogleBigqueryJobCopyOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJobCopyOutputReference;

new GoogleBigqueryJobCopyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.putDestinationEncryptionConfiguration">putDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.putDestinationTable">putDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.putSourceTables">putSourceTables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.resetCreateDisposition">resetCreateDisposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.resetDestinationEncryptionConfiguration">resetDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.resetDestinationTable">resetDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.resetWriteDisposition">resetWriteDisposition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinationEncryptionConfiguration` <a name="putDestinationEncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.putDestinationEncryptionConfiguration"></a>

```java
public void putDestinationEncryptionConfiguration(GoogleBigqueryJobCopyDestinationEncryptionConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.putDestinationEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfiguration">GoogleBigqueryJobCopyDestinationEncryptionConfiguration</a>

---

##### `putDestinationTable` <a name="putDestinationTable" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.putDestinationTable"></a>

```java
public void putDestinationTable(GoogleBigqueryJobCopyDestinationTable value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.putDestinationTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTable">GoogleBigqueryJobCopyDestinationTable</a>

---

##### `putSourceTables` <a name="putSourceTables" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.putSourceTables"></a>

```java
public void putSourceTables(IResolvable OR java.util.List<GoogleBigqueryJobCopySourceTables> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.putSourceTables.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTables">GoogleBigqueryJobCopySourceTables</a>>

---

##### `resetCreateDisposition` <a name="resetCreateDisposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.resetCreateDisposition"></a>

```java
public void resetCreateDisposition()
```

##### `resetDestinationEncryptionConfiguration` <a name="resetDestinationEncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.resetDestinationEncryptionConfiguration"></a>

```java
public void resetDestinationEncryptionConfiguration()
```

##### `resetDestinationTable` <a name="resetDestinationTable" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.resetDestinationTable"></a>

```java
public void resetDestinationTable()
```

##### `resetWriteDisposition` <a name="resetWriteDisposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.resetWriteDisposition"></a>

```java
public void resetWriteDisposition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.destinationEncryptionConfiguration">destinationEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference">GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.destinationTable">destinationTable</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference">GoogleBigqueryJobCopyDestinationTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.sourceTables">sourceTables</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList">GoogleBigqueryJobCopySourceTablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.createDispositionInput">createDispositionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.destinationEncryptionConfigurationInput">destinationEncryptionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfiguration">GoogleBigqueryJobCopyDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.destinationTableInput">destinationTableInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTable">GoogleBigqueryJobCopyDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.sourceTablesInput">sourceTablesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTables">GoogleBigqueryJobCopySourceTables</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.writeDispositionInput">writeDispositionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.createDisposition">createDisposition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.writeDisposition">writeDisposition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy">GoogleBigqueryJobCopy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationEncryptionConfiguration`<sup>Required</sup> <a name="destinationEncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.destinationEncryptionConfiguration"></a>

```java
public GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference getDestinationEncryptionConfiguration();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference">GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference</a>

---

##### `destinationTable`<sup>Required</sup> <a name="destinationTable" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.destinationTable"></a>

```java
public GoogleBigqueryJobCopyDestinationTableOutputReference getDestinationTable();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference">GoogleBigqueryJobCopyDestinationTableOutputReference</a>

---

##### `sourceTables`<sup>Required</sup> <a name="sourceTables" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.sourceTables"></a>

```java
public GoogleBigqueryJobCopySourceTablesList getSourceTables();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList">GoogleBigqueryJobCopySourceTablesList</a>

---

##### `createDispositionInput`<sup>Optional</sup> <a name="createDispositionInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.createDispositionInput"></a>

```java
public java.lang.String getCreateDispositionInput();
```

- *Type:* java.lang.String

---

##### `destinationEncryptionConfigurationInput`<sup>Optional</sup> <a name="destinationEncryptionConfigurationInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.destinationEncryptionConfigurationInput"></a>

```java
public GoogleBigqueryJobCopyDestinationEncryptionConfiguration getDestinationEncryptionConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfiguration">GoogleBigqueryJobCopyDestinationEncryptionConfiguration</a>

---

##### `destinationTableInput`<sup>Optional</sup> <a name="destinationTableInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.destinationTableInput"></a>

```java
public GoogleBigqueryJobCopyDestinationTable getDestinationTableInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTable">GoogleBigqueryJobCopyDestinationTable</a>

---

##### `sourceTablesInput`<sup>Optional</sup> <a name="sourceTablesInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.sourceTablesInput"></a>

```java
public java.lang.Object getSourceTablesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTables">GoogleBigqueryJobCopySourceTables</a>>

---

##### `writeDispositionInput`<sup>Optional</sup> <a name="writeDispositionInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.writeDispositionInput"></a>

```java
public java.lang.String getWriteDispositionInput();
```

- *Type:* java.lang.String

---

##### `createDisposition`<sup>Required</sup> <a name="createDisposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.createDisposition"></a>

```java
public java.lang.String getCreateDisposition();
```

- *Type:* java.lang.String

---

##### `writeDisposition`<sup>Required</sup> <a name="writeDisposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.writeDisposition"></a>

```java
public java.lang.String getWriteDisposition();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.internalValue"></a>

```java
public GoogleBigqueryJobCopy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy">GoogleBigqueryJobCopy</a>

---


### GoogleBigqueryJobCopySourceTablesList <a name="GoogleBigqueryJobCopySourceTablesList" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJobCopySourceTablesList;

new GoogleBigqueryJobCopySourceTablesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.get"></a>

```java
public GoogleBigqueryJobCopySourceTablesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTables">GoogleBigqueryJobCopySourceTables</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTables">GoogleBigqueryJobCopySourceTables</a>>

---


### GoogleBigqueryJobCopySourceTablesOutputReference <a name="GoogleBigqueryJobCopySourceTablesOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJobCopySourceTablesOutputReference;

new GoogleBigqueryJobCopySourceTablesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.resetDatasetId">resetDatasetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatasetId` <a name="resetDatasetId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.resetDatasetId"></a>

```java
public void resetDatasetId()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.resetProjectId"></a>

```java
public void resetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.tableIdInput">tableIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.tableId">tableId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTables">GoogleBigqueryJobCopySourceTables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.datasetIdInput"></a>

```java
public java.lang.String getDatasetIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `tableIdInput`<sup>Optional</sup> <a name="tableIdInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.tableIdInput"></a>

```java
public java.lang.String getTableIdInput();
```

- *Type:* java.lang.String

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.tableId"></a>

```java
public java.lang.String getTableId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTables">GoogleBigqueryJobCopySourceTables</a>

---


### GoogleBigqueryJobExtractOutputReference <a name="GoogleBigqueryJobExtractOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJobExtractOutputReference;

new GoogleBigqueryJobExtractOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.putSourceModel">putSourceModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.putSourceTable">putSourceTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.resetCompression">resetCompression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.resetDestinationFormat">resetDestinationFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.resetFieldDelimiter">resetFieldDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.resetPrintHeader">resetPrintHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.resetSourceModel">resetSourceModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.resetSourceTable">resetSourceTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.resetUseAvroLogicalTypes">resetUseAvroLogicalTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSourceModel` <a name="putSourceModel" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.putSourceModel"></a>

```java
public void putSourceModel(GoogleBigqueryJobExtractSourceModel value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.putSourceModel.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModel">GoogleBigqueryJobExtractSourceModel</a>

---

##### `putSourceTable` <a name="putSourceTable" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.putSourceTable"></a>

```java
public void putSourceTable(GoogleBigqueryJobExtractSourceTable value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.putSourceTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTable">GoogleBigqueryJobExtractSourceTable</a>

---

##### `resetCompression` <a name="resetCompression" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.resetCompression"></a>

```java
public void resetCompression()
```

##### `resetDestinationFormat` <a name="resetDestinationFormat" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.resetDestinationFormat"></a>

```java
public void resetDestinationFormat()
```

##### `resetFieldDelimiter` <a name="resetFieldDelimiter" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.resetFieldDelimiter"></a>

```java
public void resetFieldDelimiter()
```

##### `resetPrintHeader` <a name="resetPrintHeader" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.resetPrintHeader"></a>

```java
public void resetPrintHeader()
```

##### `resetSourceModel` <a name="resetSourceModel" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.resetSourceModel"></a>

```java
public void resetSourceModel()
```

##### `resetSourceTable` <a name="resetSourceTable" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.resetSourceTable"></a>

```java
public void resetSourceTable()
```

##### `resetUseAvroLogicalTypes` <a name="resetUseAvroLogicalTypes" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.resetUseAvroLogicalTypes"></a>

```java
public void resetUseAvroLogicalTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.sourceModel">sourceModel</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference">GoogleBigqueryJobExtractSourceModelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.sourceTable">sourceTable</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference">GoogleBigqueryJobExtractSourceTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.compressionInput">compressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.destinationFormatInput">destinationFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.destinationUrisInput">destinationUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.fieldDelimiterInput">fieldDelimiterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.printHeaderInput">printHeaderInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.sourceModelInput">sourceModelInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModel">GoogleBigqueryJobExtractSourceModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.sourceTableInput">sourceTableInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTable">GoogleBigqueryJobExtractSourceTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.useAvroLogicalTypesInput">useAvroLogicalTypesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.compression">compression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.destinationFormat">destinationFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.destinationUris">destinationUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.fieldDelimiter">fieldDelimiter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.printHeader">printHeader</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.useAvroLogicalTypes">useAvroLogicalTypes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract">GoogleBigqueryJobExtract</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourceModel`<sup>Required</sup> <a name="sourceModel" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.sourceModel"></a>

```java
public GoogleBigqueryJobExtractSourceModelOutputReference getSourceModel();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference">GoogleBigqueryJobExtractSourceModelOutputReference</a>

---

##### `sourceTable`<sup>Required</sup> <a name="sourceTable" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.sourceTable"></a>

```java
public GoogleBigqueryJobExtractSourceTableOutputReference getSourceTable();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference">GoogleBigqueryJobExtractSourceTableOutputReference</a>

---

##### `compressionInput`<sup>Optional</sup> <a name="compressionInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.compressionInput"></a>

```java
public java.lang.String getCompressionInput();
```

- *Type:* java.lang.String

---

##### `destinationFormatInput`<sup>Optional</sup> <a name="destinationFormatInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.destinationFormatInput"></a>

```java
public java.lang.String getDestinationFormatInput();
```

- *Type:* java.lang.String

---

##### `destinationUrisInput`<sup>Optional</sup> <a name="destinationUrisInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.destinationUrisInput"></a>

```java
public java.util.List<java.lang.String> getDestinationUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fieldDelimiterInput`<sup>Optional</sup> <a name="fieldDelimiterInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.fieldDelimiterInput"></a>

```java
public java.lang.String getFieldDelimiterInput();
```

- *Type:* java.lang.String

---

##### `printHeaderInput`<sup>Optional</sup> <a name="printHeaderInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.printHeaderInput"></a>

```java
public java.lang.Object getPrintHeaderInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sourceModelInput`<sup>Optional</sup> <a name="sourceModelInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.sourceModelInput"></a>

```java
public GoogleBigqueryJobExtractSourceModel getSourceModelInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModel">GoogleBigqueryJobExtractSourceModel</a>

---

##### `sourceTableInput`<sup>Optional</sup> <a name="sourceTableInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.sourceTableInput"></a>

```java
public GoogleBigqueryJobExtractSourceTable getSourceTableInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTable">GoogleBigqueryJobExtractSourceTable</a>

---

##### `useAvroLogicalTypesInput`<sup>Optional</sup> <a name="useAvroLogicalTypesInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.useAvroLogicalTypesInput"></a>

```java
public java.lang.Object getUseAvroLogicalTypesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.compression"></a>

```java
public java.lang.String getCompression();
```

- *Type:* java.lang.String

---

##### `destinationFormat`<sup>Required</sup> <a name="destinationFormat" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.destinationFormat"></a>

```java
public java.lang.String getDestinationFormat();
```

- *Type:* java.lang.String

---

##### `destinationUris`<sup>Required</sup> <a name="destinationUris" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.destinationUris"></a>

```java
public java.util.List<java.lang.String> getDestinationUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fieldDelimiter`<sup>Required</sup> <a name="fieldDelimiter" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.fieldDelimiter"></a>

```java
public java.lang.String getFieldDelimiter();
```

- *Type:* java.lang.String

---

##### `printHeader`<sup>Required</sup> <a name="printHeader" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.printHeader"></a>

```java
public java.lang.Object getPrintHeader();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `useAvroLogicalTypes`<sup>Required</sup> <a name="useAvroLogicalTypes" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.useAvroLogicalTypes"></a>

```java
public java.lang.Object getUseAvroLogicalTypes();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.internalValue"></a>

```java
public GoogleBigqueryJobExtract getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract">GoogleBigqueryJobExtract</a>

---


### GoogleBigqueryJobExtractSourceModelOutputReference <a name="GoogleBigqueryJobExtractSourceModelOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJobExtractSourceModelOutputReference;

new GoogleBigqueryJobExtractSourceModelOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.modelIdInput">modelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.modelId">modelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModel">GoogleBigqueryJobExtractSourceModel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.datasetIdInput"></a>

```java
public java.lang.String getDatasetIdInput();
```

- *Type:* java.lang.String

---

##### `modelIdInput`<sup>Optional</sup> <a name="modelIdInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.modelIdInput"></a>

```java
public java.lang.String getModelIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.modelId"></a>

```java
public java.lang.String getModelId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.internalValue"></a>

```java
public GoogleBigqueryJobExtractSourceModel getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModel">GoogleBigqueryJobExtractSourceModel</a>

---


### GoogleBigqueryJobExtractSourceTableOutputReference <a name="GoogleBigqueryJobExtractSourceTableOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJobExtractSourceTableOutputReference;

new GoogleBigqueryJobExtractSourceTableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.resetDatasetId">resetDatasetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatasetId` <a name="resetDatasetId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.resetDatasetId"></a>

```java
public void resetDatasetId()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.resetProjectId"></a>

```java
public void resetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.tableIdInput">tableIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.tableId">tableId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTable">GoogleBigqueryJobExtractSourceTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.datasetIdInput"></a>

```java
public java.lang.String getDatasetIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `tableIdInput`<sup>Optional</sup> <a name="tableIdInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.tableIdInput"></a>

```java
public java.lang.String getTableIdInput();
```

- *Type:* java.lang.String

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.tableId"></a>

```java
public java.lang.String getTableId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.internalValue"></a>

```java
public GoogleBigqueryJobExtractSourceTable getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTable">GoogleBigqueryJobExtractSourceTable</a>

---


### GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference <a name="GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference;

new GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.kmsKeyVersion">kmsKeyVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfiguration">GoogleBigqueryJobLoadDestinationEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyVersion`<sup>Required</sup> <a name="kmsKeyVersion" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.kmsKeyVersion"></a>

```java
public java.lang.String getKmsKeyVersion();
```

- *Type:* java.lang.String

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.kmsKeyNameInput"></a>

```java
public java.lang.String getKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.internalValue"></a>

```java
public GoogleBigqueryJobLoadDestinationEncryptionConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfiguration">GoogleBigqueryJobLoadDestinationEncryptionConfiguration</a>

---


### GoogleBigqueryJobLoadDestinationTableOutputReference <a name="GoogleBigqueryJobLoadDestinationTableOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJobLoadDestinationTableOutputReference;

new GoogleBigqueryJobLoadDestinationTableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.resetDatasetId">resetDatasetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatasetId` <a name="resetDatasetId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.resetDatasetId"></a>

```java
public void resetDatasetId()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.resetProjectId"></a>

```java
public void resetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.tableIdInput">tableIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.tableId">tableId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTable">GoogleBigqueryJobLoadDestinationTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.datasetIdInput"></a>

```java
public java.lang.String getDatasetIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `tableIdInput`<sup>Optional</sup> <a name="tableIdInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.tableIdInput"></a>

```java
public java.lang.String getTableIdInput();
```

- *Type:* java.lang.String

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.tableId"></a>

```java
public java.lang.String getTableId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.internalValue"></a>

```java
public GoogleBigqueryJobLoadDestinationTable getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTable">GoogleBigqueryJobLoadDestinationTable</a>

---


### GoogleBigqueryJobLoadOutputReference <a name="GoogleBigqueryJobLoadOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJobLoadOutputReference;

new GoogleBigqueryJobLoadOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.putDestinationEncryptionConfiguration">putDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.putDestinationTable">putDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.putParquetOptions">putParquetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.putTimePartitioning">putTimePartitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetAllowJaggedRows">resetAllowJaggedRows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetAllowQuotedNewlines">resetAllowQuotedNewlines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetAutodetect">resetAutodetect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetCreateDisposition">resetCreateDisposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetDestinationEncryptionConfiguration">resetDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetEncoding">resetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetFieldDelimiter">resetFieldDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetIgnoreUnknownValues">resetIgnoreUnknownValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetJsonExtension">resetJsonExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetMaxBadRecords">resetMaxBadRecords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetNullMarker">resetNullMarker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetParquetOptions">resetParquetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetProjectionFields">resetProjectionFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetQuote">resetQuote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetSchemaUpdateOptions">resetSchemaUpdateOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetSkipLeadingRows">resetSkipLeadingRows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetSourceFormat">resetSourceFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetTimePartitioning">resetTimePartitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetWriteDisposition">resetWriteDisposition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinationEncryptionConfiguration` <a name="putDestinationEncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.putDestinationEncryptionConfiguration"></a>

```java
public void putDestinationEncryptionConfiguration(GoogleBigqueryJobLoadDestinationEncryptionConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.putDestinationEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfiguration">GoogleBigqueryJobLoadDestinationEncryptionConfiguration</a>

---

##### `putDestinationTable` <a name="putDestinationTable" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.putDestinationTable"></a>

```java
public void putDestinationTable(GoogleBigqueryJobLoadDestinationTable value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.putDestinationTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTable">GoogleBigqueryJobLoadDestinationTable</a>

---

##### `putParquetOptions` <a name="putParquetOptions" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.putParquetOptions"></a>

```java
public void putParquetOptions(GoogleBigqueryJobLoadParquetOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.putParquetOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptions">GoogleBigqueryJobLoadParquetOptions</a>

---

##### `putTimePartitioning` <a name="putTimePartitioning" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.putTimePartitioning"></a>

```java
public void putTimePartitioning(GoogleBigqueryJobLoadTimePartitioning value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.putTimePartitioning.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioning">GoogleBigqueryJobLoadTimePartitioning</a>

---

##### `resetAllowJaggedRows` <a name="resetAllowJaggedRows" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetAllowJaggedRows"></a>

```java
public void resetAllowJaggedRows()
```

##### `resetAllowQuotedNewlines` <a name="resetAllowQuotedNewlines" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetAllowQuotedNewlines"></a>

```java
public void resetAllowQuotedNewlines()
```

##### `resetAutodetect` <a name="resetAutodetect" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetAutodetect"></a>

```java
public void resetAutodetect()
```

##### `resetCreateDisposition` <a name="resetCreateDisposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetCreateDisposition"></a>

```java
public void resetCreateDisposition()
```

##### `resetDestinationEncryptionConfiguration` <a name="resetDestinationEncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetDestinationEncryptionConfiguration"></a>

```java
public void resetDestinationEncryptionConfiguration()
```

##### `resetEncoding` <a name="resetEncoding" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetEncoding"></a>

```java
public void resetEncoding()
```

##### `resetFieldDelimiter` <a name="resetFieldDelimiter" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetFieldDelimiter"></a>

```java
public void resetFieldDelimiter()
```

##### `resetIgnoreUnknownValues` <a name="resetIgnoreUnknownValues" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetIgnoreUnknownValues"></a>

```java
public void resetIgnoreUnknownValues()
```

##### `resetJsonExtension` <a name="resetJsonExtension" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetJsonExtension"></a>

```java
public void resetJsonExtension()
```

##### `resetMaxBadRecords` <a name="resetMaxBadRecords" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetMaxBadRecords"></a>

```java
public void resetMaxBadRecords()
```

##### `resetNullMarker` <a name="resetNullMarker" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetNullMarker"></a>

```java
public void resetNullMarker()
```

##### `resetParquetOptions` <a name="resetParquetOptions" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetParquetOptions"></a>

```java
public void resetParquetOptions()
```

##### `resetProjectionFields` <a name="resetProjectionFields" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetProjectionFields"></a>

```java
public void resetProjectionFields()
```

##### `resetQuote` <a name="resetQuote" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetQuote"></a>

```java
public void resetQuote()
```

##### `resetSchemaUpdateOptions` <a name="resetSchemaUpdateOptions" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetSchemaUpdateOptions"></a>

```java
public void resetSchemaUpdateOptions()
```

##### `resetSkipLeadingRows` <a name="resetSkipLeadingRows" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetSkipLeadingRows"></a>

```java
public void resetSkipLeadingRows()
```

##### `resetSourceFormat` <a name="resetSourceFormat" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetSourceFormat"></a>

```java
public void resetSourceFormat()
```

##### `resetTimePartitioning` <a name="resetTimePartitioning" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetTimePartitioning"></a>

```java
public void resetTimePartitioning()
```

##### `resetWriteDisposition` <a name="resetWriteDisposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetWriteDisposition"></a>

```java
public void resetWriteDisposition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.destinationEncryptionConfiguration">destinationEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference">GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.destinationTable">destinationTable</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference">GoogleBigqueryJobLoadDestinationTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.parquetOptions">parquetOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference">GoogleBigqueryJobLoadParquetOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.timePartitioning">timePartitioning</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference">GoogleBigqueryJobLoadTimePartitioningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.allowJaggedRowsInput">allowJaggedRowsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.allowQuotedNewlinesInput">allowQuotedNewlinesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.autodetectInput">autodetectInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.createDispositionInput">createDispositionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.destinationEncryptionConfigurationInput">destinationEncryptionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfiguration">GoogleBigqueryJobLoadDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.destinationTableInput">destinationTableInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTable">GoogleBigqueryJobLoadDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.encodingInput">encodingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.fieldDelimiterInput">fieldDelimiterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.ignoreUnknownValuesInput">ignoreUnknownValuesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.jsonExtensionInput">jsonExtensionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.maxBadRecordsInput">maxBadRecordsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.nullMarkerInput">nullMarkerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.parquetOptionsInput">parquetOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptions">GoogleBigqueryJobLoadParquetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.projectionFieldsInput">projectionFieldsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.quoteInput">quoteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.schemaUpdateOptionsInput">schemaUpdateOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.skipLeadingRowsInput">skipLeadingRowsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.sourceFormatInput">sourceFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.sourceUrisInput">sourceUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.timePartitioningInput">timePartitioningInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioning">GoogleBigqueryJobLoadTimePartitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.writeDispositionInput">writeDispositionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.allowJaggedRows">allowJaggedRows</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.allowQuotedNewlines">allowQuotedNewlines</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.autodetect">autodetect</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.createDisposition">createDisposition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.encoding">encoding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.fieldDelimiter">fieldDelimiter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.ignoreUnknownValues">ignoreUnknownValues</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.jsonExtension">jsonExtension</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.maxBadRecords">maxBadRecords</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.nullMarker">nullMarker</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.projectionFields">projectionFields</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.quote">quote</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.schemaUpdateOptions">schemaUpdateOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.skipLeadingRows">skipLeadingRows</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.sourceFormat">sourceFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.sourceUris">sourceUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.writeDisposition">writeDisposition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad">GoogleBigqueryJobLoad</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationEncryptionConfiguration`<sup>Required</sup> <a name="destinationEncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.destinationEncryptionConfiguration"></a>

```java
public GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference getDestinationEncryptionConfiguration();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference">GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference</a>

---

##### `destinationTable`<sup>Required</sup> <a name="destinationTable" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.destinationTable"></a>

```java
public GoogleBigqueryJobLoadDestinationTableOutputReference getDestinationTable();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference">GoogleBigqueryJobLoadDestinationTableOutputReference</a>

---

##### `parquetOptions`<sup>Required</sup> <a name="parquetOptions" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.parquetOptions"></a>

```java
public GoogleBigqueryJobLoadParquetOptionsOutputReference getParquetOptions();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference">GoogleBigqueryJobLoadParquetOptionsOutputReference</a>

---

##### `timePartitioning`<sup>Required</sup> <a name="timePartitioning" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.timePartitioning"></a>

```java
public GoogleBigqueryJobLoadTimePartitioningOutputReference getTimePartitioning();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference">GoogleBigqueryJobLoadTimePartitioningOutputReference</a>

---

##### `allowJaggedRowsInput`<sup>Optional</sup> <a name="allowJaggedRowsInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.allowJaggedRowsInput"></a>

```java
public java.lang.Object getAllowJaggedRowsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowQuotedNewlinesInput`<sup>Optional</sup> <a name="allowQuotedNewlinesInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.allowQuotedNewlinesInput"></a>

```java
public java.lang.Object getAllowQuotedNewlinesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autodetectInput`<sup>Optional</sup> <a name="autodetectInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.autodetectInput"></a>

```java
public java.lang.Object getAutodetectInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `createDispositionInput`<sup>Optional</sup> <a name="createDispositionInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.createDispositionInput"></a>

```java
public java.lang.String getCreateDispositionInput();
```

- *Type:* java.lang.String

---

##### `destinationEncryptionConfigurationInput`<sup>Optional</sup> <a name="destinationEncryptionConfigurationInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.destinationEncryptionConfigurationInput"></a>

```java
public GoogleBigqueryJobLoadDestinationEncryptionConfiguration getDestinationEncryptionConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfiguration">GoogleBigqueryJobLoadDestinationEncryptionConfiguration</a>

---

##### `destinationTableInput`<sup>Optional</sup> <a name="destinationTableInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.destinationTableInput"></a>

```java
public GoogleBigqueryJobLoadDestinationTable getDestinationTableInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTable">GoogleBigqueryJobLoadDestinationTable</a>

---

##### `encodingInput`<sup>Optional</sup> <a name="encodingInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.encodingInput"></a>

```java
public java.lang.String getEncodingInput();
```

- *Type:* java.lang.String

---

##### `fieldDelimiterInput`<sup>Optional</sup> <a name="fieldDelimiterInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.fieldDelimiterInput"></a>

```java
public java.lang.String getFieldDelimiterInput();
```

- *Type:* java.lang.String

---

##### `ignoreUnknownValuesInput`<sup>Optional</sup> <a name="ignoreUnknownValuesInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.ignoreUnknownValuesInput"></a>

```java
public java.lang.Object getIgnoreUnknownValuesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jsonExtensionInput`<sup>Optional</sup> <a name="jsonExtensionInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.jsonExtensionInput"></a>

```java
public java.lang.String getJsonExtensionInput();
```

- *Type:* java.lang.String

---

##### `maxBadRecordsInput`<sup>Optional</sup> <a name="maxBadRecordsInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.maxBadRecordsInput"></a>

```java
public java.lang.Number getMaxBadRecordsInput();
```

- *Type:* java.lang.Number

---

##### `nullMarkerInput`<sup>Optional</sup> <a name="nullMarkerInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.nullMarkerInput"></a>

```java
public java.lang.String getNullMarkerInput();
```

- *Type:* java.lang.String

---

##### `parquetOptionsInput`<sup>Optional</sup> <a name="parquetOptionsInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.parquetOptionsInput"></a>

```java
public GoogleBigqueryJobLoadParquetOptions getParquetOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptions">GoogleBigqueryJobLoadParquetOptions</a>

---

##### `projectionFieldsInput`<sup>Optional</sup> <a name="projectionFieldsInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.projectionFieldsInput"></a>

```java
public java.util.List<java.lang.String> getProjectionFieldsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `quoteInput`<sup>Optional</sup> <a name="quoteInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.quoteInput"></a>

```java
public java.lang.String getQuoteInput();
```

- *Type:* java.lang.String

---

##### `schemaUpdateOptionsInput`<sup>Optional</sup> <a name="schemaUpdateOptionsInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.schemaUpdateOptionsInput"></a>

```java
public java.util.List<java.lang.String> getSchemaUpdateOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `skipLeadingRowsInput`<sup>Optional</sup> <a name="skipLeadingRowsInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.skipLeadingRowsInput"></a>

```java
public java.lang.Number getSkipLeadingRowsInput();
```

- *Type:* java.lang.Number

---

##### `sourceFormatInput`<sup>Optional</sup> <a name="sourceFormatInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.sourceFormatInput"></a>

```java
public java.lang.String getSourceFormatInput();
```

- *Type:* java.lang.String

---

##### `sourceUrisInput`<sup>Optional</sup> <a name="sourceUrisInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.sourceUrisInput"></a>

```java
public java.util.List<java.lang.String> getSourceUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timePartitioningInput`<sup>Optional</sup> <a name="timePartitioningInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.timePartitioningInput"></a>

```java
public GoogleBigqueryJobLoadTimePartitioning getTimePartitioningInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioning">GoogleBigqueryJobLoadTimePartitioning</a>

---

##### `writeDispositionInput`<sup>Optional</sup> <a name="writeDispositionInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.writeDispositionInput"></a>

```java
public java.lang.String getWriteDispositionInput();
```

- *Type:* java.lang.String

---

##### `allowJaggedRows`<sup>Required</sup> <a name="allowJaggedRows" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.allowJaggedRows"></a>

```java
public java.lang.Object getAllowJaggedRows();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowQuotedNewlines`<sup>Required</sup> <a name="allowQuotedNewlines" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.allowQuotedNewlines"></a>

```java
public java.lang.Object getAllowQuotedNewlines();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autodetect`<sup>Required</sup> <a name="autodetect" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.autodetect"></a>

```java
public java.lang.Object getAutodetect();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `createDisposition`<sup>Required</sup> <a name="createDisposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.createDisposition"></a>

```java
public java.lang.String getCreateDisposition();
```

- *Type:* java.lang.String

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.encoding"></a>

```java
public java.lang.String getEncoding();
```

- *Type:* java.lang.String

---

##### `fieldDelimiter`<sup>Required</sup> <a name="fieldDelimiter" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.fieldDelimiter"></a>

```java
public java.lang.String getFieldDelimiter();
```

- *Type:* java.lang.String

---

##### `ignoreUnknownValues`<sup>Required</sup> <a name="ignoreUnknownValues" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.ignoreUnknownValues"></a>

```java
public java.lang.Object getIgnoreUnknownValues();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jsonExtension`<sup>Required</sup> <a name="jsonExtension" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.jsonExtension"></a>

```java
public java.lang.String getJsonExtension();
```

- *Type:* java.lang.String

---

##### `maxBadRecords`<sup>Required</sup> <a name="maxBadRecords" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.maxBadRecords"></a>

```java
public java.lang.Number getMaxBadRecords();
```

- *Type:* java.lang.Number

---

##### `nullMarker`<sup>Required</sup> <a name="nullMarker" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.nullMarker"></a>

```java
public java.lang.String getNullMarker();
```

- *Type:* java.lang.String

---

##### `projectionFields`<sup>Required</sup> <a name="projectionFields" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.projectionFields"></a>

```java
public java.util.List<java.lang.String> getProjectionFields();
```

- *Type:* java.util.List<java.lang.String>

---

##### `quote`<sup>Required</sup> <a name="quote" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.quote"></a>

```java
public java.lang.String getQuote();
```

- *Type:* java.lang.String

---

##### `schemaUpdateOptions`<sup>Required</sup> <a name="schemaUpdateOptions" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.schemaUpdateOptions"></a>

```java
public java.util.List<java.lang.String> getSchemaUpdateOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `skipLeadingRows`<sup>Required</sup> <a name="skipLeadingRows" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.skipLeadingRows"></a>

```java
public java.lang.Number getSkipLeadingRows();
```

- *Type:* java.lang.Number

---

##### `sourceFormat`<sup>Required</sup> <a name="sourceFormat" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.sourceFormat"></a>

```java
public java.lang.String getSourceFormat();
```

- *Type:* java.lang.String

---

##### `sourceUris`<sup>Required</sup> <a name="sourceUris" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.sourceUris"></a>

```java
public java.util.List<java.lang.String> getSourceUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `writeDisposition`<sup>Required</sup> <a name="writeDisposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.writeDisposition"></a>

```java
public java.lang.String getWriteDisposition();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.internalValue"></a>

```java
public GoogleBigqueryJobLoad getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad">GoogleBigqueryJobLoad</a>

---


### GoogleBigqueryJobLoadParquetOptionsOutputReference <a name="GoogleBigqueryJobLoadParquetOptionsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJobLoadParquetOptionsOutputReference;

new GoogleBigqueryJobLoadParquetOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.resetEnableListInference">resetEnableListInference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.resetEnumAsString">resetEnumAsString</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableListInference` <a name="resetEnableListInference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.resetEnableListInference"></a>

```java
public void resetEnableListInference()
```

##### `resetEnumAsString` <a name="resetEnumAsString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.resetEnumAsString"></a>

```java
public void resetEnumAsString()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.property.enableListInferenceInput">enableListInferenceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.property.enumAsStringInput">enumAsStringInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.property.enableListInference">enableListInference</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.property.enumAsString">enumAsString</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptions">GoogleBigqueryJobLoadParquetOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableListInferenceInput`<sup>Optional</sup> <a name="enableListInferenceInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.property.enableListInferenceInput"></a>

```java
public java.lang.Object getEnableListInferenceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enumAsStringInput`<sup>Optional</sup> <a name="enumAsStringInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.property.enumAsStringInput"></a>

```java
public java.lang.Object getEnumAsStringInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableListInference`<sup>Required</sup> <a name="enableListInference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.property.enableListInference"></a>

```java
public java.lang.Object getEnableListInference();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enumAsString`<sup>Required</sup> <a name="enumAsString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.property.enumAsString"></a>

```java
public java.lang.Object getEnumAsString();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.property.internalValue"></a>

```java
public GoogleBigqueryJobLoadParquetOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptions">GoogleBigqueryJobLoadParquetOptions</a>

---


### GoogleBigqueryJobLoadTimePartitioningOutputReference <a name="GoogleBigqueryJobLoadTimePartitioningOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJobLoadTimePartitioningOutputReference;

new GoogleBigqueryJobLoadTimePartitioningOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.resetExpirationMs">resetExpirationMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.resetField">resetField</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpirationMs` <a name="resetExpirationMs" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.resetExpirationMs"></a>

```java
public void resetExpirationMs()
```

##### `resetField` <a name="resetField" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.resetField"></a>

```java
public void resetField()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.expirationMsInput">expirationMsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.fieldInput">fieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.expirationMs">expirationMs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.field">field</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioning">GoogleBigqueryJobLoadTimePartitioning</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expirationMsInput`<sup>Optional</sup> <a name="expirationMsInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.expirationMsInput"></a>

```java
public java.lang.String getExpirationMsInput();
```

- *Type:* java.lang.String

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.fieldInput"></a>

```java
public java.lang.String getFieldInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `expirationMs`<sup>Required</sup> <a name="expirationMs" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.expirationMs"></a>

```java
public java.lang.String getExpirationMs();
```

- *Type:* java.lang.String

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.internalValue"></a>

```java
public GoogleBigqueryJobLoadTimePartitioning getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioning">GoogleBigqueryJobLoadTimePartitioning</a>

---


### GoogleBigqueryJobQueryDefaultDatasetOutputReference <a name="GoogleBigqueryJobQueryDefaultDatasetOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJobQueryDefaultDatasetOutputReference;

new GoogleBigqueryJobQueryDefaultDatasetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.resetProjectId"></a>

```java
public void resetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDataset">GoogleBigqueryJobQueryDefaultDataset</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.property.datasetIdInput"></a>

```java
public java.lang.String getDatasetIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.property.internalValue"></a>

```java
public GoogleBigqueryJobQueryDefaultDataset getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDataset">GoogleBigqueryJobQueryDefaultDataset</a>

---


### GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference <a name="GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference;

new GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.kmsKeyVersion">kmsKeyVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfiguration">GoogleBigqueryJobQueryDestinationEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyVersion`<sup>Required</sup> <a name="kmsKeyVersion" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.kmsKeyVersion"></a>

```java
public java.lang.String getKmsKeyVersion();
```

- *Type:* java.lang.String

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.kmsKeyNameInput"></a>

```java
public java.lang.String getKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.internalValue"></a>

```java
public GoogleBigqueryJobQueryDestinationEncryptionConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfiguration">GoogleBigqueryJobQueryDestinationEncryptionConfiguration</a>

---


### GoogleBigqueryJobQueryDestinationTableOutputReference <a name="GoogleBigqueryJobQueryDestinationTableOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJobQueryDestinationTableOutputReference;

new GoogleBigqueryJobQueryDestinationTableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.resetDatasetId">resetDatasetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatasetId` <a name="resetDatasetId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.resetDatasetId"></a>

```java
public void resetDatasetId()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.resetProjectId"></a>

```java
public void resetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.tableIdInput">tableIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.tableId">tableId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTable">GoogleBigqueryJobQueryDestinationTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.datasetIdInput"></a>

```java
public java.lang.String getDatasetIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `tableIdInput`<sup>Optional</sup> <a name="tableIdInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.tableIdInput"></a>

```java
public java.lang.String getTableIdInput();
```

- *Type:* java.lang.String

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.tableId"></a>

```java
public java.lang.String getTableId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.internalValue"></a>

```java
public GoogleBigqueryJobQueryDestinationTable getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTable">GoogleBigqueryJobQueryDestinationTable</a>

---


### GoogleBigqueryJobQueryOutputReference <a name="GoogleBigqueryJobQueryOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJobQueryOutputReference;

new GoogleBigqueryJobQueryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.putDefaultDataset">putDefaultDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.putDestinationEncryptionConfiguration">putDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.putDestinationTable">putDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.putScriptOptions">putScriptOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.putUserDefinedFunctionResources">putUserDefinedFunctionResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetAllowLargeResults">resetAllowLargeResults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetCreateDisposition">resetCreateDisposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetDefaultDataset">resetDefaultDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetDestinationEncryptionConfiguration">resetDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetDestinationTable">resetDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetFlattenResults">resetFlattenResults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetMaximumBillingTier">resetMaximumBillingTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetMaximumBytesBilled">resetMaximumBytesBilled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetParameterMode">resetParameterMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetSchemaUpdateOptions">resetSchemaUpdateOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetScriptOptions">resetScriptOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetUseLegacySql">resetUseLegacySql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetUseQueryCache">resetUseQueryCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetUserDefinedFunctionResources">resetUserDefinedFunctionResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetWriteDisposition">resetWriteDisposition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDefaultDataset` <a name="putDefaultDataset" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.putDefaultDataset"></a>

```java
public void putDefaultDataset(GoogleBigqueryJobQueryDefaultDataset value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.putDefaultDataset.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDataset">GoogleBigqueryJobQueryDefaultDataset</a>

---

##### `putDestinationEncryptionConfiguration` <a name="putDestinationEncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.putDestinationEncryptionConfiguration"></a>

```java
public void putDestinationEncryptionConfiguration(GoogleBigqueryJobQueryDestinationEncryptionConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.putDestinationEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfiguration">GoogleBigqueryJobQueryDestinationEncryptionConfiguration</a>

---

##### `putDestinationTable` <a name="putDestinationTable" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.putDestinationTable"></a>

```java
public void putDestinationTable(GoogleBigqueryJobQueryDestinationTable value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.putDestinationTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTable">GoogleBigqueryJobQueryDestinationTable</a>

---

##### `putScriptOptions` <a name="putScriptOptions" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.putScriptOptions"></a>

```java
public void putScriptOptions(GoogleBigqueryJobQueryScriptOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.putScriptOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptions">GoogleBigqueryJobQueryScriptOptions</a>

---

##### `putUserDefinedFunctionResources` <a name="putUserDefinedFunctionResources" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.putUserDefinedFunctionResources"></a>

```java
public void putUserDefinedFunctionResources(IResolvable OR java.util.List<GoogleBigqueryJobQueryUserDefinedFunctionResources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.putUserDefinedFunctionResources.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResources">GoogleBigqueryJobQueryUserDefinedFunctionResources</a>>

---

##### `resetAllowLargeResults` <a name="resetAllowLargeResults" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetAllowLargeResults"></a>

```java
public void resetAllowLargeResults()
```

##### `resetCreateDisposition` <a name="resetCreateDisposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetCreateDisposition"></a>

```java
public void resetCreateDisposition()
```

##### `resetDefaultDataset` <a name="resetDefaultDataset" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetDefaultDataset"></a>

```java
public void resetDefaultDataset()
```

##### `resetDestinationEncryptionConfiguration` <a name="resetDestinationEncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetDestinationEncryptionConfiguration"></a>

```java
public void resetDestinationEncryptionConfiguration()
```

##### `resetDestinationTable` <a name="resetDestinationTable" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetDestinationTable"></a>

```java
public void resetDestinationTable()
```

##### `resetFlattenResults` <a name="resetFlattenResults" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetFlattenResults"></a>

```java
public void resetFlattenResults()
```

##### `resetMaximumBillingTier` <a name="resetMaximumBillingTier" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetMaximumBillingTier"></a>

```java
public void resetMaximumBillingTier()
```

##### `resetMaximumBytesBilled` <a name="resetMaximumBytesBilled" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetMaximumBytesBilled"></a>

```java
public void resetMaximumBytesBilled()
```

##### `resetParameterMode` <a name="resetParameterMode" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetParameterMode"></a>

```java
public void resetParameterMode()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetSchemaUpdateOptions` <a name="resetSchemaUpdateOptions" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetSchemaUpdateOptions"></a>

```java
public void resetSchemaUpdateOptions()
```

##### `resetScriptOptions` <a name="resetScriptOptions" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetScriptOptions"></a>

```java
public void resetScriptOptions()
```

##### `resetUseLegacySql` <a name="resetUseLegacySql" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetUseLegacySql"></a>

```java
public void resetUseLegacySql()
```

##### `resetUseQueryCache` <a name="resetUseQueryCache" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetUseQueryCache"></a>

```java
public void resetUseQueryCache()
```

##### `resetUserDefinedFunctionResources` <a name="resetUserDefinedFunctionResources" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetUserDefinedFunctionResources"></a>

```java
public void resetUserDefinedFunctionResources()
```

##### `resetWriteDisposition` <a name="resetWriteDisposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetWriteDisposition"></a>

```java
public void resetWriteDisposition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.defaultDataset">defaultDataset</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference">GoogleBigqueryJobQueryDefaultDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.destinationEncryptionConfiguration">destinationEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference">GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.destinationTable">destinationTable</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference">GoogleBigqueryJobQueryDestinationTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.scriptOptions">scriptOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference">GoogleBigqueryJobQueryScriptOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.userDefinedFunctionResources">userDefinedFunctionResources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList">GoogleBigqueryJobQueryUserDefinedFunctionResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.allowLargeResultsInput">allowLargeResultsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.createDispositionInput">createDispositionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.defaultDatasetInput">defaultDatasetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDataset">GoogleBigqueryJobQueryDefaultDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.destinationEncryptionConfigurationInput">destinationEncryptionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfiguration">GoogleBigqueryJobQueryDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.destinationTableInput">destinationTableInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTable">GoogleBigqueryJobQueryDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.flattenResultsInput">flattenResultsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.maximumBillingTierInput">maximumBillingTierInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.maximumBytesBilledInput">maximumBytesBilledInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.parameterModeInput">parameterModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.schemaUpdateOptionsInput">schemaUpdateOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.scriptOptionsInput">scriptOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptions">GoogleBigqueryJobQueryScriptOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.useLegacySqlInput">useLegacySqlInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.useQueryCacheInput">useQueryCacheInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.userDefinedFunctionResourcesInput">userDefinedFunctionResourcesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResources">GoogleBigqueryJobQueryUserDefinedFunctionResources</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.writeDispositionInput">writeDispositionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.allowLargeResults">allowLargeResults</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.createDisposition">createDisposition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.flattenResults">flattenResults</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.maximumBillingTier">maximumBillingTier</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.maximumBytesBilled">maximumBytesBilled</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.parameterMode">parameterMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.priority">priority</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.schemaUpdateOptions">schemaUpdateOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.useLegacySql">useLegacySql</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.useQueryCache">useQueryCache</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.writeDisposition">writeDisposition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery">GoogleBigqueryJobQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultDataset`<sup>Required</sup> <a name="defaultDataset" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.defaultDataset"></a>

```java
public GoogleBigqueryJobQueryDefaultDatasetOutputReference getDefaultDataset();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference">GoogleBigqueryJobQueryDefaultDatasetOutputReference</a>

---

##### `destinationEncryptionConfiguration`<sup>Required</sup> <a name="destinationEncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.destinationEncryptionConfiguration"></a>

```java
public GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference getDestinationEncryptionConfiguration();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference">GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference</a>

---

##### `destinationTable`<sup>Required</sup> <a name="destinationTable" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.destinationTable"></a>

```java
public GoogleBigqueryJobQueryDestinationTableOutputReference getDestinationTable();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference">GoogleBigqueryJobQueryDestinationTableOutputReference</a>

---

##### `scriptOptions`<sup>Required</sup> <a name="scriptOptions" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.scriptOptions"></a>

```java
public GoogleBigqueryJobQueryScriptOptionsOutputReference getScriptOptions();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference">GoogleBigqueryJobQueryScriptOptionsOutputReference</a>

---

##### `userDefinedFunctionResources`<sup>Required</sup> <a name="userDefinedFunctionResources" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.userDefinedFunctionResources"></a>

```java
public GoogleBigqueryJobQueryUserDefinedFunctionResourcesList getUserDefinedFunctionResources();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList">GoogleBigqueryJobQueryUserDefinedFunctionResourcesList</a>

---

##### `allowLargeResultsInput`<sup>Optional</sup> <a name="allowLargeResultsInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.allowLargeResultsInput"></a>

```java
public java.lang.Object getAllowLargeResultsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `createDispositionInput`<sup>Optional</sup> <a name="createDispositionInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.createDispositionInput"></a>

```java
public java.lang.String getCreateDispositionInput();
```

- *Type:* java.lang.String

---

##### `defaultDatasetInput`<sup>Optional</sup> <a name="defaultDatasetInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.defaultDatasetInput"></a>

```java
public GoogleBigqueryJobQueryDefaultDataset getDefaultDatasetInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDataset">GoogleBigqueryJobQueryDefaultDataset</a>

---

##### `destinationEncryptionConfigurationInput`<sup>Optional</sup> <a name="destinationEncryptionConfigurationInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.destinationEncryptionConfigurationInput"></a>

```java
public GoogleBigqueryJobQueryDestinationEncryptionConfiguration getDestinationEncryptionConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfiguration">GoogleBigqueryJobQueryDestinationEncryptionConfiguration</a>

---

##### `destinationTableInput`<sup>Optional</sup> <a name="destinationTableInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.destinationTableInput"></a>

```java
public GoogleBigqueryJobQueryDestinationTable getDestinationTableInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTable">GoogleBigqueryJobQueryDestinationTable</a>

---

##### `flattenResultsInput`<sup>Optional</sup> <a name="flattenResultsInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.flattenResultsInput"></a>

```java
public java.lang.Object getFlattenResultsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maximumBillingTierInput`<sup>Optional</sup> <a name="maximumBillingTierInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.maximumBillingTierInput"></a>

```java
public java.lang.Number getMaximumBillingTierInput();
```

- *Type:* java.lang.Number

---

##### `maximumBytesBilledInput`<sup>Optional</sup> <a name="maximumBytesBilledInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.maximumBytesBilledInput"></a>

```java
public java.lang.String getMaximumBytesBilledInput();
```

- *Type:* java.lang.String

---

##### `parameterModeInput`<sup>Optional</sup> <a name="parameterModeInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.parameterModeInput"></a>

```java
public java.lang.String getParameterModeInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.priorityInput"></a>

```java
public java.lang.String getPriorityInput();
```

- *Type:* java.lang.String

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `schemaUpdateOptionsInput`<sup>Optional</sup> <a name="schemaUpdateOptionsInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.schemaUpdateOptionsInput"></a>

```java
public java.util.List<java.lang.String> getSchemaUpdateOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scriptOptionsInput`<sup>Optional</sup> <a name="scriptOptionsInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.scriptOptionsInput"></a>

```java
public GoogleBigqueryJobQueryScriptOptions getScriptOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptions">GoogleBigqueryJobQueryScriptOptions</a>

---

##### `useLegacySqlInput`<sup>Optional</sup> <a name="useLegacySqlInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.useLegacySqlInput"></a>

```java
public java.lang.Object getUseLegacySqlInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `useQueryCacheInput`<sup>Optional</sup> <a name="useQueryCacheInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.useQueryCacheInput"></a>

```java
public java.lang.Object getUseQueryCacheInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `userDefinedFunctionResourcesInput`<sup>Optional</sup> <a name="userDefinedFunctionResourcesInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.userDefinedFunctionResourcesInput"></a>

```java
public java.lang.Object getUserDefinedFunctionResourcesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResources">GoogleBigqueryJobQueryUserDefinedFunctionResources</a>>

---

##### `writeDispositionInput`<sup>Optional</sup> <a name="writeDispositionInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.writeDispositionInput"></a>

```java
public java.lang.String getWriteDispositionInput();
```

- *Type:* java.lang.String

---

##### `allowLargeResults`<sup>Required</sup> <a name="allowLargeResults" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.allowLargeResults"></a>

```java
public java.lang.Object getAllowLargeResults();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `createDisposition`<sup>Required</sup> <a name="createDisposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.createDisposition"></a>

```java
public java.lang.String getCreateDisposition();
```

- *Type:* java.lang.String

---

##### `flattenResults`<sup>Required</sup> <a name="flattenResults" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.flattenResults"></a>

```java
public java.lang.Object getFlattenResults();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maximumBillingTier`<sup>Required</sup> <a name="maximumBillingTier" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.maximumBillingTier"></a>

```java
public java.lang.Number getMaximumBillingTier();
```

- *Type:* java.lang.Number

---

##### `maximumBytesBilled`<sup>Required</sup> <a name="maximumBytesBilled" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.maximumBytesBilled"></a>

```java
public java.lang.String getMaximumBytesBilled();
```

- *Type:* java.lang.String

---

##### `parameterMode`<sup>Required</sup> <a name="parameterMode" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.parameterMode"></a>

```java
public java.lang.String getParameterMode();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.priority"></a>

```java
public java.lang.String getPriority();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `schemaUpdateOptions`<sup>Required</sup> <a name="schemaUpdateOptions" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.schemaUpdateOptions"></a>

```java
public java.util.List<java.lang.String> getSchemaUpdateOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `useLegacySql`<sup>Required</sup> <a name="useLegacySql" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.useLegacySql"></a>

```java
public java.lang.Object getUseLegacySql();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `useQueryCache`<sup>Required</sup> <a name="useQueryCache" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.useQueryCache"></a>

```java
public java.lang.Object getUseQueryCache();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `writeDisposition`<sup>Required</sup> <a name="writeDisposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.writeDisposition"></a>

```java
public java.lang.String getWriteDisposition();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.internalValue"></a>

```java
public GoogleBigqueryJobQuery getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery">GoogleBigqueryJobQuery</a>

---


### GoogleBigqueryJobQueryScriptOptionsOutputReference <a name="GoogleBigqueryJobQueryScriptOptionsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJobQueryScriptOptionsOutputReference;

new GoogleBigqueryJobQueryScriptOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.resetKeyResultStatement">resetKeyResultStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.resetStatementByteBudget">resetStatementByteBudget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.resetStatementTimeoutMs">resetStatementTimeoutMs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeyResultStatement` <a name="resetKeyResultStatement" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.resetKeyResultStatement"></a>

```java
public void resetKeyResultStatement()
```

##### `resetStatementByteBudget` <a name="resetStatementByteBudget" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.resetStatementByteBudget"></a>

```java
public void resetStatementByteBudget()
```

##### `resetStatementTimeoutMs` <a name="resetStatementTimeoutMs" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.resetStatementTimeoutMs"></a>

```java
public void resetStatementTimeoutMs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.keyResultStatementInput">keyResultStatementInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.statementByteBudgetInput">statementByteBudgetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.statementTimeoutMsInput">statementTimeoutMsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.keyResultStatement">keyResultStatement</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.statementByteBudget">statementByteBudget</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.statementTimeoutMs">statementTimeoutMs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptions">GoogleBigqueryJobQueryScriptOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyResultStatementInput`<sup>Optional</sup> <a name="keyResultStatementInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.keyResultStatementInput"></a>

```java
public java.lang.String getKeyResultStatementInput();
```

- *Type:* java.lang.String

---

##### `statementByteBudgetInput`<sup>Optional</sup> <a name="statementByteBudgetInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.statementByteBudgetInput"></a>

```java
public java.lang.String getStatementByteBudgetInput();
```

- *Type:* java.lang.String

---

##### `statementTimeoutMsInput`<sup>Optional</sup> <a name="statementTimeoutMsInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.statementTimeoutMsInput"></a>

```java
public java.lang.String getStatementTimeoutMsInput();
```

- *Type:* java.lang.String

---

##### `keyResultStatement`<sup>Required</sup> <a name="keyResultStatement" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.keyResultStatement"></a>

```java
public java.lang.String getKeyResultStatement();
```

- *Type:* java.lang.String

---

##### `statementByteBudget`<sup>Required</sup> <a name="statementByteBudget" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.statementByteBudget"></a>

```java
public java.lang.String getStatementByteBudget();
```

- *Type:* java.lang.String

---

##### `statementTimeoutMs`<sup>Required</sup> <a name="statementTimeoutMs" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.statementTimeoutMs"></a>

```java
public java.lang.String getStatementTimeoutMs();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.internalValue"></a>

```java
public GoogleBigqueryJobQueryScriptOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptions">GoogleBigqueryJobQueryScriptOptions</a>

---


### GoogleBigqueryJobQueryUserDefinedFunctionResourcesList <a name="GoogleBigqueryJobQueryUserDefinedFunctionResourcesList" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList;

new GoogleBigqueryJobQueryUserDefinedFunctionResourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.get"></a>

```java
public GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResources">GoogleBigqueryJobQueryUserDefinedFunctionResources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResources">GoogleBigqueryJobQueryUserDefinedFunctionResources</a>>

---


### GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference <a name="GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference;

new GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.resetInlineCode">resetInlineCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.resetResourceUri">resetResourceUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInlineCode` <a name="resetInlineCode" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.resetInlineCode"></a>

```java
public void resetInlineCode()
```

##### `resetResourceUri` <a name="resetResourceUri" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.resetResourceUri"></a>

```java
public void resetResourceUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.inlineCodeInput">inlineCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.resourceUriInput">resourceUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.inlineCode">inlineCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.resourceUri">resourceUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResources">GoogleBigqueryJobQueryUserDefinedFunctionResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inlineCodeInput`<sup>Optional</sup> <a name="inlineCodeInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.inlineCodeInput"></a>

```java
public java.lang.String getInlineCodeInput();
```

- *Type:* java.lang.String

---

##### `resourceUriInput`<sup>Optional</sup> <a name="resourceUriInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.resourceUriInput"></a>

```java
public java.lang.String getResourceUriInput();
```

- *Type:* java.lang.String

---

##### `inlineCode`<sup>Required</sup> <a name="inlineCode" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.inlineCode"></a>

```java
public java.lang.String getInlineCode();
```

- *Type:* java.lang.String

---

##### `resourceUri`<sup>Required</sup> <a name="resourceUri" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.resourceUri"></a>

```java
public java.lang.String getResourceUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResources">GoogleBigqueryJobQueryUserDefinedFunctionResources</a>

---


### GoogleBigqueryJobStatusErrorResultList <a name="GoogleBigqueryJobStatusErrorResultList" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJobStatusErrorResultList;

new GoogleBigqueryJobStatusErrorResultList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.get"></a>

```java
public GoogleBigqueryJobStatusErrorResultOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleBigqueryJobStatusErrorResultOutputReference <a name="GoogleBigqueryJobStatusErrorResultOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJobStatusErrorResultOutputReference;

new GoogleBigqueryJobStatusErrorResultOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.property.reason">reason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResult">GoogleBigqueryJobStatusErrorResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.property.reason"></a>

```java
public java.lang.String getReason();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.property.internalValue"></a>

```java
public GoogleBigqueryJobStatusErrorResult getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResult">GoogleBigqueryJobStatusErrorResult</a>

---


### GoogleBigqueryJobStatusErrorsList <a name="GoogleBigqueryJobStatusErrorsList" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJobStatusErrorsList;

new GoogleBigqueryJobStatusErrorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.get"></a>

```java
public GoogleBigqueryJobStatusErrorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleBigqueryJobStatusErrorsOutputReference <a name="GoogleBigqueryJobStatusErrorsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJobStatusErrorsOutputReference;

new GoogleBigqueryJobStatusErrorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.property.reason">reason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrors">GoogleBigqueryJobStatusErrors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.property.reason"></a>

```java
public java.lang.String getReason();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.property.internalValue"></a>

```java
public GoogleBigqueryJobStatusErrors getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrors">GoogleBigqueryJobStatusErrors</a>

---


### GoogleBigqueryJobStatusList <a name="GoogleBigqueryJobStatusList" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJobStatusList;

new GoogleBigqueryJobStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.get"></a>

```java
public GoogleBigqueryJobStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleBigqueryJobStatusOutputReference <a name="GoogleBigqueryJobStatusOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJobStatusOutputReference;

new GoogleBigqueryJobStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.property.errorResult">errorResult</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList">GoogleBigqueryJobStatusErrorResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.property.errors">errors</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList">GoogleBigqueryJobStatusErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatus">GoogleBigqueryJobStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `errorResult`<sup>Required</sup> <a name="errorResult" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.property.errorResult"></a>

```java
public GoogleBigqueryJobStatusErrorResultList getErrorResult();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList">GoogleBigqueryJobStatusErrorResultList</a>

---

##### `errors`<sup>Required</sup> <a name="errors" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.property.errors"></a>

```java
public GoogleBigqueryJobStatusErrorsList getErrors();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList">GoogleBigqueryJobStatusErrorsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.property.internalValue"></a>

```java
public GoogleBigqueryJobStatus getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatus">GoogleBigqueryJobStatus</a>

---


### GoogleBigqueryJobTimeoutsOutputReference <a name="GoogleBigqueryJobTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_job.GoogleBigqueryJobTimeoutsOutputReference;

new GoogleBigqueryJobTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeouts">GoogleBigqueryJobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeouts">GoogleBigqueryJobTimeouts</a>

---



