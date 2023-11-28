# `googleCloudTasksQueue` Submodule <a name="`googleCloudTasksQueue` Submodule" id="@cdktf/provider-google-beta.googleCloudTasksQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudTasksQueue <a name="GoogleCloudTasksQueue" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.7.0/docs/resources/google_cloud_tasks_queue google_cloud_tasks_queue}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_tasks_queue.GoogleCloudTasksQueue;

GoogleCloudTasksQueue.Builder.create(Construct scope, java.lang.String id)
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
    .location(java.lang.String)
//  .appEngineRoutingOverride(GoogleCloudTasksQueueAppEngineRoutingOverride)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .project(java.lang.String)
//  .rateLimits(GoogleCloudTasksQueueRateLimits)
//  .retryConfig(GoogleCloudTasksQueueRetryConfig)
//  .stackdriverLoggingConfig(GoogleCloudTasksQueueStackdriverLoggingConfig)
//  .timeouts(GoogleCloudTasksQueueTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the queue. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.appEngineRoutingOverride">appEngineRoutingOverride</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverride">GoogleCloudTasksQueueAppEngineRoutingOverride</a></code> | app_engine_routing_override block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.7.0/docs/resources/google_cloud_tasks_queue#id GoogleCloudTasksQueue#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The queue name. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.7.0/docs/resources/google_cloud_tasks_queue#project GoogleCloudTasksQueue#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.rateLimits">rateLimits</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimits">GoogleCloudTasksQueueRateLimits</a></code> | rate_limits block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.retryConfig">retryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig">GoogleCloudTasksQueueRetryConfig</a></code> | retry_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.stackdriverLoggingConfig">stackdriverLoggingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfig">GoogleCloudTasksQueueStackdriverLoggingConfig</a></code> | stackdriver_logging_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeouts">GoogleCloudTasksQueueTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.7.0/docs/resources/google_cloud_tasks_queue#location GoogleCloudTasksQueue#location}

---

##### `appEngineRoutingOverride`<sup>Optional</sup> <a name="appEngineRoutingOverride" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.appEngineRoutingOverride"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverride">GoogleCloudTasksQueueAppEngineRoutingOverride</a>

app_engine_routing_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.7.0/docs/resources/google_cloud_tasks_queue#app_engine_routing_override GoogleCloudTasksQueue#app_engine_routing_override}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.7.0/docs/resources/google_cloud_tasks_queue#id GoogleCloudTasksQueue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The queue name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.7.0/docs/resources/google_cloud_tasks_queue#name GoogleCloudTasksQueue#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.7.0/docs/resources/google_cloud_tasks_queue#project GoogleCloudTasksQueue#project}.

---

##### `rateLimits`<sup>Optional</sup> <a name="rateLimits" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.rateLimits"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimits">GoogleCloudTasksQueueRateLimits</a>

rate_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.7.0/docs/resources/google_cloud_tasks_queue#rate_limits GoogleCloudTasksQueue#rate_limits}

---

##### `retryConfig`<sup>Optional</sup> <a name="retryConfig" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.retryConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig">GoogleCloudTasksQueueRetryConfig</a>

retry_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.7.0/docs/resources/google_cloud_tasks_queue#retry_config GoogleCloudTasksQueue#retry_config}

---

##### `stackdriverLoggingConfig`<sup>Optional</sup> <a name="stackdriverLoggingConfig" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.stackdriverLoggingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfig">GoogleCloudTasksQueueStackdriverLoggingConfig</a>

stackdriver_logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.7.0/docs/resources/google_cloud_tasks_queue#stackdriver_logging_config GoogleCloudTasksQueue#stackdriver_logging_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeouts">GoogleCloudTasksQueueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.7.0/docs/resources/google_cloud_tasks_queue#timeouts GoogleCloudTasksQueue#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putAppEngineRoutingOverride">putAppEngineRoutingOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putRateLimits">putRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putRetryConfig">putRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putStackdriverLoggingConfig">putStackdriverLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetAppEngineRoutingOverride">resetAppEngineRoutingOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetRateLimits">resetRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetRetryConfig">resetRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetStackdriverLoggingConfig">resetStackdriverLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putAppEngineRoutingOverride` <a name="putAppEngineRoutingOverride" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putAppEngineRoutingOverride"></a>

