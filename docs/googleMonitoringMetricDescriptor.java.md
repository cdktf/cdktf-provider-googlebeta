# `googleMonitoringMetricDescriptor` Submodule <a name="`googleMonitoringMetricDescriptor` Submodule" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleMonitoringMetricDescriptor <a name="GoogleMonitoringMetricDescriptor" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_monitoring_metric_descriptor google_monitoring_metric_descriptor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_metric_descriptor.GoogleMonitoringMetricDescriptor;

GoogleMonitoringMetricDescriptor.Builder.create(Construct scope, java.lang.String id)
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
    .description(java.lang.String)
    .displayName(java.lang.String)
    .metricKind(java.lang.String)
    .type(java.lang.String)
    .valueType(java.lang.String)
//  .id(java.lang.String)
//  .labels(IResolvable)
//  .labels(java.util.List<GoogleMonitoringMetricDescriptorLabels>)
//  .launchStage(java.lang.String)
//  .metadata(GoogleMonitoringMetricDescriptorMetadata)
//  .project(java.lang.String)
//  .timeouts(GoogleMonitoringMetricDescriptorTimeouts)
//  .unit(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A detailed description of the metric, which can be used in documentation. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | A concise name for the metric, which can be displayed in user interfaces. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.metricKind">metricKind</a></code> | <code>java.lang.String</code> | Whether the metric records instantaneous values, changes to a value, etc. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The metric type, including its DNS name prefix. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.valueType">valueType</a></code> | <code>java.lang.String</code> | Whether the measurement is an integer, a floating-point number, etc. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_monitoring_metric_descriptor#id GoogleMonitoringMetricDescriptor#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.labels">labels</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels">GoogleMonitoringMetricDescriptorLabels</a>></code> | labels block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.launchStage">launchStage</a></code> | <code>java.lang.String</code> | The launch stage of the metric definition. Possible values: ["LAUNCH_STAGE_UNSPECIFIED", "UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadata">GoogleMonitoringMetricDescriptorMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_monitoring_metric_descriptor#project GoogleMonitoringMetricDescriptor#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeouts">GoogleMonitoringMetricDescriptorTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.unit">unit</a></code> | <code>java.lang.String</code> | The units in which the metric value is reported. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A detailed description of the metric, which can be used in documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_monitoring_metric_descriptor#description GoogleMonitoringMetricDescriptor#description}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

A concise name for the metric, which can be displayed in user interfaces.

Use sentence case without an ending period, for example "Request count".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_monitoring_metric_descriptor#display_name GoogleMonitoringMetricDescriptor#display_name}

---

##### `metricKind`<sup>Required</sup> <a name="metricKind" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.metricKind"></a>

- *Type:* java.lang.String

Whether the metric records instantaneous values, changes to a value, etc.

