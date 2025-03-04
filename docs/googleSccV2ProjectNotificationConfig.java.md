# `googleSccV2ProjectNotificationConfig` Submodule <a name="`googleSccV2ProjectNotificationConfig` Submodule" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSccV2ProjectNotificationConfig <a name="GoogleSccV2ProjectNotificationConfig" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_scc_v2_project_notification_config google_scc_v2_project_notification_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_v2_project_notification_config.GoogleSccV2ProjectNotificationConfig;

GoogleSccV2ProjectNotificationConfig.Builder.create(Construct scope, java.lang.String id)
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
    .configId(java.lang.String)
    .streamingConfig(GoogleSccV2ProjectNotificationConfigStreamingConfig)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .pubsubTopic(java.lang.String)
//  .timeouts(GoogleSccV2ProjectNotificationConfigTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.Initializer.parameter.configId">configId</a></code> | <code>java.lang.String</code> | This must be unique within the project. |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.Initializer.parameter.streamingConfig">streamingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfig">GoogleSccV2ProjectNotificationConfigStreamingConfig</a></code> | streaming_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the notification config (max of 1024 characters). |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_scc_v2_project_notification_config#id GoogleSccV2ProjectNotificationConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Location ID of the parent organization. Only global is supported at the moment. |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_scc_v2_project_notification_config#project GoogleSccV2ProjectNotificationConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.Initializer.parameter.pubsubTopic">pubsubTopic</a></code> | <code>java.lang.String</code> | The Pub/Sub topic to send notifications to. Its format is "projects/[project_id]/topics/[topic]". |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeouts">GoogleSccV2ProjectNotificationConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `configId`<sup>Required</sup> <a name="configId" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.Initializer.parameter.configId"></a>

- *Type:* java.lang.String

This must be unique within the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_scc_v2_project_notification_config#config_id GoogleSccV2ProjectNotificationConfig#config_id}

---

##### `streamingConfig`<sup>Required</sup> <a name="streamingConfig" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.Initializer.parameter.streamingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfig">GoogleSccV2ProjectNotificationConfigStreamingConfig</a>

streaming_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_scc_v2_project_notification_config#streaming_config GoogleSccV2ProjectNotificationConfig#streaming_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the notification config (max of 1024 characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_scc_v2_project_notification_config#description GoogleSccV2ProjectNotificationConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_scc_v2_project_notification_config#id GoogleSccV2ProjectNotificationConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Location ID of the parent organization. Only global is supported at the moment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_scc_v2_project_notification_config#location GoogleSccV2ProjectNotificationConfig#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_scc_v2_project_notification_config#project GoogleSccV2ProjectNotificationConfig#project}.

---

##### `pubsubTopic`<sup>Optional</sup> <a name="pubsubTopic" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.Initializer.parameter.pubsubTopic"></a>

- *Type:* java.lang.String

The Pub/Sub topic to send notifications to. Its format is "projects/[project_id]/topics/[topic]".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_scc_v2_project_notification_config#pubsub_topic GoogleSccV2ProjectNotificationConfig#pubsub_topic}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeouts">GoogleSccV2ProjectNotificationConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_scc_v2_project_notification_config#timeouts GoogleSccV2ProjectNotificationConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.putStreamingConfig">putStreamingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.resetPubsubTopic">resetPubsubTopic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putStreamingConfig` <a name="putStreamingConfig" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.putStreamingConfig"></a>

