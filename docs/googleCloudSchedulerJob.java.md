# `googleCloudSchedulerJob` Submodule <a name="`googleCloudSchedulerJob` Submodule" id="@cdktf/provider-google-beta.googleCloudSchedulerJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudSchedulerJob <a name="GoogleCloudSchedulerJob" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job google_cloud_scheduler_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_scheduler_job.GoogleCloudSchedulerJob;

GoogleCloudSchedulerJob.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .appEngineHttpTarget(GoogleCloudSchedulerJobAppEngineHttpTarget)
//  .attemptDeadline(java.lang.String)
//  .description(java.lang.String)
//  .httpTarget(GoogleCloudSchedulerJobHttpTarget)
//  .id(java.lang.String)
//  .paused(java.lang.Boolean)
//  .paused(IResolvable)
//  .project(java.lang.String)
//  .pubsubTarget(GoogleCloudSchedulerJobPubsubTarget)
//  .region(java.lang.String)
//  .retryConfig(GoogleCloudSchedulerJobRetryConfig)
//  .schedule(java.lang.String)
//  .timeouts(GoogleCloudSchedulerJobTimeouts)
//  .timeZone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the job. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.appEngineHttpTarget">appEngineHttpTarget</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget">GoogleCloudSchedulerJobAppEngineHttpTarget</a></code> | app_engine_http_target block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.attemptDeadline">attemptDeadline</a></code> | <code>java.lang.String</code> | The deadline for job attempts. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A human-readable description for the job. This string must not contain more than 500 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.httpTarget">httpTarget</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget">GoogleCloudSchedulerJobHttpTarget</a></code> | http_target block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#id GoogleCloudSchedulerJob#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.paused">paused</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Sets the job to a paused state. Jobs default to being enabled when this property is not set. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#project GoogleCloudSchedulerJob#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.pubsubTarget">pubsubTarget</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget">GoogleCloudSchedulerJobPubsubTarget</a></code> | pubsub_target block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where the scheduler job resides. If it is not provided, Terraform will use the provider default. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.retryConfig">retryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig">GoogleCloudSchedulerJobRetryConfig</a></code> | retry_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.schedule">schedule</a></code> | <code>java.lang.String</code> | Describes the schedule on which the job will be executed. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts">GoogleCloudSchedulerJobTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Specifies the time zone to be used in interpreting schedule. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#name GoogleCloudSchedulerJob#name}

---

##### `appEngineHttpTarget`<sup>Optional</sup> <a name="appEngineHttpTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.appEngineHttpTarget"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget">GoogleCloudSchedulerJobAppEngineHttpTarget</a>

app_engine_http_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#app_engine_http_target GoogleCloudSchedulerJob#app_engine_http_target}

---

##### `attemptDeadline`<sup>Optional</sup> <a name="attemptDeadline" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.attemptDeadline"></a>

- *Type:* java.lang.String

The deadline for job attempts.

If the request handler does not respond by this deadline then the request is
cancelled and the attempt is marked as a DEADLINE_EXCEEDED failure. The failed attempt can be viewed in
execution logs. Cloud Scheduler will retry the job according to the RetryConfig.
The allowed duration for this deadline is:

* For HTTP targets, between 15 seconds and 30 minutes.
* For App Engine HTTP targets, between 15 seconds and 24 hours.
* **Note**: For PubSub targets, this field is ignored - setting it will introduce an unresolvable diff.
  A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#attempt_deadline GoogleCloudSchedulerJob#attempt_deadline}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A human-readable description for the job. This string must not contain more than 500 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#description GoogleCloudSchedulerJob#description}

---

##### `httpTarget`<sup>Optional</sup> <a name="httpTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.httpTarget"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget">GoogleCloudSchedulerJobHttpTarget</a>

http_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#http_target GoogleCloudSchedulerJob#http_target}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#id GoogleCloudSchedulerJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `paused`<sup>Optional</sup> <a name="paused" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.paused"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Sets the job to a paused state. Jobs default to being enabled when this property is not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#paused GoogleCloudSchedulerJob#paused}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#project GoogleCloudSchedulerJob#project}.

---

##### `pubsubTarget`<sup>Optional</sup> <a name="pubsubTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.pubsubTarget"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget">GoogleCloudSchedulerJobPubsubTarget</a>

pubsub_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#pubsub_target GoogleCloudSchedulerJob#pubsub_target}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where the scheduler job resides. If it is not provided, Terraform will use the provider default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#region GoogleCloudSchedulerJob#region}

---

##### `retryConfig`<sup>Optional</sup> <a name="retryConfig" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.retryConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig">GoogleCloudSchedulerJobRetryConfig</a>

retry_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#retry_config GoogleCloudSchedulerJob#retry_config}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.schedule"></a>

- *Type:* java.lang.String

Describes the schedule on which the job will be executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#schedule GoogleCloudSchedulerJob#schedule}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts">GoogleCloudSchedulerJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#timeouts GoogleCloudSchedulerJob#timeouts}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.timeZone"></a>

- *Type:* java.lang.String

Specifies the time zone to be used in interpreting schedule.

The value of this field must be a time zone name from the tz database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#time_zone GoogleCloudSchedulerJob#time_zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putAppEngineHttpTarget">putAppEngineHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putHttpTarget">putHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putPubsubTarget">putPubsubTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putRetryConfig">putRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetAppEngineHttpTarget">resetAppEngineHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetAttemptDeadline">resetAttemptDeadline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetHttpTarget">resetHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetPaused">resetPaused</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetPubsubTarget">resetPubsubTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetRetryConfig">resetRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAppEngineHttpTarget` <a name="putAppEngineHttpTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putAppEngineHttpTarget"></a>

