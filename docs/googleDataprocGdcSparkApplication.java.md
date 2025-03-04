# `googleDataprocGdcSparkApplication` Submodule <a name="`googleDataprocGdcSparkApplication` Submodule" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataprocGdcSparkApplication <a name="GoogleDataprocGdcSparkApplication" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application google_dataproc_gdc_spark_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_gdc_spark_application.GoogleDataprocGdcSparkApplication;

GoogleDataprocGdcSparkApplication.Builder.create(Construct scope, java.lang.String id)
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
    .serviceinstance(java.lang.String)
    .sparkApplicationId(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .applicationEnvironment(java.lang.String)
//  .dependencyImages(java.util.List<java.lang.String>)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .namespace(java.lang.String)
//  .project(java.lang.String)
//  .properties(java.util.Map<java.lang.String, java.lang.String>)
//  .pysparkApplicationConfig(GoogleDataprocGdcSparkApplicationPysparkApplicationConfig)
//  .sparkApplicationConfig(GoogleDataprocGdcSparkApplicationSparkApplicationConfig)
//  .sparkRApplicationConfig(GoogleDataprocGdcSparkApplicationSparkRApplicationConfig)
//  .sparkSqlApplicationConfig(GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig)
//  .timeouts(GoogleDataprocGdcSparkApplicationTimeouts)
//  .version(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the spark application. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.serviceinstance">serviceinstance</a></code> | <code>java.lang.String</code> | The id of the service instance to which this spark application belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.sparkApplicationId">sparkApplicationId</a></code> | <code>java.lang.String</code> | The id of the application. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The annotations to associate with this application. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.applicationEnvironment">applicationEnvironment</a></code> | <code>java.lang.String</code> | An ApplicationEnvironment from which to inherit configuration properties. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.dependencyImages">dependencyImages</a></code> | <code>java.util.List<java.lang.String></code> | List of container image uris for additional file dependencies. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | User-provided human-readable name to be used in user interfaces. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#id GoogleDataprocGdcSparkApplication#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels to associate with this application. Labels may be used for filtering and billing tracking. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | The Kubernetes namespace in which to create the application. This namespace must already exist on the cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#project GoogleDataprocGdcSparkApplication#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | application-specific properties. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.pysparkApplicationConfig">pysparkApplicationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfig">GoogleDataprocGdcSparkApplicationPysparkApplicationConfig</a></code> | pyspark_application_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.sparkApplicationConfig">sparkApplicationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfig">GoogleDataprocGdcSparkApplicationSparkApplicationConfig</a></code> | spark_application_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.sparkRApplicationConfig">sparkRApplicationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfig">GoogleDataprocGdcSparkApplicationSparkRApplicationConfig</a></code> | spark_r_application_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.sparkSqlApplicationConfig">sparkSqlApplicationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig">GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig</a></code> | spark_sql_application_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeouts">GoogleDataprocGdcSparkApplicationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.version">version</a></code> | <code>java.lang.String</code> | The Dataproc version of this application. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the spark application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#location GoogleDataprocGdcSparkApplication#location}

---

##### `serviceinstance`<sup>Required</sup> <a name="serviceinstance" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.serviceinstance"></a>

- *Type:* java.lang.String

The id of the service instance to which this spark application belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#serviceinstance GoogleDataprocGdcSparkApplication#serviceinstance}

---

##### `sparkApplicationId`<sup>Required</sup> <a name="sparkApplicationId" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.sparkApplicationId"></a>

- *Type:* java.lang.String

The id of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#spark_application_id GoogleDataprocGdcSparkApplication#spark_application_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The annotations to associate with this application.

Annotations may be used to store client information, but are not used by the server.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#annotations GoogleDataprocGdcSparkApplication#annotations}

---

##### `applicationEnvironment`<sup>Optional</sup> <a name="applicationEnvironment" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.applicationEnvironment"></a>

- *Type:* java.lang.String

An ApplicationEnvironment from which to inherit configuration properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#application_environment GoogleDataprocGdcSparkApplication#application_environment}

---

##### `dependencyImages`<sup>Optional</sup> <a name="dependencyImages" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.dependencyImages"></a>

- *Type:* java.util.List<java.lang.String>

List of container image uris for additional file dependencies.

Dependent files are sequentially copied from each image. If a file with the same name exists in 2 images then the file from later image is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#dependency_images GoogleDataprocGdcSparkApplication#dependency_images}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

User-provided human-readable name to be used in user interfaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#display_name GoogleDataprocGdcSparkApplication#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#id GoogleDataprocGdcSparkApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels to associate with this application. Labels may be used for filtering and billing tracking.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#labels GoogleDataprocGdcSparkApplication#labels}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

The Kubernetes namespace in which to create the application. This namespace must already exist on the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#namespace GoogleDataprocGdcSparkApplication#namespace}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#project GoogleDataprocGdcSparkApplication#project}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.properties"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

application-specific properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#properties GoogleDataprocGdcSparkApplication#properties}

---

##### `pysparkApplicationConfig`<sup>Optional</sup> <a name="pysparkApplicationConfig" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.pysparkApplicationConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfig">GoogleDataprocGdcSparkApplicationPysparkApplicationConfig</a>

pyspark_application_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#pyspark_application_config GoogleDataprocGdcSparkApplication#pyspark_application_config}

---

##### `sparkApplicationConfig`<sup>Optional</sup> <a name="sparkApplicationConfig" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.sparkApplicationConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfig">GoogleDataprocGdcSparkApplicationSparkApplicationConfig</a>

spark_application_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#spark_application_config GoogleDataprocGdcSparkApplication#spark_application_config}

---

##### `sparkRApplicationConfig`<sup>Optional</sup> <a name="sparkRApplicationConfig" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.sparkRApplicationConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfig">GoogleDataprocGdcSparkApplicationSparkRApplicationConfig</a>

spark_r_application_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#spark_r_application_config GoogleDataprocGdcSparkApplication#spark_r_application_config}

---

##### `sparkSqlApplicationConfig`<sup>Optional</sup> <a name="sparkSqlApplicationConfig" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.sparkSqlApplicationConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig">GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig</a>

spark_sql_application_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#spark_sql_application_config GoogleDataprocGdcSparkApplication#spark_sql_application_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeouts">GoogleDataprocGdcSparkApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#timeouts GoogleDataprocGdcSparkApplication#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.Initializer.parameter.version"></a>

- *Type:* java.lang.String

The Dataproc version of this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#version GoogleDataprocGdcSparkApplication#version}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.putPysparkApplicationConfig">putPysparkApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.putSparkApplicationConfig">putSparkApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.putSparkRApplicationConfig">putSparkRApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.putSparkSqlApplicationConfig">putSparkSqlApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetApplicationEnvironment">resetApplicationEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetDependencyImages">resetDependencyImages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetPysparkApplicationConfig">resetPysparkApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetSparkApplicationConfig">resetSparkApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetSparkRApplicationConfig">resetSparkRApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetSparkSqlApplicationConfig">resetSparkSqlApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPysparkApplicationConfig` <a name="putPysparkApplicationConfig" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.putPysparkApplicationConfig"></a>

```java
public void putPysparkApplicationConfig(GoogleDataprocGdcSparkApplicationPysparkApplicationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.putPysparkApplicationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfig">GoogleDataprocGdcSparkApplicationPysparkApplicationConfig</a>

---

##### `putSparkApplicationConfig` <a name="putSparkApplicationConfig" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.putSparkApplicationConfig"></a>

```java
public void putSparkApplicationConfig(GoogleDataprocGdcSparkApplicationSparkApplicationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.putSparkApplicationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfig">GoogleDataprocGdcSparkApplicationSparkApplicationConfig</a>

---

##### `putSparkRApplicationConfig` <a name="putSparkRApplicationConfig" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.putSparkRApplicationConfig"></a>

```java
public void putSparkRApplicationConfig(GoogleDataprocGdcSparkApplicationSparkRApplicationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.putSparkRApplicationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfig">GoogleDataprocGdcSparkApplicationSparkRApplicationConfig</a>

---

##### `putSparkSqlApplicationConfig` <a name="putSparkSqlApplicationConfig" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.putSparkSqlApplicationConfig"></a>

```java
public void putSparkSqlApplicationConfig(GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.putSparkSqlApplicationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig">GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.putTimeouts"></a>

```java
public void putTimeouts(GoogleDataprocGdcSparkApplicationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeouts">GoogleDataprocGdcSparkApplicationTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetApplicationEnvironment` <a name="resetApplicationEnvironment" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetApplicationEnvironment"></a>

```java
public void resetApplicationEnvironment()
```

##### `resetDependencyImages` <a name="resetDependencyImages" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetDependencyImages"></a>

```java
public void resetDependencyImages()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetProject"></a>

```java
public void resetProject()
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetProperties"></a>

```java
public void resetProperties()
```

##### `resetPysparkApplicationConfig` <a name="resetPysparkApplicationConfig" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetPysparkApplicationConfig"></a>

```java
public void resetPysparkApplicationConfig()
```

##### `resetSparkApplicationConfig` <a name="resetSparkApplicationConfig" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetSparkApplicationConfig"></a>

```java
public void resetSparkApplicationConfig()
```

##### `resetSparkRApplicationConfig` <a name="resetSparkRApplicationConfig" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetSparkRApplicationConfig"></a>

```java
public void resetSparkRApplicationConfig()
```

##### `resetSparkSqlApplicationConfig` <a name="resetSparkSqlApplicationConfig" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetSparkSqlApplicationConfig"></a>

```java
public void resetSparkSqlApplicationConfig()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.resetVersion"></a>

```java
public void resetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDataprocGdcSparkApplication resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_gdc_spark_application.GoogleDataprocGdcSparkApplication;

GoogleDataprocGdcSparkApplication.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_gdc_spark_application.GoogleDataprocGdcSparkApplication;

GoogleDataprocGdcSparkApplication.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_gdc_spark_application.GoogleDataprocGdcSparkApplication;

GoogleDataprocGdcSparkApplication.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_gdc_spark_application.GoogleDataprocGdcSparkApplication;

GoogleDataprocGdcSparkApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDataprocGdcSparkApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleDataprocGdcSparkApplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDataprocGdcSparkApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDataprocGdcSparkApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataprocGdcSparkApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.monitoringEndpoint">monitoringEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.outputUri">outputUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.pysparkApplicationConfig">pysparkApplicationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference">GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.reconciling">reconciling</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.sparkApplicationConfig">sparkApplicationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference">GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.sparkRApplicationConfig">sparkRApplicationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference">GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.sparkSqlApplicationConfig">sparkSqlApplicationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference">GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.stateMessage">stateMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference">GoogleDataprocGdcSparkApplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.applicationEnvironmentInput">applicationEnvironmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.dependencyImagesInput">dependencyImagesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.propertiesInput">propertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.pysparkApplicationConfigInput">pysparkApplicationConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfig">GoogleDataprocGdcSparkApplicationPysparkApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.serviceinstanceInput">serviceinstanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.sparkApplicationConfigInput">sparkApplicationConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfig">GoogleDataprocGdcSparkApplicationSparkApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.sparkApplicationIdInput">sparkApplicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.sparkRApplicationConfigInput">sparkRApplicationConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfig">GoogleDataprocGdcSparkApplicationSparkRApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.sparkSqlApplicationConfigInput">sparkSqlApplicationConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig">GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeouts">GoogleDataprocGdcSparkApplicationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.applicationEnvironment">applicationEnvironment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.dependencyImages">dependencyImages</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.serviceinstance">serviceinstance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.sparkApplicationId">sparkApplicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `monitoringEndpoint`<sup>Required</sup> <a name="monitoringEndpoint" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.monitoringEndpoint"></a>

```java
public java.lang.String getMonitoringEndpoint();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `outputUri`<sup>Required</sup> <a name="outputUri" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.outputUri"></a>

```java
public java.lang.String getOutputUri();
```

- *Type:* java.lang.String

---

##### `pysparkApplicationConfig`<sup>Required</sup> <a name="pysparkApplicationConfig" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.pysparkApplicationConfig"></a>

```java
public GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference getPysparkApplicationConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference">GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.reconciling"></a>

```java
public IResolvable getReconciling();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `sparkApplicationConfig`<sup>Required</sup> <a name="sparkApplicationConfig" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.sparkApplicationConfig"></a>

```java
public GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference getSparkApplicationConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference">GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference</a>

---

##### `sparkRApplicationConfig`<sup>Required</sup> <a name="sparkRApplicationConfig" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.sparkRApplicationConfig"></a>

```java
public GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference getSparkRApplicationConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference">GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference</a>

---

##### `sparkSqlApplicationConfig`<sup>Required</sup> <a name="sparkSqlApplicationConfig" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.sparkSqlApplicationConfig"></a>

```java
public GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference getSparkSqlApplicationConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference">GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.stateMessage"></a>

```java
public java.lang.String getStateMessage();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.timeouts"></a>

```java
public GoogleDataprocGdcSparkApplicationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference">GoogleDataprocGdcSparkApplicationTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `applicationEnvironmentInput`<sup>Optional</sup> <a name="applicationEnvironmentInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.applicationEnvironmentInput"></a>

```java
public java.lang.String getApplicationEnvironmentInput();
```

- *Type:* java.lang.String

---

##### `dependencyImagesInput`<sup>Optional</sup> <a name="dependencyImagesInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.dependencyImagesInput"></a>

```java
public java.util.List<java.lang.String> getDependencyImagesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.propertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `pysparkApplicationConfigInput`<sup>Optional</sup> <a name="pysparkApplicationConfigInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.pysparkApplicationConfigInput"></a>

```java
public GoogleDataprocGdcSparkApplicationPysparkApplicationConfig getPysparkApplicationConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfig">GoogleDataprocGdcSparkApplicationPysparkApplicationConfig</a>

---

##### `serviceinstanceInput`<sup>Optional</sup> <a name="serviceinstanceInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.serviceinstanceInput"></a>

```java
public java.lang.String getServiceinstanceInput();
```

- *Type:* java.lang.String

---

##### `sparkApplicationConfigInput`<sup>Optional</sup> <a name="sparkApplicationConfigInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.sparkApplicationConfigInput"></a>

```java
public GoogleDataprocGdcSparkApplicationSparkApplicationConfig getSparkApplicationConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfig">GoogleDataprocGdcSparkApplicationSparkApplicationConfig</a>

---

##### `sparkApplicationIdInput`<sup>Optional</sup> <a name="sparkApplicationIdInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.sparkApplicationIdInput"></a>

```java
public java.lang.String getSparkApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `sparkRApplicationConfigInput`<sup>Optional</sup> <a name="sparkRApplicationConfigInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.sparkRApplicationConfigInput"></a>

```java
public GoogleDataprocGdcSparkApplicationSparkRApplicationConfig getSparkRApplicationConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfig">GoogleDataprocGdcSparkApplicationSparkRApplicationConfig</a>

---

##### `sparkSqlApplicationConfigInput`<sup>Optional</sup> <a name="sparkSqlApplicationConfigInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.sparkSqlApplicationConfigInput"></a>

```java
public GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig getSparkSqlApplicationConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig">GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeouts">GoogleDataprocGdcSparkApplicationTimeouts</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `applicationEnvironment`<sup>Required</sup> <a name="applicationEnvironment" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.applicationEnvironment"></a>

```java
public java.lang.String getApplicationEnvironment();
```

- *Type:* java.lang.String

---

##### `dependencyImages`<sup>Required</sup> <a name="dependencyImages" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.dependencyImages"></a>

```java
public java.util.List<java.lang.String> getDependencyImages();
```

- *Type:* java.util.List<java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `serviceinstance`<sup>Required</sup> <a name="serviceinstance" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.serviceinstance"></a>

```java
public java.lang.String getServiceinstance();
```

- *Type:* java.lang.String

---

##### `sparkApplicationId`<sup>Required</sup> <a name="sparkApplicationId" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.sparkApplicationId"></a>

```java
public java.lang.String getSparkApplicationId();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplication.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataprocGdcSparkApplicationConfig <a name="GoogleDataprocGdcSparkApplicationConfig" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_gdc_spark_application.GoogleDataprocGdcSparkApplicationConfig;

GoogleDataprocGdcSparkApplicationConfig.builder()
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
    .serviceinstance(java.lang.String)
    .sparkApplicationId(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .applicationEnvironment(java.lang.String)
//  .dependencyImages(java.util.List<java.lang.String>)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .namespace(java.lang.String)
//  .project(java.lang.String)
//  .properties(java.util.Map<java.lang.String, java.lang.String>)
//  .pysparkApplicationConfig(GoogleDataprocGdcSparkApplicationPysparkApplicationConfig)
//  .sparkApplicationConfig(GoogleDataprocGdcSparkApplicationSparkApplicationConfig)
//  .sparkRApplicationConfig(GoogleDataprocGdcSparkApplicationSparkRApplicationConfig)
//  .sparkSqlApplicationConfig(GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig)
//  .timeouts(GoogleDataprocGdcSparkApplicationTimeouts)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the spark application. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.serviceinstance">serviceinstance</a></code> | <code>java.lang.String</code> | The id of the service instance to which this spark application belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.sparkApplicationId">sparkApplicationId</a></code> | <code>java.lang.String</code> | The id of the application. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The annotations to associate with this application. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.applicationEnvironment">applicationEnvironment</a></code> | <code>java.lang.String</code> | An ApplicationEnvironment from which to inherit configuration properties. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.dependencyImages">dependencyImages</a></code> | <code>java.util.List<java.lang.String></code> | List of container image uris for additional file dependencies. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | User-provided human-readable name to be used in user interfaces. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#id GoogleDataprocGdcSparkApplication#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels to associate with this application. Labels may be used for filtering and billing tracking. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | The Kubernetes namespace in which to create the application. This namespace must already exist on the cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#project GoogleDataprocGdcSparkApplication#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | application-specific properties. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.pysparkApplicationConfig">pysparkApplicationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfig">GoogleDataprocGdcSparkApplicationPysparkApplicationConfig</a></code> | pyspark_application_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.sparkApplicationConfig">sparkApplicationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfig">GoogleDataprocGdcSparkApplicationSparkApplicationConfig</a></code> | spark_application_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.sparkRApplicationConfig">sparkRApplicationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfig">GoogleDataprocGdcSparkApplicationSparkRApplicationConfig</a></code> | spark_r_application_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.sparkSqlApplicationConfig">sparkSqlApplicationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig">GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig</a></code> | spark_sql_application_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeouts">GoogleDataprocGdcSparkApplicationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.version">version</a></code> | <code>java.lang.String</code> | The Dataproc version of this application. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the spark application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#location GoogleDataprocGdcSparkApplication#location}

---

##### `serviceinstance`<sup>Required</sup> <a name="serviceinstance" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.serviceinstance"></a>

```java
public java.lang.String getServiceinstance();
```

- *Type:* java.lang.String

The id of the service instance to which this spark application belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#serviceinstance GoogleDataprocGdcSparkApplication#serviceinstance}

---

##### `sparkApplicationId`<sup>Required</sup> <a name="sparkApplicationId" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.sparkApplicationId"></a>

```java
public java.lang.String getSparkApplicationId();
```

- *Type:* java.lang.String

The id of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#spark_application_id GoogleDataprocGdcSparkApplication#spark_application_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The annotations to associate with this application.

Annotations may be used to store client information, but are not used by the server.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#annotations GoogleDataprocGdcSparkApplication#annotations}

---

##### `applicationEnvironment`<sup>Optional</sup> <a name="applicationEnvironment" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.applicationEnvironment"></a>

```java
public java.lang.String getApplicationEnvironment();
```

- *Type:* java.lang.String

An ApplicationEnvironment from which to inherit configuration properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#application_environment GoogleDataprocGdcSparkApplication#application_environment}

---

##### `dependencyImages`<sup>Optional</sup> <a name="dependencyImages" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.dependencyImages"></a>

```java
public java.util.List<java.lang.String> getDependencyImages();
```

- *Type:* java.util.List<java.lang.String>

List of container image uris for additional file dependencies.

Dependent files are sequentially copied from each image. If a file with the same name exists in 2 images then the file from later image is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#dependency_images GoogleDataprocGdcSparkApplication#dependency_images}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

User-provided human-readable name to be used in user interfaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#display_name GoogleDataprocGdcSparkApplication#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#id GoogleDataprocGdcSparkApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels to associate with this application. Labels may be used for filtering and billing tracking.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#labels GoogleDataprocGdcSparkApplication#labels}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

The Kubernetes namespace in which to create the application. This namespace must already exist on the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#namespace GoogleDataprocGdcSparkApplication#namespace}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#project GoogleDataprocGdcSparkApplication#project}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

application-specific properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#properties GoogleDataprocGdcSparkApplication#properties}

---

##### `pysparkApplicationConfig`<sup>Optional</sup> <a name="pysparkApplicationConfig" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.pysparkApplicationConfig"></a>

```java
public GoogleDataprocGdcSparkApplicationPysparkApplicationConfig getPysparkApplicationConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfig">GoogleDataprocGdcSparkApplicationPysparkApplicationConfig</a>

pyspark_application_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#pyspark_application_config GoogleDataprocGdcSparkApplication#pyspark_application_config}

---

##### `sparkApplicationConfig`<sup>Optional</sup> <a name="sparkApplicationConfig" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.sparkApplicationConfig"></a>

```java
public GoogleDataprocGdcSparkApplicationSparkApplicationConfig getSparkApplicationConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfig">GoogleDataprocGdcSparkApplicationSparkApplicationConfig</a>

spark_application_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#spark_application_config GoogleDataprocGdcSparkApplication#spark_application_config}

---

##### `sparkRApplicationConfig`<sup>Optional</sup> <a name="sparkRApplicationConfig" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.sparkRApplicationConfig"></a>

```java
public GoogleDataprocGdcSparkApplicationSparkRApplicationConfig getSparkRApplicationConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfig">GoogleDataprocGdcSparkApplicationSparkRApplicationConfig</a>

spark_r_application_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#spark_r_application_config GoogleDataprocGdcSparkApplication#spark_r_application_config}

---

##### `sparkSqlApplicationConfig`<sup>Optional</sup> <a name="sparkSqlApplicationConfig" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.sparkSqlApplicationConfig"></a>

```java
public GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig getSparkSqlApplicationConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig">GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig</a>

spark_sql_application_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#spark_sql_application_config GoogleDataprocGdcSparkApplication#spark_sql_application_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.timeouts"></a>

```java
public GoogleDataprocGdcSparkApplicationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeouts">GoogleDataprocGdcSparkApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#timeouts GoogleDataprocGdcSparkApplication#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationConfig.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

The Dataproc version of this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#version GoogleDataprocGdcSparkApplication#version}

---

### GoogleDataprocGdcSparkApplicationPysparkApplicationConfig <a name="GoogleDataprocGdcSparkApplicationPysparkApplicationConfig" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_gdc_spark_application.GoogleDataprocGdcSparkApplicationPysparkApplicationConfig;

GoogleDataprocGdcSparkApplicationPysparkApplicationConfig.builder()
    .mainPythonFileUri(java.lang.String)
//  .archiveUris(java.util.List<java.lang.String>)
//  .args(java.util.List<java.lang.String>)
//  .fileUris(java.util.List<java.lang.String>)
//  .jarFileUris(java.util.List<java.lang.String>)
//  .pythonFileUris(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfig.property.mainPythonFileUri">mainPythonFileUri</a></code> | <code>java.lang.String</code> | The HCFS URI of the main Python file to use as the driver. Must be a .py file. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfig.property.archiveUris">archiveUris</a></code> | <code>java.util.List<java.lang.String></code> | HCFS URIs of archives to be extracted into the working directory of each executor. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfig.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | The arguments to pass to the driver. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfig.property.fileUris">fileUris</a></code> | <code>java.util.List<java.lang.String></code> | HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfig.property.jarFileUris">jarFileUris</a></code> | <code>java.util.List<java.lang.String></code> | HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfig.property.pythonFileUris">pythonFileUris</a></code> | <code>java.util.List<java.lang.String></code> | HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip. |

---

##### `mainPythonFileUri`<sup>Required</sup> <a name="mainPythonFileUri" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfig.property.mainPythonFileUri"></a>

```java
public java.lang.String getMainPythonFileUri();
```

- *Type:* java.lang.String

The HCFS URI of the main Python file to use as the driver. Must be a .py file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#main_python_file_uri GoogleDataprocGdcSparkApplication#main_python_file_uri}

---

##### `archiveUris`<sup>Optional</sup> <a name="archiveUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfig.property.archiveUris"></a>

```java
public java.util.List<java.lang.String> getArchiveUris();
```

- *Type:* java.util.List<java.lang.String>

HCFS URIs of archives to be extracted into the working directory of each executor.

Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#archive_uris GoogleDataprocGdcSparkApplication#archive_uris}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfig.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

The arguments to pass to the driver.

Do not include arguments, such as '--conf', that can be set as job properties, since a collision may occur that causes an incorrect job submission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#args GoogleDataprocGdcSparkApplication#args}

---

##### `fileUris`<sup>Optional</sup> <a name="fileUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfig.property.fileUris"></a>

```java
public java.util.List<java.lang.String> getFileUris();
```

- *Type:* java.util.List<java.lang.String>

HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#file_uris GoogleDataprocGdcSparkApplication#file_uris}

---

##### `jarFileUris`<sup>Optional</sup> <a name="jarFileUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfig.property.jarFileUris"></a>

```java
public java.util.List<java.lang.String> getJarFileUris();
```

- *Type:* java.util.List<java.lang.String>

HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#jar_file_uris GoogleDataprocGdcSparkApplication#jar_file_uris}

---

##### `pythonFileUris`<sup>Optional</sup> <a name="pythonFileUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfig.property.pythonFileUris"></a>

```java
public java.util.List<java.lang.String> getPythonFileUris();
```

- *Type:* java.util.List<java.lang.String>

HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#python_file_uris GoogleDataprocGdcSparkApplication#python_file_uris}

---

### GoogleDataprocGdcSparkApplicationSparkApplicationConfig <a name="GoogleDataprocGdcSparkApplicationSparkApplicationConfig" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_gdc_spark_application.GoogleDataprocGdcSparkApplicationSparkApplicationConfig;

GoogleDataprocGdcSparkApplicationSparkApplicationConfig.builder()
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
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfig.property.archiveUris">archiveUris</a></code> | <code>java.util.List<java.lang.String></code> | HCFS URIs of archives to be extracted into the working directory of each executor. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfig.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | The arguments to pass to the driver. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfig.property.fileUris">fileUris</a></code> | <code>java.util.List<java.lang.String></code> | HCFS URIs of files to be placed in the working directory of each executor. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfig.property.jarFileUris">jarFileUris</a></code> | <code>java.util.List<java.lang.String></code> | HCFS URIs of jar files to add to the classpath of the Spark driver and tasks. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfig.property.mainClass">mainClass</a></code> | <code>java.lang.String</code> | The name of the driver main class. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfig.property.mainJarFileUri">mainJarFileUri</a></code> | <code>java.lang.String</code> | The HCFS URI of the jar file that contains the main class. |

---

##### `archiveUris`<sup>Optional</sup> <a name="archiveUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfig.property.archiveUris"></a>

```java
public java.util.List<java.lang.String> getArchiveUris();
```

- *Type:* java.util.List<java.lang.String>

HCFS URIs of archives to be extracted into the working directory of each executor.

Supported file types: '.jar', '.tar', '.tar.gz', '.tgz', and '.zip'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#archive_uris GoogleDataprocGdcSparkApplication#archive_uris}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfig.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

The arguments to pass to the driver.

Do not include arguments that can be set as application properties, such as '--conf', since a collision can occur that causes an incorrect application submission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#args GoogleDataprocGdcSparkApplication#args}

---

##### `fileUris`<sup>Optional</sup> <a name="fileUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfig.property.fileUris"></a>

```java
public java.util.List<java.lang.String> getFileUris();
```

- *Type:* java.util.List<java.lang.String>

HCFS URIs of files to be placed in the working directory of each executor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#file_uris GoogleDataprocGdcSparkApplication#file_uris}

---

##### `jarFileUris`<sup>Optional</sup> <a name="jarFileUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfig.property.jarFileUris"></a>

```java
public java.util.List<java.lang.String> getJarFileUris();
```

- *Type:* java.util.List<java.lang.String>

HCFS URIs of jar files to add to the classpath of the Spark driver and tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#jar_file_uris GoogleDataprocGdcSparkApplication#jar_file_uris}

---

##### `mainClass`<sup>Optional</sup> <a name="mainClass" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfig.property.mainClass"></a>

```java
public java.lang.String getMainClass();
```

- *Type:* java.lang.String

The name of the driver main class.

The jar file that contains the class must be in the classpath or specified in 'jar_file_uris'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#main_class GoogleDataprocGdcSparkApplication#main_class}

---

##### `mainJarFileUri`<sup>Optional</sup> <a name="mainJarFileUri" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfig.property.mainJarFileUri"></a>

```java
public java.lang.String getMainJarFileUri();
```

- *Type:* java.lang.String

The HCFS URI of the jar file that contains the main class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#main_jar_file_uri GoogleDataprocGdcSparkApplication#main_jar_file_uri}

---

### GoogleDataprocGdcSparkApplicationSparkRApplicationConfig <a name="GoogleDataprocGdcSparkApplicationSparkRApplicationConfig" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_gdc_spark_application.GoogleDataprocGdcSparkApplicationSparkRApplicationConfig;

GoogleDataprocGdcSparkApplicationSparkRApplicationConfig.builder()
    .mainRFileUri(java.lang.String)
//  .archiveUris(java.util.List<java.lang.String>)
//  .args(java.util.List<java.lang.String>)
//  .fileUris(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfig.property.mainRFileUri">mainRFileUri</a></code> | <code>java.lang.String</code> | The HCFS URI of the main R file to use as the driver. Must be a .R file. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfig.property.archiveUris">archiveUris</a></code> | <code>java.util.List<java.lang.String></code> | HCFS URIs of archives to be extracted into the working directory of each executor. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfig.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | The arguments to pass to the driver. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfig.property.fileUris">fileUris</a></code> | <code>java.util.List<java.lang.String></code> | HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks. |

---

##### `mainRFileUri`<sup>Required</sup> <a name="mainRFileUri" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfig.property.mainRFileUri"></a>

```java
public java.lang.String getMainRFileUri();
```

- *Type:* java.lang.String

The HCFS URI of the main R file to use as the driver. Must be a .R file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#main_r_file_uri GoogleDataprocGdcSparkApplication#main_r_file_uri}

---

##### `archiveUris`<sup>Optional</sup> <a name="archiveUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfig.property.archiveUris"></a>

```java
public java.util.List<java.lang.String> getArchiveUris();
```

- *Type:* java.util.List<java.lang.String>

HCFS URIs of archives to be extracted into the working directory of each executor.

Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#archive_uris GoogleDataprocGdcSparkApplication#archive_uris}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfig.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

The arguments to pass to the driver.

Do not include arguments, such as '--conf', that can be set as job properties, since a collision may occur that causes an incorrect job submission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#args GoogleDataprocGdcSparkApplication#args}

---

##### `fileUris`<sup>Optional</sup> <a name="fileUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfig.property.fileUris"></a>

```java
public java.util.List<java.lang.String> getFileUris();
```

- *Type:* java.util.List<java.lang.String>

HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#file_uris GoogleDataprocGdcSparkApplication#file_uris}

---

### GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig <a name="GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_gdc_spark_application.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig;

GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig.builder()
//  .jarFileUris(java.util.List<java.lang.String>)
//  .queryFileUri(java.lang.String)
//  .queryList(GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct)
//  .scriptVariables(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig.property.jarFileUris">jarFileUris</a></code> | <code>java.util.List<java.lang.String></code> | HCFS URIs of jar files to be added to the Spark CLASSPATH. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig.property.queryFileUri">queryFileUri</a></code> | <code>java.lang.String</code> | The HCFS URI of the script that contains SQL queries. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig.property.queryList">queryList</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct">GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct</a></code> | query_list block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig.property.scriptVariables">scriptVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Mapping of query variable names to values (equivalent to the Spark SQL command: SET 'name="value";'). |

---

##### `jarFileUris`<sup>Optional</sup> <a name="jarFileUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig.property.jarFileUris"></a>

```java
public java.util.List<java.lang.String> getJarFileUris();
```

- *Type:* java.util.List<java.lang.String>

HCFS URIs of jar files to be added to the Spark CLASSPATH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#jar_file_uris GoogleDataprocGdcSparkApplication#jar_file_uris}

---

##### `queryFileUri`<sup>Optional</sup> <a name="queryFileUri" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig.property.queryFileUri"></a>

```java
public java.lang.String getQueryFileUri();
```

- *Type:* java.lang.String

The HCFS URI of the script that contains SQL queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#query_file_uri GoogleDataprocGdcSparkApplication#query_file_uri}

---

##### `queryList`<sup>Optional</sup> <a name="queryList" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig.property.queryList"></a>

```java
public GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct getQueryList();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct">GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct</a>

query_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#query_list GoogleDataprocGdcSparkApplication#query_list}

---

##### `scriptVariables`<sup>Optional</sup> <a name="scriptVariables" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig.property.scriptVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getScriptVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Mapping of query variable names to values (equivalent to the Spark SQL command: SET 'name="value";').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#script_variables GoogleDataprocGdcSparkApplication#script_variables}

---

### GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct <a name="GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_gdc_spark_application.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct;

GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct.builder()
    .queries(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct.property.queries">queries</a></code> | <code>java.util.List<java.lang.String></code> | The queries to run. |

---

##### `queries`<sup>Required</sup> <a name="queries" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct.property.queries"></a>

```java
public java.util.List<java.lang.String> getQueries();
```

- *Type:* java.util.List<java.lang.String>

The queries to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#queries GoogleDataprocGdcSparkApplication#queries}

---

### GoogleDataprocGdcSparkApplicationTimeouts <a name="GoogleDataprocGdcSparkApplicationTimeouts" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_gdc_spark_application.GoogleDataprocGdcSparkApplicationTimeouts;

GoogleDataprocGdcSparkApplicationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#create GoogleDataprocGdcSparkApplication#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#delete GoogleDataprocGdcSparkApplication#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#update GoogleDataprocGdcSparkApplication#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#create GoogleDataprocGdcSparkApplication#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#delete GoogleDataprocGdcSparkApplication#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_gdc_spark_application#update GoogleDataprocGdcSparkApplication#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference <a name="GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_gdc_spark_application.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference;

new GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resetArchiveUris">resetArchiveUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resetFileUris">resetFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resetJarFileUris">resetJarFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resetPythonFileUris">resetPythonFileUris</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArchiveUris` <a name="resetArchiveUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resetArchiveUris"></a>

```java
public void resetArchiveUris()
```

##### `resetArgs` <a name="resetArgs" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resetArgs"></a>

```java
public void resetArgs()
```

##### `resetFileUris` <a name="resetFileUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resetFileUris"></a>

```java
public void resetFileUris()
```

##### `resetJarFileUris` <a name="resetJarFileUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resetJarFileUris"></a>

```java
public void resetJarFileUris()
```

##### `resetPythonFileUris` <a name="resetPythonFileUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resetPythonFileUris"></a>

```java
public void resetPythonFileUris()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.archiveUrisInput">archiveUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.argsInput">argsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.fileUrisInput">fileUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.jarFileUrisInput">jarFileUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.mainPythonFileUriInput">mainPythonFileUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.pythonFileUrisInput">pythonFileUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.archiveUris">archiveUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.fileUris">fileUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.jarFileUris">jarFileUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.mainPythonFileUri">mainPythonFileUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.pythonFileUris">pythonFileUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfig">GoogleDataprocGdcSparkApplicationPysparkApplicationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `archiveUrisInput`<sup>Optional</sup> <a name="archiveUrisInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.archiveUrisInput"></a>

```java
public java.util.List<java.lang.String> getArchiveUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.argsInput"></a>

```java
public java.util.List<java.lang.String> getArgsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fileUrisInput`<sup>Optional</sup> <a name="fileUrisInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.fileUrisInput"></a>

```java
public java.util.List<java.lang.String> getFileUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jarFileUrisInput`<sup>Optional</sup> <a name="jarFileUrisInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.jarFileUrisInput"></a>

```java
public java.util.List<java.lang.String> getJarFileUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mainPythonFileUriInput`<sup>Optional</sup> <a name="mainPythonFileUriInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.mainPythonFileUriInput"></a>

```java
public java.lang.String getMainPythonFileUriInput();
```

- *Type:* java.lang.String

---

##### `pythonFileUrisInput`<sup>Optional</sup> <a name="pythonFileUrisInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.pythonFileUrisInput"></a>

```java
public java.util.List<java.lang.String> getPythonFileUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `archiveUris`<sup>Required</sup> <a name="archiveUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.archiveUris"></a>

```java
public java.util.List<java.lang.String> getArchiveUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fileUris`<sup>Required</sup> <a name="fileUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.fileUris"></a>

```java
public java.util.List<java.lang.String> getFileUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jarFileUris`<sup>Required</sup> <a name="jarFileUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.jarFileUris"></a>

```java
public java.util.List<java.lang.String> getJarFileUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mainPythonFileUri`<sup>Required</sup> <a name="mainPythonFileUri" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.mainPythonFileUri"></a>

```java
public java.lang.String getMainPythonFileUri();
```

- *Type:* java.lang.String

---

##### `pythonFileUris`<sup>Required</sup> <a name="pythonFileUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.pythonFileUris"></a>

```java
public java.util.List<java.lang.String> getPythonFileUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.internalValue"></a>

```java
public GoogleDataprocGdcSparkApplicationPysparkApplicationConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationPysparkApplicationConfig">GoogleDataprocGdcSparkApplicationPysparkApplicationConfig</a>

---


### GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference <a name="GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_gdc_spark_application.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference;

new GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetArchiveUris">resetArchiveUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetFileUris">resetFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetJarFileUris">resetJarFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetMainClass">resetMainClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetMainJarFileUri">resetMainJarFileUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArchiveUris` <a name="resetArchiveUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetArchiveUris"></a>

```java
public void resetArchiveUris()
```

##### `resetArgs` <a name="resetArgs" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetArgs"></a>

```java
public void resetArgs()
```

##### `resetFileUris` <a name="resetFileUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetFileUris"></a>

```java
public void resetFileUris()
```

##### `resetJarFileUris` <a name="resetJarFileUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetJarFileUris"></a>

```java
public void resetJarFileUris()
```

##### `resetMainClass` <a name="resetMainClass" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetMainClass"></a>

```java
public void resetMainClass()
```

##### `resetMainJarFileUri` <a name="resetMainJarFileUri" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetMainJarFileUri"></a>

```java
public void resetMainJarFileUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.archiveUrisInput">archiveUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.argsInput">argsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.fileUrisInput">fileUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.jarFileUrisInput">jarFileUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.mainClassInput">mainClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.mainJarFileUriInput">mainJarFileUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.archiveUris">archiveUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.fileUris">fileUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.jarFileUris">jarFileUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.mainClass">mainClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.mainJarFileUri">mainJarFileUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfig">GoogleDataprocGdcSparkApplicationSparkApplicationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `archiveUrisInput`<sup>Optional</sup> <a name="archiveUrisInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.archiveUrisInput"></a>

```java
public java.util.List<java.lang.String> getArchiveUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.argsInput"></a>

```java
public java.util.List<java.lang.String> getArgsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fileUrisInput`<sup>Optional</sup> <a name="fileUrisInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.fileUrisInput"></a>

```java
public java.util.List<java.lang.String> getFileUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jarFileUrisInput`<sup>Optional</sup> <a name="jarFileUrisInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.jarFileUrisInput"></a>

```java
public java.util.List<java.lang.String> getJarFileUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mainClassInput`<sup>Optional</sup> <a name="mainClassInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.mainClassInput"></a>

```java
public java.lang.String getMainClassInput();
```

- *Type:* java.lang.String

---

##### `mainJarFileUriInput`<sup>Optional</sup> <a name="mainJarFileUriInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.mainJarFileUriInput"></a>

```java
public java.lang.String getMainJarFileUriInput();
```

- *Type:* java.lang.String

---

##### `archiveUris`<sup>Required</sup> <a name="archiveUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.archiveUris"></a>

```java
public java.util.List<java.lang.String> getArchiveUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fileUris`<sup>Required</sup> <a name="fileUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.fileUris"></a>

```java
public java.util.List<java.lang.String> getFileUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jarFileUris`<sup>Required</sup> <a name="jarFileUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.jarFileUris"></a>

```java
public java.util.List<java.lang.String> getJarFileUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mainClass`<sup>Required</sup> <a name="mainClass" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.mainClass"></a>

```java
public java.lang.String getMainClass();
```

- *Type:* java.lang.String

---

##### `mainJarFileUri`<sup>Required</sup> <a name="mainJarFileUri" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.mainJarFileUri"></a>

```java
public java.lang.String getMainJarFileUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.internalValue"></a>

```java
public GoogleDataprocGdcSparkApplicationSparkApplicationConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkApplicationConfig">GoogleDataprocGdcSparkApplicationSparkApplicationConfig</a>

---


### GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference <a name="GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_gdc_spark_application.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference;

new GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.resetArchiveUris">resetArchiveUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.resetFileUris">resetFileUris</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArchiveUris` <a name="resetArchiveUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.resetArchiveUris"></a>

```java
public void resetArchiveUris()
```

##### `resetArgs` <a name="resetArgs" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.resetArgs"></a>

```java
public void resetArgs()
```

##### `resetFileUris` <a name="resetFileUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.resetFileUris"></a>

```java
public void resetFileUris()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.archiveUrisInput">archiveUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.argsInput">argsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.fileUrisInput">fileUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.mainRFileUriInput">mainRFileUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.archiveUris">archiveUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.fileUris">fileUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.mainRFileUri">mainRFileUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfig">GoogleDataprocGdcSparkApplicationSparkRApplicationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `archiveUrisInput`<sup>Optional</sup> <a name="archiveUrisInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.archiveUrisInput"></a>

```java
public java.util.List<java.lang.String> getArchiveUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.argsInput"></a>

```java
public java.util.List<java.lang.String> getArgsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fileUrisInput`<sup>Optional</sup> <a name="fileUrisInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.fileUrisInput"></a>

```java
public java.util.List<java.lang.String> getFileUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mainRFileUriInput`<sup>Optional</sup> <a name="mainRFileUriInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.mainRFileUriInput"></a>

```java
public java.lang.String getMainRFileUriInput();
```

- *Type:* java.lang.String

---

##### `archiveUris`<sup>Required</sup> <a name="archiveUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.archiveUris"></a>

```java
public java.util.List<java.lang.String> getArchiveUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fileUris`<sup>Required</sup> <a name="fileUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.fileUris"></a>

```java
public java.util.List<java.lang.String> getFileUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mainRFileUri`<sup>Required</sup> <a name="mainRFileUri" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.mainRFileUri"></a>

```java
public java.lang.String getMainRFileUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.internalValue"></a>

```java
public GoogleDataprocGdcSparkApplicationSparkRApplicationConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkRApplicationConfig">GoogleDataprocGdcSparkApplicationSparkRApplicationConfig</a>

---


### GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference <a name="GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_gdc_spark_application.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference;

new GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.putQueryList">putQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resetJarFileUris">resetJarFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resetQueryFileUri">resetQueryFileUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resetQueryList">resetQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resetScriptVariables">resetScriptVariables</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putQueryList` <a name="putQueryList" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.putQueryList"></a>

```java
public void putQueryList(GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.putQueryList.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct">GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct</a>

---

##### `resetJarFileUris` <a name="resetJarFileUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resetJarFileUris"></a>

```java
public void resetJarFileUris()
```

##### `resetQueryFileUri` <a name="resetQueryFileUri" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resetQueryFileUri"></a>

```java
public void resetQueryFileUri()
```

##### `resetQueryList` <a name="resetQueryList" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resetQueryList"></a>

```java
public void resetQueryList()
```

##### `resetScriptVariables` <a name="resetScriptVariables" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resetScriptVariables"></a>

```java
public void resetScriptVariables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.queryList">queryList</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference">GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.jarFileUrisInput">jarFileUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.queryFileUriInput">queryFileUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.queryListInput">queryListInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct">GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.scriptVariablesInput">scriptVariablesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.jarFileUris">jarFileUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.queryFileUri">queryFileUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.scriptVariables">scriptVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig">GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `queryList`<sup>Required</sup> <a name="queryList" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.queryList"></a>

```java
public GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference getQueryList();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference">GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference</a>

---

##### `jarFileUrisInput`<sup>Optional</sup> <a name="jarFileUrisInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.jarFileUrisInput"></a>

```java
public java.util.List<java.lang.String> getJarFileUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `queryFileUriInput`<sup>Optional</sup> <a name="queryFileUriInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.queryFileUriInput"></a>

```java
public java.lang.String getQueryFileUriInput();
```

- *Type:* java.lang.String

---

##### `queryListInput`<sup>Optional</sup> <a name="queryListInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.queryListInput"></a>

```java
public GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct getQueryListInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct">GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct</a>

---

##### `scriptVariablesInput`<sup>Optional</sup> <a name="scriptVariablesInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.scriptVariablesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getScriptVariablesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `jarFileUris`<sup>Required</sup> <a name="jarFileUris" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.jarFileUris"></a>

```java
public java.util.List<java.lang.String> getJarFileUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `queryFileUri`<sup>Required</sup> <a name="queryFileUri" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.queryFileUri"></a>

```java
public java.lang.String getQueryFileUri();
```

- *Type:* java.lang.String

---

##### `scriptVariables`<sup>Required</sup> <a name="scriptVariables" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.scriptVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getScriptVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.internalValue"></a>

```java
public GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig">GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfig</a>

---


### GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference <a name="GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_gdc_spark_application.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference;

new GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.property.queriesInput">queriesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.property.queries">queries</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct">GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `queriesInput`<sup>Optional</sup> <a name="queriesInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.property.queriesInput"></a>

```java
public java.util.List<java.lang.String> getQueriesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `queries`<sup>Required</sup> <a name="queries" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.property.queries"></a>

```java
public java.util.List<java.lang.String> getQueries();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.property.internalValue"></a>

```java
public GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct">GoogleDataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct</a>

---


### GoogleDataprocGdcSparkApplicationTimeoutsOutputReference <a name="GoogleDataprocGdcSparkApplicationTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_gdc_spark_application.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference;

new GoogleDataprocGdcSparkApplicationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeouts">GoogleDataprocGdcSparkApplicationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataprocGdcSparkApplication.GoogleDataprocGdcSparkApplicationTimeouts">GoogleDataprocGdcSparkApplicationTimeouts</a>

---



