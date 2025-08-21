# `googleStorageInsightsDatasetConfig` Submodule <a name="`googleStorageInsightsDatasetConfig` Submodule" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleStorageInsightsDatasetConfig <a name="GoogleStorageInsightsDatasetConfig" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config google_storage_insights_dataset_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_insights_dataset_config.GoogleStorageInsightsDatasetConfig;

GoogleStorageInsightsDatasetConfig.Builder.create(Construct scope, java.lang.String id)
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
    .datasetConfigId(java.lang.String)
    .identity(GoogleStorageInsightsDatasetConfigIdentity)
    .location(java.lang.String)
    .retentionPeriodDays(java.lang.Number)
//  .description(java.lang.String)
//  .excludeCloudStorageBuckets(GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets)
//  .excludeCloudStorageLocations(GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations)
//  .id(java.lang.String)
//  .includeCloudStorageBuckets(GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets)
//  .includeCloudStorageLocations(GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations)
//  .includeNewlyCreatedBuckets(java.lang.Boolean)
//  .includeNewlyCreatedBuckets(IResolvable)
//  .linkDataset(java.lang.Boolean)
//  .linkDataset(IResolvable)
//  .organizationNumber(java.lang.String)
//  .organizationScope(java.lang.Boolean)
//  .organizationScope(IResolvable)
//  .project(java.lang.String)
//  .sourceFolders(GoogleStorageInsightsDatasetConfigSourceFolders)
//  .sourceProjects(GoogleStorageInsightsDatasetConfigSourceProjects)
//  .timeouts(GoogleStorageInsightsDatasetConfigTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.datasetConfigId">datasetConfigId</a></code> | <code>java.lang.String</code> | The user-defined ID of the DatasetConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentity">GoogleStorageInsightsDatasetConfigIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the DatasetConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.retentionPeriodDays">retentionPeriodDays</a></code> | <code>java.lang.Number</code> | Number of days of history that must be retained. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional user-provided description for the dataset configuration with a maximum length of 256 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.excludeCloudStorageBuckets">excludeCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets</a></code> | exclude_cloud_storage_buckets block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.excludeCloudStorageLocations">excludeCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations</a></code> | exclude_cloud_storage_locations block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#id GoogleStorageInsightsDatasetConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.includeCloudStorageBuckets">includeCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets</a></code> | include_cloud_storage_buckets block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.includeCloudStorageLocations">includeCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations</a></code> | include_cloud_storage_locations block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.includeNewlyCreatedBuckets">includeNewlyCreatedBuckets</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, the request includes all the newly created buckets in the dataset that meet the inclusion and exclusion rules. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.linkDataset">linkDataset</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | A boolean terraform only flag to link/unlink dataset. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.organizationNumber">organizationNumber</a></code> | <code>java.lang.String</code> | Organization resource ID that the source projects should belong to. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.organizationScope">organizationScope</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Defines the options for providing a source organization for the DatasetConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#project GoogleStorageInsightsDatasetConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.sourceFolders">sourceFolders</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFolders">GoogleStorageInsightsDatasetConfigSourceFolders</a></code> | source_folders block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.sourceProjects">sourceProjects</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjects">GoogleStorageInsightsDatasetConfigSourceProjects</a></code> | source_projects block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts">GoogleStorageInsightsDatasetConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `datasetConfigId`<sup>Required</sup> <a name="datasetConfigId" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.datasetConfigId"></a>

- *Type:* java.lang.String

The user-defined ID of the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#dataset_config_id GoogleStorageInsightsDatasetConfig#dataset_config_id}

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentity">GoogleStorageInsightsDatasetConfigIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#identity GoogleStorageInsightsDatasetConfig#identity}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#location GoogleStorageInsightsDatasetConfig#location}

---

##### `retentionPeriodDays`<sup>Required</sup> <a name="retentionPeriodDays" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.retentionPeriodDays"></a>

- *Type:* java.lang.Number

Number of days of history that must be retained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#retention_period_days GoogleStorageInsightsDatasetConfig#retention_period_days}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional user-provided description for the dataset configuration with a maximum length of 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#description GoogleStorageInsightsDatasetConfig#description}

---

##### `excludeCloudStorageBuckets`<sup>Optional</sup> <a name="excludeCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.excludeCloudStorageBuckets"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets</a>

exclude_cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#exclude_cloud_storage_buckets GoogleStorageInsightsDatasetConfig#exclude_cloud_storage_buckets}

---

##### `excludeCloudStorageLocations`<sup>Optional</sup> <a name="excludeCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.excludeCloudStorageLocations"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations</a>

exclude_cloud_storage_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#exclude_cloud_storage_locations GoogleStorageInsightsDatasetConfig#exclude_cloud_storage_locations}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#id GoogleStorageInsightsDatasetConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeCloudStorageBuckets`<sup>Optional</sup> <a name="includeCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.includeCloudStorageBuckets"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets</a>

include_cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#include_cloud_storage_buckets GoogleStorageInsightsDatasetConfig#include_cloud_storage_buckets}

---

##### `includeCloudStorageLocations`<sup>Optional</sup> <a name="includeCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.includeCloudStorageLocations"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations</a>

include_cloud_storage_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#include_cloud_storage_locations GoogleStorageInsightsDatasetConfig#include_cloud_storage_locations}

---

##### `includeNewlyCreatedBuckets`<sup>Optional</sup> <a name="includeNewlyCreatedBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.includeNewlyCreatedBuckets"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, the request includes all the newly created buckets in the dataset that meet the inclusion and exclusion rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#include_newly_created_buckets GoogleStorageInsightsDatasetConfig#include_newly_created_buckets}

