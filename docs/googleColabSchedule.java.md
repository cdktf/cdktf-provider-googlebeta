# `googleColabSchedule` Submodule <a name="`googleColabSchedule` Submodule" id="@cdktf/provider-google-beta.googleColabSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleColabSchedule <a name="GoogleColabSchedule" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_schedule google_colab_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_schedule.GoogleColabSchedule;

GoogleColabSchedule.Builder.create(Construct scope, java.lang.String id)
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
    .createNotebookExecutionJobRequest(GoogleColabScheduleCreateNotebookExecutionJobRequest)
    .cron(java.lang.String)
    .displayName(java.lang.String)
    .location(java.lang.String)
    .maxConcurrentRunCount(java.lang.String)
//  .allowQueueing(java.lang.Boolean)
//  .allowQueueing(IResolvable)
//  .desiredState(java.lang.String)
//  .endTime(java.lang.String)
//  .id(java.lang.String)
//  .maxRunCount(java.lang.String)
//  .project(java.lang.String)
//  .startTime(java.lang.String)
//  .timeouts(GoogleColabScheduleTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.Initializer.parameter.createNotebookExecutionJobRequest">createNotebookExecutionJobRequest</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequest">GoogleColabScheduleCreateNotebookExecutionJobRequest</a></code> | create_notebook_execution_job_request block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.Initializer.parameter.cron">cron</a></code> | <code>java.lang.String</code> | Cron schedule (https://en.wikipedia.org/wiki/Cron) to launch scheduled runs. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Required. The display name of the Schedule. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location for the resource: https://cloud.google.com/colab/docs/locations. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.Initializer.parameter.maxConcurrentRunCount">maxConcurrentRunCount</a></code> | <code>java.lang.String</code> | Maximum number of runs that can be started concurrently for this Schedule. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.Initializer.parameter.allowQueueing">allowQueueing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether new scheduled runs can be queued when max_concurrent_runs limit is reached. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.Initializer.parameter.desiredState">desiredState</a></code> | <code>java.lang.String</code> | Desired state of the Colab Schedule. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.Initializer.parameter.endTime">endTime</a></code> | <code>java.lang.String</code> | Timestamp after which no new runs can be scheduled. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_schedule#id GoogleColabSchedule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.Initializer.parameter.maxRunCount">maxRunCount</a></code> | <code>java.lang.String</code> | Maximum run count of the schedule. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_schedule#project GoogleColabSchedule#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.Initializer.parameter.startTime">startTime</a></code> | <code>java.lang.String</code> | The timestamp after which the first run can be scheduled. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeouts">GoogleColabScheduleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createNotebookExecutionJobRequest`<sup>Required</sup> <a name="createNotebookExecutionJobRequest" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.Initializer.parameter.createNotebookExecutionJobRequest"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequest">GoogleColabScheduleCreateNotebookExecutionJobRequest</a>

create_notebook_execution_job_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_schedule#create_notebook_execution_job_request GoogleColabSchedule#create_notebook_execution_job_request}

---

##### `cron`<sup>Required</sup> <a name="cron" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.Initializer.parameter.cron"></a>

- *Type:* java.lang.String

