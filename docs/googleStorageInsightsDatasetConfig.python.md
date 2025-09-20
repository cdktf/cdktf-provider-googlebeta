# `googleStorageInsightsDatasetConfig` Submodule <a name="`googleStorageInsightsDatasetConfig` Submodule" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleStorageInsightsDatasetConfig <a name="GoogleStorageInsightsDatasetConfig" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config google_storage_insights_dataset_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_insights_dataset_config

googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dataset_config_id: str,
  identity: GoogleStorageInsightsDatasetConfigIdentity,
  location: str,
  retention_period_days: typing.Union[int, float],
  description: str = None,
  exclude_cloud_storage_buckets: GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets = None,
  exclude_cloud_storage_locations: GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations = None,
  id: str = None,
  include_cloud_storage_buckets: GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets = None,
  include_cloud_storage_locations: GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations = None,
  include_newly_created_buckets: typing.Union[bool, IResolvable] = None,
  link_dataset: typing.Union[bool, IResolvable] = None,
  organization_number: str = None,
  organization_scope: typing.Union[bool, IResolvable] = None,
  project: str = None,
  source_folders: GoogleStorageInsightsDatasetConfigSourceFolders = None,
  source_projects: GoogleStorageInsightsDatasetConfigSourceProjects = None,
  timeouts: GoogleStorageInsightsDatasetConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.datasetConfigId">dataset_config_id</a></code> | <code>str</code> | The user-defined ID of the DatasetConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentity">GoogleStorageInsightsDatasetConfigIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the DatasetConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.retentionPeriodDays">retention_period_days</a></code> | <code>typing.Union[int, float]</code> | Number of days of history that must be retained. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional user-provided description for the dataset configuration with a maximum length of 256 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.excludeCloudStorageBuckets">exclude_cloud_storage_buckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets</a></code> | exclude_cloud_storage_buckets block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.excludeCloudStorageLocations">exclude_cloud_storage_locations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations</a></code> | exclude_cloud_storage_locations block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#id GoogleStorageInsightsDatasetConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.includeCloudStorageBuckets">include_cloud_storage_buckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets</a></code> | include_cloud_storage_buckets block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.includeCloudStorageLocations">include_cloud_storage_locations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations</a></code> | include_cloud_storage_locations block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.includeNewlyCreatedBuckets">include_newly_created_buckets</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, the request includes all the newly created buckets in the dataset that meet the inclusion and exclusion rules. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.linkDataset">link_dataset</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | A boolean terraform only flag to link/unlink dataset. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.organizationNumber">organization_number</a></code> | <code>str</code> | Organization resource ID that the source projects should belong to. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.organizationScope">organization_scope</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defines the options for providing a source organization for the DatasetConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#project GoogleStorageInsightsDatasetConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.sourceFolders">source_folders</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFolders">GoogleStorageInsightsDatasetConfigSourceFolders</a></code> | source_folders block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.sourceProjects">source_projects</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjects">GoogleStorageInsightsDatasetConfigSourceProjects</a></code> | source_projects block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts">GoogleStorageInsightsDatasetConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dataset_config_id`<sup>Required</sup> <a name="dataset_config_id" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.datasetConfigId"></a>

- *Type:* str

The user-defined ID of the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#dataset_config_id GoogleStorageInsightsDatasetConfig#dataset_config_id}

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentity">GoogleStorageInsightsDatasetConfigIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#identity GoogleStorageInsightsDatasetConfig#identity}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.location"></a>

- *Type:* str

The location of the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#location GoogleStorageInsightsDatasetConfig#location}

---

##### `retention_period_days`<sup>Required</sup> <a name="retention_period_days" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.retentionPeriodDays"></a>

- *Type:* typing.Union[int, float]

Number of days of history that must be retained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#retention_period_days GoogleStorageInsightsDatasetConfig#retention_period_days}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.description"></a>

- *Type:* str

An optional user-provided description for the dataset configuration with a maximum length of 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#description GoogleStorageInsightsDatasetConfig#description}

---

##### `exclude_cloud_storage_buckets`<sup>Optional</sup> <a name="exclude_cloud_storage_buckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.excludeCloudStorageBuckets"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets</a>

exclude_cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#exclude_cloud_storage_buckets GoogleStorageInsightsDatasetConfig#exclude_cloud_storage_buckets}

---

##### `exclude_cloud_storage_locations`<sup>Optional</sup> <a name="exclude_cloud_storage_locations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.excludeCloudStorageLocations"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations</a>

exclude_cloud_storage_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#exclude_cloud_storage_locations GoogleStorageInsightsDatasetConfig#exclude_cloud_storage_locations}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#id GoogleStorageInsightsDatasetConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_cloud_storage_buckets`<sup>Optional</sup> <a name="include_cloud_storage_buckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.includeCloudStorageBuckets"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets</a>

include_cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#include_cloud_storage_buckets GoogleStorageInsightsDatasetConfig#include_cloud_storage_buckets}

---

##### `include_cloud_storage_locations`<sup>Optional</sup> <a name="include_cloud_storage_locations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.includeCloudStorageLocations"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations</a>

include_cloud_storage_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#include_cloud_storage_locations GoogleStorageInsightsDatasetConfig#include_cloud_storage_locations}

---