---

##### `linkDataset`<sup>Optional</sup> <a name="linkDataset" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.linkDataset"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

A boolean terraform only flag to link/unlink dataset.

Setting this field to true while creation will automatically link the created dataset as an additional functionality.
-> **Note** A dataset config resource can only be destroyed once it is unlinked,
so users must set this field to false to unlink the dataset and destroy the dataset config resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#link_dataset GoogleStorageInsightsDatasetConfig#link_dataset}

---

##### `organizationNumber`<sup>Optional</sup> <a name="organizationNumber" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.organizationNumber"></a>

- *Type:* java.lang.String

Organization resource ID that the source projects should belong to.

Projects that do not belong to the provided organization are not considered when creating the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#organization_number GoogleStorageInsightsDatasetConfig#organization_number}

---

##### `organizationScope`<sup>Optional</sup> <a name="organizationScope" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.organizationScope"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Defines the options for providing a source organization for the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#organization_scope GoogleStorageInsightsDatasetConfig#organization_scope}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#project GoogleStorageInsightsDatasetConfig#project}.

---

##### `sourceFolders`<sup>Optional</sup> <a name="sourceFolders" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.sourceFolders"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFolders">GoogleStorageInsightsDatasetConfigSourceFolders</a>

source_folders block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#source_folders GoogleStorageInsightsDatasetConfig#source_folders}

---

##### `sourceProjects`<sup>Optional</sup> <a name="sourceProjects" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.sourceProjects"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjects">GoogleStorageInsightsDatasetConfigSourceProjects</a>

source_projects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#source_projects GoogleStorageInsightsDatasetConfig#source_projects}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts">GoogleStorageInsightsDatasetConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#timeouts GoogleStorageInsightsDatasetConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putExcludeCloudStorageBuckets">putExcludeCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putExcludeCloudStorageLocations">putExcludeCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putIncludeCloudStorageBuckets">putIncludeCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putIncludeCloudStorageLocations">putIncludeCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putSourceFolders">putSourceFolders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putSourceProjects">putSourceProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetExcludeCloudStorageBuckets">resetExcludeCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetExcludeCloudStorageLocations">resetExcludeCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetIncludeCloudStorageBuckets">resetIncludeCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetIncludeCloudStorageLocations">resetIncludeCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetIncludeNewlyCreatedBuckets">resetIncludeNewlyCreatedBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetLinkDataset">resetLinkDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetOrganizationNumber">resetOrganizationNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetOrganizationScope">resetOrganizationScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetSourceFolders">resetSourceFolders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetSourceProjects">resetSourceProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExcludeCloudStorageBuckets` <a name="putExcludeCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putExcludeCloudStorageBuckets"></a>