Cron schedule (https://en.wikipedia.org/wiki/Cron) to launch scheduled runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_schedule#cron GoogleColabSchedule#cron}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Required. The display name of the Schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_schedule#display_name GoogleColabSchedule#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location for the resource: https://cloud.google.com/colab/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_schedule#location GoogleColabSchedule#location}

---

##### `maxConcurrentRunCount`<sup>Required</sup> <a name="maxConcurrentRunCount" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.Initializer.parameter.maxConcurrentRunCount"></a>

- *Type:* java.lang.String

Maximum number of runs that can be started concurrently for this Schedule.

This is the limit for starting the scheduled requests and not the execution of the notebook execution jobs created by the requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_schedule#max_concurrent_run_count GoogleColabSchedule#max_concurrent_run_count}

---

##### `allowQueueing`<sup>Optional</sup> <a name="allowQueueing" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.Initializer.parameter.allowQueueing"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether new scheduled runs can be queued when max_concurrent_runs limit is reached.

If set to true, new runs will be queued instead of skipped. Default to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_schedule#allow_queueing GoogleColabSchedule#allow_queueing}

---

##### `desiredState`<sup>Optional</sup> <a name="desiredState" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.Initializer.parameter.desiredState"></a>

- *Type:* java.lang.String

Desired state of the Colab Schedule.

Set this field to 'ACTIVE' to start/resume the schedule, and 'PAUSED' to pause the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_schedule#desired_state GoogleColabSchedule#desired_state}

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.Initializer.parameter.endTime"></a>

- *Type:* java.lang.String

Timestamp after which no new runs can be scheduled.

If specified, the schedule will be completed when either end_time is reached or when scheduled_run_count >= max_run_count. Must be in the RFC 3339 (https://www.ietf.org/rfc/rfc3339.txt) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_schedule#end_time GoogleColabSchedule#end_time}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_schedule#id GoogleColabSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxRunCount`<sup>Optional</sup> <a name="maxRunCount" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.Initializer.parameter.maxRunCount"></a>

- *Type:* java.lang.String

Maximum run count of the schedule.

If specified, The schedule will be completed when either startedRunCount >= maxRunCount or when endTime is reached. If not specified, new runs will keep getting scheduled until this Schedule is paused or deleted. Already scheduled runs will be allowed to complete. Unset if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_schedule#max_run_count GoogleColabSchedule#max_run_count}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_schedule#project GoogleColabSchedule#project}.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.Initializer.parameter.startTime"></a>

- *Type:* java.lang.String

The timestamp after which the first run can be scheduled.

Defaults to the schedule creation time. Must be in the RFC 3339 (https://www.ietf.org/rfc/rfc3339.txt) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_schedule#start_time GoogleColabSchedule#start_time}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeouts">GoogleColabScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_schedule#timeouts GoogleColabSchedule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.putCreateNotebookExecutionJobRequest">putCreateNotebookExecutionJobRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.resetAllowQueueing">resetAllowQueueing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.resetDesiredState">resetDesiredState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.resetMaxRunCount">resetMaxRunCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.resetStartTime">resetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCreateNotebookExecutionJobRequest` <a name="putCreateNotebookExecutionJobRequest" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.putCreateNotebookExecutionJobRequest"></a>

```java
public void putCreateNotebookExecutionJobRequest(GoogleColabScheduleCreateNotebookExecutionJobRequest value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.putCreateNotebookExecutionJobRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequest">GoogleColabScheduleCreateNotebookExecutionJobRequest</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.putTimeouts"></a>

```java
public void putTimeouts(GoogleColabScheduleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeouts">GoogleColabScheduleTimeouts</a>

---

##### `resetAllowQueueing` <a name="resetAllowQueueing" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.resetAllowQueueing"></a>

```java
public void resetAllowQueueing()
```

##### `resetDesiredState` <a name="resetDesiredState" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.resetDesiredState"></a>

```java
public void resetDesiredState()
```

##### `resetEndTime` <a name="resetEndTime" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.resetEndTime"></a>

```java
public void resetEndTime()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.resetId"></a>

```java
public void resetId()
```

##### `resetMaxRunCount` <a name="resetMaxRunCount" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.resetMaxRunCount"></a>

```java
public void resetMaxRunCount()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.resetProject"></a>

```java
public void resetProject()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.resetStartTime"></a>

```java
public void resetStartTime()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleColabSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_schedule.GoogleColabSchedule;

GoogleColabSchedule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_schedule.GoogleColabSchedule;

GoogleColabSchedule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_schedule.GoogleColabSchedule;

GoogleColabSchedule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_schedule.GoogleColabSchedule;

GoogleColabSchedule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleColabSchedule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleColabSchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleColabSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleColabSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleColabSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.createNotebookExecutionJobRequest">createNotebookExecutionJobRequest</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference">GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference">GoogleColabScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.allowQueueingInput">allowQueueingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.createNotebookExecutionJobRequestInput">createNotebookExecutionJobRequestInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequest">GoogleColabScheduleCreateNotebookExecutionJobRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.cronInput">cronInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.desiredStateInput">desiredStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.endTimeInput">endTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.maxConcurrentRunCountInput">maxConcurrentRunCountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.maxRunCountInput">maxRunCountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeouts">GoogleColabScheduleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.allowQueueing">allowQueueing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.cron">cron</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.desiredState">desiredState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.maxConcurrentRunCount">maxConcurrentRunCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.maxRunCount">maxRunCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createNotebookExecutionJobRequest`<sup>Required</sup> <a name="createNotebookExecutionJobRequest" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.createNotebookExecutionJobRequest"></a>

```java
public GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference getCreateNotebookExecutionJobRequest();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference">GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.timeouts"></a>

```java
public GoogleColabScheduleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference">GoogleColabScheduleTimeoutsOutputReference</a>

---

##### `allowQueueingInput`<sup>Optional</sup> <a name="allowQueueingInput" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.allowQueueingInput"></a>

```java
public java.lang.Object getAllowQueueingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `createNotebookExecutionJobRequestInput`<sup>Optional</sup> <a name="createNotebookExecutionJobRequestInput" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.createNotebookExecutionJobRequestInput"></a>

```java
public GoogleColabScheduleCreateNotebookExecutionJobRequest getCreateNotebookExecutionJobRequestInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequest">GoogleColabScheduleCreateNotebookExecutionJobRequest</a>

---

##### `cronInput`<sup>Optional</sup> <a name="cronInput" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.cronInput"></a>

```java
public java.lang.String getCronInput();
```

- *Type:* java.lang.String

---

##### `desiredStateInput`<sup>Optional</sup> <a name="desiredStateInput" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.desiredStateInput"></a>

```java
public java.lang.String getDesiredStateInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.endTimeInput"></a>

```java
public java.lang.String getEndTimeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `maxConcurrentRunCountInput`<sup>Optional</sup> <a name="maxConcurrentRunCountInput" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.maxConcurrentRunCountInput"></a>

```java
public java.lang.String getMaxConcurrentRunCountInput();
```

- *Type:* java.lang.String

---

##### `maxRunCountInput`<sup>Optional</sup> <a name="maxRunCountInput" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.maxRunCountInput"></a>

```java
public java.lang.String getMaxRunCountInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeouts">GoogleColabScheduleTimeouts</a>

---

##### `allowQueueing`<sup>Required</sup> <a name="allowQueueing" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.allowQueueing"></a>

```java
public java.lang.Object getAllowQueueing();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cron`<sup>Required</sup> <a name="cron" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.cron"></a>

```java
public java.lang.String getCron();
```

- *Type:* java.lang.String

---

##### `desiredState`<sup>Required</sup> <a name="desiredState" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.desiredState"></a>

```java
public java.lang.String getDesiredState();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `maxConcurrentRunCount`<sup>Required</sup> <a name="maxConcurrentRunCount" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.maxConcurrentRunCount"></a>

```java
public java.lang.String getMaxConcurrentRunCount();
```

- *Type:* java.lang.String

---

##### `maxRunCount`<sup>Required</sup> <a name="maxRunCount" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.maxRunCount"></a>

```java
public java.lang.String getMaxRunCount();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleColabScheduleConfig <a name="GoogleColabScheduleConfig" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_schedule.GoogleColabScheduleConfig;

GoogleColabScheduleConfig.builder()
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
    .createNotebookExecutionJobRequest(GoogleColabScheduleCreateNotebookExecutionJobRequest)
    .cron(java.lang.String)
    .displayName(java.lang.String)
    .location(java.lang.String)
    .maxConcurrentRunCount(java.lang.String)
//  .allowQueueing(java.lang.Boolean)
//  .allowQueueing(IResolvable)
//  .desiredState(java.lang.String)
//  .endTime(java.lang.String)
//  .id(java.lang.String)
//  .maxRunCount(java.lang.String)
//  .project(java.lang.String)
//  .startTime(java.lang.String)
//  .timeouts(GoogleColabScheduleTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.createNotebookExecutionJobRequest">createNotebookExecutionJobRequest</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequest">GoogleColabScheduleCreateNotebookExecutionJobRequest</a></code> | create_notebook_execution_job_request block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.cron">cron</a></code> | <code>java.lang.String</code> | Cron schedule (https://en.wikipedia.org/wiki/Cron) to launch scheduled runs. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Required. The display name of the Schedule. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location for the resource: https://cloud.google.com/colab/docs/locations. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.maxConcurrentRunCount">maxConcurrentRunCount</a></code> | <code>java.lang.String</code> | Maximum number of runs that can be started concurrently for this Schedule. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.allowQueueing">allowQueueing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether new scheduled runs can be queued when max_concurrent_runs limit is reached. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.desiredState">desiredState</a></code> | <code>java.lang.String</code> | Desired state of the Colab Schedule. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.endTime">endTime</a></code> | <code>java.lang.String</code> | Timestamp after which no new runs can be scheduled. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_schedule#id GoogleColabSchedule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.maxRunCount">maxRunCount</a></code> | <code>java.lang.String</code> | Maximum run count of the schedule. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_schedule#project GoogleColabSchedule#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.startTime">startTime</a></code> | <code>java.lang.String</code> | The timestamp after which the first run can be scheduled. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeouts">GoogleColabScheduleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createNotebookExecutionJobRequest`<sup>Required</sup> <a name="createNotebookExecutionJobRequest" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.createNotebookExecutionJobRequest"></a>

```java
public GoogleColabScheduleCreateNotebookExecutionJobRequest getCreateNotebookExecutionJobRequest();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequest">GoogleColabScheduleCreateNotebookExecutionJobRequest</a>

create_notebook_execution_job_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_schedule#create_notebook_execution_job_request GoogleColabSchedule#create_notebook_execution_job_request}

---

##### `cron`<sup>Required</sup> <a name="cron" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.cron"></a>

```java
public java.lang.String getCron();
```

- *Type:* java.lang.String

Cron schedule (https://en.wikipedia.org/wiki/Cron) to launch scheduled runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_schedule#cron GoogleColabSchedule#cron}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Required. The display name of the Schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_schedule#display_name GoogleColabSchedule#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location for the resource: https://cloud.google.com/colab/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_schedule#location GoogleColabSchedule#location}

---

##### `maxConcurrentRunCount`<sup>Required</sup> <a name="maxConcurrentRunCount" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.maxConcurrentRunCount"></a>

```java
public java.lang.String getMaxConcurrentRunCount();
```

- *Type:* java.lang.String

Maximum number of runs that can be started concurrently for this Schedule.

This is the limit for starting the scheduled requests and not the execution of the notebook execution jobs created by the requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_schedule#max_concurrent_run_count GoogleColabSchedule#max_concurrent_run_count}

---

##### `allowQueueing`<sup>Optional</sup> <a name="allowQueueing" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.allowQueueing"></a>

```java
public java.lang.Object getAllowQueueing();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether new scheduled runs can be queued when max_concurrent_runs limit is reached.

If set to true, new runs will be queued instead of skipped. Default to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_schedule#allow_queueing GoogleColabSchedule#allow_queueing}

---

##### `desiredState`<sup>Optional</sup> <a name="desiredState" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.desiredState"></a>

```java
public java.lang.String getDesiredState();
```

- *Type:* java.lang.String

Desired state of the Colab Schedule.

Set this field to 'ACTIVE' to start/resume the schedule, and 'PAUSED' to pause the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_schedule#desired_state GoogleColabSchedule#desired_state}

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

Timestamp after which no new runs can be scheduled.

If specified, the schedule will be completed when either end_time is reached or when scheduled_run_count >= max_run_count. Must be in the RFC 3339 (https://www.ietf.org/rfc/rfc3339.txt) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_schedule#end_time GoogleColabSchedule#end_time}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_schedule#id GoogleColabSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxRunCount`<sup>Optional</sup> <a name="maxRunCount" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.maxRunCount"></a>

```java
public java.lang.String getMaxRunCount();
```

- *Type:* java.lang.String

Maximum run count of the schedule.

If specified, The schedule will be completed when either startedRunCount >= maxRunCount or when endTime is reached. If not specified, new runs will keep getting scheduled until this Schedule is paused or deleted. Already scheduled runs will be allowed to complete. Unset if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_schedule#max_run_count GoogleColabSchedule#max_run_count}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_schedule#project GoogleColabSchedule#project}.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

The timestamp after which the first run can be scheduled.

Defaults to the schedule creation time. Must be in the RFC 3339 (https://www.ietf.org/rfc/rfc3339.txt) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_schedule#start_time GoogleColabSchedule#start_time}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.timeouts"></a>

```java
public GoogleColabScheduleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeouts">GoogleColabScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_schedule#timeouts GoogleColabSchedule#timeouts}

---

### GoogleColabScheduleCreateNotebookExecutionJobRequest <a name="GoogleColabScheduleCreateNotebookExecutionJobRequest" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequest.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_schedule.GoogleColabScheduleCreateNotebookExecutionJobRequest;

GoogleColabScheduleCreateNotebookExecutionJobRequest.builder()
    .notebookExecutionJob(GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequest.property.notebookExecutionJob">notebookExecutionJob</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob</a></code> | notebook_execution_job block. |

---

##### `notebookExecutionJob`<sup>Required</sup> <a name="notebookExecutionJob" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequest.property.notebookExecutionJob"></a>

```java
public GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob getNotebookExecutionJob();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob</a>

notebook_execution_job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_schedule#notebook_execution_job GoogleColabSchedule#notebook_execution_job}

---

### GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob <a name="GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_schedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob;

GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.builder()
    .displayName(java.lang.String)
    .gcsOutputUri(java.lang.String)
    .notebookRuntimeTemplateResourceName(java.lang.String)
//  .dataformRepositorySource(GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource)
//  .executionTimeout(java.lang.String)
//  .executionUser(java.lang.String)
//  .gcsNotebookSource(GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource)
//  .serviceAccount(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Required. The display name of the Notebook Execution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.gcsOutputUri">gcsOutputUri</a></code> | <code>java.lang.String</code> | The Cloud Storage location to upload the result to. Format:'gs://bucket-name'. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.notebookRuntimeTemplateResourceName">notebookRuntimeTemplateResourceName</a></code> | <code>java.lang.String</code> | The NotebookRuntimeTemplate to source compute configuration from. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.dataformRepositorySource">dataformRepositorySource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource</a></code> | dataform_repository_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.executionTimeout">executionTimeout</a></code> | <code>java.lang.String</code> | Max running time of the execution job in seconds (default 86400s / 24 hrs). |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.executionUser">executionUser</a></code> | <code>java.lang.String</code> | The user email to run the execution as. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.gcsNotebookSource">gcsNotebookSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource</a></code> | gcs_notebook_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | The service account to run the execution as. |

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Required. The display name of the Notebook Execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_schedule#display_name GoogleColabSchedule#display_name}

---

##### `gcsOutputUri`<sup>Required</sup> <a name="gcsOutputUri" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.gcsOutputUri"></a>

```java
public java.lang.String getGcsOutputUri();
```

- *Type:* java.lang.String

The Cloud Storage location to upload the result to. Format:'gs://bucket-name'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_schedule#gcs_output_uri GoogleColabSchedule#gcs_output_uri}

---

##### `notebookRuntimeTemplateResourceName`<sup>Required</sup> <a name="notebookRuntimeTemplateResourceName" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.notebookRuntimeTemplateResourceName"></a>

```java
public java.lang.String getNotebookRuntimeTemplateResourceName();
```

- *Type:* java.lang.String

The NotebookRuntimeTemplate to source compute configuration from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_schedule#notebook_runtime_template_resource_name GoogleColabSchedule#notebook_runtime_template_resource_name}

---

##### `dataformRepositorySource`<sup>Optional</sup> <a name="dataformRepositorySource" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.dataformRepositorySource"></a>

```java
public GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource getDataformRepositorySource();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource</a>

dataform_repository_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_schedule#dataform_repository_source GoogleColabSchedule#dataform_repository_source}

---

##### `executionTimeout`<sup>Optional</sup> <a name="executionTimeout" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.executionTimeout"></a>

```java
public java.lang.String getExecutionTimeout();
```

- *Type:* java.lang.String

Max running time of the execution job in seconds (default 86400s / 24 hrs).

A duration in seconds with up to nine fractional digits, ending with "s". Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_schedule#execution_timeout GoogleColabSchedule#execution_timeout}

---

##### `executionUser`<sup>Optional</sup> <a name="executionUser" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.executionUser"></a>

```java
public java.lang.String getExecutionUser();
```

- *Type:* java.lang.String

The user email to run the execution as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_schedule#execution_user GoogleColabSchedule#execution_user}

---

##### `gcsNotebookSource`<sup>Optional</sup> <a name="gcsNotebookSource" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.gcsNotebookSource"></a>

```java
public GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource getGcsNotebookSource();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource</a>

gcs_notebook_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_schedule#gcs_notebook_source GoogleColabSchedule#gcs_notebook_source}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

The service account to run the execution as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_schedule#service_account GoogleColabSchedule#service_account}

---

### GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource <a name="GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_schedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource;

GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource.builder()
    .dataformRepositoryResourceName(java.lang.String)
//  .commitSha(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource.property.dataformRepositoryResourceName">dataformRepositoryResourceName</a></code> | <code>java.lang.String</code> | The resource name of the Dataform Repository. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource.property.commitSha">commitSha</a></code> | <code>java.lang.String</code> | The commit SHA to read repository with. If unset, the file will be read at HEAD. |

---

##### `dataformRepositoryResourceName`<sup>Required</sup> <a name="dataformRepositoryResourceName" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource.property.dataformRepositoryResourceName"></a>

```java
public java.lang.String getDataformRepositoryResourceName();
```

- *Type:* java.lang.String

The resource name of the Dataform Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_schedule#dataform_repository_resource_name GoogleColabSchedule#dataform_repository_resource_name}

---

##### `commitSha`<sup>Optional</sup> <a name="commitSha" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource.property.commitSha"></a>

```java
public java.lang.String getCommitSha();
```

- *Type:* java.lang.String

The commit SHA to read repository with. If unset, the file will be read at HEAD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_schedule#commit_sha GoogleColabSchedule#commit_sha}

---

### GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource <a name="GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_schedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource;

GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource.builder()
    .uri(java.lang.String)
//  .generation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource.property.uri">uri</a></code> | <code>java.lang.String</code> | The Cloud Storage uri pointing to the ipynb file. Format: gs://bucket/notebook_file.ipynb. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource.property.generation">generation</a></code> | <code>java.lang.String</code> | The version of the Cloud Storage object to read. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

The Cloud Storage uri pointing to the ipynb file. Format: gs://bucket/notebook_file.ipynb.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_schedule#uri GoogleColabSchedule#uri}

---

##### `generation`<sup>Optional</sup> <a name="generation" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource.property.generation"></a>

```java
public java.lang.String getGeneration();
```

- *Type:* java.lang.String

The version of the Cloud Storage object to read.

If unset, the current version of the object is read. See https://cloud.google.com/storage/docs/metadata#generation-number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_schedule#generation GoogleColabSchedule#generation}

---

### GoogleColabScheduleTimeouts <a name="GoogleColabScheduleTimeouts" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_schedule.GoogleColabScheduleTimeouts;

GoogleColabScheduleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_schedule#create GoogleColabSchedule#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_schedule#delete GoogleColabSchedule#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_schedule#update GoogleColabSchedule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_schedule#create GoogleColabSchedule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_schedule#delete GoogleColabSchedule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_schedule#update GoogleColabSchedule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference <a name="GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_schedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference;

new GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.resetCommitSha">resetCommitSha</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCommitSha` <a name="resetCommitSha" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.resetCommitSha"></a>

```java
public void resetCommitSha()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.commitShaInput">commitShaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.dataformRepositoryResourceNameInput">dataformRepositoryResourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.commitSha">commitSha</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.dataformRepositoryResourceName">dataformRepositoryResourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commitShaInput`<sup>Optional</sup> <a name="commitShaInput" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.commitShaInput"></a>

```java
public java.lang.String getCommitShaInput();
```

- *Type:* java.lang.String

---

##### `dataformRepositoryResourceNameInput`<sup>Optional</sup> <a name="dataformRepositoryResourceNameInput" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.dataformRepositoryResourceNameInput"></a>

```java
public java.lang.String getDataformRepositoryResourceNameInput();
```

- *Type:* java.lang.String

---

##### `commitSha`<sup>Required</sup> <a name="commitSha" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.commitSha"></a>

```java
public java.lang.String getCommitSha();
```

- *Type:* java.lang.String

---

##### `dataformRepositoryResourceName`<sup>Required</sup> <a name="dataformRepositoryResourceName" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.dataformRepositoryResourceName"></a>

```java
public java.lang.String getDataformRepositoryResourceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.internalValue"></a>

```java
public GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource</a>

---


### GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference <a name="GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_schedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference;

new GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.resetGeneration">resetGeneration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGeneration` <a name="resetGeneration" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.resetGeneration"></a>

```java
public void resetGeneration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.generationInput">generationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.generation">generation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `generationInput`<sup>Optional</sup> <a name="generationInput" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.generationInput"></a>

```java
public java.lang.String getGenerationInput();
```

- *Type:* java.lang.String

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.generation"></a>

```java
public java.lang.String getGeneration();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.internalValue"></a>

```java
public GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource</a>

---


### GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference <a name="GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_schedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference;

new GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putDataformRepositorySource">putDataformRepositorySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putGcsNotebookSource">putGcsNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetDataformRepositorySource">resetDataformRepositorySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetExecutionTimeout">resetExecutionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetExecutionUser">resetExecutionUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetGcsNotebookSource">resetGcsNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataformRepositorySource` <a name="putDataformRepositorySource" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putDataformRepositorySource"></a>

```java
public void putDataformRepositorySource(GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putDataformRepositorySource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource</a>

---

##### `putGcsNotebookSource` <a name="putGcsNotebookSource" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putGcsNotebookSource"></a>

```java
public void putGcsNotebookSource(GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putGcsNotebookSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource</a>

---

##### `resetDataformRepositorySource` <a name="resetDataformRepositorySource" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetDataformRepositorySource"></a>

```java
public void resetDataformRepositorySource()
```

##### `resetExecutionTimeout` <a name="resetExecutionTimeout" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetExecutionTimeout"></a>

```java
public void resetExecutionTimeout()
```

##### `resetExecutionUser` <a name="resetExecutionUser" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetExecutionUser"></a>

```java
public void resetExecutionUser()
```

##### `resetGcsNotebookSource` <a name="resetGcsNotebookSource" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetGcsNotebookSource"></a>

```java
public void resetGcsNotebookSource()
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetServiceAccount"></a>

```java
public void resetServiceAccount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.dataformRepositorySource">dataformRepositorySource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.gcsNotebookSource">gcsNotebookSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.dataformRepositorySourceInput">dataformRepositorySourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.executionTimeoutInput">executionTimeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.executionUserInput">executionUserInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.gcsNotebookSourceInput">gcsNotebookSourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.gcsOutputUriInput">gcsOutputUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.notebookRuntimeTemplateResourceNameInput">notebookRuntimeTemplateResourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.executionTimeout">executionTimeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.executionUser">executionUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.gcsOutputUri">gcsOutputUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.notebookRuntimeTemplateResourceName">notebookRuntimeTemplateResourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataformRepositorySource`<sup>Required</sup> <a name="dataformRepositorySource" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.dataformRepositorySource"></a>

```java
public GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference getDataformRepositorySource();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference</a>

---

##### `gcsNotebookSource`<sup>Required</sup> <a name="gcsNotebookSource" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.gcsNotebookSource"></a>

```java
public GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference getGcsNotebookSource();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference</a>

---

##### `dataformRepositorySourceInput`<sup>Optional</sup> <a name="dataformRepositorySourceInput" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.dataformRepositorySourceInput"></a>

```java
public GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource getDataformRepositorySourceInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `executionTimeoutInput`<sup>Optional</sup> <a name="executionTimeoutInput" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.executionTimeoutInput"></a>

```java
public java.lang.String getExecutionTimeoutInput();
```

- *Type:* java.lang.String

---

##### `executionUserInput`<sup>Optional</sup> <a name="executionUserInput" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.executionUserInput"></a>

```java
public java.lang.String getExecutionUserInput();
```

- *Type:* java.lang.String

---

##### `gcsNotebookSourceInput`<sup>Optional</sup> <a name="gcsNotebookSourceInput" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.gcsNotebookSourceInput"></a>

```java
public GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource getGcsNotebookSourceInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource</a>

---

##### `gcsOutputUriInput`<sup>Optional</sup> <a name="gcsOutputUriInput" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.gcsOutputUriInput"></a>

```java
public java.lang.String getGcsOutputUriInput();
```

- *Type:* java.lang.String

---

##### `notebookRuntimeTemplateResourceNameInput`<sup>Optional</sup> <a name="notebookRuntimeTemplateResourceNameInput" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.notebookRuntimeTemplateResourceNameInput"></a>

```java
public java.lang.String getNotebookRuntimeTemplateResourceNameInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.serviceAccountInput"></a>

```java
public java.lang.String getServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `executionTimeout`<sup>Required</sup> <a name="executionTimeout" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.executionTimeout"></a>

```java
public java.lang.String getExecutionTimeout();
```

- *Type:* java.lang.String

---

##### `executionUser`<sup>Required</sup> <a name="executionUser" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.executionUser"></a>

```java
public java.lang.String getExecutionUser();
```

- *Type:* java.lang.String

---

##### `gcsOutputUri`<sup>Required</sup> <a name="gcsOutputUri" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.gcsOutputUri"></a>

```java
public java.lang.String getGcsOutputUri();
```

- *Type:* java.lang.String

---

##### `notebookRuntimeTemplateResourceName`<sup>Required</sup> <a name="notebookRuntimeTemplateResourceName" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.notebookRuntimeTemplateResourceName"></a>

```java
public java.lang.String getNotebookRuntimeTemplateResourceName();
```

- *Type:* java.lang.String

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.internalValue"></a>

```java
public GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob</a>

---


### GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference <a name="GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_schedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference;

new GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.putNotebookExecutionJob">putNotebookExecutionJob</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNotebookExecutionJob` <a name="putNotebookExecutionJob" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.putNotebookExecutionJob"></a>

```java
public void putNotebookExecutionJob(GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.putNotebookExecutionJob.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.notebookExecutionJob">notebookExecutionJob</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.notebookExecutionJobInput">notebookExecutionJobInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequest">GoogleColabScheduleCreateNotebookExecutionJobRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `notebookExecutionJob`<sup>Required</sup> <a name="notebookExecutionJob" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.notebookExecutionJob"></a>

```java
public GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference getNotebookExecutionJob();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference</a>

---

##### `notebookExecutionJobInput`<sup>Optional</sup> <a name="notebookExecutionJobInput" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.notebookExecutionJobInput"></a>

```java
public GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob getNotebookExecutionJobInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.internalValue"></a>

```java
public GoogleColabScheduleCreateNotebookExecutionJobRequest getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequest">GoogleColabScheduleCreateNotebookExecutionJobRequest</a>

---


### GoogleColabScheduleTimeoutsOutputReference <a name="GoogleColabScheduleTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_schedule.GoogleColabScheduleTimeoutsOutputReference;

new GoogleColabScheduleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeouts">GoogleColabScheduleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeouts">GoogleColabScheduleTimeouts</a>

---