##### `include_newly_created_buckets`<sup>Optional</sup> <a name="include_newly_created_buckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.includeNewlyCreatedBuckets"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, the request includes all the newly created buckets in the dataset that meet the inclusion and exclusion rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#include_newly_created_buckets GoogleStorageInsightsDatasetConfig#include_newly_created_buckets}

---

##### `link_dataset`<sup>Optional</sup> <a name="link_dataset" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.linkDataset"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

A boolean terraform only flag to link/unlink dataset.

Setting this field to true while creation will automatically link the created dataset as an additional functionality.
-> **Note** A dataset config resource can only be destroyed once it is unlinked,
so users must set this field to false to unlink the dataset and destroy the dataset config resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#link_dataset GoogleStorageInsightsDatasetConfig#link_dataset}

---

##### `organization_number`<sup>Optional</sup> <a name="organization_number" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.organizationNumber"></a>

- *Type:* str

Organization resource ID that the source projects should belong to.

Projects that do not belong to the provided organization are not considered when creating the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#organization_number GoogleStorageInsightsDatasetConfig#organization_number}

---

##### `organization_scope`<sup>Optional</sup> <a name="organization_scope" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.organizationScope"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines the options for providing a source organization for the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#organization_scope GoogleStorageInsightsDatasetConfig#organization_scope}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#project GoogleStorageInsightsDatasetConfig#project}.

---

##### `source_folders`<sup>Optional</sup> <a name="source_folders" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.sourceFolders"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFolders">GoogleStorageInsightsDatasetConfigSourceFolders</a>

source_folders block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#source_folders GoogleStorageInsightsDatasetConfig#source_folders}

---

##### `source_projects`<sup>Optional</sup> <a name="source_projects" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.sourceProjects"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjects">GoogleStorageInsightsDatasetConfigSourceProjects</a>

source_projects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#source_projects GoogleStorageInsightsDatasetConfig#source_projects}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts">GoogleStorageInsightsDatasetConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#timeouts GoogleStorageInsightsDatasetConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putExcludeCloudStorageBuckets">put_exclude_cloud_storage_buckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putExcludeCloudStorageLocations">put_exclude_cloud_storage_locations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putIncludeCloudStorageBuckets">put_include_cloud_storage_buckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putIncludeCloudStorageLocations">put_include_cloud_storage_locations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putSourceFolders">put_source_folders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putSourceProjects">put_source_projects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetExcludeCloudStorageBuckets">reset_exclude_cloud_storage_buckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetExcludeCloudStorageLocations">reset_exclude_cloud_storage_locations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetIncludeCloudStorageBuckets">reset_include_cloud_storage_buckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetIncludeCloudStorageLocations">reset_include_cloud_storage_locations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetIncludeNewlyCreatedBuckets">reset_include_newly_created_buckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetLinkDataset">reset_link_dataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetOrganizationNumber">reset_organization_number</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetOrganizationScope">reset_organization_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetSourceFolders">reset_source_folders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetSourceProjects">reset_source_projects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_exclude_cloud_storage_buckets` <a name="put_exclude_cloud_storage_buckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putExcludeCloudStorageBuckets"></a>

```python
def put_exclude_cloud_storage_buckets(
  cloud_storage_buckets: typing.Union[IResolvable, typing.List[GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets]]
) -> None
```

###### `cloud_storage_buckets`<sup>Required</sup> <a name="cloud_storage_buckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putExcludeCloudStorageBuckets.parameter.cloudStorageBuckets"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets</a>]]

cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#cloud_storage_buckets GoogleStorageInsightsDatasetConfig#cloud_storage_buckets}

---

##### `put_exclude_cloud_storage_locations` <a name="put_exclude_cloud_storage_locations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putExcludeCloudStorageLocations"></a>

```python
def put_exclude_cloud_storage_locations(
  locations: typing.List[str]
) -> None
```

###### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putExcludeCloudStorageLocations.parameter.locations"></a>

- *Type:* typing.List[str]

The list of cloud storage locations to exclude in the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#locations GoogleStorageInsightsDatasetConfig#locations}

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putIdentity"></a>

```python
def put_identity(
  type: str
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putIdentity.parameter.type"></a>

- *Type:* str

Type of identity to use for the DatasetConfig. Possible values: ["IDENTITY_TYPE_PER_CONFIG", "IDENTITY_TYPE_PER_PROJECT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#type GoogleStorageInsightsDatasetConfig#type}

---

##### `put_include_cloud_storage_buckets` <a name="put_include_cloud_storage_buckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putIncludeCloudStorageBuckets"></a>

```python
def put_include_cloud_storage_buckets(
  cloud_storage_buckets: typing.Union[IResolvable, typing.List[GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets]]
) -> None
```

###### `cloud_storage_buckets`<sup>Required</sup> <a name="cloud_storage_buckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putIncludeCloudStorageBuckets.parameter.cloudStorageBuckets"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets</a>]]

cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#cloud_storage_buckets GoogleStorageInsightsDatasetConfig#cloud_storage_buckets}

---

##### `put_include_cloud_storage_locations` <a name="put_include_cloud_storage_locations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putIncludeCloudStorageLocations"></a>

```python
def put_include_cloud_storage_locations(
  locations: typing.List[str]
) -> None
```

###### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putIncludeCloudStorageLocations.parameter.locations"></a>

- *Type:* typing.List[str]

The list of cloud storage locations to include in the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#locations GoogleStorageInsightsDatasetConfig#locations}

---

##### `put_source_folders` <a name="put_source_folders" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putSourceFolders"></a>

```python
def put_source_folders(
  folder_numbers: typing.List[str] = None
) -> None
```

###### `folder_numbers`<sup>Optional</sup> <a name="folder_numbers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putSourceFolders.parameter.folderNumbers"></a>

- *Type:* typing.List[str]

The list of folder numbers to include in the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#folder_numbers GoogleStorageInsightsDatasetConfig#folder_numbers}

---

##### `put_source_projects` <a name="put_source_projects" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putSourceProjects"></a>

```python
def put_source_projects(
  project_numbers: typing.List[str] = None
) -> None
```

###### `project_numbers`<sup>Optional</sup> <a name="project_numbers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putSourceProjects.parameter.projectNumbers"></a>

- *Type:* typing.List[str]

The list of project numbers to include in the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#project_numbers GoogleStorageInsightsDatasetConfig#project_numbers}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#create GoogleStorageInsightsDatasetConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#delete GoogleStorageInsightsDatasetConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#update GoogleStorageInsightsDatasetConfig#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_exclude_cloud_storage_buckets` <a name="reset_exclude_cloud_storage_buckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetExcludeCloudStorageBuckets"></a>

