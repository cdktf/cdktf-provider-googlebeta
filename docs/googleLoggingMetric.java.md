# `googleLoggingMetric` Submodule <a name="`googleLoggingMetric` Submodule" id="@cdktf/provider-google-beta.googleLoggingMetric"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleLoggingMetric <a name="GoogleLoggingMetric" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric google_logging_metric}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_logging_metric.GoogleLoggingMetric;

GoogleLoggingMetric.Builder.create(Construct scope, java.lang.String id)
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
    .filter(java.lang.String)
    .name(java.lang.String)
//  .bucketName(java.lang.String)
//  .bucketOptions(GoogleLoggingMetricBucketOptions)
//  .description(java.lang.String)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .id(java.lang.String)
//  .labelExtractors(java.util.Map<java.lang.String, java.lang.String>)
//  .metricDescriptor(GoogleLoggingMetricMetricDescriptor)
//  .project(java.lang.String)
//  .timeouts(GoogleLoggingMetricTimeouts)
//  .valueExtractor(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.Initializer.parameter.filter">filter</a></code> | <code>java.lang.String</code> | An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-filters) which is used to match log entries. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The client-assigned metric identifier. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.Initializer.parameter.bucketName">bucketName</a></code> | <code>java.lang.String</code> | The resource name of the Log Bucket that owns the Log Metric. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.Initializer.parameter.bucketOptions">bucketOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptions">GoogleLoggingMetricBucketOptions</a></code> | bucket_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of this metric, which is used in documentation. The maximum length of the description is 8000 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.Initializer.parameter.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to True, then this metric is disabled and it does not generate any points. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#id GoogleLoggingMetric#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.Initializer.parameter.labelExtractors">labelExtractors</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map from a label key string to an extractor expression which is used to extract data from a log entry field and assign as the label value. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.Initializer.parameter.metricDescriptor">metricDescriptor</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptor">GoogleLoggingMetricMetricDescriptor</a></code> | metric_descriptor block. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#project GoogleLoggingMetric#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeouts">GoogleLoggingMetricTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.Initializer.parameter.valueExtractor">valueExtractor</a></code> | <code>java.lang.String</code> | A valueExtractor is required when using a distribution logs-based metric to extract the values to record from a log entry. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.Initializer.parameter.filter"></a>

- *Type:* java.lang.String

An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-filters) which is used to match log entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#filter GoogleLoggingMetric#filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The client-assigned metric identifier.

Examples - "error_count", "nginx/requests".
Metric identifiers are limited to 100 characters and can include only the following
characters A-Z, a-z, 0-9, and the special characters _-.,+!*',()%/. The forward-slash
character (/) denotes a hierarchy of name pieces, and it cannot be the first character
of the name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#name GoogleLoggingMetric#name}

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.Initializer.parameter.bucketName"></a>

- *Type:* java.lang.String

The resource name of the Log Bucket that owns the Log Metric.

Only Log Buckets in projects
are supported. The bucket has to be in the same project as the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#bucket_name GoogleLoggingMetric#bucket_name}

---

##### `bucketOptions`<sup>Optional</sup> <a name="bucketOptions" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.Initializer.parameter.bucketOptions"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptions">GoogleLoggingMetricBucketOptions</a>

bucket_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#bucket_options GoogleLoggingMetric#bucket_options}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of this metric, which is used in documentation. The maximum length of the description is 8000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#description GoogleLoggingMetric#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.Initializer.parameter.disabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to True, then this metric is disabled and it does not generate any points.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#disabled GoogleLoggingMetric#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#id GoogleLoggingMetric#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labelExtractors`<sup>Optional</sup> <a name="labelExtractors" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.Initializer.parameter.labelExtractors"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map from a label key string to an extractor expression which is used to extract data from a log entry field and assign as the label value.

Each label key specified in the LabelDescriptor must
have an associated extractor expression in this map. The syntax of the extractor expression is
the same as for the valueExtractor field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#label_extractors GoogleLoggingMetric#label_extractors}

---

##### `metricDescriptor`<sup>Optional</sup> <a name="metricDescriptor" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.Initializer.parameter.metricDescriptor"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptor">GoogleLoggingMetricMetricDescriptor</a>

metric_descriptor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#metric_descriptor GoogleLoggingMetric#metric_descriptor}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#project GoogleLoggingMetric#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeouts">GoogleLoggingMetricTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#timeouts GoogleLoggingMetric#timeouts}

---

##### `valueExtractor`<sup>Optional</sup> <a name="valueExtractor" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.Initializer.parameter.valueExtractor"></a>

- *Type:* java.lang.String

A valueExtractor is required when using a distribution logs-based metric to extract the values to record from a log entry.

