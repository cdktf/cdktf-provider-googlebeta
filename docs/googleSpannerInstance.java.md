# `googleSpannerInstance` Submodule <a name="`googleSpannerInstance` Submodule" id="@cdktf/provider-google-beta.googleSpannerInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSpannerInstance <a name="GoogleSpannerInstance" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance google_spanner_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_spanner_instance.GoogleSpannerInstance;

GoogleSpannerInstance.Builder.create(Construct scope, java.lang.String id)
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
    .config(java.lang.String)
    .displayName(java.lang.String)
//  .autoscalingConfig(GoogleSpannerInstanceAutoscalingConfig)
//  .defaultBackupScheduleType(java.lang.String)
//  .edition(java.lang.String)
//  .forceDestroy(java.lang.Boolean)
//  .forceDestroy(IResolvable)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .name(java.lang.String)
//  .numNodes(java.lang.Number)
//  .processingUnits(java.lang.Number)
//  .project(java.lang.String)
//  .timeouts(GoogleSpannerInstanceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.config">config</a></code> | <code>java.lang.String</code> | The name of the instance's configuration (similar but not quite the same as a region) which defines the geographic placement and replication of your databases in this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The descriptive name for this instance as it appears in UIs. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.autoscalingConfig">autoscalingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfig">GoogleSpannerInstanceAutoscalingConfig</a></code> | autoscaling_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.defaultBackupScheduleType">defaultBackupScheduleType</a></code> | <code>java.lang.String</code> | Controls the default backup behavior for new databases within the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.edition">edition</a></code> | <code>java.lang.String</code> | The edition selected for this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When deleting a spanner instance, this boolean option will delete all backups of this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance#id GoogleSpannerInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A unique identifier for the instance, which cannot be changed after the instance is created. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.numNodes">numNodes</a></code> | <code>java.lang.Number</code> | The number of nodes allocated to this instance. Exactly one of either node_count or processing_units must be present in terraform. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.processingUnits">processingUnits</a></code> | <code>java.lang.Number</code> | The number of processing units allocated to this instance. Exactly one of processing_units or node_count must be present in terraform. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance#project GoogleSpannerInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeouts">GoogleSpannerInstanceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.config"></a>

- *Type:* java.lang.String

The name of the instance's configuration (similar but not quite the same as a region) which defines the geographic placement and replication of your databases in this instance.