```python
def reset_exclude_cloud_storage_buckets() -> None
```

##### `reset_exclude_cloud_storage_locations` <a name="reset_exclude_cloud_storage_locations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetExcludeCloudStorageLocations"></a>

```python
def reset_exclude_cloud_storage_locations() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_include_cloud_storage_buckets` <a name="reset_include_cloud_storage_buckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetIncludeCloudStorageBuckets"></a>

```python
def reset_include_cloud_storage_buckets() -> None
```

##### `reset_include_cloud_storage_locations` <a name="reset_include_cloud_storage_locations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetIncludeCloudStorageLocations"></a>

```python
def reset_include_cloud_storage_locations() -> None
```

##### `reset_include_newly_created_buckets` <a name="reset_include_newly_created_buckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetIncludeNewlyCreatedBuckets"></a>

```python
def reset_include_newly_created_buckets() -> None
```

##### `reset_link_dataset` <a name="reset_link_dataset" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetLinkDataset"></a>

```python
def reset_link_dataset() -> None
```

##### `reset_organization_number` <a name="reset_organization_number" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetOrganizationNumber"></a>

```python
def reset_organization_number() -> None
```

##### `reset_organization_scope` <a name="reset_organization_scope" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetOrganizationScope"></a>

```python
def reset_organization_scope() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_source_folders` <a name="reset_source_folders" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetSourceFolders"></a>

```python
def reset_source_folders() -> None
```

##### `reset_source_projects` <a name="reset_source_projects" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetSourceProjects"></a>

```python
def reset_source_projects() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleStorageInsightsDatasetConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_insights_dataset_config

googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_insights_dataset_config

googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_insights_dataset_config

googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_insights_dataset_config

googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleStorageInsightsDatasetConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleStorageInsightsDatasetConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleStorageInsightsDatasetConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleStorageInsightsDatasetConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.datasetConfigState">dataset_config_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.excludeCloudStorageBuckets">exclude_cloud_storage_buckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.excludeCloudStorageLocations">exclude_cloud_storage_locations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference">GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference">GoogleStorageInsightsDatasetConfigIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.includeCloudStorageBuckets">include_cloud_storage_buckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.includeCloudStorageLocations">include_cloud_storage_locations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference">GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.link">link</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList">GoogleStorageInsightsDatasetConfigLinkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.sourceFolders">source_folders</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference">GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.sourceProjects">source_projects</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference">GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference">GoogleStorageInsightsDatasetConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.datasetConfigIdInput">dataset_config_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.excludeCloudStorageBucketsInput">exclude_cloud_storage_buckets_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.excludeCloudStorageLocationsInput">exclude_cloud_storage_locations_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentity">GoogleStorageInsightsDatasetConfigIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.includeCloudStorageBucketsInput">include_cloud_storage_buckets_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.includeCloudStorageLocationsInput">include_cloud_storage_locations_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.includeNewlyCreatedBucketsInput">include_newly_created_buckets_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.linkDatasetInput">link_dataset_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.organizationNumberInput">organization_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.organizationScopeInput">organization_scope_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.retentionPeriodDaysInput">retention_period_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.sourceFoldersInput">source_folders_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFolders">GoogleStorageInsightsDatasetConfigSourceFolders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.sourceProjectsInput">source_projects_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjects">GoogleStorageInsightsDatasetConfigSourceProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts">GoogleStorageInsightsDatasetConfigTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.datasetConfigId">dataset_config_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.includeNewlyCreatedBuckets">include_newly_created_buckets</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.linkDataset">link_dataset</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.organizationNumber">organization_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.organizationScope">organization_scope</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.retentionPeriodDays">retention_period_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `dataset_config_state`<sup>Required</sup> <a name="dataset_config_state" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.datasetConfigState"></a>

```python
dataset_config_state: str
```

- *Type:* str

---

##### `exclude_cloud_storage_buckets`<sup>Required</sup> <a name="exclude_cloud_storage_buckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.excludeCloudStorageBuckets"></a>

```python
exclude_cloud_storage_buckets: GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference</a>

---

##### `exclude_cloud_storage_locations`<sup>Required</sup> <a name="exclude_cloud_storage_locations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.excludeCloudStorageLocations"></a>