Two functions are supported for value extraction - EXTRACT(field) or
REGEXP_EXTRACT(field, regex). The argument are 1. field - The name of the log entry field from which
the value is to be extracted. 2. regex - A regular expression using the Google RE2 syntax
(https://github.com/google/re2/wiki/Syntax) with a single capture group to extract data from the specified
log entry field. The value of the field is converted to a string before applying the regex. It is an
error to specify a regex that does not include exactly one capture group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#value_extractor GoogleLoggingMetric#value_extractor}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.putBucketOptions">putBucketOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.putMetricDescriptor">putMetricDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.resetBucketOptions">resetBucketOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.resetLabelExtractors">resetLabelExtractors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.resetMetricDescriptor">resetMetricDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.resetValueExtractor">resetValueExtractor</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBucketOptions` <a name="putBucketOptions" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.putBucketOptions"></a>

```java
public void putBucketOptions(GoogleLoggingMetricBucketOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.putBucketOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptions">GoogleLoggingMetricBucketOptions</a>

---

##### `putMetricDescriptor` <a name="putMetricDescriptor" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.putMetricDescriptor"></a>

```java
public void putMetricDescriptor(GoogleLoggingMetricMetricDescriptor value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.putMetricDescriptor.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptor">GoogleLoggingMetricMetricDescriptor</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.putTimeouts"></a>

```java
public void putTimeouts(GoogleLoggingMetricTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeouts">GoogleLoggingMetricTimeouts</a>

---

##### `resetBucketName` <a name="resetBucketName" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.resetBucketName"></a>

```java
public void resetBucketName()
```

##### `resetBucketOptions` <a name="resetBucketOptions" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.resetBucketOptions"></a>

```java
public void resetBucketOptions()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.resetId"></a>

```java
public void resetId()
```

##### `resetLabelExtractors` <a name="resetLabelExtractors" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.resetLabelExtractors"></a>

```java
public void resetLabelExtractors()
```

##### `resetMetricDescriptor` <a name="resetMetricDescriptor" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.resetMetricDescriptor"></a>

```java
public void resetMetricDescriptor()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetValueExtractor` <a name="resetValueExtractor" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.resetValueExtractor"></a>

```java
public void resetValueExtractor()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleLoggingMetric resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_logging_metric.GoogleLoggingMetric;

GoogleLoggingMetric.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_logging_metric.GoogleLoggingMetric;

GoogleLoggingMetric.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_logging_metric.GoogleLoggingMetric;

GoogleLoggingMetric.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_logging_metric.GoogleLoggingMetric;

GoogleLoggingMetric.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleLoggingMetric.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleLoggingMetric resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleLoggingMetric to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleLoggingMetric that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleLoggingMetric to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.bucketOptions">bucketOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference">GoogleLoggingMetricBucketOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.metricDescriptor">metricDescriptor</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference">GoogleLoggingMetricMetricDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference">GoogleLoggingMetricTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.bucketOptionsInput">bucketOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptions">GoogleLoggingMetricBucketOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.labelExtractorsInput">labelExtractorsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.metricDescriptorInput">metricDescriptorInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptor">GoogleLoggingMetricMetricDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeouts">GoogleLoggingMetricTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.valueExtractorInput">valueExtractorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.labelExtractors">labelExtractors</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.valueExtractor">valueExtractor</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucketOptions`<sup>Required</sup> <a name="bucketOptions" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.bucketOptions"></a>

```java
public GoogleLoggingMetricBucketOptionsOutputReference getBucketOptions();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference">GoogleLoggingMetricBucketOptionsOutputReference</a>

---

##### `metricDescriptor`<sup>Required</sup> <a name="metricDescriptor" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.metricDescriptor"></a>

```java
public GoogleLoggingMetricMetricDescriptorOutputReference getMetricDescriptor();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference">GoogleLoggingMetricMetricDescriptorOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.timeouts"></a>

```java
public GoogleLoggingMetricTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference">GoogleLoggingMetricTimeoutsOutputReference</a>

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `bucketOptionsInput`<sup>Optional</sup> <a name="bucketOptionsInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.bucketOptionsInput"></a>

```java
public GoogleLoggingMetricBucketOptions getBucketOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptions">GoogleLoggingMetricBucketOptions</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.disabledInput"></a>

```java
public java.lang.Object getDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelExtractorsInput`<sup>Optional</sup> <a name="labelExtractorsInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.labelExtractorsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelExtractorsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `metricDescriptorInput`<sup>Optional</sup> <a name="metricDescriptorInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.metricDescriptorInput"></a>

```java
public GoogleLoggingMetricMetricDescriptor getMetricDescriptorInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptor">GoogleLoggingMetricMetricDescriptor</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeouts">GoogleLoggingMetricTimeouts</a>

---

##### `valueExtractorInput`<sup>Optional</sup> <a name="valueExtractorInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.valueExtractorInput"></a>

```java
public java.lang.String getValueExtractorInput();
```

- *Type:* java.lang.String

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labelExtractors`<sup>Required</sup> <a name="labelExtractors" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.labelExtractors"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelExtractors();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `valueExtractor`<sup>Required</sup> <a name="valueExtractor" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.valueExtractor"></a>

```java
public java.lang.String getValueExtractor();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleLoggingMetricBucketOptions <a name="GoogleLoggingMetricBucketOptions" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_logging_metric.GoogleLoggingMetricBucketOptions;

GoogleLoggingMetricBucketOptions.builder()
//  .explicitBuckets(GoogleLoggingMetricBucketOptionsExplicitBuckets)
//  .exponentialBuckets(GoogleLoggingMetricBucketOptionsExponentialBuckets)
//  .linearBuckets(GoogleLoggingMetricBucketOptionsLinearBuckets)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptions.property.explicitBuckets">explicitBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBuckets">GoogleLoggingMetricBucketOptionsExplicitBuckets</a></code> | explicit_buckets block. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptions.property.exponentialBuckets">exponentialBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBuckets">GoogleLoggingMetricBucketOptionsExponentialBuckets</a></code> | exponential_buckets block. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptions.property.linearBuckets">linearBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBuckets">GoogleLoggingMetricBucketOptionsLinearBuckets</a></code> | linear_buckets block. |

---

##### `explicitBuckets`<sup>Optional</sup> <a name="explicitBuckets" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptions.property.explicitBuckets"></a>

```java
public GoogleLoggingMetricBucketOptionsExplicitBuckets getExplicitBuckets();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBuckets">GoogleLoggingMetricBucketOptionsExplicitBuckets</a>

explicit_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#explicit_buckets GoogleLoggingMetric#explicit_buckets}

---

##### `exponentialBuckets`<sup>Optional</sup> <a name="exponentialBuckets" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptions.property.exponentialBuckets"></a>

```java
public GoogleLoggingMetricBucketOptionsExponentialBuckets getExponentialBuckets();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBuckets">GoogleLoggingMetricBucketOptionsExponentialBuckets</a>

exponential_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#exponential_buckets GoogleLoggingMetric#exponential_buckets}

---

##### `linearBuckets`<sup>Optional</sup> <a name="linearBuckets" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptions.property.linearBuckets"></a>

```java
public GoogleLoggingMetricBucketOptionsLinearBuckets getLinearBuckets();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBuckets">GoogleLoggingMetricBucketOptionsLinearBuckets</a>

linear_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#linear_buckets GoogleLoggingMetric#linear_buckets}

---

### GoogleLoggingMetricBucketOptionsExplicitBuckets <a name="GoogleLoggingMetricBucketOptionsExplicitBuckets" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBuckets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_logging_metric.GoogleLoggingMetricBucketOptionsExplicitBuckets;

GoogleLoggingMetricBucketOptionsExplicitBuckets.builder()
    .bounds(java.util.List<java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBuckets.property.bounds">bounds</a></code> | <code>java.util.List<java.lang.Number></code> | The values must be monotonically increasing. |

---

##### `bounds`<sup>Required</sup> <a name="bounds" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBuckets.property.bounds"></a>

```java
public java.util.List<java.lang.Number> getBounds();
```

- *Type:* java.util.List<java.lang.Number>

The values must be monotonically increasing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#bounds GoogleLoggingMetric#bounds}

---

### GoogleLoggingMetricBucketOptionsExponentialBuckets <a name="GoogleLoggingMetricBucketOptionsExponentialBuckets" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBuckets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_logging_metric.GoogleLoggingMetricBucketOptionsExponentialBuckets;

GoogleLoggingMetricBucketOptionsExponentialBuckets.builder()
    .growthFactor(java.lang.Number)
    .numFiniteBuckets(java.lang.Number)
    .scale(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBuckets.property.growthFactor">growthFactor</a></code> | <code>java.lang.Number</code> | Must be greater than 1. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBuckets.property.numFiniteBuckets">numFiniteBuckets</a></code> | <code>java.lang.Number</code> | Must be greater than 0. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBuckets.property.scale">scale</a></code> | <code>java.lang.Number</code> | Must be greater than 0. |

---

##### `growthFactor`<sup>Required</sup> <a name="growthFactor" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBuckets.property.growthFactor"></a>

```java
public java.lang.Number getGrowthFactor();
```

- *Type:* java.lang.Number

Must be greater than 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#growth_factor GoogleLoggingMetric#growth_factor}

---

##### `numFiniteBuckets`<sup>Required</sup> <a name="numFiniteBuckets" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBuckets.property.numFiniteBuckets"></a>

```java
public java.lang.Number getNumFiniteBuckets();
```

- *Type:* java.lang.Number

Must be greater than 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#num_finite_buckets GoogleLoggingMetric#num_finite_buckets}

---

##### `scale`<sup>Required</sup> <a name="scale" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBuckets.property.scale"></a>

```java
public java.lang.Number getScale();
```

- *Type:* java.lang.Number

Must be greater than 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#scale GoogleLoggingMetric#scale}

---

### GoogleLoggingMetricBucketOptionsLinearBuckets <a name="GoogleLoggingMetricBucketOptionsLinearBuckets" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBuckets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_logging_metric.GoogleLoggingMetricBucketOptionsLinearBuckets;

GoogleLoggingMetricBucketOptionsLinearBuckets.builder()
    .numFiniteBuckets(java.lang.Number)
    .offset(java.lang.Number)
    .width(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBuckets.property.numFiniteBuckets">numFiniteBuckets</a></code> | <code>java.lang.Number</code> | Must be greater than 0. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBuckets.property.offset">offset</a></code> | <code>java.lang.Number</code> | Lower bound of the first bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBuckets.property.width">width</a></code> | <code>java.lang.Number</code> | Must be greater than 0. |

---

##### `numFiniteBuckets`<sup>Required</sup> <a name="numFiniteBuckets" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBuckets.property.numFiniteBuckets"></a>

```java
public java.lang.Number getNumFiniteBuckets();
```

- *Type:* java.lang.Number

Must be greater than 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#num_finite_buckets GoogleLoggingMetric#num_finite_buckets}

---

##### `offset`<sup>Required</sup> <a name="offset" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBuckets.property.offset"></a>

```java
public java.lang.Number getOffset();
```

- *Type:* java.lang.Number

Lower bound of the first bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#offset GoogleLoggingMetric#offset}

---

##### `width`<sup>Required</sup> <a name="width" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBuckets.property.width"></a>

```java
public java.lang.Number getWidth();
```

- *Type:* java.lang.Number

Must be greater than 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#width GoogleLoggingMetric#width}

---

### GoogleLoggingMetricConfig <a name="GoogleLoggingMetricConfig" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_logging_metric.GoogleLoggingMetricConfig;

GoogleLoggingMetricConfig.builder()
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
    .filter(java.lang.String)
    .name(java.lang.String)
//  .bucketName(java.lang.String)
//  .bucketOptions(GoogleLoggingMetricBucketOptions)
//  .description(java.lang.String)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .id(java.lang.String)
//  .labelExtractors(java.util.Map<java.lang.String, java.lang.String>)
//  .metricDescriptor(GoogleLoggingMetricMetricDescriptor)
//  .project(java.lang.String)
//  .timeouts(GoogleLoggingMetricTimeouts)
//  .valueExtractor(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.filter">filter</a></code> | <code>java.lang.String</code> | An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-filters) which is used to match log entries. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.name">name</a></code> | <code>java.lang.String</code> | The client-assigned metric identifier. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | The resource name of the Log Bucket that owns the Log Metric. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.bucketOptions">bucketOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptions">GoogleLoggingMetricBucketOptions</a></code> | bucket_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of this metric, which is used in documentation. The maximum length of the description is 8000 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to True, then this metric is disabled and it does not generate any points. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#id GoogleLoggingMetric#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.labelExtractors">labelExtractors</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map from a label key string to an extractor expression which is used to extract data from a log entry field and assign as the label value. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.metricDescriptor">metricDescriptor</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptor">GoogleLoggingMetricMetricDescriptor</a></code> | metric_descriptor block. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#project GoogleLoggingMetric#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeouts">GoogleLoggingMetricTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.valueExtractor">valueExtractor</a></code> | <code>java.lang.String</code> | A valueExtractor is required when using a distribution logs-based metric to extract the values to record from a log entry. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-filters) which is used to match log entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#filter GoogleLoggingMetric#filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The client-assigned metric identifier.

Examples - "error_count", "nginx/requests".
Metric identifiers are limited to 100 characters and can include only the following
characters A-Z, a-z, 0-9, and the special characters _-.,+!*',()%/. The forward-slash
character (/) denotes a hierarchy of name pieces, and it cannot be the first character
of the name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#name GoogleLoggingMetric#name}

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

The resource name of the Log Bucket that owns the Log Metric.

Only Log Buckets in projects
are supported. The bucket has to be in the same project as the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#bucket_name GoogleLoggingMetric#bucket_name}

---

##### `bucketOptions`<sup>Optional</sup> <a name="bucketOptions" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.bucketOptions"></a>

```java
public GoogleLoggingMetricBucketOptions getBucketOptions();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptions">GoogleLoggingMetricBucketOptions</a>

bucket_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#bucket_options GoogleLoggingMetric#bucket_options}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of this metric, which is used in documentation. The maximum length of the description is 8000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#description GoogleLoggingMetric#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to True, then this metric is disabled and it does not generate any points.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#disabled GoogleLoggingMetric#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#id GoogleLoggingMetric#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labelExtractors`<sup>Optional</sup> <a name="labelExtractors" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.labelExtractors"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelExtractors();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map from a label key string to an extractor expression which is used to extract data from a log entry field and assign as the label value.

Each label key specified in the LabelDescriptor must
have an associated extractor expression in this map. The syntax of the extractor expression is
the same as for the valueExtractor field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#label_extractors GoogleLoggingMetric#label_extractors}

---

##### `metricDescriptor`<sup>Optional</sup> <a name="metricDescriptor" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.metricDescriptor"></a>

```java
public GoogleLoggingMetricMetricDescriptor getMetricDescriptor();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptor">GoogleLoggingMetricMetricDescriptor</a>

metric_descriptor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#metric_descriptor GoogleLoggingMetric#metric_descriptor}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#project GoogleLoggingMetric#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.timeouts"></a>

```java
public GoogleLoggingMetricTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeouts">GoogleLoggingMetricTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#timeouts GoogleLoggingMetric#timeouts}

---

##### `valueExtractor`<sup>Optional</sup> <a name="valueExtractor" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.valueExtractor"></a>

```java
public java.lang.String getValueExtractor();
```

- *Type:* java.lang.String

A valueExtractor is required when using a distribution logs-based metric to extract the values to record from a log entry.

Two functions are supported for value extraction - EXTRACT(field) or
REGEXP_EXTRACT(field, regex). The argument are 1. field - The name of the log entry field from which
the value is to be extracted. 2. regex - A regular expression using the Google RE2 syntax
(https://github.com/google/re2/wiki/Syntax) with a single capture group to extract data from the specified
log entry field. The value of the field is converted to a string before applying the regex. It is an
error to specify a regex that does not include exactly one capture group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#value_extractor GoogleLoggingMetric#value_extractor}

---

### GoogleLoggingMetricMetricDescriptor <a name="GoogleLoggingMetricMetricDescriptor" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptor.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_logging_metric.GoogleLoggingMetricMetricDescriptor;

GoogleLoggingMetricMetricDescriptor.builder()
    .metricKind(java.lang.String)
    .valueType(java.lang.String)
//  .displayName(java.lang.String)
//  .labels(IResolvable)
//  .labels(java.util.List<GoogleLoggingMetricMetricDescriptorLabels>)
//  .unit(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptor.property.metricKind">metricKind</a></code> | <code>java.lang.String</code> | Whether the metric records instantaneous values, changes to a value, etc. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptor.property.valueType">valueType</a></code> | <code>java.lang.String</code> | Whether the measurement is an integer, a floating-point number, etc. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptor.property.displayName">displayName</a></code> | <code>java.lang.String</code> | A concise name for the metric, which can be displayed in user interfaces. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptor.property.labels">labels</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabels">GoogleLoggingMetricMetricDescriptorLabels</a>></code> | labels block. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptor.property.unit">unit</a></code> | <code>java.lang.String</code> | The unit in which the metric value is reported. |

---

##### `metricKind`<sup>Required</sup> <a name="metricKind" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptor.property.metricKind"></a>

```java
public java.lang.String getMetricKind();
```

- *Type:* java.lang.String

Whether the metric records instantaneous values, changes to a value, etc.

Some combinations of metricKind and valueType might not be supported.
For counter metrics, set this to DELTA. Possible values: ["DELTA", "GAUGE", "CUMULATIVE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#metric_kind GoogleLoggingMetric#metric_kind}

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptor.property.valueType"></a>

```java
public java.lang.String getValueType();
```

- *Type:* java.lang.String

Whether the measurement is an integer, a floating-point number, etc.

Some combinations of metricKind and valueType might not be supported.
For counter metrics, set this to INT64. Possible values: ["BOOL", "INT64", "DOUBLE", "STRING", "DISTRIBUTION", "MONEY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#value_type GoogleLoggingMetric#value_type}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptor.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

A concise name for the metric, which can be displayed in user interfaces.

Use sentence case
without an ending period, for example "Request count". This field is optional but it is
recommended to be set for any metrics associated with user-visible concepts, such as Quota.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#display_name GoogleLoggingMetric#display_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptor.property.labels"></a>

```java
public java.lang.Object getLabels();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabels">GoogleLoggingMetricMetricDescriptorLabels</a>>

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#labels GoogleLoggingMetric#labels}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptor.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

The unit in which the metric value is reported.

It is only applicable if the valueType is
'INT64', 'DOUBLE', or 'DISTRIBUTION'. The supported units are a subset of
[The Unified Code for Units of Measure](http://unitsofmeasure.org/ucum.html) standard

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#unit GoogleLoggingMetric#unit}

---

### GoogleLoggingMetricMetricDescriptorLabels <a name="GoogleLoggingMetricMetricDescriptorLabels" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabels.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_logging_metric.GoogleLoggingMetricMetricDescriptorLabels;

GoogleLoggingMetricMetricDescriptorLabels.builder()
    .key(java.lang.String)
//  .description(java.lang.String)
//  .valueType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabels.property.key">key</a></code> | <code>java.lang.String</code> | The label key. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabels.property.description">description</a></code> | <code>java.lang.String</code> | A human-readable description for the label. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabels.property.valueType">valueType</a></code> | <code>java.lang.String</code> | The type of data that can be assigned to the label. Default value: "STRING" Possible values: ["BOOL", "INT64", "STRING"]. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabels.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The label key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#key GoogleLoggingMetric#key}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabels.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A human-readable description for the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#description GoogleLoggingMetric#description}

---

##### `valueType`<sup>Optional</sup> <a name="valueType" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabels.property.valueType"></a>

```java
public java.lang.String getValueType();
```

- *Type:* java.lang.String

The type of data that can be assigned to the label. Default value: "STRING" Possible values: ["BOOL", "INT64", "STRING"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#value_type GoogleLoggingMetric#value_type}

---

### GoogleLoggingMetricTimeouts <a name="GoogleLoggingMetricTimeouts" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_logging_metric.GoogleLoggingMetricTimeouts;

GoogleLoggingMetricTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#create GoogleLoggingMetric#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#delete GoogleLoggingMetric#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#update GoogleLoggingMetric#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#create GoogleLoggingMetric#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#delete GoogleLoggingMetric#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_metric#update GoogleLoggingMetric#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference <a name="GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_logging_metric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference;

new GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.property.boundsInput">boundsInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.property.bounds">bounds</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBuckets">GoogleLoggingMetricBucketOptionsExplicitBuckets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `boundsInput`<sup>Optional</sup> <a name="boundsInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.property.boundsInput"></a>

```java
public java.util.List<java.lang.Number> getBoundsInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `bounds`<sup>Required</sup> <a name="bounds" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.property.bounds"></a>

```java
public java.util.List<java.lang.Number> getBounds();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.property.internalValue"></a>

```java
public GoogleLoggingMetricBucketOptionsExplicitBuckets getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBuckets">GoogleLoggingMetricBucketOptionsExplicitBuckets</a>

---


### GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference <a name="GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_logging_metric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference;

new GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.property.growthFactorInput">growthFactorInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.property.numFiniteBucketsInput">numFiniteBucketsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.property.scaleInput">scaleInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.property.growthFactor">growthFactor</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.property.numFiniteBuckets">numFiniteBuckets</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.property.scale">scale</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBuckets">GoogleLoggingMetricBucketOptionsExponentialBuckets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `growthFactorInput`<sup>Optional</sup> <a name="growthFactorInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.property.growthFactorInput"></a>

```java
public java.lang.Number getGrowthFactorInput();
```

- *Type:* java.lang.Number

---

##### `numFiniteBucketsInput`<sup>Optional</sup> <a name="numFiniteBucketsInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.property.numFiniteBucketsInput"></a>

```java
public java.lang.Number getNumFiniteBucketsInput();
```

- *Type:* java.lang.Number

---

##### `scaleInput`<sup>Optional</sup> <a name="scaleInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.property.scaleInput"></a>

```java
public java.lang.Number getScaleInput();
```

- *Type:* java.lang.Number

---

##### `growthFactor`<sup>Required</sup> <a name="growthFactor" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.property.growthFactor"></a>

```java
public java.lang.Number getGrowthFactor();
```

- *Type:* java.lang.Number

---

##### `numFiniteBuckets`<sup>Required</sup> <a name="numFiniteBuckets" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.property.numFiniteBuckets"></a>

```java
public java.lang.Number getNumFiniteBuckets();
```

- *Type:* java.lang.Number

---

##### `scale`<sup>Required</sup> <a name="scale" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.property.scale"></a>

```java
public java.lang.Number getScale();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.property.internalValue"></a>

```java
public GoogleLoggingMetricBucketOptionsExponentialBuckets getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBuckets">GoogleLoggingMetricBucketOptionsExponentialBuckets</a>

---


### GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference <a name="GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_logging_metric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference;

new GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.property.numFiniteBucketsInput">numFiniteBucketsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.property.offsetInput">offsetInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.property.widthInput">widthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.property.numFiniteBuckets">numFiniteBuckets</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.property.offset">offset</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.property.width">width</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBuckets">GoogleLoggingMetricBucketOptionsLinearBuckets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `numFiniteBucketsInput`<sup>Optional</sup> <a name="numFiniteBucketsInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.property.numFiniteBucketsInput"></a>

```java
public java.lang.Number getNumFiniteBucketsInput();
```

- *Type:* java.lang.Number

---

##### `offsetInput`<sup>Optional</sup> <a name="offsetInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.property.offsetInput"></a>

```java
public java.lang.Number getOffsetInput();
```

- *Type:* java.lang.Number

---

##### `widthInput`<sup>Optional</sup> <a name="widthInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.property.widthInput"></a>

```java
public java.lang.Number getWidthInput();
```

- *Type:* java.lang.Number

---

##### `numFiniteBuckets`<sup>Required</sup> <a name="numFiniteBuckets" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.property.numFiniteBuckets"></a>

```java
public java.lang.Number getNumFiniteBuckets();
```

- *Type:* java.lang.Number

---

##### `offset`<sup>Required</sup> <a name="offset" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.property.offset"></a>

```java
public java.lang.Number getOffset();
```

- *Type:* java.lang.Number

---

##### `width`<sup>Required</sup> <a name="width" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.property.width"></a>

```java
public java.lang.Number getWidth();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.property.internalValue"></a>

```java
public GoogleLoggingMetricBucketOptionsLinearBuckets getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBuckets">GoogleLoggingMetricBucketOptionsLinearBuckets</a>

---


### GoogleLoggingMetricBucketOptionsOutputReference <a name="GoogleLoggingMetricBucketOptionsOutputReference" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_logging_metric.GoogleLoggingMetricBucketOptionsOutputReference;

new GoogleLoggingMetricBucketOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.putExplicitBuckets">putExplicitBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.putExponentialBuckets">putExponentialBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.putLinearBuckets">putLinearBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.resetExplicitBuckets">resetExplicitBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.resetExponentialBuckets">resetExponentialBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.resetLinearBuckets">resetLinearBuckets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExplicitBuckets` <a name="putExplicitBuckets" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.putExplicitBuckets"></a>

```java
public void putExplicitBuckets(GoogleLoggingMetricBucketOptionsExplicitBuckets value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.putExplicitBuckets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBuckets">GoogleLoggingMetricBucketOptionsExplicitBuckets</a>

---

##### `putExponentialBuckets` <a name="putExponentialBuckets" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.putExponentialBuckets"></a>

```java
public void putExponentialBuckets(GoogleLoggingMetricBucketOptionsExponentialBuckets value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.putExponentialBuckets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBuckets">GoogleLoggingMetricBucketOptionsExponentialBuckets</a>

---

##### `putLinearBuckets` <a name="putLinearBuckets" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.putLinearBuckets"></a>

```java
public void putLinearBuckets(GoogleLoggingMetricBucketOptionsLinearBuckets value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.putLinearBuckets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBuckets">GoogleLoggingMetricBucketOptionsLinearBuckets</a>

---

##### `resetExplicitBuckets` <a name="resetExplicitBuckets" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.resetExplicitBuckets"></a>

```java
public void resetExplicitBuckets()
```

##### `resetExponentialBuckets` <a name="resetExponentialBuckets" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.resetExponentialBuckets"></a>

```java
public void resetExponentialBuckets()
```

##### `resetLinearBuckets` <a name="resetLinearBuckets" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.resetLinearBuckets"></a>

```java
public void resetLinearBuckets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.property.explicitBuckets">explicitBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference">GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.property.exponentialBuckets">exponentialBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference">GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.property.linearBuckets">linearBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference">GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.property.explicitBucketsInput">explicitBucketsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBuckets">GoogleLoggingMetricBucketOptionsExplicitBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.property.exponentialBucketsInput">exponentialBucketsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBuckets">GoogleLoggingMetricBucketOptionsExponentialBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.property.linearBucketsInput">linearBucketsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBuckets">GoogleLoggingMetricBucketOptionsLinearBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptions">GoogleLoggingMetricBucketOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `explicitBuckets`<sup>Required</sup> <a name="explicitBuckets" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.property.explicitBuckets"></a>

```java
public GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference getExplicitBuckets();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference">GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference</a>

---

##### `exponentialBuckets`<sup>Required</sup> <a name="exponentialBuckets" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.property.exponentialBuckets"></a>

```java
public GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference getExponentialBuckets();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference">GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference</a>

---

##### `linearBuckets`<sup>Required</sup> <a name="linearBuckets" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.property.linearBuckets"></a>

```java
public GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference getLinearBuckets();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference">GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference</a>

---

##### `explicitBucketsInput`<sup>Optional</sup> <a name="explicitBucketsInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.property.explicitBucketsInput"></a>

```java
public GoogleLoggingMetricBucketOptionsExplicitBuckets getExplicitBucketsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBuckets">GoogleLoggingMetricBucketOptionsExplicitBuckets</a>

---

##### `exponentialBucketsInput`<sup>Optional</sup> <a name="exponentialBucketsInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.property.exponentialBucketsInput"></a>

```java
public GoogleLoggingMetricBucketOptionsExponentialBuckets getExponentialBucketsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBuckets">GoogleLoggingMetricBucketOptionsExponentialBuckets</a>

---

##### `linearBucketsInput`<sup>Optional</sup> <a name="linearBucketsInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.property.linearBucketsInput"></a>

```java
public GoogleLoggingMetricBucketOptionsLinearBuckets getLinearBucketsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBuckets">GoogleLoggingMetricBucketOptionsLinearBuckets</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.property.internalValue"></a>

```java
public GoogleLoggingMetricBucketOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptions">GoogleLoggingMetricBucketOptions</a>

---


### GoogleLoggingMetricMetricDescriptorLabelsList <a name="GoogleLoggingMetricMetricDescriptorLabelsList" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_logging_metric.GoogleLoggingMetricMetricDescriptorLabelsList;

new GoogleLoggingMetricMetricDescriptorLabelsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList.get"></a>

```java
public GoogleLoggingMetricMetricDescriptorLabelsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabels">GoogleLoggingMetricMetricDescriptorLabels</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabels">GoogleLoggingMetricMetricDescriptorLabels</a>>

---


### GoogleLoggingMetricMetricDescriptorLabelsOutputReference <a name="GoogleLoggingMetricMetricDescriptorLabelsOutputReference" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_logging_metric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference;

new GoogleLoggingMetricMetricDescriptorLabelsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.resetValueType">resetValueType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetValueType` <a name="resetValueType" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.resetValueType"></a>

```java
public void resetValueType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.property.valueTypeInput">valueTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.property.valueType">valueType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabels">GoogleLoggingMetricMetricDescriptorLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueTypeInput`<sup>Optional</sup> <a name="valueTypeInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.property.valueTypeInput"></a>

```java
public java.lang.String getValueTypeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.property.valueType"></a>

```java
public java.lang.String getValueType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabels">GoogleLoggingMetricMetricDescriptorLabels</a>

---


### GoogleLoggingMetricMetricDescriptorOutputReference <a name="GoogleLoggingMetricMetricDescriptorOutputReference" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_logging_metric.GoogleLoggingMetricMetricDescriptorOutputReference;

new GoogleLoggingMetricMetricDescriptorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.putLabels">putLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.resetUnit">resetUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLabels` <a name="putLabels" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.putLabels"></a>

```java
public void putLabels(IResolvable OR java.util.List<GoogleLoggingMetricMetricDescriptorLabels> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.putLabels.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabels">GoogleLoggingMetricMetricDescriptorLabels</a>>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetUnit` <a name="resetUnit" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.resetUnit"></a>

```java
public void resetUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.property.labels">labels</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList">GoogleLoggingMetricMetricDescriptorLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.property.labelsInput">labelsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabels">GoogleLoggingMetricMetricDescriptorLabels</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.property.metricKindInput">metricKindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.property.valueTypeInput">valueTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.property.metricKind">metricKind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.property.valueType">valueType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptor">GoogleLoggingMetricMetricDescriptor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.property.labels"></a>

```java
public GoogleLoggingMetricMetricDescriptorLabelsList getLabels();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList">GoogleLoggingMetricMetricDescriptorLabelsList</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.property.labelsInput"></a>

```java
public java.lang.Object getLabelsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabels">GoogleLoggingMetricMetricDescriptorLabels</a>>

---

##### `metricKindInput`<sup>Optional</sup> <a name="metricKindInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.property.metricKindInput"></a>

```java
public java.lang.String getMetricKindInput();
```

- *Type:* java.lang.String

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `valueTypeInput`<sup>Optional</sup> <a name="valueTypeInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.property.valueTypeInput"></a>

```java
public java.lang.String getValueTypeInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `metricKind`<sup>Required</sup> <a name="metricKind" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.property.metricKind"></a>

```java
public java.lang.String getMetricKind();
```

- *Type:* java.lang.String

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.property.valueType"></a>

```java
public java.lang.String getValueType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.property.internalValue"></a>

```java
public GoogleLoggingMetricMetricDescriptor getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptor">GoogleLoggingMetricMetricDescriptor</a>

---


### GoogleLoggingMetricTimeoutsOutputReference <a name="GoogleLoggingMetricTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_logging_metric.GoogleLoggingMetricTimeoutsOutputReference;

new GoogleLoggingMetricTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeouts">GoogleLoggingMetricTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeouts">GoogleLoggingMetricTimeouts</a>

---