```java
public void putAppEngineRoutingOverride(GoogleCloudTasksQueueAppEngineRoutingOverride value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putAppEngineRoutingOverride.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverride">GoogleCloudTasksQueueAppEngineRoutingOverride</a>

---

##### `putRateLimits` <a name="putRateLimits" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putRateLimits"></a>

```java
public void putRateLimits(GoogleCloudTasksQueueRateLimits value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putRateLimits.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimits">GoogleCloudTasksQueueRateLimits</a>

---

##### `putRetryConfig` <a name="putRetryConfig" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putRetryConfig"></a>

```java
public void putRetryConfig(GoogleCloudTasksQueueRetryConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putRetryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig">GoogleCloudTasksQueueRetryConfig</a>

---

##### `putStackdriverLoggingConfig` <a name="putStackdriverLoggingConfig" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putStackdriverLoggingConfig"></a>

```java
public void putStackdriverLoggingConfig(GoogleCloudTasksQueueStackdriverLoggingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putStackdriverLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfig">GoogleCloudTasksQueueStackdriverLoggingConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putTimeouts"></a>

```java
public void putTimeouts(GoogleCloudTasksQueueTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeouts">GoogleCloudTasksQueueTimeouts</a>

---

##### `resetAppEngineRoutingOverride` <a name="resetAppEngineRoutingOverride" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetAppEngineRoutingOverride"></a>

```java
public void resetAppEngineRoutingOverride()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetName"></a>

```java
public void resetName()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetProject"></a>

```java
public void resetProject()
```

##### `resetRateLimits` <a name="resetRateLimits" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetRateLimits"></a>

```java
public void resetRateLimits()
```

##### `resetRetryConfig` <a name="resetRetryConfig" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetRetryConfig"></a>

```java
public void resetRetryConfig()
```

##### `resetStackdriverLoggingConfig` <a name="resetStackdriverLoggingConfig" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetStackdriverLoggingConfig"></a>

```java
public void resetStackdriverLoggingConfig()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleCloudTasksQueue resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_tasks_queue.GoogleCloudTasksQueue;

GoogleCloudTasksQueue.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_tasks_queue.GoogleCloudTasksQueue;

GoogleCloudTasksQueue.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_tasks_queue.GoogleCloudTasksQueue;

GoogleCloudTasksQueue.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_tasks_queue.GoogleCloudTasksQueue;

GoogleCloudTasksQueue.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleCloudTasksQueue.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleCloudTasksQueue resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleCloudTasksQueue to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleCloudTasksQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.7.0/docs/resources/google_cloud_tasks_queue#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleCloudTasksQueue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.appEngineRoutingOverride">appEngineRoutingOverride</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference">GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.rateLimits">rateLimits</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference">GoogleCloudTasksQueueRateLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.retryConfig">retryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference">GoogleCloudTasksQueueRetryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.stackdriverLoggingConfig">stackdriverLoggingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference">GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference">GoogleCloudTasksQueueTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.appEngineRoutingOverrideInput">appEngineRoutingOverrideInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverride">GoogleCloudTasksQueueAppEngineRoutingOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.rateLimitsInput">rateLimitsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimits">GoogleCloudTasksQueueRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.retryConfigInput">retryConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig">GoogleCloudTasksQueueRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.stackdriverLoggingConfigInput">stackdriverLoggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfig">GoogleCloudTasksQueueStackdriverLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeouts">GoogleCloudTasksQueueTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appEngineRoutingOverride`<sup>Required</sup> <a name="appEngineRoutingOverride" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.appEngineRoutingOverride"></a>

```java
public GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference getAppEngineRoutingOverride();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference">GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference</a>

---

##### `rateLimits`<sup>Required</sup> <a name="rateLimits" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.rateLimits"></a>

```java
public GoogleCloudTasksQueueRateLimitsOutputReference getRateLimits();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference">GoogleCloudTasksQueueRateLimitsOutputReference</a>

---

##### `retryConfig`<sup>Required</sup> <a name="retryConfig" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.retryConfig"></a>

```java
public GoogleCloudTasksQueueRetryConfigOutputReference getRetryConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference">GoogleCloudTasksQueueRetryConfigOutputReference</a>

---

##### `stackdriverLoggingConfig`<sup>Required</sup> <a name="stackdriverLoggingConfig" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.stackdriverLoggingConfig"></a>

```java
public GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference getStackdriverLoggingConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference">GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.timeouts"></a>

```java
public GoogleCloudTasksQueueTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference">GoogleCloudTasksQueueTimeoutsOutputReference</a>

---

##### `appEngineRoutingOverrideInput`<sup>Optional</sup> <a name="appEngineRoutingOverrideInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.appEngineRoutingOverrideInput"></a>

```java
public GoogleCloudTasksQueueAppEngineRoutingOverride getAppEngineRoutingOverrideInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverride">GoogleCloudTasksQueueAppEngineRoutingOverride</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `rateLimitsInput`<sup>Optional</sup> <a name="rateLimitsInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.rateLimitsInput"></a>

```java
public GoogleCloudTasksQueueRateLimits getRateLimitsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimits">GoogleCloudTasksQueueRateLimits</a>

---

##### `retryConfigInput`<sup>Optional</sup> <a name="retryConfigInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.retryConfigInput"></a>

```java
public GoogleCloudTasksQueueRetryConfig getRetryConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig">GoogleCloudTasksQueueRetryConfig</a>

---

##### `stackdriverLoggingConfigInput`<sup>Optional</sup> <a name="stackdriverLoggingConfigInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.stackdriverLoggingConfigInput"></a>

```java
public GoogleCloudTasksQueueStackdriverLoggingConfig getStackdriverLoggingConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfig">GoogleCloudTasksQueueStackdriverLoggingConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeouts">GoogleCloudTasksQueueTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudTasksQueueAppEngineRoutingOverride <a name="GoogleCloudTasksQueueAppEngineRoutingOverride" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverride.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_tasks_queue.GoogleCloudTasksQueueAppEngineRoutingOverride;

GoogleCloudTasksQueueAppEngineRoutingOverride.builder()
//  .instance(java.lang.String)
//  .service(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverride.property.instance">instance</a></code> | <code>java.lang.String</code> | App instance. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverride.property.service">service</a></code> | <code>java.lang.String</code> | App service. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverride.property.version">version</a></code> | <code>java.lang.String</code> | App version. |

---

##### `instance`<sup>Optional</sup> <a name="instance" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverride.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

App instance.

By default, the task is sent to an instance which is available when the task is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.7.0/docs/resources/google_cloud_tasks_queue#instance GoogleCloudTasksQueue#instance}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverride.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

App service.

By default, the task is sent to the service which is the default service when the task is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.7.0/docs/resources/google_cloud_tasks_queue#service GoogleCloudTasksQueue#service}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverride.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

App version.

By default, the task is sent to the version which is the default version when the task is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.7.0/docs/resources/google_cloud_tasks_queue#version GoogleCloudTasksQueue#version}

---

### GoogleCloudTasksQueueConfig <a name="GoogleCloudTasksQueueConfig" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_tasks_queue.GoogleCloudTasksQueueConfig;

GoogleCloudTasksQueueConfig.builder()
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
    .location(java.lang.String)
//  .appEngineRoutingOverride(GoogleCloudTasksQueueAppEngineRoutingOverride)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .project(java.lang.String)
//  .rateLimits(GoogleCloudTasksQueueRateLimits)
//  .retryConfig(GoogleCloudTasksQueueRetryConfig)
//  .stackdriverLoggingConfig(GoogleCloudTasksQueueStackdriverLoggingConfig)
//  .timeouts(GoogleCloudTasksQueueTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the queue. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.appEngineRoutingOverride">appEngineRoutingOverride</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverride">GoogleCloudTasksQueueAppEngineRoutingOverride</a></code> | app_engine_routing_override block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.7.0/docs/resources/google_cloud_tasks_queue#id GoogleCloudTasksQueue#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.name">name</a></code> | <code>java.lang.String</code> | The queue name. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.7.0/docs/resources/google_cloud_tasks_queue#project GoogleCloudTasksQueue#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.rateLimits">rateLimits</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimits">GoogleCloudTasksQueueRateLimits</a></code> | rate_limits block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.retryConfig">retryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig">GoogleCloudTasksQueueRetryConfig</a></code> | retry_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.stackdriverLoggingConfig">stackdriverLoggingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfig">GoogleCloudTasksQueueStackdriverLoggingConfig</a></code> | stackdriver_logging_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeouts">GoogleCloudTasksQueueTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.7.0/docs/resources/google_cloud_tasks_queue#location GoogleCloudTasksQueue#location}

---

##### `appEngineRoutingOverride`<sup>Optional</sup> <a name="appEngineRoutingOverride" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.appEngineRoutingOverride"></a>

```java
public GoogleCloudTasksQueueAppEngineRoutingOverride getAppEngineRoutingOverride();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverride">GoogleCloudTasksQueueAppEngineRoutingOverride</a>

app_engine_routing_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.7.0/docs/resources/google_cloud_tasks_queue#app_engine_routing_override GoogleCloudTasksQueue#app_engine_routing_override}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.7.0/docs/resources/google_cloud_tasks_queue#id GoogleCloudTasksQueue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The queue name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.7.0/docs/resources/google_cloud_tasks_queue#name GoogleCloudTasksQueue#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.7.0/docs/resources/google_cloud_tasks_queue#project GoogleCloudTasksQueue#project}.

---

##### `rateLimits`<sup>Optional</sup> <a name="rateLimits" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.rateLimits"></a>

```java
public GoogleCloudTasksQueueRateLimits getRateLimits();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimits">GoogleCloudTasksQueueRateLimits</a>

rate_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.7.0/docs/resources/google_cloud_tasks_queue#rate_limits GoogleCloudTasksQueue#rate_limits}

---

##### `retryConfig`<sup>Optional</sup> <a name="retryConfig" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.retryConfig"></a>

```java
public GoogleCloudTasksQueueRetryConfig getRetryConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig">GoogleCloudTasksQueueRetryConfig</a>

retry_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.7.0/docs/resources/google_cloud_tasks_queue#retry_config GoogleCloudTasksQueue#retry_config}

---

##### `stackdriverLoggingConfig`<sup>Optional</sup> <a name="stackdriverLoggingConfig" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.stackdriverLoggingConfig"></a>

```java
public GoogleCloudTasksQueueStackdriverLoggingConfig getStackdriverLoggingConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfig">GoogleCloudTasksQueueStackdriverLoggingConfig</a>

stackdriver_logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.7.0/docs/resources/google_cloud_tasks_queue#stackdriver_logging_config GoogleCloudTasksQueue#stackdriver_logging_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.timeouts"></a>

```java
public GoogleCloudTasksQueueTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeouts">GoogleCloudTasksQueueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.7.0/docs/resources/google_cloud_tasks_queue#timeouts GoogleCloudTasksQueue#timeouts}

---

### GoogleCloudTasksQueueRateLimits <a name="GoogleCloudTasksQueueRateLimits" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimits.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_tasks_queue.GoogleCloudTasksQueueRateLimits;

GoogleCloudTasksQueueRateLimits.builder()
//  .maxConcurrentDispatches(java.lang.Number)
//  .maxDispatchesPerSecond(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimits.property.maxConcurrentDispatches">maxConcurrentDispatches</a></code> | <code>java.lang.Number</code> | The maximum number of concurrent tasks that Cloud Tasks allows to be dispatched for this queue. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimits.property.maxDispatchesPerSecond">maxDispatchesPerSecond</a></code> | <code>java.lang.Number</code> | The maximum rate at which tasks are dispatched from this queue. |

---

##### `maxConcurrentDispatches`<sup>Optional</sup> <a name="maxConcurrentDispatches" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimits.property.maxConcurrentDispatches"></a>

```java
public java.lang.Number getMaxConcurrentDispatches();
```

- *Type:* java.lang.Number

The maximum number of concurrent tasks that Cloud Tasks allows to be dispatched for this queue.

After this threshold has been
reached, Cloud Tasks stops dispatching tasks until the number of
concurrent requests decreases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.7.0/docs/resources/google_cloud_tasks_queue#max_concurrent_dispatches GoogleCloudTasksQueue#max_concurrent_dispatches}

---

##### `maxDispatchesPerSecond`<sup>Optional</sup> <a name="maxDispatchesPerSecond" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimits.property.maxDispatchesPerSecond"></a>

```java
public java.lang.Number getMaxDispatchesPerSecond();
```

- *Type:* java.lang.Number

The maximum rate at which tasks are dispatched from this queue.

If unspecified when the queue is created, Cloud Tasks will pick the default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.7.0/docs/resources/google_cloud_tasks_queue#max_dispatches_per_second GoogleCloudTasksQueue#max_dispatches_per_second}

---

### GoogleCloudTasksQueueRetryConfig <a name="GoogleCloudTasksQueueRetryConfig" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_tasks_queue.GoogleCloudTasksQueueRetryConfig;

GoogleCloudTasksQueueRetryConfig.builder()
//  .maxAttempts(java.lang.Number)
//  .maxBackoff(java.lang.String)
//  .maxDoublings(java.lang.Number)
//  .maxRetryDuration(java.lang.String)
//  .minBackoff(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig.property.maxAttempts">maxAttempts</a></code> | <code>java.lang.Number</code> | Number of attempts per task. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig.property.maxBackoff">maxBackoff</a></code> | <code>java.lang.String</code> | A task will be scheduled for retry between minBackoff and maxBackoff duration after it fails, if the queue's RetryConfig specifies that the task should be retried. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig.property.maxDoublings">maxDoublings</a></code> | <code>java.lang.Number</code> | The time between retries will double maxDoublings times. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig.property.maxRetryDuration">maxRetryDuration</a></code> | <code>java.lang.String</code> | If positive, maxRetryDuration specifies the time limit for retrying a failed task, measured from when the task was first attempted. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig.property.minBackoff">minBackoff</a></code> | <code>java.lang.String</code> | A task will be scheduled for retry between minBackoff and maxBackoff duration after it fails, if the queue's RetryConfig specifies that the task should be retried. |

---

##### `maxAttempts`<sup>Optional</sup> <a name="maxAttempts" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig.property.maxAttempts"></a>

```java
public java.lang.Number getMaxAttempts();
```

- *Type:* java.lang.Number

Number of attempts per task.

Cloud Tasks will attempt the task maxAttempts times (that is, if
the first attempt fails, then there will be maxAttempts - 1
retries). Must be >= -1.

If unspecified when the queue is created, Cloud Tasks will pick
the default.

-1 indicates unlimited attempts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.7.0/docs/resources/google_cloud_tasks_queue#max_attempts GoogleCloudTasksQueue#max_attempts}

---

##### `maxBackoff`<sup>Optional</sup> <a name="maxBackoff" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig.property.maxBackoff"></a>

```java
public java.lang.String getMaxBackoff();
```

- *Type:* java.lang.String

A task will be scheduled for retry between minBackoff and maxBackoff duration after it fails, if the queue's RetryConfig specifies that the task should be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.7.0/docs/resources/google_cloud_tasks_queue#max_backoff GoogleCloudTasksQueue#max_backoff}

---

##### `maxDoublings`<sup>Optional</sup> <a name="maxDoublings" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig.property.maxDoublings"></a>

```java
public java.lang.Number getMaxDoublings();
```

- *Type:* java.lang.Number

The time between retries will double maxDoublings times.

A task's retry interval starts at minBackoff, then doubles maxDoublings times,
then increases linearly, and finally retries retries at intervals of maxBackoff
up to maxAttempts times.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.7.0/docs/resources/google_cloud_tasks_queue#max_doublings GoogleCloudTasksQueue#max_doublings}

---

##### `maxRetryDuration`<sup>Optional</sup> <a name="maxRetryDuration" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig.property.maxRetryDuration"></a>

```java
public java.lang.String getMaxRetryDuration();
```

- *Type:* java.lang.String

If positive, maxRetryDuration specifies the time limit for retrying a failed task, measured from when the task was first attempted.

Once maxRetryDuration time has passed and the task has
been attempted maxAttempts times, no further attempts will be
made and the task will be deleted.

If zero, then the task age is unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.7.0/docs/resources/google_cloud_tasks_queue#max_retry_duration GoogleCloudTasksQueue#max_retry_duration}

---

##### `minBackoff`<sup>Optional</sup> <a name="minBackoff" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig.property.minBackoff"></a>

```java
public java.lang.String getMinBackoff();
```

- *Type:* java.lang.String

A task will be scheduled for retry between minBackoff and maxBackoff duration after it fails, if the queue's RetryConfig specifies that the task should be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.7.0/docs/resources/google_cloud_tasks_queue#min_backoff GoogleCloudTasksQueue#min_backoff}

---

### GoogleCloudTasksQueueStackdriverLoggingConfig <a name="GoogleCloudTasksQueueStackdriverLoggingConfig" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_tasks_queue.GoogleCloudTasksQueueStackdriverLoggingConfig;

GoogleCloudTasksQueueStackdriverLoggingConfig.builder()
    .samplingRatio(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfig.property.samplingRatio">samplingRatio</a></code> | <code>java.lang.Number</code> | Specifies the fraction of operations to write to Stackdriver Logging. |

---

##### `samplingRatio`<sup>Required</sup> <a name="samplingRatio" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfig.property.samplingRatio"></a>

```java
public java.lang.Number getSamplingRatio();
```

- *Type:* java.lang.Number

Specifies the fraction of operations to write to Stackdriver Logging.

This field may contain any value between 0.0 and 1.0, inclusive. 0.0 is the
default and means that no operations are logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.7.0/docs/resources/google_cloud_tasks_queue#sampling_ratio GoogleCloudTasksQueue#sampling_ratio}

---

### GoogleCloudTasksQueueTimeouts <a name="GoogleCloudTasksQueueTimeouts" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_tasks_queue.GoogleCloudTasksQueueTimeouts;

GoogleCloudTasksQueueTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.7.0/docs/resources/google_cloud_tasks_queue#create GoogleCloudTasksQueue#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.7.0/docs/resources/google_cloud_tasks_queue#delete GoogleCloudTasksQueue#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.7.0/docs/resources/google_cloud_tasks_queue#update GoogleCloudTasksQueue#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.7.0/docs/resources/google_cloud_tasks_queue#create GoogleCloudTasksQueue#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.7.0/docs/resources/google_cloud_tasks_queue#delete GoogleCloudTasksQueue#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.7.0/docs/resources/google_cloud_tasks_queue#update GoogleCloudTasksQueue#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference <a name="GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_tasks_queue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference;

new GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.resetInstance">resetInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.resetService">resetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstance` <a name="resetInstance" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.resetInstance"></a>

```java
public void resetInstance()
```

##### `resetService` <a name="resetService" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.resetService"></a>

```java
public void resetService()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.instanceInput">instanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.instance">instance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverride">GoogleCloudTasksQueueAppEngineRoutingOverride</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.instanceInput"></a>

```java
public java.lang.String getInstanceInput();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.internalValue"></a>

```java
public GoogleCloudTasksQueueAppEngineRoutingOverride getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverride">GoogleCloudTasksQueueAppEngineRoutingOverride</a>

---


### GoogleCloudTasksQueueRateLimitsOutputReference <a name="GoogleCloudTasksQueueRateLimitsOutputReference" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_tasks_queue.GoogleCloudTasksQueueRateLimitsOutputReference;

new GoogleCloudTasksQueueRateLimitsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.resetMaxConcurrentDispatches">resetMaxConcurrentDispatches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.resetMaxDispatchesPerSecond">resetMaxDispatchesPerSecond</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxConcurrentDispatches` <a name="resetMaxConcurrentDispatches" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.resetMaxConcurrentDispatches"></a>

```java
public void resetMaxConcurrentDispatches()
```

##### `resetMaxDispatchesPerSecond` <a name="resetMaxDispatchesPerSecond" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.resetMaxDispatchesPerSecond"></a>

```java
public void resetMaxDispatchesPerSecond()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.property.maxBurstSize">maxBurstSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.property.maxConcurrentDispatchesInput">maxConcurrentDispatchesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.property.maxDispatchesPerSecondInput">maxDispatchesPerSecondInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.property.maxConcurrentDispatches">maxConcurrentDispatches</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.property.maxDispatchesPerSecond">maxDispatchesPerSecond</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimits">GoogleCloudTasksQueueRateLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxBurstSize`<sup>Required</sup> <a name="maxBurstSize" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.property.maxBurstSize"></a>

```java
public java.lang.Number getMaxBurstSize();
```

- *Type:* java.lang.Number

---

##### `maxConcurrentDispatchesInput`<sup>Optional</sup> <a name="maxConcurrentDispatchesInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.property.maxConcurrentDispatchesInput"></a>

```java
public java.lang.Number getMaxConcurrentDispatchesInput();
```

- *Type:* java.lang.Number

---

##### `maxDispatchesPerSecondInput`<sup>Optional</sup> <a name="maxDispatchesPerSecondInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.property.maxDispatchesPerSecondInput"></a>

```java
public java.lang.Number getMaxDispatchesPerSecondInput();
```

- *Type:* java.lang.Number

---

##### `maxConcurrentDispatches`<sup>Required</sup> <a name="maxConcurrentDispatches" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.property.maxConcurrentDispatches"></a>

```java
public java.lang.Number getMaxConcurrentDispatches();
```

- *Type:* java.lang.Number

---

##### `maxDispatchesPerSecond`<sup>Required</sup> <a name="maxDispatchesPerSecond" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.property.maxDispatchesPerSecond"></a>

```java
public java.lang.Number getMaxDispatchesPerSecond();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.property.internalValue"></a>

```java
public GoogleCloudTasksQueueRateLimits getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimits">GoogleCloudTasksQueueRateLimits</a>

---


### GoogleCloudTasksQueueRetryConfigOutputReference <a name="GoogleCloudTasksQueueRetryConfigOutputReference" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_tasks_queue.GoogleCloudTasksQueueRetryConfigOutputReference;

new GoogleCloudTasksQueueRetryConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.resetMaxAttempts">resetMaxAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.resetMaxBackoff">resetMaxBackoff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.resetMaxDoublings">resetMaxDoublings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.resetMaxRetryDuration">resetMaxRetryDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.resetMinBackoff">resetMinBackoff</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxAttempts` <a name="resetMaxAttempts" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.resetMaxAttempts"></a>

```java
public void resetMaxAttempts()
```

##### `resetMaxBackoff` <a name="resetMaxBackoff" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.resetMaxBackoff"></a>

```java
public void resetMaxBackoff()
```

##### `resetMaxDoublings` <a name="resetMaxDoublings" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.resetMaxDoublings"></a>

```java
public void resetMaxDoublings()
```

##### `resetMaxRetryDuration` <a name="resetMaxRetryDuration" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.resetMaxRetryDuration"></a>

```java
public void resetMaxRetryDuration()
```

##### `resetMinBackoff` <a name="resetMinBackoff" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.resetMinBackoff"></a>

```java
public void resetMinBackoff()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.maxAttemptsInput">maxAttemptsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.maxBackoffInput">maxBackoffInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.maxDoublingsInput">maxDoublingsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.maxRetryDurationInput">maxRetryDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.minBackoffInput">minBackoffInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.maxAttempts">maxAttempts</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.maxBackoff">maxBackoff</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.maxDoublings">maxDoublings</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.maxRetryDuration">maxRetryDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.minBackoff">minBackoff</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig">GoogleCloudTasksQueueRetryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxAttemptsInput`<sup>Optional</sup> <a name="maxAttemptsInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.maxAttemptsInput"></a>

```java
public java.lang.Number getMaxAttemptsInput();
```

- *Type:* java.lang.Number

---

##### `maxBackoffInput`<sup>Optional</sup> <a name="maxBackoffInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.maxBackoffInput"></a>

```java
public java.lang.String getMaxBackoffInput();
```

- *Type:* java.lang.String

---

##### `maxDoublingsInput`<sup>Optional</sup> <a name="maxDoublingsInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.maxDoublingsInput"></a>

```java
public java.lang.Number getMaxDoublingsInput();
```

- *Type:* java.lang.Number

---

##### `maxRetryDurationInput`<sup>Optional</sup> <a name="maxRetryDurationInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.maxRetryDurationInput"></a>

```java
public java.lang.String getMaxRetryDurationInput();
```

- *Type:* java.lang.String

---

##### `minBackoffInput`<sup>Optional</sup> <a name="minBackoffInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.minBackoffInput"></a>

```java
public java.lang.String getMinBackoffInput();
```

- *Type:* java.lang.String

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.maxAttempts"></a>

```java
public java.lang.Number getMaxAttempts();
```

- *Type:* java.lang.Number

---

##### `maxBackoff`<sup>Required</sup> <a name="maxBackoff" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.maxBackoff"></a>

```java
public java.lang.String getMaxBackoff();
```

- *Type:* java.lang.String

---

##### `maxDoublings`<sup>Required</sup> <a name="maxDoublings" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.maxDoublings"></a>

```java
public java.lang.Number getMaxDoublings();
```

- *Type:* java.lang.Number

---

##### `maxRetryDuration`<sup>Required</sup> <a name="maxRetryDuration" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.maxRetryDuration"></a>

```java
public java.lang.String getMaxRetryDuration();
```

- *Type:* java.lang.String

---

##### `minBackoff`<sup>Required</sup> <a name="minBackoff" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.minBackoff"></a>

```java
public java.lang.String getMinBackoff();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.internalValue"></a>

```java
public GoogleCloudTasksQueueRetryConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig">GoogleCloudTasksQueueRetryConfig</a>

---


### GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference <a name="GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_tasks_queue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference;

new GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.property.samplingRatioInput">samplingRatioInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.property.samplingRatio">samplingRatio</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfig">GoogleCloudTasksQueueStackdriverLoggingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `samplingRatioInput`<sup>Optional</sup> <a name="samplingRatioInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.property.samplingRatioInput"></a>

```java
public java.lang.Number getSamplingRatioInput();
```

- *Type:* java.lang.Number

---

##### `samplingRatio`<sup>Required</sup> <a name="samplingRatio" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.property.samplingRatio"></a>

```java
public java.lang.Number getSamplingRatio();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.property.internalValue"></a>

```java
public GoogleCloudTasksQueueStackdriverLoggingConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfig">GoogleCloudTasksQueueStackdriverLoggingConfig</a>

---


### GoogleCloudTasksQueueTimeoutsOutputReference <a name="GoogleCloudTasksQueueTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_tasks_queue.GoogleCloudTasksQueueTimeoutsOutputReference;

new GoogleCloudTasksQueueTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeouts">GoogleCloudTasksQueueTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeouts">GoogleCloudTasksQueueTimeouts</a>

---