```python
exclude_cloud_storage_locations: GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference">GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.identity"></a>

```python
identity: GoogleStorageInsightsDatasetConfigIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference">GoogleStorageInsightsDatasetConfigIdentityOutputReference</a>

---

##### `include_cloud_storage_buckets`<sup>Required</sup> <a name="include_cloud_storage_buckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.includeCloudStorageBuckets"></a>

```python
include_cloud_storage_buckets: GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference</a>

---

##### `include_cloud_storage_locations`<sup>Required</sup> <a name="include_cloud_storage_locations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.includeCloudStorageLocations"></a>

```python
include_cloud_storage_locations: GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference">GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference</a>

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.link"></a>

```python
link: GoogleStorageInsightsDatasetConfigLinkList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList">GoogleStorageInsightsDatasetConfigLinkList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `source_folders`<sup>Required</sup> <a name="source_folders" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.sourceFolders"></a>

```python
source_folders: GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference">GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference</a>

---

##### `source_projects`<sup>Required</sup> <a name="source_projects" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.sourceProjects"></a>

```python
source_projects: GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference">GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.timeouts"></a>

```python
timeouts: GoogleStorageInsightsDatasetConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference">GoogleStorageInsightsDatasetConfigTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `dataset_config_id_input`<sup>Optional</sup> <a name="dataset_config_id_input" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.datasetConfigIdInput"></a>

```python
dataset_config_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `exclude_cloud_storage_buckets_input`<sup>Optional</sup> <a name="exclude_cloud_storage_buckets_input" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.excludeCloudStorageBucketsInput"></a>

```python
exclude_cloud_storage_buckets_input: GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets</a>

---

##### `exclude_cloud_storage_locations_input`<sup>Optional</sup> <a name="exclude_cloud_storage_locations_input" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.excludeCloudStorageLocationsInput"></a>

```python
exclude_cloud_storage_locations_input: GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations</a>

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.identityInput"></a>

```python
identity_input: GoogleStorageInsightsDatasetConfigIdentity
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentity">GoogleStorageInsightsDatasetConfigIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `include_cloud_storage_buckets_input`<sup>Optional</sup> <a name="include_cloud_storage_buckets_input" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.includeCloudStorageBucketsInput"></a>

```python
include_cloud_storage_buckets_input: GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets</a>

---

##### `include_cloud_storage_locations_input`<sup>Optional</sup> <a name="include_cloud_storage_locations_input" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.includeCloudStorageLocationsInput"></a>

```python
include_cloud_storage_locations_input: GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations</a>

---

##### `include_newly_created_buckets_input`<sup>Optional</sup> <a name="include_newly_created_buckets_input" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.includeNewlyCreatedBucketsInput"></a>

```python
include_newly_created_buckets_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `link_dataset_input`<sup>Optional</sup> <a name="link_dataset_input" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.linkDatasetInput"></a>

```python
link_dataset_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `organization_number_input`<sup>Optional</sup> <a name="organization_number_input" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.organizationNumberInput"></a>

```python
organization_number_input: str
```

- *Type:* str

---

##### `organization_scope_input`<sup>Optional</sup> <a name="organization_scope_input" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.organizationScopeInput"></a>

```python
organization_scope_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `retention_period_days_input`<sup>Optional</sup> <a name="retention_period_days_input" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.retentionPeriodDaysInput"></a>

```python
retention_period_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_folders_input`<sup>Optional</sup> <a name="source_folders_input" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.sourceFoldersInput"></a>

```python
source_folders_input: GoogleStorageInsightsDatasetConfigSourceFolders
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFolders">GoogleStorageInsightsDatasetConfigSourceFolders</a>

---

##### `source_projects_input`<sup>Optional</sup> <a name="source_projects_input" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.sourceProjectsInput"></a>

```python
source_projects_input: GoogleStorageInsightsDatasetConfigSourceProjects
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjects">GoogleStorageInsightsDatasetConfigSourceProjects</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleStorageInsightsDatasetConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts">GoogleStorageInsightsDatasetConfigTimeouts</a>]

---

##### `dataset_config_id`<sup>Required</sup> <a name="dataset_config_id" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.datasetConfigId"></a>

```python
dataset_config_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `include_newly_created_buckets`<sup>Required</sup> <a name="include_newly_created_buckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.includeNewlyCreatedBuckets"></a>

```python
include_newly_created_buckets: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `link_dataset`<sup>Required</sup> <a name="link_dataset" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.linkDataset"></a>

```python
link_dataset: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `organization_number`<sup>Required</sup> <a name="organization_number" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.organizationNumber"></a>

```python
organization_number: str
```

- *Type:* str

---

##### `organization_scope`<sup>Required</sup> <a name="organization_scope" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.organizationScope"></a>

```python
organization_scope: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `retention_period_days`<sup>Required</sup> <a name="retention_period_days" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.retentionPeriodDays"></a>

```python
retention_period_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleStorageInsightsDatasetConfigConfig <a name="GoogleStorageInsightsDatasetConfigConfig" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_insights_dataset_config

googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dataset_config_id: str,
  identity: GoogleStorageInsightsDatasetConfigIdentity,
  location: str,
  retention_period_days: typing.Union[int, float],
  description: str = None,
  exclude_cloud_storage_buckets: GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets = None,
  exclude_cloud_storage_locations: GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations = None,
  id: str = None,
  include_cloud_storage_buckets: GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets = None,
  include_cloud_storage_locations: GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations = None,
  include_newly_created_buckets: typing.Union[bool, IResolvable] = None,
  link_dataset: typing.Union[bool, IResolvable] = None,
  organization_number: str = None,
  organization_scope: typing.Union[bool, IResolvable] = None,
  project: str = None,
  source_folders: GoogleStorageInsightsDatasetConfigSourceFolders = None,
  source_projects: GoogleStorageInsightsDatasetConfigSourceProjects = None,
  timeouts: GoogleStorageInsightsDatasetConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.datasetConfigId">dataset_config_id</a></code> | <code>str</code> | The user-defined ID of the DatasetConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentity">GoogleStorageInsightsDatasetConfigIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.location">location</a></code> | <code>str</code> | The location of the DatasetConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.retentionPeriodDays">retention_period_days</a></code> | <code>typing.Union[int, float]</code> | Number of days of history that must be retained. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.description">description</a></code> | <code>str</code> | An optional user-provided description for the dataset configuration with a maximum length of 256 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.excludeCloudStorageBuckets">exclude_cloud_storage_buckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets</a></code> | exclude_cloud_storage_buckets block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.excludeCloudStorageLocations">exclude_cloud_storage_locations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations</a></code> | exclude_cloud_storage_locations block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#id GoogleStorageInsightsDatasetConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.includeCloudStorageBuckets">include_cloud_storage_buckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets</a></code> | include_cloud_storage_buckets block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.includeCloudStorageLocations">include_cloud_storage_locations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations</a></code> | include_cloud_storage_locations block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.includeNewlyCreatedBuckets">include_newly_created_buckets</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, the request includes all the newly created buckets in the dataset that meet the inclusion and exclusion rules. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.linkDataset">link_dataset</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | A boolean terraform only flag to link/unlink dataset. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.organizationNumber">organization_number</a></code> | <code>str</code> | Organization resource ID that the source projects should belong to. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.organizationScope">organization_scope</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defines the options for providing a source organization for the DatasetConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#project GoogleStorageInsightsDatasetConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.sourceFolders">source_folders</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFolders">GoogleStorageInsightsDatasetConfigSourceFolders</a></code> | source_folders block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.sourceProjects">source_projects</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjects">GoogleStorageInsightsDatasetConfigSourceProjects</a></code> | source_projects block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts">GoogleStorageInsightsDatasetConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dataset_config_id`<sup>Required</sup> <a name="dataset_config_id" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.datasetConfigId"></a>

```python
dataset_config_id: str
```

- *Type:* str

The user-defined ID of the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#dataset_config_id GoogleStorageInsightsDatasetConfig#dataset_config_id}

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.identity"></a>

```python
identity: GoogleStorageInsightsDatasetConfigIdentity
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentity">GoogleStorageInsightsDatasetConfigIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#identity GoogleStorageInsightsDatasetConfig#identity}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#location GoogleStorageInsightsDatasetConfig#location}

---

##### `retention_period_days`<sup>Required</sup> <a name="retention_period_days" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.retentionPeriodDays"></a>

```python
retention_period_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of days of history that must be retained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#retention_period_days GoogleStorageInsightsDatasetConfig#retention_period_days}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional user-provided description for the dataset configuration with a maximum length of 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#description GoogleStorageInsightsDatasetConfig#description}

---

##### `exclude_cloud_storage_buckets`<sup>Optional</sup> <a name="exclude_cloud_storage_buckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.excludeCloudStorageBuckets"></a>

```python
exclude_cloud_storage_buckets: GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets</a>

exclude_cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#exclude_cloud_storage_buckets GoogleStorageInsightsDatasetConfig#exclude_cloud_storage_buckets}

---

##### `exclude_cloud_storage_locations`<sup>Optional</sup> <a name="exclude_cloud_storage_locations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.excludeCloudStorageLocations"></a>

```python
exclude_cloud_storage_locations: GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations</a>

exclude_cloud_storage_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#exclude_cloud_storage_locations GoogleStorageInsightsDatasetConfig#exclude_cloud_storage_locations}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#id GoogleStorageInsightsDatasetConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_cloud_storage_buckets`<sup>Optional</sup> <a name="include_cloud_storage_buckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.includeCloudStorageBuckets"></a>

```python
include_cloud_storage_buckets: GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets</a>

include_cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#include_cloud_storage_buckets GoogleStorageInsightsDatasetConfig#include_cloud_storage_buckets}

---

##### `include_cloud_storage_locations`<sup>Optional</sup> <a name="include_cloud_storage_locations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.includeCloudStorageLocations"></a>

```python
include_cloud_storage_locations: GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations</a>

include_cloud_storage_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#include_cloud_storage_locations GoogleStorageInsightsDatasetConfig#include_cloud_storage_locations}

---

##### `include_newly_created_buckets`<sup>Optional</sup> <a name="include_newly_created_buckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.includeNewlyCreatedBuckets"></a>

```python
include_newly_created_buckets: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, the request includes all the newly created buckets in the dataset that meet the inclusion and exclusion rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#include_newly_created_buckets GoogleStorageInsightsDatasetConfig#include_newly_created_buckets}

---

##### `link_dataset`<sup>Optional</sup> <a name="link_dataset" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.linkDataset"></a>

```python
link_dataset: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

A boolean terraform only flag to link/unlink dataset.