Some combinations of metricKind and valueType might not be supported. Possible values: ["METRIC_KIND_UNSPECIFIED", "GAUGE", "DELTA", "CUMULATIVE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_monitoring_metric_descriptor#metric_kind GoogleMonitoringMetricDescriptor#metric_kind}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The metric type, including its DNS name prefix.

The type is not URL-encoded. All service defined metrics must be prefixed with the service name, in the format of {service name}/{relative metric name}, such as cloudsql.googleapis.com/database/cpu/utilization. The relative metric name must have only upper and lower-case letters, digits, '/' and underscores '_' are allowed. Additionally, the maximum number of characters allowed for the relative_metric_name is 100. All user-defined metric types have the DNS name custom.googleapis.com, external.googleapis.com, or logging.googleapis.com/user/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_monitoring_metric_descriptor#type GoogleMonitoringMetricDescriptor#type}

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.valueType"></a>

- *Type:* java.lang.String

Whether the measurement is an integer, a floating-point number, etc.

Some combinations of metricKind and valueType might not be supported. Possible values: ["BOOL", "INT64", "DOUBLE", "STRING", "DISTRIBUTION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_monitoring_metric_descriptor#value_type GoogleMonitoringMetricDescriptor#value_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_monitoring_metric_descriptor#id GoogleMonitoringMetricDescriptor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.labels"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels">GoogleMonitoringMetricDescriptorLabels</a>>

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_monitoring_metric_descriptor#labels GoogleMonitoringMetricDescriptor#labels}

---

##### `launchStage`<sup>Optional</sup> <a name="launchStage" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.launchStage"></a>

- *Type:* java.lang.String

The launch stage of the metric definition. Possible values: ["LAUNCH_STAGE_UNSPECIFIED", "UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_monitoring_metric_descriptor#launch_stage GoogleMonitoringMetricDescriptor#launch_stage}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadata">GoogleMonitoringMetricDescriptorMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_monitoring_metric_descriptor#metadata GoogleMonitoringMetricDescriptor#metadata}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_monitoring_metric_descriptor#project GoogleMonitoringMetricDescriptor#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeouts">GoogleMonitoringMetricDescriptorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_monitoring_metric_descriptor#timeouts GoogleMonitoringMetricDescriptor#timeouts}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.unit"></a>

- *Type:* java.lang.String

The units in which the metric value is reported.

It is only applicable if the
valueType is INT64, DOUBLE, or DISTRIBUTION. The unit defines the representation of
the stored metric values.

Different systems may scale the values to be more easily displayed (so a value of
0.02KBy might be displayed as 20By, and a value of 3523KBy might be displayed as
3.5MBy). However, if the unit is KBy, then the value of the metric is always in
thousands of bytes, no matter how it may be displayed.

If you want a custom metric to record the exact number of CPU-seconds used by a job,
you can create an INT64 CUMULATIVE metric whose unit is s{CPU} (or equivalently
1s{CPU} or just s). If the job uses 12,005 CPU-seconds, then the value is written as
12005.

Alternatively, if you want a custom metric to record data in a more granular way, you
can create a DOUBLE CUMULATIVE metric whose unit is ks{CPU}, and then write the value
12.005 (which is 12005/1000), or use Kis{CPU} and write 11.723 (which is 12005/1024).
The supported units are a subset of The Unified Code for Units of Measure standard.
More info can be found in the API documentation
(https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_monitoring_metric_descriptor#unit GoogleMonitoringMetricDescriptor#unit}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.putLabels">putLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.resetLaunchStage">resetLaunchStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.resetUnit">resetUnit</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLabels` <a name="putLabels" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.putLabels"></a>

```java
public void putLabels(IResolvable OR java.util.List<GoogleMonitoringMetricDescriptorLabels> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.putLabels.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels">GoogleMonitoringMetricDescriptorLabels</a>>

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.putMetadata"></a>

```java
public void putMetadata(GoogleMonitoringMetricDescriptorMetadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadata">GoogleMonitoringMetricDescriptorMetadata</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.putTimeouts"></a>

```java
public void putTimeouts(GoogleMonitoringMetricDescriptorTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeouts">GoogleMonitoringMetricDescriptorTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLaunchStage` <a name="resetLaunchStage" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.resetLaunchStage"></a>

```java
public void resetLaunchStage()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUnit` <a name="resetUnit" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.resetUnit"></a>

```java
public void resetUnit()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleMonitoringMetricDescriptor resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_metric_descriptor.GoogleMonitoringMetricDescriptor;

GoogleMonitoringMetricDescriptor.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_metric_descriptor.GoogleMonitoringMetricDescriptor;

GoogleMonitoringMetricDescriptor.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_metric_descriptor.GoogleMonitoringMetricDescriptor;

GoogleMonitoringMetricDescriptor.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_metric_descriptor.GoogleMonitoringMetricDescriptor;

GoogleMonitoringMetricDescriptor.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleMonitoringMetricDescriptor.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleMonitoringMetricDescriptor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleMonitoringMetricDescriptor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleMonitoringMetricDescriptor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_monitoring_metric_descriptor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleMonitoringMetricDescriptor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.labels">labels</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList">GoogleMonitoringMetricDescriptorLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference">GoogleMonitoringMetricDescriptorMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.monitoredResourceTypes">monitoredResourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference">GoogleMonitoringMetricDescriptorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.labelsInput">labelsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels">GoogleMonitoringMetricDescriptorLabels</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.launchStageInput">launchStageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadata">GoogleMonitoringMetricDescriptorMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.metricKindInput">metricKindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeouts">GoogleMonitoringMetricDescriptorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.valueTypeInput">valueTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.launchStage">launchStage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.metricKind">metricKind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.valueType">valueType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.labels"></a>

```java
public GoogleMonitoringMetricDescriptorLabelsList getLabels();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList">GoogleMonitoringMetricDescriptorLabelsList</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.metadata"></a>

```java
public GoogleMonitoringMetricDescriptorMetadataOutputReference getMetadata();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference">GoogleMonitoringMetricDescriptorMetadataOutputReference</a>

---

##### `monitoredResourceTypes`<sup>Required</sup> <a name="monitoredResourceTypes" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.monitoredResourceTypes"></a>

```java
public java.util.List<java.lang.String> getMonitoredResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.timeouts"></a>

```java
public GoogleMonitoringMetricDescriptorTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference">GoogleMonitoringMetricDescriptorTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.labelsInput"></a>

```java
public java.lang.Object getLabelsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels">GoogleMonitoringMetricDescriptorLabels</a>>

---

##### `launchStageInput`<sup>Optional</sup> <a name="launchStageInput" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.launchStageInput"></a>

```java
public java.lang.String getLaunchStageInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.metadataInput"></a>

```java
public GoogleMonitoringMetricDescriptorMetadata getMetadataInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadata">GoogleMonitoringMetricDescriptorMetadata</a>

---

##### `metricKindInput`<sup>Optional</sup> <a name="metricKindInput" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.metricKindInput"></a>

```java
public java.lang.String getMetricKindInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeouts">GoogleMonitoringMetricDescriptorTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `valueTypeInput`<sup>Optional</sup> <a name="valueTypeInput" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.valueTypeInput"></a>

```java
public java.lang.String getValueTypeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `launchStage`<sup>Required</sup> <a name="launchStage" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.launchStage"></a>

```java
public java.lang.String getLaunchStage();
```

- *Type:* java.lang.String

---

##### `metricKind`<sup>Required</sup> <a name="metricKind" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.metricKind"></a>

```java
public java.lang.String getMetricKind();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.valueType"></a>

```java
public java.lang.String getValueType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleMonitoringMetricDescriptorConfig <a name="GoogleMonitoringMetricDescriptorConfig" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_metric_descriptor.GoogleMonitoringMetricDescriptorConfig;

GoogleMonitoringMetricDescriptorConfig.builder()
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
    .description(java.lang.String)
    .displayName(java.lang.String)
    .metricKind(java.lang.String)
    .type(java.lang.String)
    .valueType(java.lang.String)
//  .id(java.lang.String)
//  .labels(IResolvable)
//  .labels(java.util.List<GoogleMonitoringMetricDescriptorLabels>)
//  .launchStage(java.lang.String)
//  .metadata(GoogleMonitoringMetricDescriptorMetadata)
//  .project(java.lang.String)
//  .timeouts(GoogleMonitoringMetricDescriptorTimeouts)
//  .unit(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.description">description</a></code> | <code>java.lang.String</code> | A detailed description of the metric, which can be used in documentation. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | A concise name for the metric, which can be displayed in user interfaces. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.metricKind">metricKind</a></code> | <code>java.lang.String</code> | Whether the metric records instantaneous values, changes to a value, etc. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.type">type</a></code> | <code>java.lang.String</code> | The metric type, including its DNS name prefix. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.valueType">valueType</a></code> | <code>java.lang.String</code> | Whether the measurement is an integer, a floating-point number, etc. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_monitoring_metric_descriptor#id GoogleMonitoringMetricDescriptor#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.labels">labels</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels">GoogleMonitoringMetricDescriptorLabels</a>></code> | labels block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.launchStage">launchStage</a></code> | <code>java.lang.String</code> | The launch stage of the metric definition. Possible values: ["LAUNCH_STAGE_UNSPECIFIED", "UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadata">GoogleMonitoringMetricDescriptorMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_monitoring_metric_descriptor#project GoogleMonitoringMetricDescriptor#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeouts">GoogleMonitoringMetricDescriptorTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.unit">unit</a></code> | <code>java.lang.String</code> | The units in which the metric value is reported. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A detailed description of the metric, which can be used in documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_monitoring_metric_descriptor#description GoogleMonitoringMetricDescriptor#description}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

A concise name for the metric, which can be displayed in user interfaces.

Use sentence case without an ending period, for example "Request count".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_monitoring_metric_descriptor#display_name GoogleMonitoringMetricDescriptor#display_name}

---

##### `metricKind`<sup>Required</sup> <a name="metricKind" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.metricKind"></a>

```java
public java.lang.String getMetricKind();
```

- *Type:* java.lang.String

Whether the metric records instantaneous values, changes to a value, etc.

Some combinations of metricKind and valueType might not be supported. Possible values: ["METRIC_KIND_UNSPECIFIED", "GAUGE", "DELTA", "CUMULATIVE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_monitoring_metric_descriptor#metric_kind GoogleMonitoringMetricDescriptor#metric_kind}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The metric type, including its DNS name prefix.

The type is not URL-encoded. All service defined metrics must be prefixed with the service name, in the format of {service name}/{relative metric name}, such as cloudsql.googleapis.com/database/cpu/utilization. The relative metric name must have only upper and lower-case letters, digits, '/' and underscores '_' are allowed. Additionally, the maximum number of characters allowed for the relative_metric_name is 100. All user-defined metric types have the DNS name custom.googleapis.com, external.googleapis.com, or logging.googleapis.com/user/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_monitoring_metric_descriptor#type GoogleMonitoringMetricDescriptor#type}

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.valueType"></a>

```java
public java.lang.String getValueType();
```

- *Type:* java.lang.String

Whether the measurement is an integer, a floating-point number, etc.

Some combinations of metricKind and valueType might not be supported. Possible values: ["BOOL", "INT64", "DOUBLE", "STRING", "DISTRIBUTION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_monitoring_metric_descriptor#value_type GoogleMonitoringMetricDescriptor#value_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_monitoring_metric_descriptor#id GoogleMonitoringMetricDescriptor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.labels"></a>

```java
public java.lang.Object getLabels();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels">GoogleMonitoringMetricDescriptorLabels</a>>

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_monitoring_metric_descriptor#labels GoogleMonitoringMetricDescriptor#labels}

---

##### `launchStage`<sup>Optional</sup> <a name="launchStage" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.launchStage"></a>

```java
public java.lang.String getLaunchStage();
```

- *Type:* java.lang.String

The launch stage of the metric definition. Possible values: ["LAUNCH_STAGE_UNSPECIFIED", "UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_monitoring_metric_descriptor#launch_stage GoogleMonitoringMetricDescriptor#launch_stage}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.metadata"></a>

```java
public GoogleMonitoringMetricDescriptorMetadata getMetadata();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadata">GoogleMonitoringMetricDescriptorMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_monitoring_metric_descriptor#metadata GoogleMonitoringMetricDescriptor#metadata}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_monitoring_metric_descriptor#project GoogleMonitoringMetricDescriptor#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.timeouts"></a>

```java
public GoogleMonitoringMetricDescriptorTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeouts">GoogleMonitoringMetricDescriptorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_monitoring_metric_descriptor#timeouts GoogleMonitoringMetricDescriptor#timeouts}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

The units in which the metric value is reported.

It is only applicable if the
valueType is INT64, DOUBLE, or DISTRIBUTION. The unit defines the representation of
the stored metric values.

Different systems may scale the values to be more easily displayed (so a value of
0.02KBy might be displayed as 20By, and a value of 3523KBy might be displayed as
3.5MBy). However, if the unit is KBy, then the value of the metric is always in
thousands of bytes, no matter how it may be displayed.

If you want a custom metric to record the exact number of CPU-seconds used by a job,
you can create an INT64 CUMULATIVE metric whose unit is s{CPU} (or equivalently
1s{CPU} or just s). If the job uses 12,005 CPU-seconds, then the value is written as
12005.

Alternatively, if you want a custom metric to record data in a more granular way, you
can create a DOUBLE CUMULATIVE metric whose unit is ks{CPU}, and then write the value
12.005 (which is 12005/1000), or use Kis{CPU} and write 11.723 (which is 12005/1024).
The supported units are a subset of The Unified Code for Units of Measure standard.
More info can be found in the API documentation
(https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_monitoring_metric_descriptor#unit GoogleMonitoringMetricDescriptor#unit}

---

### GoogleMonitoringMetricDescriptorLabels <a name="GoogleMonitoringMetricDescriptorLabels" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_metric_descriptor.GoogleMonitoringMetricDescriptorLabels;

GoogleMonitoringMetricDescriptorLabels.builder()
    .key(java.lang.String)
//  .description(java.lang.String)
//  .valueType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels.property.key">key</a></code> | <code>java.lang.String</code> | The key for this label. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels.property.description">description</a></code> | <code>java.lang.String</code> | A human-readable description for the label. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels.property.valueType">valueType</a></code> | <code>java.lang.String</code> | The type of data that can be assigned to the label. Default value: "STRING" Possible values: ["STRING", "BOOL", "INT64"]. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key for this label.

The key must not exceed 100 characters. The first character of the key must be an upper- or lower-case letter, the remaining characters must be letters, digits or underscores, and the key must match the regular expression [a-zA-Z][a-zA-Z0-9_]*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_monitoring_metric_descriptor#key GoogleMonitoringMetricDescriptor#key}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A human-readable description for the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_monitoring_metric_descriptor#description GoogleMonitoringMetricDescriptor#description}

---

##### `valueType`<sup>Optional</sup> <a name="valueType" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels.property.valueType"></a>

```java
public java.lang.String getValueType();
```

- *Type:* java.lang.String

The type of data that can be assigned to the label. Default value: "STRING" Possible values: ["STRING", "BOOL", "INT64"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_monitoring_metric_descriptor#value_type GoogleMonitoringMetricDescriptor#value_type}

---

### GoogleMonitoringMetricDescriptorMetadata <a name="GoogleMonitoringMetricDescriptorMetadata" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_metric_descriptor.GoogleMonitoringMetricDescriptorMetadata;

GoogleMonitoringMetricDescriptorMetadata.builder()
//  .ingestDelay(java.lang.String)
//  .samplePeriod(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadata.property.ingestDelay">ingestDelay</a></code> | <code>java.lang.String</code> | The delay of data points caused by ingestion. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadata.property.samplePeriod">samplePeriod</a></code> | <code>java.lang.String</code> | The sampling period of metric data points. |

---

##### `ingestDelay`<sup>Optional</sup> <a name="ingestDelay" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadata.property.ingestDelay"></a>

```java
public java.lang.String getIngestDelay();
```

- *Type:* java.lang.String

The delay of data points caused by ingestion.

Data points older than this age are guaranteed to be ingested and available to be read, excluding data loss due to errors. In '[duration format](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf?&_ga=2.264881487.1507873253.1593446723-935052455.1591817775#google.protobuf.Duration)'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_monitoring_metric_descriptor#ingest_delay GoogleMonitoringMetricDescriptor#ingest_delay}

---

##### `samplePeriod`<sup>Optional</sup> <a name="samplePeriod" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadata.property.samplePeriod"></a>

```java
public java.lang.String getSamplePeriod();
```

- *Type:* java.lang.String

The sampling period of metric data points.

For metrics which are written periodically, consecutive data points are stored at this time interval, excluding data loss due to errors. Metrics with a higher granularity have a smaller sampling period. In '[duration format](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf?&_ga=2.264881487.1507873253.1593446723-935052455.1591817775#google.protobuf.Duration)'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_monitoring_metric_descriptor#sample_period GoogleMonitoringMetricDescriptor#sample_period}

---

### GoogleMonitoringMetricDescriptorTimeouts <a name="GoogleMonitoringMetricDescriptorTimeouts" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_metric_descriptor.GoogleMonitoringMetricDescriptorTimeouts;

GoogleMonitoringMetricDescriptorTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_monitoring_metric_descriptor#create GoogleMonitoringMetricDescriptor#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_monitoring_metric_descriptor#delete GoogleMonitoringMetricDescriptor#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_monitoring_metric_descriptor#update GoogleMonitoringMetricDescriptor#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_monitoring_metric_descriptor#create GoogleMonitoringMetricDescriptor#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_monitoring_metric_descriptor#delete GoogleMonitoringMetricDescriptor#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_monitoring_metric_descriptor#update GoogleMonitoringMetricDescriptor#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleMonitoringMetricDescriptorLabelsList <a name="GoogleMonitoringMetricDescriptorLabelsList" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_metric_descriptor.GoogleMonitoringMetricDescriptorLabelsList;

new GoogleMonitoringMetricDescriptorLabelsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.get"></a>

```java
public GoogleMonitoringMetricDescriptorLabelsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels">GoogleMonitoringMetricDescriptorLabels</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels">GoogleMonitoringMetricDescriptorLabels</a>>

---


### GoogleMonitoringMetricDescriptorLabelsOutputReference <a name="GoogleMonitoringMetricDescriptorLabelsOutputReference" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_metric_descriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference;

new GoogleMonitoringMetricDescriptorLabelsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.resetValueType">resetValueType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetValueType` <a name="resetValueType" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.resetValueType"></a>

```java
public void resetValueType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.valueTypeInput">valueTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.valueType">valueType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels">GoogleMonitoringMetricDescriptorLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueTypeInput`<sup>Optional</sup> <a name="valueTypeInput" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.valueTypeInput"></a>

```java
public java.lang.String getValueTypeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.valueType"></a>

```java
public java.lang.String getValueType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels">GoogleMonitoringMetricDescriptorLabels</a>

---


### GoogleMonitoringMetricDescriptorMetadataOutputReference <a name="GoogleMonitoringMetricDescriptorMetadataOutputReference" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_metric_descriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference;

new GoogleMonitoringMetricDescriptorMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.resetIngestDelay">resetIngestDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.resetSamplePeriod">resetSamplePeriod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIngestDelay` <a name="resetIngestDelay" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.resetIngestDelay"></a>

```java
public void resetIngestDelay()
```

##### `resetSamplePeriod` <a name="resetSamplePeriod" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.resetSamplePeriod"></a>

```java
public void resetSamplePeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.property.ingestDelayInput">ingestDelayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.property.samplePeriodInput">samplePeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.property.ingestDelay">ingestDelay</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.property.samplePeriod">samplePeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadata">GoogleMonitoringMetricDescriptorMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ingestDelayInput`<sup>Optional</sup> <a name="ingestDelayInput" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.property.ingestDelayInput"></a>

```java
public java.lang.String getIngestDelayInput();
```

- *Type:* java.lang.String

---

##### `samplePeriodInput`<sup>Optional</sup> <a name="samplePeriodInput" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.property.samplePeriodInput"></a>

```java
public java.lang.String getSamplePeriodInput();
```

- *Type:* java.lang.String

---

##### `ingestDelay`<sup>Required</sup> <a name="ingestDelay" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.property.ingestDelay"></a>

```java
public java.lang.String getIngestDelay();
```

- *Type:* java.lang.String

---

##### `samplePeriod`<sup>Required</sup> <a name="samplePeriod" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.property.samplePeriod"></a>

```java
public java.lang.String getSamplePeriod();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.property.internalValue"></a>

```java
public GoogleMonitoringMetricDescriptorMetadata getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadata">GoogleMonitoringMetricDescriptorMetadata</a>

---


### GoogleMonitoringMetricDescriptorTimeoutsOutputReference <a name="GoogleMonitoringMetricDescriptorTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_metric_descriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference;

new GoogleMonitoringMetricDescriptorTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeouts">GoogleMonitoringMetricDescriptorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeouts">GoogleMonitoringMetricDescriptorTimeouts</a>

---