```java
public void putStreamingConfig(GoogleSccV2ProjectNotificationConfigStreamingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.putStreamingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfig">GoogleSccV2ProjectNotificationConfigStreamingConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.putTimeouts"></a>

```java
public void putTimeouts(GoogleSccV2ProjectNotificationConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeouts">GoogleSccV2ProjectNotificationConfigTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.resetProject"></a>

```java
public void resetProject()
```

##### `resetPubsubTopic` <a name="resetPubsubTopic" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.resetPubsubTopic"></a>

```java
public void resetPubsubTopic()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleSccV2ProjectNotificationConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_v2_project_notification_config.GoogleSccV2ProjectNotificationConfig;

GoogleSccV2ProjectNotificationConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_v2_project_notification_config.GoogleSccV2ProjectNotificationConfig;

GoogleSccV2ProjectNotificationConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_v2_project_notification_config.GoogleSccV2ProjectNotificationConfig;

GoogleSccV2ProjectNotificationConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_v2_project_notification_config.GoogleSccV2ProjectNotificationConfig;

GoogleSccV2ProjectNotificationConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleSccV2ProjectNotificationConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleSccV2ProjectNotificationConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleSccV2ProjectNotificationConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleSccV2ProjectNotificationConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_scc_v2_project_notification_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSccV2ProjectNotificationConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.streamingConfig">streamingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference">GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference">GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.configIdInput">configIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.pubsubTopicInput">pubsubTopicInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.streamingConfigInput">streamingConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfig">GoogleSccV2ProjectNotificationConfigStreamingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeouts">GoogleSccV2ProjectNotificationConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.configId">configId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.pubsubTopic">pubsubTopic</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

##### `streamingConfig`<sup>Required</sup> <a name="streamingConfig" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.streamingConfig"></a>

```java
public GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference getStreamingConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference">GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.timeouts"></a>

```java
public GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference">GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference</a>

---

##### `configIdInput`<sup>Optional</sup> <a name="configIdInput" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.configIdInput"></a>

```java
public java.lang.String getConfigIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `pubsubTopicInput`<sup>Optional</sup> <a name="pubsubTopicInput" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.pubsubTopicInput"></a>

```java
public java.lang.String getPubsubTopicInput();
```

- *Type:* java.lang.String

---

##### `streamingConfigInput`<sup>Optional</sup> <a name="streamingConfigInput" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.streamingConfigInput"></a>

```java
public GoogleSccV2ProjectNotificationConfigStreamingConfig getStreamingConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfig">GoogleSccV2ProjectNotificationConfigStreamingConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeouts">GoogleSccV2ProjectNotificationConfigTimeouts</a>

---

##### `configId`<sup>Required</sup> <a name="configId" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.configId"></a>

```java
public java.lang.String getConfigId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `pubsubTopic`<sup>Required</sup> <a name="pubsubTopic" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.pubsubTopic"></a>

```java
public java.lang.String getPubsubTopic();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSccV2ProjectNotificationConfigConfig <a name="GoogleSccV2ProjectNotificationConfigConfig" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_v2_project_notification_config.GoogleSccV2ProjectNotificationConfigConfig;

GoogleSccV2ProjectNotificationConfigConfig.builder()
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
    .configId(java.lang.String)
    .streamingConfig(GoogleSccV2ProjectNotificationConfigStreamingConfig)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .pubsubTopic(java.lang.String)
//  .timeouts(GoogleSccV2ProjectNotificationConfigTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigConfig.property.configId">configId</a></code> | <code>java.lang.String</code> | This must be unique within the project. |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigConfig.property.streamingConfig">streamingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfig">GoogleSccV2ProjectNotificationConfigStreamingConfig</a></code> | streaming_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the notification config (max of 1024 characters). |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_scc_v2_project_notification_config#id GoogleSccV2ProjectNotificationConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigConfig.property.location">location</a></code> | <code>java.lang.String</code> | Location ID of the parent organization. Only global is supported at the moment. |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_scc_v2_project_notification_config#project GoogleSccV2ProjectNotificationConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigConfig.property.pubsubTopic">pubsubTopic</a></code> | <code>java.lang.String</code> | The Pub/Sub topic to send notifications to. Its format is "projects/[project_id]/topics/[topic]". |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeouts">GoogleSccV2ProjectNotificationConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `configId`<sup>Required</sup> <a name="configId" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigConfig.property.configId"></a>

```java
public java.lang.String getConfigId();
```

- *Type:* java.lang.String

This must be unique within the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_scc_v2_project_notification_config#config_id GoogleSccV2ProjectNotificationConfig#config_id}

---

##### `streamingConfig`<sup>Required</sup> <a name="streamingConfig" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigConfig.property.streamingConfig"></a>

```java
public GoogleSccV2ProjectNotificationConfigStreamingConfig getStreamingConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfig">GoogleSccV2ProjectNotificationConfigStreamingConfig</a>

streaming_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_scc_v2_project_notification_config#streaming_config GoogleSccV2ProjectNotificationConfig#streaming_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the notification config (max of 1024 characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_scc_v2_project_notification_config#description GoogleSccV2ProjectNotificationConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_scc_v2_project_notification_config#id GoogleSccV2ProjectNotificationConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Location ID of the parent organization. Only global is supported at the moment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_scc_v2_project_notification_config#location GoogleSccV2ProjectNotificationConfig#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_scc_v2_project_notification_config#project GoogleSccV2ProjectNotificationConfig#project}.

---

##### `pubsubTopic`<sup>Optional</sup> <a name="pubsubTopic" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigConfig.property.pubsubTopic"></a>

```java
public java.lang.String getPubsubTopic();
```

- *Type:* java.lang.String

The Pub/Sub topic to send notifications to. Its format is "projects/[project_id]/topics/[topic]".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_scc_v2_project_notification_config#pubsub_topic GoogleSccV2ProjectNotificationConfig#pubsub_topic}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigConfig.property.timeouts"></a>

```java
public GoogleSccV2ProjectNotificationConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeouts">GoogleSccV2ProjectNotificationConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_scc_v2_project_notification_config#timeouts GoogleSccV2ProjectNotificationConfig#timeouts}

---

### GoogleSccV2ProjectNotificationConfigStreamingConfig <a name="GoogleSccV2ProjectNotificationConfigStreamingConfig" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_v2_project_notification_config.GoogleSccV2ProjectNotificationConfigStreamingConfig;

GoogleSccV2ProjectNotificationConfigStreamingConfig.builder()
    .filter(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfig.property.filter">filter</a></code> | <code>java.lang.String</code> | Expression that defines the filter to apply across create/update events of assets or findings as specified by the event type. |

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfig.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

Expression that defines the filter to apply across create/update events of assets or findings as specified by the event type.

The
expression is a list of zero or more restrictions combined via
logical operators AND and OR. Parentheses are supported, and OR
has higher precedence than AND.

Restrictions have the form <field> <operator> <value> and may have
a - character in front of them to indicate negation. The fields
map to those defined in the corresponding resource.

The supported operators are:

* = for all value types.
* > , <, >=, <= for integer values.
* :, meaning substring matching, for strings.

The supported value types are:

* string literals in quotes.
* integer literals without quotes.
* boolean literals true and false without quotes.

See
[Filtering notifications](https://cloud.google.com/security-command-center/docs/how-to-api-filter-notifications)
for information on how to write a filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_scc_v2_project_notification_config#filter GoogleSccV2ProjectNotificationConfig#filter}

---

### GoogleSccV2ProjectNotificationConfigTimeouts <a name="GoogleSccV2ProjectNotificationConfigTimeouts" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_v2_project_notification_config.GoogleSccV2ProjectNotificationConfigTimeouts;

GoogleSccV2ProjectNotificationConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_scc_v2_project_notification_config#create GoogleSccV2ProjectNotificationConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_scc_v2_project_notification_config#delete GoogleSccV2ProjectNotificationConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_scc_v2_project_notification_config#update GoogleSccV2ProjectNotificationConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_scc_v2_project_notification_config#create GoogleSccV2ProjectNotificationConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_scc_v2_project_notification_config#delete GoogleSccV2ProjectNotificationConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_scc_v2_project_notification_config#update GoogleSccV2ProjectNotificationConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference <a name="GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_v2_project_notification_config.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference;

new GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfig">GoogleSccV2ProjectNotificationConfigStreamingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfigOutputReference.property.internalValue"></a>

```java
public GoogleSccV2ProjectNotificationConfigStreamingConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigStreamingConfig">GoogleSccV2ProjectNotificationConfigStreamingConfig</a>

---


### GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference <a name="GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_v2_project_notification_config.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference;

new GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeouts">GoogleSccV2ProjectNotificationConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSccV2ProjectNotificationConfig.GoogleSccV2ProjectNotificationConfigTimeouts">GoogleSccV2ProjectNotificationConfigTimeouts</a>

---