Setting this field to true while creation will automatically link the created dataset as an additional functionality.
-> **Note** A dataset config resource can only be destroyed once it is unlinked,
so users must set this field to false to unlink the dataset and destroy the dataset config resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#link_dataset GoogleStorageInsightsDatasetConfig#link_dataset}

---

##### `organization_number`<sup>Optional</sup> <a name="organization_number" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.organizationNumber"></a>

```python
organization_number: str
```

- *Type:* str

Organization resource ID that the source projects should belong to.

Projects that do not belong to the provided organization are not considered when creating the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#organization_number GoogleStorageInsightsDatasetConfig#organization_number}

---

##### `organization_scope`<sup>Optional</sup> <a name="organization_scope" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.organizationScope"></a>

```python
organization_scope: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines the options for providing a source organization for the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#organization_scope GoogleStorageInsightsDatasetConfig#organization_scope}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#project GoogleStorageInsightsDatasetConfig#project}.

---

##### `source_folders`<sup>Optional</sup> <a name="source_folders" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.sourceFolders"></a>

```python
source_folders: GoogleStorageInsightsDatasetConfigSourceFolders
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFolders">GoogleStorageInsightsDatasetConfigSourceFolders</a>

source_folders block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#source_folders GoogleStorageInsightsDatasetConfig#source_folders}

---

##### `source_projects`<sup>Optional</sup> <a name="source_projects" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.sourceProjects"></a>

```python
source_projects: GoogleStorageInsightsDatasetConfigSourceProjects
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjects">GoogleStorageInsightsDatasetConfigSourceProjects</a>

source_projects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#source_projects GoogleStorageInsightsDatasetConfig#source_projects}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.timeouts"></a>

```python
timeouts: GoogleStorageInsightsDatasetConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts">GoogleStorageInsightsDatasetConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#timeouts GoogleStorageInsightsDatasetConfig#timeouts}

---

### GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets <a name="GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_insights_dataset_config

googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets(
  cloud_storage_buckets: typing.Union[IResolvable, typing.List[GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets.property.cloudStorageBuckets">cloud_storage_buckets</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets</a>]]</code> | cloud_storage_buckets block. |

---

##### `cloud_storage_buckets`<sup>Required</sup> <a name="cloud_storage_buckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets.property.cloudStorageBuckets"></a>

```python
cloud_storage_buckets: typing.Union[IResolvable, typing.List[GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets</a>]]

cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#cloud_storage_buckets GoogleStorageInsightsDatasetConfig#cloud_storage_buckets}

---

### GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets <a name="GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_insights_dataset_config

googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets(
  bucket_name: str = None,
  bucket_prefix_regex: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets.property.bucketName">bucket_name</a></code> | <code>str</code> | The list of cloud storage bucket names to exclude in the DatasetConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets.property.bucketPrefixRegex">bucket_prefix_regex</a></code> | <code>str</code> | The list of regex patterns for bucket names matching the regex. |

---

##### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

The list of cloud storage bucket names to exclude in the DatasetConfig.

Exactly one of the bucket_name and bucket_prefix_regex should be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#bucket_name GoogleStorageInsightsDatasetConfig#bucket_name}

---

##### `bucket_prefix_regex`<sup>Optional</sup> <a name="bucket_prefix_regex" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets.property.bucketPrefixRegex"></a>

```python
bucket_prefix_regex: str
```

- *Type:* str

The list of regex patterns for bucket names matching the regex.

Regex should follow the syntax specified in google/re2 on GitHub.
Exactly one of the bucket_name and bucket_prefix_regex should be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#bucket_prefix_regex GoogleStorageInsightsDatasetConfig#bucket_prefix_regex}

---

### GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations <a name="GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_insights_dataset_config

googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations(
  locations: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations.property.locations">locations</a></code> | <code>typing.List[str]</code> | The list of cloud storage locations to exclude in the DatasetConfig. |

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations.property.locations"></a>

```python
locations: typing.List[str]
```

- *Type:* typing.List[str]

The list of cloud storage locations to exclude in the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#locations GoogleStorageInsightsDatasetConfig#locations}

---

### GoogleStorageInsightsDatasetConfigIdentity <a name="GoogleStorageInsightsDatasetConfigIdentity" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_insights_dataset_config

googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentity(
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentity.property.type">type</a></code> | <code>str</code> | Type of identity to use for the DatasetConfig. Possible values: ["IDENTITY_TYPE_PER_CONFIG", "IDENTITY_TYPE_PER_PROJECT"]. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Type of identity to use for the DatasetConfig. Possible values: ["IDENTITY_TYPE_PER_CONFIG", "IDENTITY_TYPE_PER_PROJECT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#type GoogleStorageInsightsDatasetConfig#type}

---

### GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets <a name="GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_insights_dataset_config

googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets(
  cloud_storage_buckets: typing.Union[IResolvable, typing.List[GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets.property.cloudStorageBuckets">cloud_storage_buckets</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets</a>]]</code> | cloud_storage_buckets block. |

---

##### `cloud_storage_buckets`<sup>Required</sup> <a name="cloud_storage_buckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets.property.cloudStorageBuckets"></a>

```python
cloud_storage_buckets: typing.Union[IResolvable, typing.List[GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets</a>]]

cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#cloud_storage_buckets GoogleStorageInsightsDatasetConfig#cloud_storage_buckets}

---

### GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets <a name="GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_insights_dataset_config

googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets(
  bucket_name: str = None,
  bucket_prefix_regex: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets.property.bucketName">bucket_name</a></code> | <code>str</code> | The list of cloud storage bucket names to include in the DatasetConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets.property.bucketPrefixRegex">bucket_prefix_regex</a></code> | <code>str</code> | The list of regex patterns for bucket names matching the regex. |

---

##### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

The list of cloud storage bucket names to include in the DatasetConfig.

Exactly one of the bucket_name and bucket_prefix_regex should be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#bucket_name GoogleStorageInsightsDatasetConfig#bucket_name}

---

##### `bucket_prefix_regex`<sup>Optional</sup> <a name="bucket_prefix_regex" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets.property.bucketPrefixRegex"></a>

```python
bucket_prefix_regex: str
```

- *Type:* str

The list of regex patterns for bucket names matching the regex.

Regex should follow the syntax specified in google/re2 on GitHub.
Exactly one of the bucket_name and bucket_prefix_regex should be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#bucket_prefix_regex GoogleStorageInsightsDatasetConfig#bucket_prefix_regex}

---

### GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations <a name="GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_insights_dataset_config

googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations(
  locations: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations.property.locations">locations</a></code> | <code>typing.List[str]</code> | The list of cloud storage locations to include in the DatasetConfig. |

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations.property.locations"></a>

```python
locations: typing.List[str]
```

- *Type:* typing.List[str]

The list of cloud storage locations to include in the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#locations GoogleStorageInsightsDatasetConfig#locations}

---

### GoogleStorageInsightsDatasetConfigLink <a name="GoogleStorageInsightsDatasetConfigLink" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLink.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_insights_dataset_config

googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLink()
```


### GoogleStorageInsightsDatasetConfigSourceFolders <a name="GoogleStorageInsightsDatasetConfigSourceFolders" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFolders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFolders.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_insights_dataset_config

googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFolders(
  folder_numbers: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFolders.property.folderNumbers">folder_numbers</a></code> | <code>typing.List[str]</code> | The list of folder numbers to include in the DatasetConfig. |

---

##### `folder_numbers`<sup>Optional</sup> <a name="folder_numbers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFolders.property.folderNumbers"></a>

```python
folder_numbers: typing.List[str]
```

- *Type:* typing.List[str]

The list of folder numbers to include in the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#folder_numbers GoogleStorageInsightsDatasetConfig#folder_numbers}

---

### GoogleStorageInsightsDatasetConfigSourceProjects <a name="GoogleStorageInsightsDatasetConfigSourceProjects" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjects"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjects.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_insights_dataset_config

googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjects(
  project_numbers: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjects.property.projectNumbers">project_numbers</a></code> | <code>typing.List[str]</code> | The list of project numbers to include in the DatasetConfig. |

---

##### `project_numbers`<sup>Optional</sup> <a name="project_numbers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjects.property.projectNumbers"></a>

```python
project_numbers: typing.List[str]
```

- *Type:* typing.List[str]

The list of project numbers to include in the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#project_numbers GoogleStorageInsightsDatasetConfig#project_numbers}

---

### GoogleStorageInsightsDatasetConfigTimeouts <a name="GoogleStorageInsightsDatasetConfigTimeouts" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_insights_dataset_config

googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#create GoogleStorageInsightsDatasetConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#delete GoogleStorageInsightsDatasetConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#update GoogleStorageInsightsDatasetConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#create GoogleStorageInsightsDatasetConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#delete GoogleStorageInsightsDatasetConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_insights_dataset_config#update GoogleStorageInsightsDatasetConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList <a name="GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_insights_dataset_config

googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets</a>]]

---


### GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference <a name="GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_insights_dataset_config

googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketName">reset_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketPrefixRegex">reset_bucket_prefix_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket_name` <a name="reset_bucket_name" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketName"></a>

```python
def reset_bucket_name() -> None
```

##### `reset_bucket_prefix_regex` <a name="reset_bucket_prefix_regex" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketPrefixRegex"></a>

```python
def reset_bucket_prefix_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegexInput">bucket_prefix_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegex">bucket_prefix_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `bucket_prefix_regex_input`<sup>Optional</sup> <a name="bucket_prefix_regex_input" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegexInput"></a>

```python
bucket_prefix_regex_input: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `bucket_prefix_regex`<sup>Required</sup> <a name="bucket_prefix_regex" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegex"></a>

```python
bucket_prefix_regex: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets</a>]

---


### GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference <a name="GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_insights_dataset_config

googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.putCloudStorageBuckets">put_cloud_storage_buckets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloud_storage_buckets` <a name="put_cloud_storage_buckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.putCloudStorageBuckets"></a>

```python
def put_cloud_storage_buckets(
  value: typing.Union[IResolvable, typing.List[GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.putCloudStorageBuckets.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.cloudStorageBuckets">cloud_storage_buckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.cloudStorageBucketsInput">cloud_storage_buckets_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_storage_buckets`<sup>Required</sup> <a name="cloud_storage_buckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.cloudStorageBuckets"></a>

```python
cloud_storage_buckets: GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList</a>

---

##### `cloud_storage_buckets_input`<sup>Optional</sup> <a name="cloud_storage_buckets_input" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.cloudStorageBucketsInput"></a>

```python
cloud_storage_buckets_input: typing.Union[IResolvable, typing.List[GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets</a>

---


### GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference <a name="GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_insights_dataset_config

googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.locationsInput">locations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.locations">locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `locations_input`<sup>Optional</sup> <a name="locations_input" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.locationsInput"></a>

```python
locations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.locations"></a>

```python
locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations</a>

---


### GoogleStorageInsightsDatasetConfigIdentityOutputReference <a name="GoogleStorageInsightsDatasetConfigIdentityOutputReference" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_insights_dataset_config

googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentity">GoogleStorageInsightsDatasetConfigIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageInsightsDatasetConfigIdentity
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentity">GoogleStorageInsightsDatasetConfigIdentity</a>

---


### GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList <a name="GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_insights_dataset_config

googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets</a>]]

---


### GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference <a name="GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_insights_dataset_config

googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketName">reset_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketPrefixRegex">reset_bucket_prefix_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket_name` <a name="reset_bucket_name" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketName"></a>

```python
def reset_bucket_name() -> None
```

##### `reset_bucket_prefix_regex` <a name="reset_bucket_prefix_regex" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketPrefixRegex"></a>

```python
def reset_bucket_prefix_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegexInput">bucket_prefix_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegex">bucket_prefix_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `bucket_prefix_regex_input`<sup>Optional</sup> <a name="bucket_prefix_regex_input" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegexInput"></a>

```python
bucket_prefix_regex_input: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `bucket_prefix_regex`<sup>Required</sup> <a name="bucket_prefix_regex" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegex"></a>

```python
bucket_prefix_regex: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets</a>]

---


### GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference <a name="GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_insights_dataset_config

googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.putCloudStorageBuckets">put_cloud_storage_buckets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloud_storage_buckets` <a name="put_cloud_storage_buckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.putCloudStorageBuckets"></a>

```python
def put_cloud_storage_buckets(
  value: typing.Union[IResolvable, typing.List[GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.putCloudStorageBuckets.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.cloudStorageBuckets">cloud_storage_buckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.cloudStorageBucketsInput">cloud_storage_buckets_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_storage_buckets`<sup>Required</sup> <a name="cloud_storage_buckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.cloudStorageBuckets"></a>

```python
cloud_storage_buckets: GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList</a>

---

##### `cloud_storage_buckets_input`<sup>Optional</sup> <a name="cloud_storage_buckets_input" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.cloudStorageBucketsInput"></a>

```python
cloud_storage_buckets_input: typing.Union[IResolvable, typing.List[GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets</a>

---


### GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference <a name="GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_insights_dataset_config

googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.locationsInput">locations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.locations">locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `locations_input`<sup>Optional</sup> <a name="locations_input" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.locationsInput"></a>

```python
locations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.locations"></a>

```python
locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations</a>

---


### GoogleStorageInsightsDatasetConfigLinkList <a name="GoogleStorageInsightsDatasetConfigLinkList" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_insights_dataset_config

googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleStorageInsightsDatasetConfigLinkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleStorageInsightsDatasetConfigLinkOutputReference <a name="GoogleStorageInsightsDatasetConfigLinkOutputReference" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_insights_dataset_config

googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.property.dataset">dataset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.property.linked">linked</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLink">GoogleStorageInsightsDatasetConfigLink</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.property.dataset"></a>

```python
dataset: str
```

- *Type:* str

---

##### `linked`<sup>Required</sup> <a name="linked" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.property.linked"></a>

```python
linked: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageInsightsDatasetConfigLink
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLink">GoogleStorageInsightsDatasetConfigLink</a>

---


### GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference <a name="GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_insights_dataset_config

googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.resetFolderNumbers">reset_folder_numbers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_folder_numbers` <a name="reset_folder_numbers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.resetFolderNumbers"></a>

```python
def reset_folder_numbers() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.folderNumbersInput">folder_numbers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.folderNumbers">folder_numbers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFolders">GoogleStorageInsightsDatasetConfigSourceFolders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `folder_numbers_input`<sup>Optional</sup> <a name="folder_numbers_input" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.folderNumbersInput"></a>

```python
folder_numbers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `folder_numbers`<sup>Required</sup> <a name="folder_numbers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.folderNumbers"></a>

```python
folder_numbers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageInsightsDatasetConfigSourceFolders
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFolders">GoogleStorageInsightsDatasetConfigSourceFolders</a>

---


### GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference <a name="GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_insights_dataset_config

googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.resetProjectNumbers">reset_project_numbers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_project_numbers` <a name="reset_project_numbers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.resetProjectNumbers"></a>

```python
def reset_project_numbers() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.projectNumbersInput">project_numbers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.projectNumbers">project_numbers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjects">GoogleStorageInsightsDatasetConfigSourceProjects</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `project_numbers_input`<sup>Optional</sup> <a name="project_numbers_input" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.projectNumbersInput"></a>

```python
project_numbers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project_numbers`<sup>Required</sup> <a name="project_numbers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.projectNumbers"></a>

```python
project_numbers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageInsightsDatasetConfigSourceProjects
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjects">GoogleStorageInsightsDatasetConfigSourceProjects</a>

---


### GoogleStorageInsightsDatasetConfigTimeoutsOutputReference <a name="GoogleStorageInsightsDatasetConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_insights_dataset_config

googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts">GoogleStorageInsightsDatasetConfigTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleStorageInsightsDatasetConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts">GoogleStorageInsightsDatasetConfigTimeouts</a>]

---