It determines where your data
is stored. Values are typically of the form 'regional-europe-west1' , 'us-central' etc.
In order to obtain a valid list please consult the
[Configuration section of the docs](https://cloud.google.com/spanner/docs/instances).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance#config GoogleSpannerInstance#config}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The descriptive name for this instance as it appears in UIs.

Must be
unique per project and between 4 and 30 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance#display_name GoogleSpannerInstance#display_name}

---

##### `autoscalingConfig`<sup>Optional</sup> <a name="autoscalingConfig" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.autoscalingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfig">GoogleSpannerInstanceAutoscalingConfig</a>

autoscaling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance#autoscaling_config GoogleSpannerInstance#autoscaling_config}

---

##### `defaultBackupScheduleType`<sup>Optional</sup> <a name="defaultBackupScheduleType" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.defaultBackupScheduleType"></a>

- *Type:* java.lang.String

Controls the default backup behavior for new databases within the instance.

Note that 'AUTOMATIC' is not permitted for free instances, as backups and backup schedules are not allowed for free instances.
if unset or NONE, no default backup schedule will be created for new databases within the instance. Possible values: ["NONE", "AUTOMATIC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance#default_backup_schedule_type GoogleSpannerInstance#default_backup_schedule_type}

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.edition"></a>

- *Type:* java.lang.String

The edition selected for this instance.

Different editions provide different capabilities at different price points. Possible values: ["EDITION_UNSPECIFIED", "STANDARD", "ENTERPRISE", "ENTERPRISE_PLUS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance#edition GoogleSpannerInstance#edition}

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.forceDestroy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When deleting a spanner instance, this boolean option will delete all backups of this instance.

This must be set to true if you created a backup manually in the console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance#force_destroy GoogleSpannerInstance#force_destroy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance#id GoogleSpannerInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance#labels GoogleSpannerInstance#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A unique identifier for the instance, which cannot be changed after the instance is created.

The name must be between 6 and 30 characters
in length.
If not provided, a random string starting with 'tf-' will be selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance#name GoogleSpannerInstance#name}

---

##### `numNodes`<sup>Optional</sup> <a name="numNodes" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.numNodes"></a>

- *Type:* java.lang.Number

The number of nodes allocated to this instance. Exactly one of either node_count or processing_units must be present in terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance#num_nodes GoogleSpannerInstance#num_nodes}

---

##### `processingUnits`<sup>Optional</sup> <a name="processingUnits" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.processingUnits"></a>

- *Type:* java.lang.Number

The number of processing units allocated to this instance. Exactly one of processing_units or node_count must be present in terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance#processing_units GoogleSpannerInstance#processing_units}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance#project GoogleSpannerInstance#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeouts">GoogleSpannerInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance#timeouts GoogleSpannerInstance#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.putAutoscalingConfig">putAutoscalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetAutoscalingConfig">resetAutoscalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetDefaultBackupScheduleType">resetDefaultBackupScheduleType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetEdition">resetEdition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetForceDestroy">resetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetNumNodes">resetNumNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetProcessingUnits">resetProcessingUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoscalingConfig` <a name="putAutoscalingConfig" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.putAutoscalingConfig"></a>

```java
public void putAutoscalingConfig(GoogleSpannerInstanceAutoscalingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.putAutoscalingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfig">GoogleSpannerInstanceAutoscalingConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.putTimeouts"></a>

```java
public void putTimeouts(GoogleSpannerInstanceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeouts">GoogleSpannerInstanceTimeouts</a>

---

##### `resetAutoscalingConfig` <a name="resetAutoscalingConfig" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetAutoscalingConfig"></a>

```java
public void resetAutoscalingConfig()
```

##### `resetDefaultBackupScheduleType` <a name="resetDefaultBackupScheduleType" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetDefaultBackupScheduleType"></a>

```java
public void resetDefaultBackupScheduleType()
```

##### `resetEdition` <a name="resetEdition" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetEdition"></a>

```java
public void resetEdition()
```

##### `resetForceDestroy` <a name="resetForceDestroy" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetForceDestroy"></a>

```java
public void resetForceDestroy()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetName"></a>

```java
public void resetName()
```

##### `resetNumNodes` <a name="resetNumNodes" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetNumNodes"></a>

```java
public void resetNumNodes()
```

##### `resetProcessingUnits` <a name="resetProcessingUnits" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetProcessingUnits"></a>

```java
public void resetProcessingUnits()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleSpannerInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_spanner_instance.GoogleSpannerInstance;

GoogleSpannerInstance.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_spanner_instance.GoogleSpannerInstance;

GoogleSpannerInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_spanner_instance.GoogleSpannerInstance;

GoogleSpannerInstance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_spanner_instance.GoogleSpannerInstance;

GoogleSpannerInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleSpannerInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleSpannerInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleSpannerInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleSpannerInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSpannerInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.autoscalingConfig">autoscalingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference">GoogleSpannerInstanceAutoscalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference">GoogleSpannerInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.autoscalingConfigInput">autoscalingConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfig">GoogleSpannerInstanceAutoscalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.configInput">configInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.defaultBackupScheduleTypeInput">defaultBackupScheduleTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.editionInput">editionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.forceDestroyInput">forceDestroyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.numNodesInput">numNodesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.processingUnitsInput">processingUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeouts">GoogleSpannerInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.config">config</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.defaultBackupScheduleType">defaultBackupScheduleType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.edition">edition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.numNodes">numNodes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.processingUnits">processingUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoscalingConfig`<sup>Required</sup> <a name="autoscalingConfig" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.autoscalingConfig"></a>

```java
public GoogleSpannerInstanceAutoscalingConfigOutputReference getAutoscalingConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference">GoogleSpannerInstanceAutoscalingConfigOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.timeouts"></a>

```java
public GoogleSpannerInstanceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference">GoogleSpannerInstanceTimeoutsOutputReference</a>

---

##### `autoscalingConfigInput`<sup>Optional</sup> <a name="autoscalingConfigInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.autoscalingConfigInput"></a>

```java
public GoogleSpannerInstanceAutoscalingConfig getAutoscalingConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfig">GoogleSpannerInstanceAutoscalingConfig</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.configInput"></a>

```java
public java.lang.String getConfigInput();
```

- *Type:* java.lang.String

---

##### `defaultBackupScheduleTypeInput`<sup>Optional</sup> <a name="defaultBackupScheduleTypeInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.defaultBackupScheduleTypeInput"></a>

```java
public java.lang.String getDefaultBackupScheduleTypeInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `editionInput`<sup>Optional</sup> <a name="editionInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.editionInput"></a>

```java
public java.lang.String getEditionInput();
```

- *Type:* java.lang.String

---

##### `forceDestroyInput`<sup>Optional</sup> <a name="forceDestroyInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.forceDestroyInput"></a>

```java
public java.lang.Object getForceDestroyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `numNodesInput`<sup>Optional</sup> <a name="numNodesInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.numNodesInput"></a>

```java
public java.lang.Number getNumNodesInput();
```

- *Type:* java.lang.Number

---

##### `processingUnitsInput`<sup>Optional</sup> <a name="processingUnitsInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.processingUnitsInput"></a>

```java
public java.lang.Number getProcessingUnitsInput();
```

- *Type:* java.lang.Number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeouts">GoogleSpannerInstanceTimeouts</a>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.config"></a>

```java
public java.lang.String getConfig();
```

- *Type:* java.lang.String

---

##### `defaultBackupScheduleType`<sup>Required</sup> <a name="defaultBackupScheduleType" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.defaultBackupScheduleType"></a>

```java
public java.lang.String getDefaultBackupScheduleType();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.edition"></a>

```java
public java.lang.String getEdition();
```

- *Type:* java.lang.String

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.forceDestroy"></a>

```java
public java.lang.Object getForceDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `numNodes`<sup>Required</sup> <a name="numNodes" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.numNodes"></a>

```java
public java.lang.Number getNumNodes();
```

- *Type:* java.lang.Number

---

##### `processingUnits`<sup>Required</sup> <a name="processingUnits" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.processingUnits"></a>

```java
public java.lang.Number getProcessingUnits();
```

- *Type:* java.lang.Number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSpannerInstanceAutoscalingConfig <a name="GoogleSpannerInstanceAutoscalingConfig" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_spanner_instance.GoogleSpannerInstanceAutoscalingConfig;

GoogleSpannerInstanceAutoscalingConfig.builder()
//  .asymmetricAutoscalingOptions(IResolvable)
//  .asymmetricAutoscalingOptions(java.util.List<GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions>)
//  .autoscalingLimits(GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits)
//  .autoscalingTargets(GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfig.property.asymmetricAutoscalingOptions">asymmetricAutoscalingOptions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions</a>></code> | asymmetric_autoscaling_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfig.property.autoscalingLimits">autoscalingLimits</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits">GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits</a></code> | autoscaling_limits block. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfig.property.autoscalingTargets">autoscalingTargets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets">GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets</a></code> | autoscaling_targets block. |

---

##### `asymmetricAutoscalingOptions`<sup>Optional</sup> <a name="asymmetricAutoscalingOptions" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfig.property.asymmetricAutoscalingOptions"></a>

```java
public java.lang.Object getAsymmetricAutoscalingOptions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions</a>>

asymmetric_autoscaling_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance#asymmetric_autoscaling_options GoogleSpannerInstance#asymmetric_autoscaling_options}

---

##### `autoscalingLimits`<sup>Optional</sup> <a name="autoscalingLimits" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfig.property.autoscalingLimits"></a>

```java
public GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits getAutoscalingLimits();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits">GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits</a>

autoscaling_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance#autoscaling_limits GoogleSpannerInstance#autoscaling_limits}

---

##### `autoscalingTargets`<sup>Optional</sup> <a name="autoscalingTargets" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfig.property.autoscalingTargets"></a>

```java
public GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets getAutoscalingTargets();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets">GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets</a>

autoscaling_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance#autoscaling_targets GoogleSpannerInstance#autoscaling_targets}

---

### GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions <a name="GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_spanner_instance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions;

GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions.builder()
    .overrides(GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides)
    .replicaSelection(GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions.property.overrides">overrides</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides</a></code> | overrides block. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions.property.replicaSelection">replicaSelection</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection</a></code> | replica_selection block. |

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions.property.overrides"></a>

```java
public GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides getOverrides();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides</a>

overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance#overrides GoogleSpannerInstance#overrides}

---

##### `replicaSelection`<sup>Required</sup> <a name="replicaSelection" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions.property.replicaSelection"></a>

```java
public GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection getReplicaSelection();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection</a>

replica_selection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance#replica_selection GoogleSpannerInstance#replica_selection}

---

### GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides <a name="GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_spanner_instance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides;

GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides.builder()
    .autoscalingLimits(GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides.property.autoscalingLimits">autoscalingLimits</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits</a></code> | autoscaling_limits block. |

---

##### `autoscalingLimits`<sup>Required</sup> <a name="autoscalingLimits" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides.property.autoscalingLimits"></a>

```java
public GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits getAutoscalingLimits();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits</a>

autoscaling_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance#autoscaling_limits GoogleSpannerInstance#autoscaling_limits}

---

### GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits <a name="GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_spanner_instance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits;

GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits.builder()
    .maxNodes(java.lang.Number)
    .minNodes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits.property.maxNodes">maxNodes</a></code> | <code>java.lang.Number</code> | The maximum number of nodes for this specific replica. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits.property.minNodes">minNodes</a></code> | <code>java.lang.Number</code> | The minimum number of nodes for this specific replica. |

---

##### `maxNodes`<sup>Required</sup> <a name="maxNodes" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits.property.maxNodes"></a>

```java
public java.lang.Number getMaxNodes();
```

- *Type:* java.lang.Number

The maximum number of nodes for this specific replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance#max_nodes GoogleSpannerInstance#max_nodes}

---

##### `minNodes`<sup>Required</sup> <a name="minNodes" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits.property.minNodes"></a>

```java
public java.lang.Number getMinNodes();
```

- *Type:* java.lang.Number

The minimum number of nodes for this specific replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance#min_nodes GoogleSpannerInstance#min_nodes}

---

### GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection <a name="GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_spanner_instance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection;

GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection.builder()
    .location(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection.property.location">location</a></code> | <code>java.lang.String</code> | The location of the replica to apply asymmetric autoscaling options. |

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the replica to apply asymmetric autoscaling options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance#location GoogleSpannerInstance#location}

---

### GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits <a name="GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_spanner_instance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits;

GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits.builder()
//  .maxNodes(java.lang.Number)
//  .maxProcessingUnits(java.lang.Number)
//  .minNodes(java.lang.Number)
//  .minProcessingUnits(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits.property.maxNodes">maxNodes</a></code> | <code>java.lang.Number</code> | Specifies maximum number of nodes allocated to the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits.property.maxProcessingUnits">maxProcessingUnits</a></code> | <code>java.lang.Number</code> | Specifies maximum number of processing units allocated to the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits.property.minNodes">minNodes</a></code> | <code>java.lang.Number</code> | Specifies number of nodes allocated to the instance. If set, this number should be greater than or equal to 1. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits.property.minProcessingUnits">minProcessingUnits</a></code> | <code>java.lang.Number</code> | Specifies minimum number of processing units allocated to the instance. If set, this number should be multiples of 1000. |

---

##### `maxNodes`<sup>Optional</sup> <a name="maxNodes" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits.property.maxNodes"></a>

```java
public java.lang.Number getMaxNodes();
```

- *Type:* java.lang.Number

Specifies maximum number of nodes allocated to the instance.

If set, this number
should be greater than or equal to min_nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance#max_nodes GoogleSpannerInstance#max_nodes}

---

##### `maxProcessingUnits`<sup>Optional</sup> <a name="maxProcessingUnits" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits.property.maxProcessingUnits"></a>

```java
public java.lang.Number getMaxProcessingUnits();
```

- *Type:* java.lang.Number

Specifies maximum number of processing units allocated to the instance.

If set, this number should be multiples of 1000 and be greater than or equal to
min_processing_units.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance#max_processing_units GoogleSpannerInstance#max_processing_units}

---

##### `minNodes`<sup>Optional</sup> <a name="minNodes" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits.property.minNodes"></a>

```java
public java.lang.Number getMinNodes();
```

- *Type:* java.lang.Number

Specifies number of nodes allocated to the instance. If set, this number should be greater than or equal to 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance#min_nodes GoogleSpannerInstance#min_nodes}

---

##### `minProcessingUnits`<sup>Optional</sup> <a name="minProcessingUnits" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits.property.minProcessingUnits"></a>

```java
public java.lang.Number getMinProcessingUnits();
```

- *Type:* java.lang.Number

Specifies minimum number of processing units allocated to the instance. If set, this number should be multiples of 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance#min_processing_units GoogleSpannerInstance#min_processing_units}

---

### GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets <a name="GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_spanner_instance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets;

GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets.builder()
//  .highPriorityCpuUtilizationPercent(java.lang.Number)
//  .storageUtilizationPercent(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets.property.highPriorityCpuUtilizationPercent">highPriorityCpuUtilizationPercent</a></code> | <code>java.lang.Number</code> | Specifies the target high priority cpu utilization percentage that the autoscaler should be trying to achieve for the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets.property.storageUtilizationPercent">storageUtilizationPercent</a></code> | <code>java.lang.Number</code> | Specifies the target storage utilization percentage that the autoscaler should be trying to achieve for the instance. |

---

##### `highPriorityCpuUtilizationPercent`<sup>Optional</sup> <a name="highPriorityCpuUtilizationPercent" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets.property.highPriorityCpuUtilizationPercent"></a>

```java
public java.lang.Number getHighPriorityCpuUtilizationPercent();
```

- *Type:* java.lang.Number

Specifies the target high priority cpu utilization percentage that the autoscaler should be trying to achieve for the instance.

This number is on a scale from 0 (no utilization) to 100 (full utilization)..

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance#high_priority_cpu_utilization_percent GoogleSpannerInstance#high_priority_cpu_utilization_percent}

---

##### `storageUtilizationPercent`<sup>Optional</sup> <a name="storageUtilizationPercent" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets.property.storageUtilizationPercent"></a>

```java
public java.lang.Number getStorageUtilizationPercent();
```

- *Type:* java.lang.Number

Specifies the target storage utilization percentage that the autoscaler should be trying to achieve for the instance.

This number is on a scale from 0 (no utilization) to 100 (full utilization).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance#storage_utilization_percent GoogleSpannerInstance#storage_utilization_percent}

---

### GoogleSpannerInstanceConfig <a name="GoogleSpannerInstanceConfig" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_spanner_instance.GoogleSpannerInstanceConfig;

GoogleSpannerInstanceConfig.builder()
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
    .config(java.lang.String)
    .displayName(java.lang.String)
//  .autoscalingConfig(GoogleSpannerInstanceAutoscalingConfig)
//  .defaultBackupScheduleType(java.lang.String)
//  .edition(java.lang.String)
//  .forceDestroy(java.lang.Boolean)
//  .forceDestroy(IResolvable)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .name(java.lang.String)
//  .numNodes(java.lang.Number)
//  .processingUnits(java.lang.Number)
//  .project(java.lang.String)
//  .timeouts(GoogleSpannerInstanceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.config">config</a></code> | <code>java.lang.String</code> | The name of the instance's configuration (similar but not quite the same as a region) which defines the geographic placement and replication of your databases in this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The descriptive name for this instance as it appears in UIs. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.autoscalingConfig">autoscalingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfig">GoogleSpannerInstanceAutoscalingConfig</a></code> | autoscaling_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.defaultBackupScheduleType">defaultBackupScheduleType</a></code> | <code>java.lang.String</code> | Controls the default backup behavior for new databases within the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.edition">edition</a></code> | <code>java.lang.String</code> | The edition selected for this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When deleting a spanner instance, this boolean option will delete all backups of this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance#id GoogleSpannerInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.name">name</a></code> | <code>java.lang.String</code> | A unique identifier for the instance, which cannot be changed after the instance is created. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.numNodes">numNodes</a></code> | <code>java.lang.Number</code> | The number of nodes allocated to this instance. Exactly one of either node_count or processing_units must be present in terraform. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.processingUnits">processingUnits</a></code> | <code>java.lang.Number</code> | The number of processing units allocated to this instance. Exactly one of processing_units or node_count must be present in terraform. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance#project GoogleSpannerInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeouts">GoogleSpannerInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.config"></a>

```java
public java.lang.String getConfig();
```

- *Type:* java.lang.String

The name of the instance's configuration (similar but not quite the same as a region) which defines the geographic placement and replication of your databases in this instance.

It determines where your data
is stored. Values are typically of the form 'regional-europe-west1' , 'us-central' etc.
In order to obtain a valid list please consult the
[Configuration section of the docs](https://cloud.google.com/spanner/docs/instances).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance#config GoogleSpannerInstance#config}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The descriptive name for this instance as it appears in UIs.

Must be
unique per project and between 4 and 30 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance#display_name GoogleSpannerInstance#display_name}

---

##### `autoscalingConfig`<sup>Optional</sup> <a name="autoscalingConfig" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.autoscalingConfig"></a>

```java
public GoogleSpannerInstanceAutoscalingConfig getAutoscalingConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfig">GoogleSpannerInstanceAutoscalingConfig</a>

autoscaling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance#autoscaling_config GoogleSpannerInstance#autoscaling_config}

---

##### `defaultBackupScheduleType`<sup>Optional</sup> <a name="defaultBackupScheduleType" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.defaultBackupScheduleType"></a>

```java
public java.lang.String getDefaultBackupScheduleType();
```

- *Type:* java.lang.String

Controls the default backup behavior for new databases within the instance.

Note that 'AUTOMATIC' is not permitted for free instances, as backups and backup schedules are not allowed for free instances.
if unset or NONE, no default backup schedule will be created for new databases within the instance. Possible values: ["NONE", "AUTOMATIC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance#default_backup_schedule_type GoogleSpannerInstance#default_backup_schedule_type}

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.edition"></a>

```java
public java.lang.String getEdition();
```

- *Type:* java.lang.String

The edition selected for this instance.

Different editions provide different capabilities at different price points. Possible values: ["EDITION_UNSPECIFIED", "STANDARD", "ENTERPRISE", "ENTERPRISE_PLUS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance#edition GoogleSpannerInstance#edition}

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.forceDestroy"></a>

```java
public java.lang.Object getForceDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When deleting a spanner instance, this boolean option will delete all backups of this instance.

This must be set to true if you created a backup manually in the console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance#force_destroy GoogleSpannerInstance#force_destroy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance#id GoogleSpannerInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance#labels GoogleSpannerInstance#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A unique identifier for the instance, which cannot be changed after the instance is created.

The name must be between 6 and 30 characters
in length.
If not provided, a random string starting with 'tf-' will be selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance#name GoogleSpannerInstance#name}

---

##### `numNodes`<sup>Optional</sup> <a name="numNodes" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.numNodes"></a>

```java
public java.lang.Number getNumNodes();
```

- *Type:* java.lang.Number

The number of nodes allocated to this instance. Exactly one of either node_count or processing_units must be present in terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance#num_nodes GoogleSpannerInstance#num_nodes}

---

##### `processingUnits`<sup>Optional</sup> <a name="processingUnits" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.processingUnits"></a>

```java
public java.lang.Number getProcessingUnits();
```

- *Type:* java.lang.Number

The number of processing units allocated to this instance. Exactly one of processing_units or node_count must be present in terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance#processing_units GoogleSpannerInstance#processing_units}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance#project GoogleSpannerInstance#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.timeouts"></a>

```java
public GoogleSpannerInstanceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeouts">GoogleSpannerInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance#timeouts GoogleSpannerInstance#timeouts}

---

### GoogleSpannerInstanceTimeouts <a name="GoogleSpannerInstanceTimeouts" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_spanner_instance.GoogleSpannerInstanceTimeouts;

GoogleSpannerInstanceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance#create GoogleSpannerInstance#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance#delete GoogleSpannerInstance#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance#update GoogleSpannerInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance#create GoogleSpannerInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance#delete GoogleSpannerInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_spanner_instance#update GoogleSpannerInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList <a name="GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_spanner_instance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList;

new GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.get"></a>

```java
public GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions</a>>

---


### GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference <a name="GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_spanner_instance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference;

new GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.putOverrides">putOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.putReplicaSelection">putReplicaSelection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOverrides` <a name="putOverrides" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.putOverrides"></a>

```java
public void putOverrides(GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.putOverrides.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides</a>

---

##### `putReplicaSelection` <a name="putReplicaSelection" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.putReplicaSelection"></a>

```java
public void putReplicaSelection(GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.putReplicaSelection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.overrides">overrides</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.replicaSelection">replicaSelection</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.overridesInput">overridesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.replicaSelectionInput">replicaSelectionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.overrides"></a>

```java
public GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference getOverrides();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference</a>

---

##### `replicaSelection`<sup>Required</sup> <a name="replicaSelection" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.replicaSelection"></a>

```java
public GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference getReplicaSelection();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference</a>

---

##### `overridesInput`<sup>Optional</sup> <a name="overridesInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.overridesInput"></a>

```java
public GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides getOverridesInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides</a>

---

##### `replicaSelectionInput`<sup>Optional</sup> <a name="replicaSelectionInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.replicaSelectionInput"></a>

```java
public GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection getReplicaSelectionInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions</a>

---


### GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference <a name="GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_spanner_instance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference;

new GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.maxNodesInput">maxNodesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.minNodesInput">minNodesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.maxNodes">maxNodes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.minNodes">minNodes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxNodesInput`<sup>Optional</sup> <a name="maxNodesInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.maxNodesInput"></a>

```java
public java.lang.Number getMaxNodesInput();
```

- *Type:* java.lang.Number

---

##### `minNodesInput`<sup>Optional</sup> <a name="minNodesInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.minNodesInput"></a>

```java
public java.lang.Number getMinNodesInput();
```

- *Type:* java.lang.Number

---

##### `maxNodes`<sup>Required</sup> <a name="maxNodes" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.maxNodes"></a>

```java
public java.lang.Number getMaxNodes();
```

- *Type:* java.lang.Number

---

##### `minNodes`<sup>Required</sup> <a name="minNodes" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.minNodes"></a>

```java
public java.lang.Number getMinNodes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.internalValue"></a>

```java
public GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits</a>

---


### GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference <a name="GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_spanner_instance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference;

new GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.putAutoscalingLimits">putAutoscalingLimits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoscalingLimits` <a name="putAutoscalingLimits" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.putAutoscalingLimits"></a>

```java
public void putAutoscalingLimits(GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.putAutoscalingLimits.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.autoscalingLimits">autoscalingLimits</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.autoscalingLimitsInput">autoscalingLimitsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoscalingLimits`<sup>Required</sup> <a name="autoscalingLimits" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.autoscalingLimits"></a>

```java
public GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference getAutoscalingLimits();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference</a>

---

##### `autoscalingLimitsInput`<sup>Optional</sup> <a name="autoscalingLimitsInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.autoscalingLimitsInput"></a>

```java
public GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits getAutoscalingLimitsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.internalValue"></a>

```java
public GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides</a>

---


### GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference <a name="GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_spanner_instance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference;

new GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.property.internalValue"></a>

```java
public GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection</a>

---


### GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference <a name="GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_spanner_instance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference;

new GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resetMaxNodes">resetMaxNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resetMaxProcessingUnits">resetMaxProcessingUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resetMinNodes">resetMinNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resetMinProcessingUnits">resetMinProcessingUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxNodes` <a name="resetMaxNodes" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resetMaxNodes"></a>

```java
public void resetMaxNodes()
```

##### `resetMaxProcessingUnits` <a name="resetMaxProcessingUnits" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resetMaxProcessingUnits"></a>

```java
public void resetMaxProcessingUnits()
```

##### `resetMinNodes` <a name="resetMinNodes" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resetMinNodes"></a>

```java
public void resetMinNodes()
```

##### `resetMinProcessingUnits` <a name="resetMinProcessingUnits" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resetMinProcessingUnits"></a>

```java
public void resetMinProcessingUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.maxNodesInput">maxNodesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.maxProcessingUnitsInput">maxProcessingUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.minNodesInput">minNodesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.minProcessingUnitsInput">minProcessingUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.maxNodes">maxNodes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.maxProcessingUnits">maxProcessingUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.minNodes">minNodes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.minProcessingUnits">minProcessingUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits">GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxNodesInput`<sup>Optional</sup> <a name="maxNodesInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.maxNodesInput"></a>

```java
public java.lang.Number getMaxNodesInput();
```

- *Type:* java.lang.Number

---

##### `maxProcessingUnitsInput`<sup>Optional</sup> <a name="maxProcessingUnitsInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.maxProcessingUnitsInput"></a>

```java
public java.lang.Number getMaxProcessingUnitsInput();
```

- *Type:* java.lang.Number

---

##### `minNodesInput`<sup>Optional</sup> <a name="minNodesInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.minNodesInput"></a>

```java
public java.lang.Number getMinNodesInput();
```

- *Type:* java.lang.Number

---

##### `minProcessingUnitsInput`<sup>Optional</sup> <a name="minProcessingUnitsInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.minProcessingUnitsInput"></a>

```java
public java.lang.Number getMinProcessingUnitsInput();
```

- *Type:* java.lang.Number

---

##### `maxNodes`<sup>Required</sup> <a name="maxNodes" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.maxNodes"></a>

```java
public java.lang.Number getMaxNodes();
```

- *Type:* java.lang.Number

---

##### `maxProcessingUnits`<sup>Required</sup> <a name="maxProcessingUnits" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.maxProcessingUnits"></a>

```java
public java.lang.Number getMaxProcessingUnits();
```

- *Type:* java.lang.Number

---

##### `minNodes`<sup>Required</sup> <a name="minNodes" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.minNodes"></a>

```java
public java.lang.Number getMinNodes();
```

- *Type:* java.lang.Number

---

##### `minProcessingUnits`<sup>Required</sup> <a name="minProcessingUnits" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.minProcessingUnits"></a>

```java
public java.lang.Number getMinProcessingUnits();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.internalValue"></a>

```java
public GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits">GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits</a>

---


### GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference <a name="GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_spanner_instance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference;

new GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.resetHighPriorityCpuUtilizationPercent">resetHighPriorityCpuUtilizationPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.resetStorageUtilizationPercent">resetStorageUtilizationPercent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHighPriorityCpuUtilizationPercent` <a name="resetHighPriorityCpuUtilizationPercent" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.resetHighPriorityCpuUtilizationPercent"></a>

```java
public void resetHighPriorityCpuUtilizationPercent()
```

##### `resetStorageUtilizationPercent` <a name="resetStorageUtilizationPercent" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.resetStorageUtilizationPercent"></a>

```java
public void resetStorageUtilizationPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.highPriorityCpuUtilizationPercentInput">highPriorityCpuUtilizationPercentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.storageUtilizationPercentInput">storageUtilizationPercentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.highPriorityCpuUtilizationPercent">highPriorityCpuUtilizationPercent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.storageUtilizationPercent">storageUtilizationPercent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets">GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `highPriorityCpuUtilizationPercentInput`<sup>Optional</sup> <a name="highPriorityCpuUtilizationPercentInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.highPriorityCpuUtilizationPercentInput"></a>

```java
public java.lang.Number getHighPriorityCpuUtilizationPercentInput();
```

- *Type:* java.lang.Number

---

##### `storageUtilizationPercentInput`<sup>Optional</sup> <a name="storageUtilizationPercentInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.storageUtilizationPercentInput"></a>

```java
public java.lang.Number getStorageUtilizationPercentInput();
```

- *Type:* java.lang.Number

---

##### `highPriorityCpuUtilizationPercent`<sup>Required</sup> <a name="highPriorityCpuUtilizationPercent" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.highPriorityCpuUtilizationPercent"></a>

```java
public java.lang.Number getHighPriorityCpuUtilizationPercent();
```

- *Type:* java.lang.Number

---

##### `storageUtilizationPercent`<sup>Required</sup> <a name="storageUtilizationPercent" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.storageUtilizationPercent"></a>

```java
public java.lang.Number getStorageUtilizationPercent();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.internalValue"></a>

```java
public GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets">GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets</a>

---


### GoogleSpannerInstanceAutoscalingConfigOutputReference <a name="GoogleSpannerInstanceAutoscalingConfigOutputReference" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_spanner_instance.GoogleSpannerInstanceAutoscalingConfigOutputReference;

new GoogleSpannerInstanceAutoscalingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.putAsymmetricAutoscalingOptions">putAsymmetricAutoscalingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.putAutoscalingLimits">putAutoscalingLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.putAutoscalingTargets">putAutoscalingTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.resetAsymmetricAutoscalingOptions">resetAsymmetricAutoscalingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.resetAutoscalingLimits">resetAutoscalingLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.resetAutoscalingTargets">resetAutoscalingTargets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAsymmetricAutoscalingOptions` <a name="putAsymmetricAutoscalingOptions" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.putAsymmetricAutoscalingOptions"></a>

```java
public void putAsymmetricAutoscalingOptions(IResolvable OR java.util.List<GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.putAsymmetricAutoscalingOptions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions</a>>

---

##### `putAutoscalingLimits` <a name="putAutoscalingLimits" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.putAutoscalingLimits"></a>

```java
public void putAutoscalingLimits(GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.putAutoscalingLimits.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits">GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits</a>

---

##### `putAutoscalingTargets` <a name="putAutoscalingTargets" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.putAutoscalingTargets"></a>

```java
public void putAutoscalingTargets(GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.putAutoscalingTargets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets">GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets</a>

---

##### `resetAsymmetricAutoscalingOptions` <a name="resetAsymmetricAutoscalingOptions" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.resetAsymmetricAutoscalingOptions"></a>

```java
public void resetAsymmetricAutoscalingOptions()
```

##### `resetAutoscalingLimits` <a name="resetAutoscalingLimits" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.resetAutoscalingLimits"></a>

```java
public void resetAutoscalingLimits()
```

##### `resetAutoscalingTargets` <a name="resetAutoscalingTargets" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.resetAutoscalingTargets"></a>

```java
public void resetAutoscalingTargets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.asymmetricAutoscalingOptions">asymmetricAutoscalingOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.autoscalingLimits">autoscalingLimits</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference">GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.autoscalingTargets">autoscalingTargets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference">GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.asymmetricAutoscalingOptionsInput">asymmetricAutoscalingOptionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.autoscalingLimitsInput">autoscalingLimitsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits">GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.autoscalingTargetsInput">autoscalingTargetsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets">GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfig">GoogleSpannerInstanceAutoscalingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `asymmetricAutoscalingOptions`<sup>Required</sup> <a name="asymmetricAutoscalingOptions" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.asymmetricAutoscalingOptions"></a>

```java
public GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList getAsymmetricAutoscalingOptions();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList</a>

---

##### `autoscalingLimits`<sup>Required</sup> <a name="autoscalingLimits" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.autoscalingLimits"></a>

```java
public GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference getAutoscalingLimits();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference">GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference</a>

---

##### `autoscalingTargets`<sup>Required</sup> <a name="autoscalingTargets" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.autoscalingTargets"></a>

```java
public GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference getAutoscalingTargets();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference">GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference</a>

---

##### `asymmetricAutoscalingOptionsInput`<sup>Optional</sup> <a name="asymmetricAutoscalingOptionsInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.asymmetricAutoscalingOptionsInput"></a>

```java
public java.lang.Object getAsymmetricAutoscalingOptionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions</a>>

---

##### `autoscalingLimitsInput`<sup>Optional</sup> <a name="autoscalingLimitsInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.autoscalingLimitsInput"></a>

```java
public GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits getAutoscalingLimitsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits">GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits</a>

---

##### `autoscalingTargetsInput`<sup>Optional</sup> <a name="autoscalingTargetsInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.autoscalingTargetsInput"></a>

```java
public GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets getAutoscalingTargetsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets">GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.internalValue"></a>

```java
public GoogleSpannerInstanceAutoscalingConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfig">GoogleSpannerInstanceAutoscalingConfig</a>

---


### GoogleSpannerInstanceTimeoutsOutputReference <a name="GoogleSpannerInstanceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_spanner_instance.GoogleSpannerInstanceTimeoutsOutputReference;

new GoogleSpannerInstanceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeouts">GoogleSpannerInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeouts">GoogleSpannerInstanceTimeouts</a>

---