```java
public void putExcludeCloudStorageBuckets(GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putExcludeCloudStorageBuckets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets</a>

---

##### `putExcludeCloudStorageLocations` <a name="putExcludeCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putExcludeCloudStorageLocations"></a>

```java
public void putExcludeCloudStorageLocations(GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putExcludeCloudStorageLocations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations</a>

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putIdentity"></a>

```java
public void putIdentity(GoogleStorageInsightsDatasetConfigIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentity">GoogleStorageInsightsDatasetConfigIdentity</a>

---

##### `putIncludeCloudStorageBuckets` <a name="putIncludeCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putIncludeCloudStorageBuckets"></a>

```java
public void putIncludeCloudStorageBuckets(GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putIncludeCloudStorageBuckets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets</a>

---

##### `putIncludeCloudStorageLocations` <a name="putIncludeCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putIncludeCloudStorageLocations"></a>

```java
public void putIncludeCloudStorageLocations(GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putIncludeCloudStorageLocations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations</a>

---

##### `putSourceFolders` <a name="putSourceFolders" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putSourceFolders"></a>

```java
public void putSourceFolders(GoogleStorageInsightsDatasetConfigSourceFolders value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putSourceFolders.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFolders">GoogleStorageInsightsDatasetConfigSourceFolders</a>

---

##### `putSourceProjects` <a name="putSourceProjects" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putSourceProjects"></a>

```java
public void putSourceProjects(GoogleStorageInsightsDatasetConfigSourceProjects value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putSourceProjects.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjects">GoogleStorageInsightsDatasetConfigSourceProjects</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putTimeouts"></a>

```java
public void putTimeouts(GoogleStorageInsightsDatasetConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts">GoogleStorageInsightsDatasetConfigTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExcludeCloudStorageBuckets` <a name="resetExcludeCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetExcludeCloudStorageBuckets"></a>

```java
public void resetExcludeCloudStorageBuckets()
```

##### `resetExcludeCloudStorageLocations` <a name="resetExcludeCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetExcludeCloudStorageLocations"></a>

```java
public void resetExcludeCloudStorageLocations()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetId"></a>

```java
public void resetId()
```

##### `resetIncludeCloudStorageBuckets` <a name="resetIncludeCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetIncludeCloudStorageBuckets"></a>

```java
public void resetIncludeCloudStorageBuckets()
```

##### `resetIncludeCloudStorageLocations` <a name="resetIncludeCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetIncludeCloudStorageLocations"></a>

```java
public void resetIncludeCloudStorageLocations()
```

##### `resetIncludeNewlyCreatedBuckets` <a name="resetIncludeNewlyCreatedBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetIncludeNewlyCreatedBuckets"></a>

```java
public void resetIncludeNewlyCreatedBuckets()
```

##### `resetLinkDataset` <a name="resetLinkDataset" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetLinkDataset"></a>

```java
public void resetLinkDataset()
```

##### `resetOrganizationNumber` <a name="resetOrganizationNumber" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetOrganizationNumber"></a>

```java
public void resetOrganizationNumber()
```

##### `resetOrganizationScope` <a name="resetOrganizationScope" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetOrganizationScope"></a>

```java
public void resetOrganizationScope()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetProject"></a>

```java
public void resetProject()
```

##### `resetSourceFolders` <a name="resetSourceFolders" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetSourceFolders"></a>

```java
public void resetSourceFolders()
```

##### `resetSourceProjects` <a name="resetSourceProjects" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetSourceProjects"></a>

```java
public void resetSourceProjects()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleStorageInsightsDatasetConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_insights_dataset_config.GoogleStorageInsightsDatasetConfig;

GoogleStorageInsightsDatasetConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_insights_dataset_config.GoogleStorageInsightsDatasetConfig;

GoogleStorageInsightsDatasetConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_insights_dataset_config.GoogleStorageInsightsDatasetConfig;

GoogleStorageInsightsDatasetConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_insights_dataset_config.GoogleStorageInsightsDatasetConfig;

GoogleStorageInsightsDatasetConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleStorageInsightsDatasetConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleStorageInsightsDatasetConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleStorageInsightsDatasetConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleStorageInsightsDatasetConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleStorageInsightsDatasetConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.datasetConfigState">datasetConfigState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.excludeCloudStorageBuckets">excludeCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.excludeCloudStorageLocations">excludeCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference">GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference">GoogleStorageInsightsDatasetConfigIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.includeCloudStorageBuckets">includeCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.includeCloudStorageLocations">includeCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference">GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.link">link</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList">GoogleStorageInsightsDatasetConfigLinkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.sourceFolders">sourceFolders</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference">GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.sourceProjects">sourceProjects</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference">GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference">GoogleStorageInsightsDatasetConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.datasetConfigIdInput">datasetConfigIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.excludeCloudStorageBucketsInput">excludeCloudStorageBucketsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.excludeCloudStorageLocationsInput">excludeCloudStorageLocationsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentity">GoogleStorageInsightsDatasetConfigIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.includeCloudStorageBucketsInput">includeCloudStorageBucketsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.includeCloudStorageLocationsInput">includeCloudStorageLocationsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.includeNewlyCreatedBucketsInput">includeNewlyCreatedBucketsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.linkDatasetInput">linkDatasetInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.organizationNumberInput">organizationNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.organizationScopeInput">organizationScopeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.retentionPeriodDaysInput">retentionPeriodDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.sourceFoldersInput">sourceFoldersInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFolders">GoogleStorageInsightsDatasetConfigSourceFolders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.sourceProjectsInput">sourceProjectsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjects">GoogleStorageInsightsDatasetConfigSourceProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts">GoogleStorageInsightsDatasetConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.datasetConfigId">datasetConfigId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.includeNewlyCreatedBuckets">includeNewlyCreatedBuckets</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.linkDataset">linkDataset</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.organizationNumber">organizationNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.organizationScope">organizationScope</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.retentionPeriodDays">retentionPeriodDays</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `datasetConfigState`<sup>Required</sup> <a name="datasetConfigState" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.datasetConfigState"></a>

```java
public java.lang.String getDatasetConfigState();
```

- *Type:* java.lang.String

---

##### `excludeCloudStorageBuckets`<sup>Required</sup> <a name="excludeCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.excludeCloudStorageBuckets"></a>

```java
public GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference getExcludeCloudStorageBuckets();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference</a>

---

##### `excludeCloudStorageLocations`<sup>Required</sup> <a name="excludeCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.excludeCloudStorageLocations"></a>

```java
public GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference getExcludeCloudStorageLocations();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference">GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.identity"></a>

```java
public GoogleStorageInsightsDatasetConfigIdentityOutputReference getIdentity();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference">GoogleStorageInsightsDatasetConfigIdentityOutputReference</a>

---

##### `includeCloudStorageBuckets`<sup>Required</sup> <a name="includeCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.includeCloudStorageBuckets"></a>

```java
public GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference getIncludeCloudStorageBuckets();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference</a>

---

##### `includeCloudStorageLocations`<sup>Required</sup> <a name="includeCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.includeCloudStorageLocations"></a>

```java
public GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference getIncludeCloudStorageLocations();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference">GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference</a>

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.link"></a>

```java
public GoogleStorageInsightsDatasetConfigLinkList getLink();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList">GoogleStorageInsightsDatasetConfigLinkList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `sourceFolders`<sup>Required</sup> <a name="sourceFolders" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.sourceFolders"></a>

```java
public GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference getSourceFolders();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference">GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference</a>

---

##### `sourceProjects`<sup>Required</sup> <a name="sourceProjects" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.sourceProjects"></a>

```java
public GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference getSourceProjects();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference">GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.timeouts"></a>

```java
public GoogleStorageInsightsDatasetConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference">GoogleStorageInsightsDatasetConfigTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `datasetConfigIdInput`<sup>Optional</sup> <a name="datasetConfigIdInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.datasetConfigIdInput"></a>

```java
public java.lang.String getDatasetConfigIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `excludeCloudStorageBucketsInput`<sup>Optional</sup> <a name="excludeCloudStorageBucketsInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.excludeCloudStorageBucketsInput"></a>

```java
public GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets getExcludeCloudStorageBucketsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets</a>

---

##### `excludeCloudStorageLocationsInput`<sup>Optional</sup> <a name="excludeCloudStorageLocationsInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.excludeCloudStorageLocationsInput"></a>

```java
public GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations getExcludeCloudStorageLocationsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations</a>

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.identityInput"></a>

```java
public GoogleStorageInsightsDatasetConfigIdentity getIdentityInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentity">GoogleStorageInsightsDatasetConfigIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `includeCloudStorageBucketsInput`<sup>Optional</sup> <a name="includeCloudStorageBucketsInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.includeCloudStorageBucketsInput"></a>

```java
public GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets getIncludeCloudStorageBucketsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets</a>

---

##### `includeCloudStorageLocationsInput`<sup>Optional</sup> <a name="includeCloudStorageLocationsInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.includeCloudStorageLocationsInput"></a>

```java
public GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations getIncludeCloudStorageLocationsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations</a>

---

##### `includeNewlyCreatedBucketsInput`<sup>Optional</sup> <a name="includeNewlyCreatedBucketsInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.includeNewlyCreatedBucketsInput"></a>

```java
public java.lang.Object getIncludeNewlyCreatedBucketsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `linkDatasetInput`<sup>Optional</sup> <a name="linkDatasetInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.linkDatasetInput"></a>

```java
public java.lang.Object getLinkDatasetInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `organizationNumberInput`<sup>Optional</sup> <a name="organizationNumberInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.organizationNumberInput"></a>

```java
public java.lang.String getOrganizationNumberInput();
```

- *Type:* java.lang.String

---

##### `organizationScopeInput`<sup>Optional</sup> <a name="organizationScopeInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.organizationScopeInput"></a>

```java
public java.lang.Object getOrganizationScopeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `retentionPeriodDaysInput`<sup>Optional</sup> <a name="retentionPeriodDaysInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.retentionPeriodDaysInput"></a>

```java
public java.lang.Number getRetentionPeriodDaysInput();
```

- *Type:* java.lang.Number

---

##### `sourceFoldersInput`<sup>Optional</sup> <a name="sourceFoldersInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.sourceFoldersInput"></a>

```java
public GoogleStorageInsightsDatasetConfigSourceFolders getSourceFoldersInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFolders">GoogleStorageInsightsDatasetConfigSourceFolders</a>

---

##### `sourceProjectsInput`<sup>Optional</sup> <a name="sourceProjectsInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.sourceProjectsInput"></a>

```java
public GoogleStorageInsightsDatasetConfigSourceProjects getSourceProjectsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjects">GoogleStorageInsightsDatasetConfigSourceProjects</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts">GoogleStorageInsightsDatasetConfigTimeouts</a>

---

##### `datasetConfigId`<sup>Required</sup> <a name="datasetConfigId" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.datasetConfigId"></a>

```java
public java.lang.String getDatasetConfigId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `includeNewlyCreatedBuckets`<sup>Required</sup> <a name="includeNewlyCreatedBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.includeNewlyCreatedBuckets"></a>

```java
public java.lang.Object getIncludeNewlyCreatedBuckets();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `linkDataset`<sup>Required</sup> <a name="linkDataset" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.linkDataset"></a>

```java
public java.lang.Object getLinkDataset();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `organizationNumber`<sup>Required</sup> <a name="organizationNumber" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.organizationNumber"></a>

```java
public java.lang.String getOrganizationNumber();
```

- *Type:* java.lang.String

---

##### `organizationScope`<sup>Required</sup> <a name="organizationScope" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.organizationScope"></a>

```java
public java.lang.Object getOrganizationScope();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `retentionPeriodDays`<sup>Required</sup> <a name="retentionPeriodDays" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.retentionPeriodDays"></a>

```java
public java.lang.Number getRetentionPeriodDays();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleStorageInsightsDatasetConfigConfig <a name="GoogleStorageInsightsDatasetConfigConfig" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_insights_dataset_config.GoogleStorageInsightsDatasetConfigConfig;

GoogleStorageInsightsDatasetConfigConfig.builder()
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
    .datasetConfigId(java.lang.String)
    .identity(GoogleStorageInsightsDatasetConfigIdentity)
    .location(java.lang.String)
    .retentionPeriodDays(java.lang.Number)
//  .description(java.lang.String)
//  .excludeCloudStorageBuckets(GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets)
//  .excludeCloudStorageLocations(GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations)
//  .id(java.lang.String)
//  .includeCloudStorageBuckets(GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets)
//  .includeCloudStorageLocations(GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations)
//  .includeNewlyCreatedBuckets(java.lang.Boolean)
//  .includeNewlyCreatedBuckets(IResolvable)
//  .linkDataset(java.lang.Boolean)
//  .linkDataset(IResolvable)
//  .organizationNumber(java.lang.String)
//  .organizationScope(java.lang.Boolean)
//  .organizationScope(IResolvable)
//  .project(java.lang.String)
//  .sourceFolders(GoogleStorageInsightsDatasetConfigSourceFolders)
//  .sourceProjects(GoogleStorageInsightsDatasetConfigSourceProjects)
//  .timeouts(GoogleStorageInsightsDatasetConfigTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.datasetConfigId">datasetConfigId</a></code> | <code>java.lang.String</code> | The user-defined ID of the DatasetConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentity">GoogleStorageInsightsDatasetConfigIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the DatasetConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.retentionPeriodDays">retentionPeriodDays</a></code> | <code>java.lang.Number</code> | Number of days of history that must be retained. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional user-provided description for the dataset configuration with a maximum length of 256 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.excludeCloudStorageBuckets">excludeCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets</a></code> | exclude_cloud_storage_buckets block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.excludeCloudStorageLocations">excludeCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations</a></code> | exclude_cloud_storage_locations block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#id GoogleStorageInsightsDatasetConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.includeCloudStorageBuckets">includeCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets</a></code> | include_cloud_storage_buckets block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.includeCloudStorageLocations">includeCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations</a></code> | include_cloud_storage_locations block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.includeNewlyCreatedBuckets">includeNewlyCreatedBuckets</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, the request includes all the newly created buckets in the dataset that meet the inclusion and exclusion rules. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.linkDataset">linkDataset</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | A boolean terraform only flag to link/unlink dataset. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.organizationNumber">organizationNumber</a></code> | <code>java.lang.String</code> | Organization resource ID that the source projects should belong to. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.organizationScope">organizationScope</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Defines the options for providing a source organization for the DatasetConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#project GoogleStorageInsightsDatasetConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.sourceFolders">sourceFolders</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFolders">GoogleStorageInsightsDatasetConfigSourceFolders</a></code> | source_folders block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.sourceProjects">sourceProjects</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjects">GoogleStorageInsightsDatasetConfigSourceProjects</a></code> | source_projects block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts">GoogleStorageInsightsDatasetConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `datasetConfigId`<sup>Required</sup> <a name="datasetConfigId" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.datasetConfigId"></a>

```java
public java.lang.String getDatasetConfigId();
```

- *Type:* java.lang.String

The user-defined ID of the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#dataset_config_id GoogleStorageInsightsDatasetConfig#dataset_config_id}

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.identity"></a>

```java
public GoogleStorageInsightsDatasetConfigIdentity getIdentity();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentity">GoogleStorageInsightsDatasetConfigIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#identity GoogleStorageInsightsDatasetConfig#identity}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#location GoogleStorageInsightsDatasetConfig#location}

---

##### `retentionPeriodDays`<sup>Required</sup> <a name="retentionPeriodDays" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.retentionPeriodDays"></a>

```java
public java.lang.Number getRetentionPeriodDays();
```

- *Type:* java.lang.Number

Number of days of history that must be retained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#retention_period_days GoogleStorageInsightsDatasetConfig#retention_period_days}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional user-provided description for the dataset configuration with a maximum length of 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#description GoogleStorageInsightsDatasetConfig#description}

---

##### `excludeCloudStorageBuckets`<sup>Optional</sup> <a name="excludeCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.excludeCloudStorageBuckets"></a>

```java
public GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets getExcludeCloudStorageBuckets();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets</a>

exclude_cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#exclude_cloud_storage_buckets GoogleStorageInsightsDatasetConfig#exclude_cloud_storage_buckets}

---

##### `excludeCloudStorageLocations`<sup>Optional</sup> <a name="excludeCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.excludeCloudStorageLocations"></a>

```java
public GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations getExcludeCloudStorageLocations();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations</a>

exclude_cloud_storage_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#exclude_cloud_storage_locations GoogleStorageInsightsDatasetConfig#exclude_cloud_storage_locations}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#id GoogleStorageInsightsDatasetConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeCloudStorageBuckets`<sup>Optional</sup> <a name="includeCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.includeCloudStorageBuckets"></a>

```java
public GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets getIncludeCloudStorageBuckets();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets</a>

include_cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#include_cloud_storage_buckets GoogleStorageInsightsDatasetConfig#include_cloud_storage_buckets}

---

##### `includeCloudStorageLocations`<sup>Optional</sup> <a name="includeCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.includeCloudStorageLocations"></a>

```java
public GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations getIncludeCloudStorageLocations();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations</a>

include_cloud_storage_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#include_cloud_storage_locations GoogleStorageInsightsDatasetConfig#include_cloud_storage_locations}

---

##### `includeNewlyCreatedBuckets`<sup>Optional</sup> <a name="includeNewlyCreatedBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.includeNewlyCreatedBuckets"></a>

```java
public java.lang.Object getIncludeNewlyCreatedBuckets();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, the request includes all the newly created buckets in the dataset that meet the inclusion and exclusion rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#include_newly_created_buckets GoogleStorageInsightsDatasetConfig#include_newly_created_buckets}

---

##### `linkDataset`<sup>Optional</sup> <a name="linkDataset" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.linkDataset"></a>

```java
public java.lang.Object getLinkDataset();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

A boolean terraform only flag to link/unlink dataset.

Setting this field to true while creation will automatically link the created dataset as an additional functionality.
-> **Note** A dataset config resource can only be destroyed once it is unlinked,
so users must set this field to false to unlink the dataset and destroy the dataset config resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#link_dataset GoogleStorageInsightsDatasetConfig#link_dataset}

---

##### `organizationNumber`<sup>Optional</sup> <a name="organizationNumber" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.organizationNumber"></a>

```java
public java.lang.String getOrganizationNumber();
```

- *Type:* java.lang.String

Organization resource ID that the source projects should belong to.

Projects that do not belong to the provided organization are not considered when creating the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#organization_number GoogleStorageInsightsDatasetConfig#organization_number}

---

##### `organizationScope`<sup>Optional</sup> <a name="organizationScope" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.organizationScope"></a>

```java
public java.lang.Object getOrganizationScope();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Defines the options for providing a source organization for the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#organization_scope GoogleStorageInsightsDatasetConfig#organization_scope}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#project GoogleStorageInsightsDatasetConfig#project}.

---

##### `sourceFolders`<sup>Optional</sup> <a name="sourceFolders" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.sourceFolders"></a>

```java
public GoogleStorageInsightsDatasetConfigSourceFolders getSourceFolders();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFolders">GoogleStorageInsightsDatasetConfigSourceFolders</a>

source_folders block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#source_folders GoogleStorageInsightsDatasetConfig#source_folders}

---

##### `sourceProjects`<sup>Optional</sup> <a name="sourceProjects" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.sourceProjects"></a>

```java
public GoogleStorageInsightsDatasetConfigSourceProjects getSourceProjects();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjects">GoogleStorageInsightsDatasetConfigSourceProjects</a>

source_projects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#source_projects GoogleStorageInsightsDatasetConfig#source_projects}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.timeouts"></a>

```java
public GoogleStorageInsightsDatasetConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts">GoogleStorageInsightsDatasetConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#timeouts GoogleStorageInsightsDatasetConfig#timeouts}

---

### GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets <a name="GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_insights_dataset_config.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets;

GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets.builder()
    .cloudStorageBuckets(IResolvable)
    .cloudStorageBuckets(java.util.List<GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets.property.cloudStorageBuckets">cloudStorageBuckets</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets</a>></code> | cloud_storage_buckets block. |

---

##### `cloudStorageBuckets`<sup>Required</sup> <a name="cloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets.property.cloudStorageBuckets"></a>

```java
public java.lang.Object getCloudStorageBuckets();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets</a>>

cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#cloud_storage_buckets GoogleStorageInsightsDatasetConfig#cloud_storage_buckets}

---

### GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets <a name="GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_insights_dataset_config.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets;

GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets.builder()
//  .bucketName(java.lang.String)
//  .bucketPrefixRegex(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | The list of cloud storage bucket names to exclude in the DatasetConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets.property.bucketPrefixRegex">bucketPrefixRegex</a></code> | <code>java.lang.String</code> | The list of regex patterns for bucket names matching the regex. |

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

The list of cloud storage bucket names to exclude in the DatasetConfig.

Exactly one of the bucket_name and bucket_prefix_regex should be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#bucket_name GoogleStorageInsightsDatasetConfig#bucket_name}

---

##### `bucketPrefixRegex`<sup>Optional</sup> <a name="bucketPrefixRegex" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets.property.bucketPrefixRegex"></a>

```java
public java.lang.String getBucketPrefixRegex();
```

- *Type:* java.lang.String

The list of regex patterns for bucket names matching the regex.

Regex should follow the syntax specified in google/re2 on GitHub.
Exactly one of the bucket_name and bucket_prefix_regex should be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#bucket_prefix_regex GoogleStorageInsightsDatasetConfig#bucket_prefix_regex}

---

### GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations <a name="GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_insights_dataset_config.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations;

GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations.builder()
    .locations(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations.property.locations">locations</a></code> | <code>java.util.List<java.lang.String></code> | The list of cloud storage locations to exclude in the DatasetConfig. |

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations.property.locations"></a>

```java
public java.util.List<java.lang.String> getLocations();
```

- *Type:* java.util.List<java.lang.String>

The list of cloud storage locations to exclude in the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#locations GoogleStorageInsightsDatasetConfig#locations}

---

### GoogleStorageInsightsDatasetConfigIdentity <a name="GoogleStorageInsightsDatasetConfigIdentity" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_insights_dataset_config.GoogleStorageInsightsDatasetConfigIdentity;

GoogleStorageInsightsDatasetConfigIdentity.builder()
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentity.property.type">type</a></code> | <code>java.lang.String</code> | Type of identity to use for the DatasetConfig. Possible values: ["IDENTITY_TYPE_PER_CONFIG", "IDENTITY_TYPE_PER_PROJECT"]. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Type of identity to use for the DatasetConfig. Possible values: ["IDENTITY_TYPE_PER_CONFIG", "IDENTITY_TYPE_PER_PROJECT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#type GoogleStorageInsightsDatasetConfig#type}

---

### GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets <a name="GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_insights_dataset_config.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets;

GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets.builder()
    .cloudStorageBuckets(IResolvable)
    .cloudStorageBuckets(java.util.List<GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets.property.cloudStorageBuckets">cloudStorageBuckets</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets</a>></code> | cloud_storage_buckets block. |

---

##### `cloudStorageBuckets`<sup>Required</sup> <a name="cloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets.property.cloudStorageBuckets"></a>

```java
public java.lang.Object getCloudStorageBuckets();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets</a>>

cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#cloud_storage_buckets GoogleStorageInsightsDatasetConfig#cloud_storage_buckets}

---

### GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets <a name="GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_insights_dataset_config.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets;

GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets.builder()
//  .bucketName(java.lang.String)
//  .bucketPrefixRegex(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | The list of cloud storage bucket names to include in the DatasetConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets.property.bucketPrefixRegex">bucketPrefixRegex</a></code> | <code>java.lang.String</code> | The list of regex patterns for bucket names matching the regex. |

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

The list of cloud storage bucket names to include in the DatasetConfig.

Exactly one of the bucket_name and bucket_prefix_regex should be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#bucket_name GoogleStorageInsightsDatasetConfig#bucket_name}

---

##### `bucketPrefixRegex`<sup>Optional</sup> <a name="bucketPrefixRegex" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets.property.bucketPrefixRegex"></a>

```java
public java.lang.String getBucketPrefixRegex();
```

- *Type:* java.lang.String

The list of regex patterns for bucket names matching the regex.

Regex should follow the syntax specified in google/re2 on GitHub.
Exactly one of the bucket_name and bucket_prefix_regex should be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#bucket_prefix_regex GoogleStorageInsightsDatasetConfig#bucket_prefix_regex}

---

### GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations <a name="GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_insights_dataset_config.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations;

GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations.builder()
    .locations(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations.property.locations">locations</a></code> | <code>java.util.List<java.lang.String></code> | The list of cloud storage locations to include in the DatasetConfig. |

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations.property.locations"></a>

```java
public java.util.List<java.lang.String> getLocations();
```

- *Type:* java.util.List<java.lang.String>

The list of cloud storage locations to include in the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#locations GoogleStorageInsightsDatasetConfig#locations}

---

### GoogleStorageInsightsDatasetConfigLink <a name="GoogleStorageInsightsDatasetConfigLink" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLink.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_insights_dataset_config.GoogleStorageInsightsDatasetConfigLink;

GoogleStorageInsightsDatasetConfigLink.builder()
    .build();
```


### GoogleStorageInsightsDatasetConfigSourceFolders <a name="GoogleStorageInsightsDatasetConfigSourceFolders" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFolders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFolders.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_insights_dataset_config.GoogleStorageInsightsDatasetConfigSourceFolders;

GoogleStorageInsightsDatasetConfigSourceFolders.builder()
//  .folderNumbers(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFolders.property.folderNumbers">folderNumbers</a></code> | <code>java.util.List<java.lang.String></code> | The list of folder numbers to include in the DatasetConfig. |

---

##### `folderNumbers`<sup>Optional</sup> <a name="folderNumbers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFolders.property.folderNumbers"></a>

```java
public java.util.List<java.lang.String> getFolderNumbers();
```

- *Type:* java.util.List<java.lang.String>

The list of folder numbers to include in the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#folder_numbers GoogleStorageInsightsDatasetConfig#folder_numbers}

---

### GoogleStorageInsightsDatasetConfigSourceProjects <a name="GoogleStorageInsightsDatasetConfigSourceProjects" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjects"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjects.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_insights_dataset_config.GoogleStorageInsightsDatasetConfigSourceProjects;

GoogleStorageInsightsDatasetConfigSourceProjects.builder()
//  .projectNumbers(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjects.property.projectNumbers">projectNumbers</a></code> | <code>java.util.List<java.lang.String></code> | The list of project numbers to include in the DatasetConfig. |

---

##### `projectNumbers`<sup>Optional</sup> <a name="projectNumbers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjects.property.projectNumbers"></a>

```java
public java.util.List<java.lang.String> getProjectNumbers();
```

- *Type:* java.util.List<java.lang.String>

The list of project numbers to include in the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#project_numbers GoogleStorageInsightsDatasetConfig#project_numbers}

---

### GoogleStorageInsightsDatasetConfigTimeouts <a name="GoogleStorageInsightsDatasetConfigTimeouts" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_insights_dataset_config.GoogleStorageInsightsDatasetConfigTimeouts;

GoogleStorageInsightsDatasetConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#create GoogleStorageInsightsDatasetConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#delete GoogleStorageInsightsDatasetConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#update GoogleStorageInsightsDatasetConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#create GoogleStorageInsightsDatasetConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#delete GoogleStorageInsightsDatasetConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_insights_dataset_config#update GoogleStorageInsightsDatasetConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList <a name="GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_insights_dataset_config.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList;

new GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.get"></a>

```java
public GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets</a>>

---


### GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference <a name="GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_insights_dataset_config.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference;

new GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketPrefixRegex">resetBucketPrefixRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketName` <a name="resetBucketName" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketName"></a>

```java
public void resetBucketName()
```

##### `resetBucketPrefixRegex` <a name="resetBucketPrefixRegex" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketPrefixRegex"></a>

```java
public void resetBucketPrefixRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegexInput">bucketPrefixRegexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegex">bucketPrefixRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `bucketPrefixRegexInput`<sup>Optional</sup> <a name="bucketPrefixRegexInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegexInput"></a>

```java
public java.lang.String getBucketPrefixRegexInput();
```

- *Type:* java.lang.String

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `bucketPrefixRegex`<sup>Required</sup> <a name="bucketPrefixRegex" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegex"></a>

```java
public java.lang.String getBucketPrefixRegex();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets</a>

---


### GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference <a name="GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_insights_dataset_config.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference;

new GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.putCloudStorageBuckets">putCloudStorageBuckets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudStorageBuckets` <a name="putCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.putCloudStorageBuckets"></a>

```java
public void putCloudStorageBuckets(IResolvable OR java.util.List<GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.putCloudStorageBuckets.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.cloudStorageBuckets">cloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.cloudStorageBucketsInput">cloudStorageBucketsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudStorageBuckets`<sup>Required</sup> <a name="cloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.cloudStorageBuckets"></a>

```java
public GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList getCloudStorageBuckets();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList</a>

---

##### `cloudStorageBucketsInput`<sup>Optional</sup> <a name="cloudStorageBucketsInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.cloudStorageBucketsInput"></a>

```java
public java.lang.Object getCloudStorageBucketsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.internalValue"></a>

```java
public GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets</a>

---


### GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference <a name="GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_insights_dataset_config.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference;

new GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.locationsInput">locationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.locations">locations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `locationsInput`<sup>Optional</sup> <a name="locationsInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.locationsInput"></a>

```java
public java.util.List<java.lang.String> getLocationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.locations"></a>

```java
public java.util.List<java.lang.String> getLocations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.internalValue"></a>

```java
public GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations</a>

---


### GoogleStorageInsightsDatasetConfigIdentityOutputReference <a name="GoogleStorageInsightsDatasetConfigIdentityOutputReference" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_insights_dataset_config.GoogleStorageInsightsDatasetConfigIdentityOutputReference;

new GoogleStorageInsightsDatasetConfigIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentity">GoogleStorageInsightsDatasetConfigIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.property.internalValue"></a>

```java
public GoogleStorageInsightsDatasetConfigIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentity">GoogleStorageInsightsDatasetConfigIdentity</a>

---


### GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList <a name="GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_insights_dataset_config.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList;

new GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.get"></a>

```java
public GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets</a>>

---


### GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference <a name="GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_insights_dataset_config.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference;

new GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketPrefixRegex">resetBucketPrefixRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketName` <a name="resetBucketName" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketName"></a>

```java
public void resetBucketName()
```

##### `resetBucketPrefixRegex` <a name="resetBucketPrefixRegex" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketPrefixRegex"></a>

```java
public void resetBucketPrefixRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegexInput">bucketPrefixRegexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegex">bucketPrefixRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `bucketPrefixRegexInput`<sup>Optional</sup> <a name="bucketPrefixRegexInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegexInput"></a>

```java
public java.lang.String getBucketPrefixRegexInput();
```

- *Type:* java.lang.String

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `bucketPrefixRegex`<sup>Required</sup> <a name="bucketPrefixRegex" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegex"></a>

```java
public java.lang.String getBucketPrefixRegex();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets</a>

---


### GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference <a name="GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_insights_dataset_config.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference;

new GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.putCloudStorageBuckets">putCloudStorageBuckets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudStorageBuckets` <a name="putCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.putCloudStorageBuckets"></a>

```java
public void putCloudStorageBuckets(IResolvable OR java.util.List<GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.putCloudStorageBuckets.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.cloudStorageBuckets">cloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.cloudStorageBucketsInput">cloudStorageBucketsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudStorageBuckets`<sup>Required</sup> <a name="cloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.cloudStorageBuckets"></a>

```java
public GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList getCloudStorageBuckets();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList</a>

---

##### `cloudStorageBucketsInput`<sup>Optional</sup> <a name="cloudStorageBucketsInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.cloudStorageBucketsInput"></a>

```java
public java.lang.Object getCloudStorageBucketsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.internalValue"></a>

```java
public GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets</a>

---


### GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference <a name="GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_insights_dataset_config.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference;

new GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.locationsInput">locationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.locations">locations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `locationsInput`<sup>Optional</sup> <a name="locationsInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.locationsInput"></a>

```java
public java.util.List<java.lang.String> getLocationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.locations"></a>

```java
public java.util.List<java.lang.String> getLocations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.internalValue"></a>

```java
public GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations</a>

---


### GoogleStorageInsightsDatasetConfigLinkList <a name="GoogleStorageInsightsDatasetConfigLinkList" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_insights_dataset_config.GoogleStorageInsightsDatasetConfigLinkList;

new GoogleStorageInsightsDatasetConfigLinkList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.get"></a>

```java
public GoogleStorageInsightsDatasetConfigLinkOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleStorageInsightsDatasetConfigLinkOutputReference <a name="GoogleStorageInsightsDatasetConfigLinkOutputReference" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_insights_dataset_config.GoogleStorageInsightsDatasetConfigLinkOutputReference;

new GoogleStorageInsightsDatasetConfigLinkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.property.dataset">dataset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.property.linked">linked</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLink">GoogleStorageInsightsDatasetConfigLink</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.property.dataset"></a>

```java
public java.lang.String getDataset();
```

- *Type:* java.lang.String

---

##### `linked`<sup>Required</sup> <a name="linked" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.property.linked"></a>

```java
public IResolvable getLinked();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.property.internalValue"></a>

```java
public GoogleStorageInsightsDatasetConfigLink getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLink">GoogleStorageInsightsDatasetConfigLink</a>

---


### GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference <a name="GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_insights_dataset_config.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference;

new GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.resetFolderNumbers">resetFolderNumbers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFolderNumbers` <a name="resetFolderNumbers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.resetFolderNumbers"></a>

```java
public void resetFolderNumbers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.folderNumbersInput">folderNumbersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.folderNumbers">folderNumbers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFolders">GoogleStorageInsightsDatasetConfigSourceFolders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `folderNumbersInput`<sup>Optional</sup> <a name="folderNumbersInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.folderNumbersInput"></a>

```java
public java.util.List<java.lang.String> getFolderNumbersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `folderNumbers`<sup>Required</sup> <a name="folderNumbers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.folderNumbers"></a>

```java
public java.util.List<java.lang.String> getFolderNumbers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.internalValue"></a>

```java
public GoogleStorageInsightsDatasetConfigSourceFolders getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFolders">GoogleStorageInsightsDatasetConfigSourceFolders</a>

---


### GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference <a name="GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_insights_dataset_config.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference;

new GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.resetProjectNumbers">resetProjectNumbers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProjectNumbers` <a name="resetProjectNumbers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.resetProjectNumbers"></a>

```java
public void resetProjectNumbers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.projectNumbersInput">projectNumbersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.projectNumbers">projectNumbers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjects">GoogleStorageInsightsDatasetConfigSourceProjects</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `projectNumbersInput`<sup>Optional</sup> <a name="projectNumbersInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.projectNumbersInput"></a>

```java
public java.util.List<java.lang.String> getProjectNumbersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `projectNumbers`<sup>Required</sup> <a name="projectNumbers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.projectNumbers"></a>

```java
public java.util.List<java.lang.String> getProjectNumbers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.internalValue"></a>

```java
public GoogleStorageInsightsDatasetConfigSourceProjects getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjects">GoogleStorageInsightsDatasetConfigSourceProjects</a>

---


### GoogleStorageInsightsDatasetConfigTimeoutsOutputReference <a name="GoogleStorageInsightsDatasetConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_insights_dataset_config.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference;

new GoogleStorageInsightsDatasetConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts">GoogleStorageInsightsDatasetConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts">GoogleStorageInsightsDatasetConfigTimeouts</a>

---