```java
public void putAppEngineHttpTarget(GoogleCloudSchedulerJobAppEngineHttpTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putAppEngineHttpTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget">GoogleCloudSchedulerJobAppEngineHttpTarget</a>

---

##### `putHttpTarget` <a name="putHttpTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putHttpTarget"></a>

```java
public void putHttpTarget(GoogleCloudSchedulerJobHttpTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putHttpTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget">GoogleCloudSchedulerJobHttpTarget</a>

---

##### `putPubsubTarget` <a name="putPubsubTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putPubsubTarget"></a>

```java
public void putPubsubTarget(GoogleCloudSchedulerJobPubsubTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putPubsubTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget">GoogleCloudSchedulerJobPubsubTarget</a>

---

##### `putRetryConfig` <a name="putRetryConfig" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putRetryConfig"></a>

```java
public void putRetryConfig(GoogleCloudSchedulerJobRetryConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putRetryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig">GoogleCloudSchedulerJobRetryConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putTimeouts"></a>

```java
public void putTimeouts(GoogleCloudSchedulerJobTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts">GoogleCloudSchedulerJobTimeouts</a>

---

##### `resetAppEngineHttpTarget` <a name="resetAppEngineHttpTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetAppEngineHttpTarget"></a>

```java
public void resetAppEngineHttpTarget()
```

##### `resetAttemptDeadline` <a name="resetAttemptDeadline" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetAttemptDeadline"></a>

```java
public void resetAttemptDeadline()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetHttpTarget` <a name="resetHttpTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetHttpTarget"></a>

```java
public void resetHttpTarget()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetId"></a>

```java
public void resetId()
```

##### `resetPaused` <a name="resetPaused" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetPaused"></a>

```java
public void resetPaused()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetProject"></a>

```java
public void resetProject()
```

##### `resetPubsubTarget` <a name="resetPubsubTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetPubsubTarget"></a>

```java
public void resetPubsubTarget()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRetryConfig` <a name="resetRetryConfig" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetRetryConfig"></a>

```java
public void resetRetryConfig()
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetSchedule"></a>

```java
public void resetSchedule()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetTimeZone"></a>

```java
public void resetTimeZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleCloudSchedulerJob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_scheduler_job.GoogleCloudSchedulerJob;

GoogleCloudSchedulerJob.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_scheduler_job.GoogleCloudSchedulerJob;

GoogleCloudSchedulerJob.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_scheduler_job.GoogleCloudSchedulerJob;

GoogleCloudSchedulerJob.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_scheduler_job.GoogleCloudSchedulerJob;

GoogleCloudSchedulerJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleCloudSchedulerJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleCloudSchedulerJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleCloudSchedulerJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleCloudSchedulerJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleCloudSchedulerJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.appEngineHttpTarget">appEngineHttpTarget</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference">GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.httpTarget">httpTarget</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference">GoogleCloudSchedulerJobHttpTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.pubsubTarget">pubsubTarget</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference">GoogleCloudSchedulerJobPubsubTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.retryConfig">retryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference">GoogleCloudSchedulerJobRetryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference">GoogleCloudSchedulerJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.appEngineHttpTargetInput">appEngineHttpTargetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget">GoogleCloudSchedulerJobAppEngineHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.attemptDeadlineInput">attemptDeadlineInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.httpTargetInput">httpTargetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget">GoogleCloudSchedulerJobHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.pausedInput">pausedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.pubsubTargetInput">pubsubTargetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget">GoogleCloudSchedulerJobPubsubTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.retryConfigInput">retryConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig">GoogleCloudSchedulerJobRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.scheduleInput">scheduleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts">GoogleCloudSchedulerJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.attemptDeadline">attemptDeadline</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.paused">paused</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.schedule">schedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appEngineHttpTarget`<sup>Required</sup> <a name="appEngineHttpTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.appEngineHttpTarget"></a>

```java
public GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference getAppEngineHttpTarget();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference">GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference</a>

---

##### `httpTarget`<sup>Required</sup> <a name="httpTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.httpTarget"></a>

```java
public GoogleCloudSchedulerJobHttpTargetOutputReference getHttpTarget();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference">GoogleCloudSchedulerJobHttpTargetOutputReference</a>

---

##### `pubsubTarget`<sup>Required</sup> <a name="pubsubTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.pubsubTarget"></a>

```java
public GoogleCloudSchedulerJobPubsubTargetOutputReference getPubsubTarget();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference">GoogleCloudSchedulerJobPubsubTargetOutputReference</a>

---

##### `retryConfig`<sup>Required</sup> <a name="retryConfig" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.retryConfig"></a>

```java
public GoogleCloudSchedulerJobRetryConfigOutputReference getRetryConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference">GoogleCloudSchedulerJobRetryConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.timeouts"></a>

```java
public GoogleCloudSchedulerJobTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference">GoogleCloudSchedulerJobTimeoutsOutputReference</a>

---

##### `appEngineHttpTargetInput`<sup>Optional</sup> <a name="appEngineHttpTargetInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.appEngineHttpTargetInput"></a>

```java
public GoogleCloudSchedulerJobAppEngineHttpTarget getAppEngineHttpTargetInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget">GoogleCloudSchedulerJobAppEngineHttpTarget</a>

---

##### `attemptDeadlineInput`<sup>Optional</sup> <a name="attemptDeadlineInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.attemptDeadlineInput"></a>

```java
public java.lang.String getAttemptDeadlineInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `httpTargetInput`<sup>Optional</sup> <a name="httpTargetInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.httpTargetInput"></a>

```java
public GoogleCloudSchedulerJobHttpTarget getHttpTargetInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget">GoogleCloudSchedulerJobHttpTarget</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pausedInput`<sup>Optional</sup> <a name="pausedInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.pausedInput"></a>

```java
public java.lang.Object getPausedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `pubsubTargetInput`<sup>Optional</sup> <a name="pubsubTargetInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.pubsubTargetInput"></a>

```java
public GoogleCloudSchedulerJobPubsubTarget getPubsubTargetInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget">GoogleCloudSchedulerJobPubsubTarget</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `retryConfigInput`<sup>Optional</sup> <a name="retryConfigInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.retryConfigInput"></a>

```java
public GoogleCloudSchedulerJobRetryConfig getRetryConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig">GoogleCloudSchedulerJobRetryConfig</a>

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.scheduleInput"></a>

```java
public java.lang.String getScheduleInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts">GoogleCloudSchedulerJobTimeouts</a>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `attemptDeadline`<sup>Required</sup> <a name="attemptDeadline" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.attemptDeadline"></a>

```java
public java.lang.String getAttemptDeadline();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `paused`<sup>Required</sup> <a name="paused" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.paused"></a>

```java
public java.lang.Object getPaused();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudSchedulerJobAppEngineHttpTarget <a name="GoogleCloudSchedulerJobAppEngineHttpTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_scheduler_job.GoogleCloudSchedulerJobAppEngineHttpTarget;

GoogleCloudSchedulerJobAppEngineHttpTarget.builder()
    .relativeUri(java.lang.String)
//  .appEngineRouting(GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting)
//  .body(java.lang.String)
//  .headers(java.util.Map<java.lang.String, java.lang.String>)
//  .httpMethod(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget.property.relativeUri">relativeUri</a></code> | <code>java.lang.String</code> | The relative URI. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget.property.appEngineRouting">appEngineRouting</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting">GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting</a></code> | app_engine_routing block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget.property.body">body</a></code> | <code>java.lang.String</code> | HTTP request body. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget.property.headers">headers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | HTTP request headers. This map contains the header field names and values. Headers can be set when the job is created. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget.property.httpMethod">httpMethod</a></code> | <code>java.lang.String</code> | Which HTTP method to use for the request. |

---

##### `relativeUri`<sup>Required</sup> <a name="relativeUri" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget.property.relativeUri"></a>

```java
public java.lang.String getRelativeUri();
```

- *Type:* java.lang.String

The relative URI.

The relative URL must begin with "/" and must be a valid HTTP relative URL.
It can contain a path, query string arguments, and # fragments.
If the relative URL is empty, then the root path "/" will be used.
No spaces are allowed, and the maximum length allowed is 2083 characters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#relative_uri GoogleCloudSchedulerJob#relative_uri}

---

##### `appEngineRouting`<sup>Optional</sup> <a name="appEngineRouting" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget.property.appEngineRouting"></a>

```java
public GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting getAppEngineRouting();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting">GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting</a>

app_engine_routing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#app_engine_routing GoogleCloudSchedulerJob#app_engine_routing}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

HTTP request body.

A request body is allowed only if the HTTP method is POST or PUT.
It will result in invalid argument error to set a body on a job with an incompatible HttpMethod.

A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#body GoogleCloudSchedulerJob#body}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget.property.headers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

HTTP request headers. This map contains the header field names and values. Headers can be set when the job is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#headers GoogleCloudSchedulerJob#headers}

---

##### `httpMethod`<sup>Optional</sup> <a name="httpMethod" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget.property.httpMethod"></a>

```java
public java.lang.String getHttpMethod();
```

- *Type:* java.lang.String

Which HTTP method to use for the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#http_method GoogleCloudSchedulerJob#http_method}

---

### GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting <a name="GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_scheduler_job.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting;

GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting.builder()
//  .instance(java.lang.String)
//  .service(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting.property.instance">instance</a></code> | <code>java.lang.String</code> | App instance. By default, the job is sent to an instance which is available when the job is attempted. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting.property.service">service</a></code> | <code>java.lang.String</code> | App service. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting.property.version">version</a></code> | <code>java.lang.String</code> | App version. |

---

##### `instance`<sup>Optional</sup> <a name="instance" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

App instance. By default, the job is sent to an instance which is available when the job is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#instance GoogleCloudSchedulerJob#instance}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

App service.

By default, the job is sent to the service which is the default service when the job is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#service GoogleCloudSchedulerJob#service}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

App version.

By default, the job is sent to the version which is the default version when the job is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#version GoogleCloudSchedulerJob#version}

---

### GoogleCloudSchedulerJobConfig <a name="GoogleCloudSchedulerJobConfig" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_scheduler_job.GoogleCloudSchedulerJobConfig;

GoogleCloudSchedulerJobConfig.builder()
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
    .name(java.lang.String)
//  .appEngineHttpTarget(GoogleCloudSchedulerJobAppEngineHttpTarget)
//  .attemptDeadline(java.lang.String)
//  .description(java.lang.String)
//  .httpTarget(GoogleCloudSchedulerJobHttpTarget)
//  .id(java.lang.String)
//  .paused(java.lang.Boolean)
//  .paused(IResolvable)
//  .project(java.lang.String)
//  .pubsubTarget(GoogleCloudSchedulerJobPubsubTarget)
//  .region(java.lang.String)
//  .retryConfig(GoogleCloudSchedulerJobRetryConfig)
//  .schedule(java.lang.String)
//  .timeouts(GoogleCloudSchedulerJobTimeouts)
//  .timeZone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the job. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.appEngineHttpTarget">appEngineHttpTarget</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget">GoogleCloudSchedulerJobAppEngineHttpTarget</a></code> | app_engine_http_target block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.attemptDeadline">attemptDeadline</a></code> | <code>java.lang.String</code> | The deadline for job attempts. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.description">description</a></code> | <code>java.lang.String</code> | A human-readable description for the job. This string must not contain more than 500 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.httpTarget">httpTarget</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget">GoogleCloudSchedulerJobHttpTarget</a></code> | http_target block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#id GoogleCloudSchedulerJob#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.paused">paused</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Sets the job to a paused state. Jobs default to being enabled when this property is not set. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#project GoogleCloudSchedulerJob#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.pubsubTarget">pubsubTarget</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget">GoogleCloudSchedulerJobPubsubTarget</a></code> | pubsub_target block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where the scheduler job resides. If it is not provided, Terraform will use the provider default. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.retryConfig">retryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig">GoogleCloudSchedulerJobRetryConfig</a></code> | retry_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.schedule">schedule</a></code> | <code>java.lang.String</code> | Describes the schedule on which the job will be executed. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts">GoogleCloudSchedulerJobTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Specifies the time zone to be used in interpreting schedule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#name GoogleCloudSchedulerJob#name}

---

##### `appEngineHttpTarget`<sup>Optional</sup> <a name="appEngineHttpTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.appEngineHttpTarget"></a>

```java
public GoogleCloudSchedulerJobAppEngineHttpTarget getAppEngineHttpTarget();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget">GoogleCloudSchedulerJobAppEngineHttpTarget</a>

app_engine_http_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#app_engine_http_target GoogleCloudSchedulerJob#app_engine_http_target}

---

##### `attemptDeadline`<sup>Optional</sup> <a name="attemptDeadline" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.attemptDeadline"></a>

```java
public java.lang.String getAttemptDeadline();
```

- *Type:* java.lang.String

The deadline for job attempts.

If the request handler does not respond by this deadline then the request is
cancelled and the attempt is marked as a DEADLINE_EXCEEDED failure. The failed attempt can be viewed in
execution logs. Cloud Scheduler will retry the job according to the RetryConfig.
The allowed duration for this deadline is:

* For HTTP targets, between 15 seconds and 30 minutes.
* For App Engine HTTP targets, between 15 seconds and 24 hours.
* **Note**: For PubSub targets, this field is ignored - setting it will introduce an unresolvable diff.
  A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#attempt_deadline GoogleCloudSchedulerJob#attempt_deadline}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A human-readable description for the job. This string must not contain more than 500 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#description GoogleCloudSchedulerJob#description}

---

##### `httpTarget`<sup>Optional</sup> <a name="httpTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.httpTarget"></a>

```java
public GoogleCloudSchedulerJobHttpTarget getHttpTarget();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget">GoogleCloudSchedulerJobHttpTarget</a>

http_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#http_target GoogleCloudSchedulerJob#http_target}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#id GoogleCloudSchedulerJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `paused`<sup>Optional</sup> <a name="paused" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.paused"></a>

```java
public java.lang.Object getPaused();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Sets the job to a paused state. Jobs default to being enabled when this property is not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#paused GoogleCloudSchedulerJob#paused}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#project GoogleCloudSchedulerJob#project}.

---

##### `pubsubTarget`<sup>Optional</sup> <a name="pubsubTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.pubsubTarget"></a>

```java
public GoogleCloudSchedulerJobPubsubTarget getPubsubTarget();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget">GoogleCloudSchedulerJobPubsubTarget</a>

pubsub_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#pubsub_target GoogleCloudSchedulerJob#pubsub_target}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where the scheduler job resides. If it is not provided, Terraform will use the provider default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#region GoogleCloudSchedulerJob#region}

---

##### `retryConfig`<sup>Optional</sup> <a name="retryConfig" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.retryConfig"></a>

```java
public GoogleCloudSchedulerJobRetryConfig getRetryConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig">GoogleCloudSchedulerJobRetryConfig</a>

retry_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#retry_config GoogleCloudSchedulerJob#retry_config}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

Describes the schedule on which the job will be executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#schedule GoogleCloudSchedulerJob#schedule}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.timeouts"></a>

```java
public GoogleCloudSchedulerJobTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts">GoogleCloudSchedulerJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#timeouts GoogleCloudSchedulerJob#timeouts}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

Specifies the time zone to be used in interpreting schedule.

The value of this field must be a time zone name from the tz database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#time_zone GoogleCloudSchedulerJob#time_zone}

---

### GoogleCloudSchedulerJobHttpTarget <a name="GoogleCloudSchedulerJobHttpTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_scheduler_job.GoogleCloudSchedulerJobHttpTarget;

GoogleCloudSchedulerJobHttpTarget.builder()
    .uri(java.lang.String)
//  .body(java.lang.String)
//  .headers(java.util.Map<java.lang.String, java.lang.String>)
//  .httpMethod(java.lang.String)
//  .oauthToken(GoogleCloudSchedulerJobHttpTargetOauthToken)
//  .oidcToken(GoogleCloudSchedulerJobHttpTargetOidcToken)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget.property.uri">uri</a></code> | <code>java.lang.String</code> | The full URI path that the request will be sent to. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget.property.body">body</a></code> | <code>java.lang.String</code> | HTTP request body. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget.property.headers">headers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | This map contains the header field names and values. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget.property.httpMethod">httpMethod</a></code> | <code>java.lang.String</code> | Which HTTP method to use for the request. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget.property.oauthToken">oauthToken</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken">GoogleCloudSchedulerJobHttpTargetOauthToken</a></code> | oauth_token block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget.property.oidcToken">oidcToken</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken">GoogleCloudSchedulerJobHttpTargetOidcToken</a></code> | oidc_token block. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

The full URI path that the request will be sent to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#uri GoogleCloudSchedulerJob#uri}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

HTTP request body.

A request body is allowed only if the HTTP method is POST, PUT, or PATCH.
It is an error to set body on a job with an incompatible HttpMethod.

A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#body GoogleCloudSchedulerJob#body}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget.property.headers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

This map contains the header field names and values.

Repeated headers are not supported, but a header value can contain commas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#headers GoogleCloudSchedulerJob#headers}

---

##### `httpMethod`<sup>Optional</sup> <a name="httpMethod" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget.property.httpMethod"></a>

```java
public java.lang.String getHttpMethod();
```

- *Type:* java.lang.String

Which HTTP method to use for the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#http_method GoogleCloudSchedulerJob#http_method}

---

##### `oauthToken`<sup>Optional</sup> <a name="oauthToken" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget.property.oauthToken"></a>

```java
public GoogleCloudSchedulerJobHttpTargetOauthToken getOauthToken();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken">GoogleCloudSchedulerJobHttpTargetOauthToken</a>

oauth_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#oauth_token GoogleCloudSchedulerJob#oauth_token}

---

##### `oidcToken`<sup>Optional</sup> <a name="oidcToken" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget.property.oidcToken"></a>

```java
public GoogleCloudSchedulerJobHttpTargetOidcToken getOidcToken();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken">GoogleCloudSchedulerJobHttpTargetOidcToken</a>

oidc_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#oidc_token GoogleCloudSchedulerJob#oidc_token}

---

### GoogleCloudSchedulerJobHttpTargetOauthToken <a name="GoogleCloudSchedulerJobHttpTargetOauthToken" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_scheduler_job.GoogleCloudSchedulerJobHttpTargetOauthToken;

GoogleCloudSchedulerJobHttpTargetOauthToken.builder()
    .serviceAccountEmail(java.lang.String)
//  .scope(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | Service account email to be used for generating OAuth token. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken.property.scope">scope</a></code> | <code>java.lang.String</code> | OAuth scope to be used for generating OAuth access token. If not specified, "https://www.googleapis.com/auth/cloud-platform" will be used. |

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

Service account email to be used for generating OAuth token.

The service account must be within the same project as the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#service_account_email GoogleCloudSchedulerJob#service_account_email}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

OAuth scope to be used for generating OAuth access token. If not specified, "https://www.googleapis.com/auth/cloud-platform" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#scope GoogleCloudSchedulerJob#scope}

---

### GoogleCloudSchedulerJobHttpTargetOidcToken <a name="GoogleCloudSchedulerJobHttpTargetOidcToken" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_scheduler_job.GoogleCloudSchedulerJobHttpTargetOidcToken;

GoogleCloudSchedulerJobHttpTargetOidcToken.builder()
    .serviceAccountEmail(java.lang.String)
//  .audience(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | Service account email to be used for generating OAuth token. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken.property.audience">audience</a></code> | <code>java.lang.String</code> | Audience to be used when generating OIDC token. If not specified, the URI specified in target will be used. |

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

Service account email to be used for generating OAuth token.

The service account must be within the same project as the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#service_account_email GoogleCloudSchedulerJob#service_account_email}

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken.property.audience"></a>

```java
public java.lang.String getAudience();
```

- *Type:* java.lang.String

Audience to be used when generating OIDC token. If not specified, the URI specified in target will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#audience GoogleCloudSchedulerJob#audience}

---

### GoogleCloudSchedulerJobPubsubTarget <a name="GoogleCloudSchedulerJobPubsubTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_scheduler_job.GoogleCloudSchedulerJobPubsubTarget;

GoogleCloudSchedulerJobPubsubTarget.builder()
    .topicName(java.lang.String)
//  .attributes(java.util.Map<java.lang.String, java.lang.String>)
//  .data(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget.property.topicName">topicName</a></code> | <code>java.lang.String</code> | The full resource name for the Cloud Pub/Sub topic to which messages will be published when a job is delivered. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget.property.attributes">attributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Attributes for PubsubMessage. Pubsub message must contain either non-empty data, or at least one attribute. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget.property.data">data</a></code> | <code>java.lang.String</code> | The message payload for PubsubMessage. Pubsub message must contain either non-empty data, or at least one attribute. |

---

##### `topicName`<sup>Required</sup> <a name="topicName" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget.property.topicName"></a>

```java
public java.lang.String getTopicName();
```

- *Type:* java.lang.String

The full resource name for the Cloud Pub/Sub topic to which messages will be published when a job is delivered.

~>**NOTE:**
The topic name must be in the same format as required by PubSub's
PublishRequest.name, e.g. 'projects/my-project/topics/my-topic'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#topic_name GoogleCloudSchedulerJob#topic_name}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget.property.attributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Attributes for PubsubMessage. Pubsub message must contain either non-empty data, or at least one attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#attributes GoogleCloudSchedulerJob#attributes}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget.property.data"></a>

```java
public java.lang.String getData();
```

- *Type:* java.lang.String

The message payload for PubsubMessage. Pubsub message must contain either non-empty data, or at least one attribute.

A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#data GoogleCloudSchedulerJob#data}

---

### GoogleCloudSchedulerJobRetryConfig <a name="GoogleCloudSchedulerJobRetryConfig" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_scheduler_job.GoogleCloudSchedulerJobRetryConfig;

GoogleCloudSchedulerJobRetryConfig.builder()
//  .maxBackoffDuration(java.lang.String)
//  .maxDoublings(java.lang.Number)
//  .maxRetryDuration(java.lang.String)
//  .minBackoffDuration(java.lang.String)
//  .retryCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig.property.maxBackoffDuration">maxBackoffDuration</a></code> | <code>java.lang.String</code> | The maximum amount of time to wait before retrying a job after it fails. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig.property.maxDoublings">maxDoublings</a></code> | <code>java.lang.Number</code> | The time between retries will double maxDoublings times. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig.property.maxRetryDuration">maxRetryDuration</a></code> | <code>java.lang.String</code> | The time limit for retrying a failed job, measured from time when an execution was first attempted. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig.property.minBackoffDuration">minBackoffDuration</a></code> | <code>java.lang.String</code> | The minimum amount of time to wait before retrying a job after it fails. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig.property.retryCount">retryCount</a></code> | <code>java.lang.Number</code> | The number of attempts that the system will make to run a job using the exponential backoff procedure described by maxDoublings. |

---

##### `maxBackoffDuration`<sup>Optional</sup> <a name="maxBackoffDuration" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig.property.maxBackoffDuration"></a>

```java
public java.lang.String getMaxBackoffDuration();
```

- *Type:* java.lang.String

The maximum amount of time to wait before retrying a job after it fails.

A duration in seconds with up to nine fractional digits, terminated by 's'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#max_backoff_duration GoogleCloudSchedulerJob#max_backoff_duration}

---

##### `maxDoublings`<sup>Optional</sup> <a name="maxDoublings" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig.property.maxDoublings"></a>

```java
public java.lang.Number getMaxDoublings();
```

- *Type:* java.lang.Number

The time between retries will double maxDoublings times.

A job's retry interval starts at minBackoffDuration,
then doubles maxDoublings times, then increases linearly,
and finally retries retries at intervals of maxBackoffDuration up to retryCount times.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#max_doublings GoogleCloudSchedulerJob#max_doublings}

---

##### `maxRetryDuration`<sup>Optional</sup> <a name="maxRetryDuration" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig.property.maxRetryDuration"></a>

```java
public java.lang.String getMaxRetryDuration();
```

- *Type:* java.lang.String

The time limit for retrying a failed job, measured from time when an execution was first attempted.

If specified with retryCount, the job will be retried until both limits are reached.
A duration in seconds with up to nine fractional digits, terminated by 's'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#max_retry_duration GoogleCloudSchedulerJob#max_retry_duration}

---

##### `minBackoffDuration`<sup>Optional</sup> <a name="minBackoffDuration" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig.property.minBackoffDuration"></a>

```java
public java.lang.String getMinBackoffDuration();
```

- *Type:* java.lang.String

The minimum amount of time to wait before retrying a job after it fails.

A duration in seconds with up to nine fractional digits, terminated by 's'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#min_backoff_duration GoogleCloudSchedulerJob#min_backoff_duration}

---

##### `retryCount`<sup>Optional</sup> <a name="retryCount" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig.property.retryCount"></a>

```java
public java.lang.Number getRetryCount();
```

- *Type:* java.lang.Number

The number of attempts that the system will make to run a job using the exponential backoff procedure described by maxDoublings.

Values greater than 5 and negative values are not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#retry_count GoogleCloudSchedulerJob#retry_count}

---

### GoogleCloudSchedulerJobTimeouts <a name="GoogleCloudSchedulerJobTimeouts" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_scheduler_job.GoogleCloudSchedulerJobTimeouts;

GoogleCloudSchedulerJobTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#create GoogleCloudSchedulerJob#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#delete GoogleCloudSchedulerJob#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#update GoogleCloudSchedulerJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#create GoogleCloudSchedulerJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#delete GoogleCloudSchedulerJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloud_scheduler_job#update GoogleCloudSchedulerJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference <a name="GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_scheduler_job.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference;

new GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resetInstance">resetInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resetService">resetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstance` <a name="resetInstance" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resetInstance"></a>

```java
public void resetInstance()
```

##### `resetService` <a name="resetService" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resetService"></a>

```java
public void resetService()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.instanceInput">instanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.instance">instance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting">GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.instanceInput"></a>

```java
public java.lang.String getInstanceInput();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.internalValue"></a>

```java
public GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting">GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting</a>

---


### GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference <a name="GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_scheduler_job.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference;

new GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.putAppEngineRouting">putAppEngineRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.resetAppEngineRouting">resetAppEngineRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.resetHttpMethod">resetHttpMethod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAppEngineRouting` <a name="putAppEngineRouting" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.putAppEngineRouting"></a>

```java
public void putAppEngineRouting(GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.putAppEngineRouting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting">GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting</a>

---

##### `resetAppEngineRouting` <a name="resetAppEngineRouting" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.resetAppEngineRouting"></a>

```java
public void resetAppEngineRouting()
```

##### `resetBody` <a name="resetBody" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.resetBody"></a>

```java
public void resetBody()
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.resetHeaders"></a>

```java
public void resetHeaders()
```

##### `resetHttpMethod` <a name="resetHttpMethod" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.resetHttpMethod"></a>

```java
public void resetHttpMethod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.appEngineRouting">appEngineRouting</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference">GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.appEngineRoutingInput">appEngineRoutingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting">GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.bodyInput">bodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.headersInput">headersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.httpMethodInput">httpMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.relativeUriInput">relativeUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.body">body</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.headers">headers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.httpMethod">httpMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.relativeUri">relativeUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget">GoogleCloudSchedulerJobAppEngineHttpTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appEngineRouting`<sup>Required</sup> <a name="appEngineRouting" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.appEngineRouting"></a>

```java
public GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference getAppEngineRouting();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference">GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference</a>

---

##### `appEngineRoutingInput`<sup>Optional</sup> <a name="appEngineRoutingInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.appEngineRoutingInput"></a>

```java
public GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting getAppEngineRoutingInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting">GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting</a>

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.bodyInput"></a>

```java
public java.lang.String getBodyInput();
```

- *Type:* java.lang.String

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.headersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeadersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `httpMethodInput`<sup>Optional</sup> <a name="httpMethodInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.httpMethodInput"></a>

```java
public java.lang.String getHttpMethodInput();
```

- *Type:* java.lang.String

---

##### `relativeUriInput`<sup>Optional</sup> <a name="relativeUriInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.relativeUriInput"></a>

```java
public java.lang.String getRelativeUriInput();
```

- *Type:* java.lang.String

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.headers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.httpMethod"></a>

```java
public java.lang.String getHttpMethod();
```

- *Type:* java.lang.String

---

##### `relativeUri`<sup>Required</sup> <a name="relativeUri" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.relativeUri"></a>

```java
public java.lang.String getRelativeUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.internalValue"></a>

```java
public GoogleCloudSchedulerJobAppEngineHttpTarget getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget">GoogleCloudSchedulerJobAppEngineHttpTarget</a>

---


### GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference <a name="GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_scheduler_job.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference;

new GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.resetScope">resetScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScope` <a name="resetScope" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.resetScope"></a>

```java
public void resetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken">GoogleCloudSchedulerJobHttpTargetOauthToken</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.serviceAccountEmailInput"></a>

```java
public java.lang.String getServiceAccountEmailInput();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.internalValue"></a>

```java
public GoogleCloudSchedulerJobHttpTargetOauthToken getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken">GoogleCloudSchedulerJobHttpTargetOauthToken</a>

---


### GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference <a name="GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_scheduler_job.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference;

new GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.resetAudience">resetAudience</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAudience` <a name="resetAudience" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.resetAudience"></a>

```java
public void resetAudience()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.audienceInput">audienceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.audience">audience</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken">GoogleCloudSchedulerJobHttpTargetOidcToken</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `audienceInput`<sup>Optional</sup> <a name="audienceInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.audienceInput"></a>

```java
public java.lang.String getAudienceInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.serviceAccountEmailInput"></a>

```java
public java.lang.String getServiceAccountEmailInput();
```

- *Type:* java.lang.String

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.audience"></a>

```java
public java.lang.String getAudience();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.internalValue"></a>

```java
public GoogleCloudSchedulerJobHttpTargetOidcToken getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken">GoogleCloudSchedulerJobHttpTargetOidcToken</a>

---


### GoogleCloudSchedulerJobHttpTargetOutputReference <a name="GoogleCloudSchedulerJobHttpTargetOutputReference" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_scheduler_job.GoogleCloudSchedulerJobHttpTargetOutputReference;

new GoogleCloudSchedulerJobHttpTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.putOauthToken">putOauthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.putOidcToken">putOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.resetHttpMethod">resetHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.resetOauthToken">resetOauthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.resetOidcToken">resetOidcToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOauthToken` <a name="putOauthToken" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.putOauthToken"></a>

```java
public void putOauthToken(GoogleCloudSchedulerJobHttpTargetOauthToken value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.putOauthToken.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken">GoogleCloudSchedulerJobHttpTargetOauthToken</a>

---

##### `putOidcToken` <a name="putOidcToken" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.putOidcToken"></a>

```java
public void putOidcToken(GoogleCloudSchedulerJobHttpTargetOidcToken value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.putOidcToken.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken">GoogleCloudSchedulerJobHttpTargetOidcToken</a>

---

##### `resetBody` <a name="resetBody" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.resetBody"></a>

```java
public void resetBody()
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.resetHeaders"></a>

```java
public void resetHeaders()
```

##### `resetHttpMethod` <a name="resetHttpMethod" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.resetHttpMethod"></a>

```java
public void resetHttpMethod()
```

##### `resetOauthToken` <a name="resetOauthToken" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.resetOauthToken"></a>

```java
public void resetOauthToken()
```

##### `resetOidcToken` <a name="resetOidcToken" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.resetOidcToken"></a>

```java
public void resetOidcToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.oauthToken">oauthToken</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference">GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.oidcToken">oidcToken</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference">GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.bodyInput">bodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.headersInput">headersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.httpMethodInput">httpMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.oauthTokenInput">oauthTokenInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken">GoogleCloudSchedulerJobHttpTargetOauthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.oidcTokenInput">oidcTokenInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken">GoogleCloudSchedulerJobHttpTargetOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.body">body</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.headers">headers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.httpMethod">httpMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget">GoogleCloudSchedulerJobHttpTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `oauthToken`<sup>Required</sup> <a name="oauthToken" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.oauthToken"></a>

```java
public GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference getOauthToken();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference">GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference</a>

---

##### `oidcToken`<sup>Required</sup> <a name="oidcToken" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.oidcToken"></a>

```java
public GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference getOidcToken();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference">GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference</a>

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.bodyInput"></a>

```java
public java.lang.String getBodyInput();
```

- *Type:* java.lang.String

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.headersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeadersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `httpMethodInput`<sup>Optional</sup> <a name="httpMethodInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.httpMethodInput"></a>

```java
public java.lang.String getHttpMethodInput();
```

- *Type:* java.lang.String

---

##### `oauthTokenInput`<sup>Optional</sup> <a name="oauthTokenInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.oauthTokenInput"></a>

```java
public GoogleCloudSchedulerJobHttpTargetOauthToken getOauthTokenInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken">GoogleCloudSchedulerJobHttpTargetOauthToken</a>

---

##### `oidcTokenInput`<sup>Optional</sup> <a name="oidcTokenInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.oidcTokenInput"></a>

```java
public GoogleCloudSchedulerJobHttpTargetOidcToken getOidcTokenInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken">GoogleCloudSchedulerJobHttpTargetOidcToken</a>

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.headers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.httpMethod"></a>

```java
public java.lang.String getHttpMethod();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.internalValue"></a>

```java
public GoogleCloudSchedulerJobHttpTarget getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget">GoogleCloudSchedulerJobHttpTarget</a>

---


### GoogleCloudSchedulerJobPubsubTargetOutputReference <a name="GoogleCloudSchedulerJobPubsubTargetOutputReference" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_scheduler_job.GoogleCloudSchedulerJobPubsubTargetOutputReference;

new GoogleCloudSchedulerJobPubsubTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.resetData">resetData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttributes` <a name="resetAttributes" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.resetAttributes"></a>

```java
public void resetAttributes()
```

##### `resetData` <a name="resetData" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.resetData"></a>

```java
public void resetData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.attributesInput">attributesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.dataInput">dataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.topicNameInput">topicNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.attributes">attributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.data">data</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.topicName">topicName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget">GoogleCloudSchedulerJobPubsubTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.attributesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAttributesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.dataInput"></a>

```java
public java.lang.String getDataInput();
```

- *Type:* java.lang.String

---

##### `topicNameInput`<sup>Optional</sup> <a name="topicNameInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.topicNameInput"></a>

```java
public java.lang.String getTopicNameInput();
```

- *Type:* java.lang.String

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.attributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.data"></a>

```java
public java.lang.String getData();
```

- *Type:* java.lang.String

---

##### `topicName`<sup>Required</sup> <a name="topicName" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.topicName"></a>

```java
public java.lang.String getTopicName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.internalValue"></a>

```java
public GoogleCloudSchedulerJobPubsubTarget getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget">GoogleCloudSchedulerJobPubsubTarget</a>

---


### GoogleCloudSchedulerJobRetryConfigOutputReference <a name="GoogleCloudSchedulerJobRetryConfigOutputReference" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_scheduler_job.GoogleCloudSchedulerJobRetryConfigOutputReference;

new GoogleCloudSchedulerJobRetryConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.resetMaxBackoffDuration">resetMaxBackoffDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.resetMaxDoublings">resetMaxDoublings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.resetMaxRetryDuration">resetMaxRetryDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.resetMinBackoffDuration">resetMinBackoffDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.resetRetryCount">resetRetryCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxBackoffDuration` <a name="resetMaxBackoffDuration" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.resetMaxBackoffDuration"></a>

```java
public void resetMaxBackoffDuration()
```

##### `resetMaxDoublings` <a name="resetMaxDoublings" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.resetMaxDoublings"></a>

```java
public void resetMaxDoublings()
```

##### `resetMaxRetryDuration` <a name="resetMaxRetryDuration" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.resetMaxRetryDuration"></a>

```java
public void resetMaxRetryDuration()
```

##### `resetMinBackoffDuration` <a name="resetMinBackoffDuration" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.resetMinBackoffDuration"></a>

```java
public void resetMinBackoffDuration()
```

##### `resetRetryCount` <a name="resetRetryCount" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.resetRetryCount"></a>

```java
public void resetRetryCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.maxBackoffDurationInput">maxBackoffDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.maxDoublingsInput">maxDoublingsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.maxRetryDurationInput">maxRetryDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.minBackoffDurationInput">minBackoffDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.retryCountInput">retryCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.maxBackoffDuration">maxBackoffDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.maxDoublings">maxDoublings</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.maxRetryDuration">maxRetryDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.minBackoffDuration">minBackoffDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.retryCount">retryCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig">GoogleCloudSchedulerJobRetryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxBackoffDurationInput`<sup>Optional</sup> <a name="maxBackoffDurationInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.maxBackoffDurationInput"></a>

```java
public java.lang.String getMaxBackoffDurationInput();
```

- *Type:* java.lang.String

---

##### `maxDoublingsInput`<sup>Optional</sup> <a name="maxDoublingsInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.maxDoublingsInput"></a>

```java
public java.lang.Number getMaxDoublingsInput();
```

- *Type:* java.lang.Number

---

##### `maxRetryDurationInput`<sup>Optional</sup> <a name="maxRetryDurationInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.maxRetryDurationInput"></a>

```java
public java.lang.String getMaxRetryDurationInput();
```

- *Type:* java.lang.String

---

##### `minBackoffDurationInput`<sup>Optional</sup> <a name="minBackoffDurationInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.minBackoffDurationInput"></a>

```java
public java.lang.String getMinBackoffDurationInput();
```

- *Type:* java.lang.String

---

##### `retryCountInput`<sup>Optional</sup> <a name="retryCountInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.retryCountInput"></a>

```java
public java.lang.Number getRetryCountInput();
```

- *Type:* java.lang.Number

---

##### `maxBackoffDuration`<sup>Required</sup> <a name="maxBackoffDuration" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.maxBackoffDuration"></a>

```java
public java.lang.String getMaxBackoffDuration();
```

- *Type:* java.lang.String

---

##### `maxDoublings`<sup>Required</sup> <a name="maxDoublings" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.maxDoublings"></a>

```java
public java.lang.Number getMaxDoublings();
```

- *Type:* java.lang.Number

---

##### `maxRetryDuration`<sup>Required</sup> <a name="maxRetryDuration" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.maxRetryDuration"></a>

```java
public java.lang.String getMaxRetryDuration();
```

- *Type:* java.lang.String

---

##### `minBackoffDuration`<sup>Required</sup> <a name="minBackoffDuration" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.minBackoffDuration"></a>

```java
public java.lang.String getMinBackoffDuration();
```

- *Type:* java.lang.String

---

##### `retryCount`<sup>Required</sup> <a name="retryCount" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.retryCount"></a>

```java
public java.lang.Number getRetryCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.internalValue"></a>

```java
public GoogleCloudSchedulerJobRetryConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig">GoogleCloudSchedulerJobRetryConfig</a>

---


### GoogleCloudSchedulerJobTimeoutsOutputReference <a name="GoogleCloudSchedulerJobTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_scheduler_job.GoogleCloudSchedulerJobTimeoutsOutputReference;

new GoogleCloudSchedulerJobTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts">GoogleCloudSchedulerJobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts">GoogleCloudSchedulerJobTimeouts</a>

---



