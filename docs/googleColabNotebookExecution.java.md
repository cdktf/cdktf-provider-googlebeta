# `googleColabNotebookExecution` Submodule <a name="`googleColabNotebookExecution` Submodule" id="@cdktf/provider-google-beta.googleColabNotebookExecution"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleColabNotebookExecution <a name="GoogleColabNotebookExecution" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_notebook_execution google_colab_notebook_execution}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_notebook_execution.GoogleColabNotebookExecution;

GoogleColabNotebookExecution.Builder.create(Construct scope, java.lang.String id)
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
    .displayName(java.lang.String)
    .gcsOutputUri(java.lang.String)
    .location(java.lang.String)
//  .dataformRepositorySource(GoogleColabNotebookExecutionDataformRepositorySource)
//  .directNotebookSource(GoogleColabNotebookExecutionDirectNotebookSource)
//  .executionTimeout(java.lang.String)
//  .executionUser(java.lang.String)
//  .gcsNotebookSource(GoogleColabNotebookExecutionGcsNotebookSource)
//  .id(java.lang.String)
//  .notebookExecutionJobId(java.lang.String)
//  .notebookRuntimeTemplateResourceName(java.lang.String)
//  .project(java.lang.String)
//  .serviceAccount(java.lang.String)
//  .timeouts(GoogleColabNotebookExecutionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Required. The display name of the Notebook Execution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.gcsOutputUri">gcsOutputUri</a></code> | <code>java.lang.String</code> | The Cloud Storage location to upload the result to. Format:'gs://bucket-name'. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location for the resource: https://cloud.google.com/colab/docs/locations. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.dataformRepositorySource">dataformRepositorySource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource">GoogleColabNotebookExecutionDataformRepositorySource</a></code> | dataform_repository_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.directNotebookSource">directNotebookSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSource">GoogleColabNotebookExecutionDirectNotebookSource</a></code> | direct_notebook_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.executionTimeout">executionTimeout</a></code> | <code>java.lang.String</code> | Max running time of the execution job in seconds (default 86400s / 24 hrs). |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.executionUser">executionUser</a></code> | <code>java.lang.String</code> | The user email to run the execution as. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.gcsNotebookSource">gcsNotebookSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource">GoogleColabNotebookExecutionGcsNotebookSource</a></code> | gcs_notebook_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_notebook_execution#id GoogleColabNotebookExecution#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.notebookExecutionJobId">notebookExecutionJobId</a></code> | <code>java.lang.String</code> | User specified ID for the Notebook Execution Job. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.notebookRuntimeTemplateResourceName">notebookRuntimeTemplateResourceName</a></code> | <code>java.lang.String</code> | The NotebookRuntimeTemplate to source compute configuration from. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_notebook_execution#project GoogleColabNotebookExecution#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | The service account to run the execution as. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeouts">GoogleColabNotebookExecutionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Required. The display name of the Notebook Execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_notebook_execution#display_name GoogleColabNotebookExecution#display_name}

---

##### `gcsOutputUri`<sup>Required</sup> <a name="gcsOutputUri" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.gcsOutputUri"></a>

- *Type:* java.lang.String

The Cloud Storage location to upload the result to. Format:'gs://bucket-name'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_notebook_execution#gcs_output_uri GoogleColabNotebookExecution#gcs_output_uri}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location for the resource: https://cloud.google.com/colab/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_notebook_execution#location GoogleColabNotebookExecution#location}

---

##### `dataformRepositorySource`<sup>Optional</sup> <a name="dataformRepositorySource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.dataformRepositorySource"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource">GoogleColabNotebookExecutionDataformRepositorySource</a>

dataform_repository_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_notebook_execution#dataform_repository_source GoogleColabNotebookExecution#dataform_repository_source}

---

##### `directNotebookSource`<sup>Optional</sup> <a name="directNotebookSource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.directNotebookSource"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSource">GoogleColabNotebookExecutionDirectNotebookSource</a>

direct_notebook_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_notebook_execution#direct_notebook_source GoogleColabNotebookExecution#direct_notebook_source}

---

##### `executionTimeout`<sup>Optional</sup> <a name="executionTimeout" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.executionTimeout"></a>

- *Type:* java.lang.String

Max running time of the execution job in seconds (default 86400s / 24 hrs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_notebook_execution#execution_timeout GoogleColabNotebookExecution#execution_timeout}

---

##### `executionUser`<sup>Optional</sup> <a name="executionUser" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.executionUser"></a>

- *Type:* java.lang.String

The user email to run the execution as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_notebook_execution#execution_user GoogleColabNotebookExecution#execution_user}

---

##### `gcsNotebookSource`<sup>Optional</sup> <a name="gcsNotebookSource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.gcsNotebookSource"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource">GoogleColabNotebookExecutionGcsNotebookSource</a>

gcs_notebook_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_notebook_execution#gcs_notebook_source GoogleColabNotebookExecution#gcs_notebook_source}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_notebook_execution#id GoogleColabNotebookExecution#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notebookExecutionJobId`<sup>Optional</sup> <a name="notebookExecutionJobId" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.notebookExecutionJobId"></a>

- *Type:* java.lang.String

User specified ID for the Notebook Execution Job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_notebook_execution#notebook_execution_job_id GoogleColabNotebookExecution#notebook_execution_job_id}

---

##### `notebookRuntimeTemplateResourceName`<sup>Optional</sup> <a name="notebookRuntimeTemplateResourceName" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.notebookRuntimeTemplateResourceName"></a>

- *Type:* java.lang.String

The NotebookRuntimeTemplate to source compute configuration from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_notebook_execution#notebook_runtime_template_resource_name GoogleColabNotebookExecution#notebook_runtime_template_resource_name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_notebook_execution#project GoogleColabNotebookExecution#project}.

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.serviceAccount"></a>

- *Type:* java.lang.String

The service account to run the execution as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_notebook_execution#service_account GoogleColabNotebookExecution#service_account}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeouts">GoogleColabNotebookExecutionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_notebook_execution#timeouts GoogleColabNotebookExecution#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.putDataformRepositorySource">putDataformRepositorySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.putDirectNotebookSource">putDirectNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.putGcsNotebookSource">putGcsNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetDataformRepositorySource">resetDataformRepositorySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetDirectNotebookSource">resetDirectNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetExecutionTimeout">resetExecutionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetExecutionUser">resetExecutionUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetGcsNotebookSource">resetGcsNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetNotebookExecutionJobId">resetNotebookExecutionJobId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetNotebookRuntimeTemplateResourceName">resetNotebookRuntimeTemplateResourceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataformRepositorySource` <a name="putDataformRepositorySource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.putDataformRepositorySource"></a>

```java
public void putDataformRepositorySource(GoogleColabNotebookExecutionDataformRepositorySource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.putDataformRepositorySource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource">GoogleColabNotebookExecutionDataformRepositorySource</a>

---

##### `putDirectNotebookSource` <a name="putDirectNotebookSource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.putDirectNotebookSource"></a>

```java
public void putDirectNotebookSource(GoogleColabNotebookExecutionDirectNotebookSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.putDirectNotebookSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSource">GoogleColabNotebookExecutionDirectNotebookSource</a>

---

##### `putGcsNotebookSource` <a name="putGcsNotebookSource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.putGcsNotebookSource"></a>

```java
public void putGcsNotebookSource(GoogleColabNotebookExecutionGcsNotebookSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.putGcsNotebookSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource">GoogleColabNotebookExecutionGcsNotebookSource</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.putTimeouts"></a>

```java
public void putTimeouts(GoogleColabNotebookExecutionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeouts">GoogleColabNotebookExecutionTimeouts</a>

---

##### `resetDataformRepositorySource` <a name="resetDataformRepositorySource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetDataformRepositorySource"></a>

```java
public void resetDataformRepositorySource()
```

##### `resetDirectNotebookSource` <a name="resetDirectNotebookSource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetDirectNotebookSource"></a>

```java
public void resetDirectNotebookSource()
```

##### `resetExecutionTimeout` <a name="resetExecutionTimeout" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetExecutionTimeout"></a>

```java
public void resetExecutionTimeout()
```

##### `resetExecutionUser` <a name="resetExecutionUser" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetExecutionUser"></a>

```java
public void resetExecutionUser()
```

##### `resetGcsNotebookSource` <a name="resetGcsNotebookSource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetGcsNotebookSource"></a>

```java
public void resetGcsNotebookSource()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetId"></a>

```java
public void resetId()
```

##### `resetNotebookExecutionJobId` <a name="resetNotebookExecutionJobId" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetNotebookExecutionJobId"></a>

```java
public void resetNotebookExecutionJobId()
```

##### `resetNotebookRuntimeTemplateResourceName` <a name="resetNotebookRuntimeTemplateResourceName" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetNotebookRuntimeTemplateResourceName"></a>

```java
public void resetNotebookRuntimeTemplateResourceName()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetProject"></a>

```java
public void resetProject()
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetServiceAccount"></a>

```java
public void resetServiceAccount()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleColabNotebookExecution resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_notebook_execution.GoogleColabNotebookExecution;

GoogleColabNotebookExecution.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_notebook_execution.GoogleColabNotebookExecution;

GoogleColabNotebookExecution.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_notebook_execution.GoogleColabNotebookExecution;

GoogleColabNotebookExecution.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_notebook_execution.GoogleColabNotebookExecution;

GoogleColabNotebookExecution.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleColabNotebookExecution.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleColabNotebookExecution resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleColabNotebookExecution to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleColabNotebookExecution that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_notebook_execution#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleColabNotebookExecution to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.dataformRepositorySource">dataformRepositorySource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference">GoogleColabNotebookExecutionDataformRepositorySourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.directNotebookSource">directNotebookSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference">GoogleColabNotebookExecutionDirectNotebookSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.gcsNotebookSource">gcsNotebookSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference">GoogleColabNotebookExecutionGcsNotebookSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference">GoogleColabNotebookExecutionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.dataformRepositorySourceInput">dataformRepositorySourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource">GoogleColabNotebookExecutionDataformRepositorySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.directNotebookSourceInput">directNotebookSourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSource">GoogleColabNotebookExecutionDirectNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.executionTimeoutInput">executionTimeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.executionUserInput">executionUserInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.gcsNotebookSourceInput">gcsNotebookSourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource">GoogleColabNotebookExecutionGcsNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.gcsOutputUriInput">gcsOutputUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.notebookExecutionJobIdInput">notebookExecutionJobIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.notebookRuntimeTemplateResourceNameInput">notebookRuntimeTemplateResourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.serviceAccountInput">serviceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeouts">GoogleColabNotebookExecutionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.executionTimeout">executionTimeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.executionUser">executionUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.gcsOutputUri">gcsOutputUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.notebookExecutionJobId">notebookExecutionJobId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.notebookRuntimeTemplateResourceName">notebookRuntimeTemplateResourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataformRepositorySource`<sup>Required</sup> <a name="dataformRepositorySource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.dataformRepositorySource"></a>

```java
public GoogleColabNotebookExecutionDataformRepositorySourceOutputReference getDataformRepositorySource();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference">GoogleColabNotebookExecutionDataformRepositorySourceOutputReference</a>

---

##### `directNotebookSource`<sup>Required</sup> <a name="directNotebookSource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.directNotebookSource"></a>

```java
public GoogleColabNotebookExecutionDirectNotebookSourceOutputReference getDirectNotebookSource();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference">GoogleColabNotebookExecutionDirectNotebookSourceOutputReference</a>

---

##### `gcsNotebookSource`<sup>Required</sup> <a name="gcsNotebookSource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.gcsNotebookSource"></a>

```java
public GoogleColabNotebookExecutionGcsNotebookSourceOutputReference getGcsNotebookSource();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference">GoogleColabNotebookExecutionGcsNotebookSourceOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.timeouts"></a>

```java
public GoogleColabNotebookExecutionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference">GoogleColabNotebookExecutionTimeoutsOutputReference</a>

---

##### `dataformRepositorySourceInput`<sup>Optional</sup> <a name="dataformRepositorySourceInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.dataformRepositorySourceInput"></a>

```java
public GoogleColabNotebookExecutionDataformRepositorySource getDataformRepositorySourceInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource">GoogleColabNotebookExecutionDataformRepositorySource</a>

---

##### `directNotebookSourceInput`<sup>Optional</sup> <a name="directNotebookSourceInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.directNotebookSourceInput"></a>

```java
public GoogleColabNotebookExecutionDirectNotebookSource getDirectNotebookSourceInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSource">GoogleColabNotebookExecutionDirectNotebookSource</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `executionTimeoutInput`<sup>Optional</sup> <a name="executionTimeoutInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.executionTimeoutInput"></a>

```java
public java.lang.String getExecutionTimeoutInput();
```

- *Type:* java.lang.String

---

##### `executionUserInput`<sup>Optional</sup> <a name="executionUserInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.executionUserInput"></a>

```java
public java.lang.String getExecutionUserInput();
```

- *Type:* java.lang.String

---

##### `gcsNotebookSourceInput`<sup>Optional</sup> <a name="gcsNotebookSourceInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.gcsNotebookSourceInput"></a>

```java
public GoogleColabNotebookExecutionGcsNotebookSource getGcsNotebookSourceInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource">GoogleColabNotebookExecutionGcsNotebookSource</a>

---

##### `gcsOutputUriInput`<sup>Optional</sup> <a name="gcsOutputUriInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.gcsOutputUriInput"></a>

```java
public java.lang.String getGcsOutputUriInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `notebookExecutionJobIdInput`<sup>Optional</sup> <a name="notebookExecutionJobIdInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.notebookExecutionJobIdInput"></a>

```java
public java.lang.String getNotebookExecutionJobIdInput();
```

- *Type:* java.lang.String

---

##### `notebookRuntimeTemplateResourceNameInput`<sup>Optional</sup> <a name="notebookRuntimeTemplateResourceNameInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.notebookRuntimeTemplateResourceNameInput"></a>

```java
public java.lang.String getNotebookRuntimeTemplateResourceNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.serviceAccountInput"></a>

```java
public java.lang.String getServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeouts">GoogleColabNotebookExecutionTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `executionTimeout`<sup>Required</sup> <a name="executionTimeout" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.executionTimeout"></a>

```java
public java.lang.String getExecutionTimeout();
```

- *Type:* java.lang.String

---

##### `executionUser`<sup>Required</sup> <a name="executionUser" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.executionUser"></a>

```java
public java.lang.String getExecutionUser();
```

- *Type:* java.lang.String

---

##### `gcsOutputUri`<sup>Required</sup> <a name="gcsOutputUri" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.gcsOutputUri"></a>

```java
public java.lang.String getGcsOutputUri();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `notebookExecutionJobId`<sup>Required</sup> <a name="notebookExecutionJobId" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.notebookExecutionJobId"></a>

```java
public java.lang.String getNotebookExecutionJobId();
```

- *Type:* java.lang.String

---

##### `notebookRuntimeTemplateResourceName`<sup>Required</sup> <a name="notebookRuntimeTemplateResourceName" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.notebookRuntimeTemplateResourceName"></a>

```java
public java.lang.String getNotebookRuntimeTemplateResourceName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleColabNotebookExecutionConfig <a name="GoogleColabNotebookExecutionConfig" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_notebook_execution.GoogleColabNotebookExecutionConfig;

GoogleColabNotebookExecutionConfig.builder()
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
    .displayName(java.lang.String)
    .gcsOutputUri(java.lang.String)
    .location(java.lang.String)
//  .dataformRepositorySource(GoogleColabNotebookExecutionDataformRepositorySource)
//  .directNotebookSource(GoogleColabNotebookExecutionDirectNotebookSource)
//  .executionTimeout(java.lang.String)
//  .executionUser(java.lang.String)
//  .gcsNotebookSource(GoogleColabNotebookExecutionGcsNotebookSource)
//  .id(java.lang.String)
//  .notebookExecutionJobId(java.lang.String)
//  .notebookRuntimeTemplateResourceName(java.lang.String)
//  .project(java.lang.String)
//  .serviceAccount(java.lang.String)
//  .timeouts(GoogleColabNotebookExecutionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Required. The display name of the Notebook Execution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.gcsOutputUri">gcsOutputUri</a></code> | <code>java.lang.String</code> | The Cloud Storage location to upload the result to. Format:'gs://bucket-name'. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location for the resource: https://cloud.google.com/colab/docs/locations. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.dataformRepositorySource">dataformRepositorySource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource">GoogleColabNotebookExecutionDataformRepositorySource</a></code> | dataform_repository_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.directNotebookSource">directNotebookSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSource">GoogleColabNotebookExecutionDirectNotebookSource</a></code> | direct_notebook_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.executionTimeout">executionTimeout</a></code> | <code>java.lang.String</code> | Max running time of the execution job in seconds (default 86400s / 24 hrs). |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.executionUser">executionUser</a></code> | <code>java.lang.String</code> | The user email to run the execution as. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.gcsNotebookSource">gcsNotebookSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource">GoogleColabNotebookExecutionGcsNotebookSource</a></code> | gcs_notebook_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_notebook_execution#id GoogleColabNotebookExecution#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.notebookExecutionJobId">notebookExecutionJobId</a></code> | <code>java.lang.String</code> | User specified ID for the Notebook Execution Job. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.notebookRuntimeTemplateResourceName">notebookRuntimeTemplateResourceName</a></code> | <code>java.lang.String</code> | The NotebookRuntimeTemplate to source compute configuration from. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_notebook_execution#project GoogleColabNotebookExecution#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | The service account to run the execution as. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeouts">GoogleColabNotebookExecutionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Required. The display name of the Notebook Execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_notebook_execution#display_name GoogleColabNotebookExecution#display_name}

---

##### `gcsOutputUri`<sup>Required</sup> <a name="gcsOutputUri" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.gcsOutputUri"></a>

```java
public java.lang.String getGcsOutputUri();
```

- *Type:* java.lang.String

The Cloud Storage location to upload the result to. Format:'gs://bucket-name'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_notebook_execution#gcs_output_uri GoogleColabNotebookExecution#gcs_output_uri}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location for the resource: https://cloud.google.com/colab/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_notebook_execution#location GoogleColabNotebookExecution#location}

---

##### `dataformRepositorySource`<sup>Optional</sup> <a name="dataformRepositorySource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.dataformRepositorySource"></a>

```java
public GoogleColabNotebookExecutionDataformRepositorySource getDataformRepositorySource();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource">GoogleColabNotebookExecutionDataformRepositorySource</a>

dataform_repository_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_notebook_execution#dataform_repository_source GoogleColabNotebookExecution#dataform_repository_source}

---

##### `directNotebookSource`<sup>Optional</sup> <a name="directNotebookSource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.directNotebookSource"></a>

```java
public GoogleColabNotebookExecutionDirectNotebookSource getDirectNotebookSource();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSource">GoogleColabNotebookExecutionDirectNotebookSource</a>

direct_notebook_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_notebook_execution#direct_notebook_source GoogleColabNotebookExecution#direct_notebook_source}

---

##### `executionTimeout`<sup>Optional</sup> <a name="executionTimeout" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.executionTimeout"></a>

```java
public java.lang.String getExecutionTimeout();
```

- *Type:* java.lang.String

Max running time of the execution job in seconds (default 86400s / 24 hrs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_notebook_execution#execution_timeout GoogleColabNotebookExecution#execution_timeout}

---

##### `executionUser`<sup>Optional</sup> <a name="executionUser" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.executionUser"></a>

```java
public java.lang.String getExecutionUser();
```

- *Type:* java.lang.String

The user email to run the execution as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_notebook_execution#execution_user GoogleColabNotebookExecution#execution_user}

---

##### `gcsNotebookSource`<sup>Optional</sup> <a name="gcsNotebookSource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.gcsNotebookSource"></a>

```java
public GoogleColabNotebookExecutionGcsNotebookSource getGcsNotebookSource();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource">GoogleColabNotebookExecutionGcsNotebookSource</a>

gcs_notebook_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_notebook_execution#gcs_notebook_source GoogleColabNotebookExecution#gcs_notebook_source}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_notebook_execution#id GoogleColabNotebookExecution#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notebookExecutionJobId`<sup>Optional</sup> <a name="notebookExecutionJobId" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.notebookExecutionJobId"></a>

```java
public java.lang.String getNotebookExecutionJobId();
```

- *Type:* java.lang.String

User specified ID for the Notebook Execution Job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_notebook_execution#notebook_execution_job_id GoogleColabNotebookExecution#notebook_execution_job_id}

---

##### `notebookRuntimeTemplateResourceName`<sup>Optional</sup> <a name="notebookRuntimeTemplateResourceName" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.notebookRuntimeTemplateResourceName"></a>

```java
public java.lang.String getNotebookRuntimeTemplateResourceName();
```

- *Type:* java.lang.String

The NotebookRuntimeTemplate to source compute configuration from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_notebook_execution#notebook_runtime_template_resource_name GoogleColabNotebookExecution#notebook_runtime_template_resource_name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_notebook_execution#project GoogleColabNotebookExecution#project}.

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

The service account to run the execution as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_notebook_execution#service_account GoogleColabNotebookExecution#service_account}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.timeouts"></a>

```java
public GoogleColabNotebookExecutionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeouts">GoogleColabNotebookExecutionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_notebook_execution#timeouts GoogleColabNotebookExecution#timeouts}

---

### GoogleColabNotebookExecutionDataformRepositorySource <a name="GoogleColabNotebookExecutionDataformRepositorySource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_notebook_execution.GoogleColabNotebookExecutionDataformRepositorySource;

GoogleColabNotebookExecutionDataformRepositorySource.builder()
    .dataformRepositoryResourceName(java.lang.String)
//  .commitSha(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource.property.dataformRepositoryResourceName">dataformRepositoryResourceName</a></code> | <code>java.lang.String</code> | The resource name of the Dataform Repository. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource.property.commitSha">commitSha</a></code> | <code>java.lang.String</code> | The commit SHA to read repository with. If unset, the file will be read at HEAD. |

---

##### `dataformRepositoryResourceName`<sup>Required</sup> <a name="dataformRepositoryResourceName" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource.property.dataformRepositoryResourceName"></a>

```java
public java.lang.String getDataformRepositoryResourceName();
```

- *Type:* java.lang.String

The resource name of the Dataform Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_notebook_execution#dataform_repository_resource_name GoogleColabNotebookExecution#dataform_repository_resource_name}

---

##### `commitSha`<sup>Optional</sup> <a name="commitSha" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource.property.commitSha"></a>

```java
public java.lang.String getCommitSha();
```

- *Type:* java.lang.String

The commit SHA to read repository with. If unset, the file will be read at HEAD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_notebook_execution#commit_sha GoogleColabNotebookExecution#commit_sha}

---

### GoogleColabNotebookExecutionDirectNotebookSource <a name="GoogleColabNotebookExecutionDirectNotebookSource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_notebook_execution.GoogleColabNotebookExecutionDirectNotebookSource;

GoogleColabNotebookExecutionDirectNotebookSource.builder()
    .content(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSource.property.content">content</a></code> | <code>java.lang.String</code> | The base64-encoded contents of the input notebook file. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSource.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

The base64-encoded contents of the input notebook file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_notebook_execution#content GoogleColabNotebookExecution#content}

---

### GoogleColabNotebookExecutionGcsNotebookSource <a name="GoogleColabNotebookExecutionGcsNotebookSource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_notebook_execution.GoogleColabNotebookExecutionGcsNotebookSource;

GoogleColabNotebookExecutionGcsNotebookSource.builder()
    .uri(java.lang.String)
//  .generation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource.property.uri">uri</a></code> | <code>java.lang.String</code> | The Cloud Storage uri pointing to the ipynb file. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource.property.generation">generation</a></code> | <code>java.lang.String</code> | The version of the Cloud Storage object to read. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

The Cloud Storage uri pointing to the ipynb file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_notebook_execution#uri GoogleColabNotebookExecution#uri}

---

##### `generation`<sup>Optional</sup> <a name="generation" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource.property.generation"></a>

```java
public java.lang.String getGeneration();
```

- *Type:* java.lang.String

The version of the Cloud Storage object to read.

If unset, the current version of the object is read. See https://cloud.google.com/storage/docs/metadata#generation-number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_notebook_execution#generation GoogleColabNotebookExecution#generation}

---

### GoogleColabNotebookExecutionTimeouts <a name="GoogleColabNotebookExecutionTimeouts" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_notebook_execution.GoogleColabNotebookExecutionTimeouts;

GoogleColabNotebookExecutionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_notebook_execution#create GoogleColabNotebookExecution#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_notebook_execution#delete GoogleColabNotebookExecution#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_notebook_execution#create GoogleColabNotebookExecution#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_colab_notebook_execution#delete GoogleColabNotebookExecution#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleColabNotebookExecutionDataformRepositorySourceOutputReference <a name="GoogleColabNotebookExecutionDataformRepositorySourceOutputReference" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_notebook_execution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference;

new GoogleColabNotebookExecutionDataformRepositorySourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.resetCommitSha">resetCommitSha</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCommitSha` <a name="resetCommitSha" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.resetCommitSha"></a>

```java
public void resetCommitSha()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.commitShaInput">commitShaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.dataformRepositoryResourceNameInput">dataformRepositoryResourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.commitSha">commitSha</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.dataformRepositoryResourceName">dataformRepositoryResourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource">GoogleColabNotebookExecutionDataformRepositorySource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commitShaInput`<sup>Optional</sup> <a name="commitShaInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.commitShaInput"></a>

```java
public java.lang.String getCommitShaInput();
```

- *Type:* java.lang.String

---

##### `dataformRepositoryResourceNameInput`<sup>Optional</sup> <a name="dataformRepositoryResourceNameInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.dataformRepositoryResourceNameInput"></a>

```java
public java.lang.String getDataformRepositoryResourceNameInput();
```

- *Type:* java.lang.String

---

##### `commitSha`<sup>Required</sup> <a name="commitSha" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.commitSha"></a>

```java
public java.lang.String getCommitSha();
```

- *Type:* java.lang.String

---

##### `dataformRepositoryResourceName`<sup>Required</sup> <a name="dataformRepositoryResourceName" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.dataformRepositoryResourceName"></a>

```java
public java.lang.String getDataformRepositoryResourceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.internalValue"></a>

```java
public GoogleColabNotebookExecutionDataformRepositorySource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource">GoogleColabNotebookExecutionDataformRepositorySource</a>

---


### GoogleColabNotebookExecutionDirectNotebookSourceOutputReference <a name="GoogleColabNotebookExecutionDirectNotebookSourceOutputReference" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_notebook_execution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference;

new GoogleColabNotebookExecutionDirectNotebookSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSource">GoogleColabNotebookExecutionDirectNotebookSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.property.internalValue"></a>

```java
public GoogleColabNotebookExecutionDirectNotebookSource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSource">GoogleColabNotebookExecutionDirectNotebookSource</a>

---


### GoogleColabNotebookExecutionGcsNotebookSourceOutputReference <a name="GoogleColabNotebookExecutionGcsNotebookSourceOutputReference" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_notebook_execution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference;

new GoogleColabNotebookExecutionGcsNotebookSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.resetGeneration">resetGeneration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGeneration` <a name="resetGeneration" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.resetGeneration"></a>

```java
public void resetGeneration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.generationInput">generationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.generation">generation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource">GoogleColabNotebookExecutionGcsNotebookSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `generationInput`<sup>Optional</sup> <a name="generationInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.generationInput"></a>

```java
public java.lang.String getGenerationInput();
```

- *Type:* java.lang.String

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.generation"></a>

```java
public java.lang.String getGeneration();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.internalValue"></a>

```java
public GoogleColabNotebookExecutionGcsNotebookSource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource">GoogleColabNotebookExecutionGcsNotebookSource</a>

---


### GoogleColabNotebookExecutionTimeoutsOutputReference <a name="GoogleColabNotebookExecutionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_notebook_execution.GoogleColabNotebookExecutionTimeoutsOutputReference;

new GoogleColabNotebookExecutionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeouts">GoogleColabNotebookExecutionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeouts">GoogleColabNotebookExecutionTimeouts</a>

---



